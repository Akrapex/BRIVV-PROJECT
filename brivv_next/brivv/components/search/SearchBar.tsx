import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { STATES } from "@/lib/mock/locations";
import type { TransactionType } from "@/lib/mock/types";

const TABS: { key: TransactionType; label: string }[] = [
  { key: "buy", label: "Buy" },
  { key: "rent", label: "Rent" },
  { key: "short-let", label: "Short-let" },
  { key: "commercial", label: "Commercial" },
  { key: "land", label: "Land" },
];

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [tx, setTx] = useState<TransactionType>("buy");
  const [state, setState] = useState<string | undefined>();
  const [q, setQ] = useState("");

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const params = new URLSearchParams();
    params.set("tx", tx);
    if (state) params.set("state", state);
    if (q) params.set("q", q);
    router.push(`/browse${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div
      className={
        compact
          ? "rounded-2xl border border-border bg-card p-2 shadow-soft"
          : "rounded-3xl border border-border bg-card p-3 shadow-lift"
      }
    >
      {!compact && (
        <Tabs
          value={tx}
          onValueChange={(v) => setTx(v as TransactionType)}
          className="mb-2"
        >
          <TabsList className="rounded-full bg-muted p-1">
            {TABS.map((t) => (
              <TabsTrigger
                key={t.key}
                value={t.key}
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}
      <form
        onSubmit={submit}
        className="grid gap-2 sm:grid-cols-[1.5fr_1fr_auto]"
      >
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search area, city or property"
            className="h-12 rounded-2xl border-0 bg-muted pl-9 focus-visible:ring-2"
          />
        </div>
        <Select value={state} onValueChange={setState}>
          <SelectTrigger className="h-12 rounded-2xl border-0 bg-muted">
            <SelectValue placeholder="Any state" />
          </SelectTrigger>
          <SelectContent>
            {STATES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit" className="h-12 rounded-2xl px-6 font-semibold">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </form>
    </div>
  );
}
