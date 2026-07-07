import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { STATES, citiesFor } from "@/lib/mock/locations";
import type { PropertyType, TransactionType } from "@/lib/mock/types";

const TX: { key: TransactionType; label: string }[] = [
  { key: "buy", label: "Buy" },
  { key: "rent", label: "Rent" },
  { key: "short-let", label: "Short-let" },
  { key: "commercial", label: "Commercial" },
  { key: "land", label: "Land" },
];

const PROP_TYPES: PropertyType[] = ["Apartment","Duplex","Bungalow","Terrace","Detached House","Semi-Detached","Penthouse","Studio","Office Space","Shop","Warehouse","Land"];

export interface Filters {
  tx?: TransactionType;
  state?: string;
  city?: string;
  type?: PropertyType;
  q?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  furnished?: boolean;
  parking?: boolean;
  pool?: boolean;
  newlyBuilt?: boolean;
}

const MAX_PRICE = 1_500_000_000;

export function FilterPanel({ value, onChange, onClear }: { value: Filters; onChange: (v: Filters) => void; onClear: () => void }) {
  const patch = (p: Partial<Filters>) => onChange({ ...value, ...p });
  const min = value.minPrice ?? 0;
  const max = value.maxPrice ?? MAX_PRICE;
  return (
    <div className="space-y-6">
      <div>
        <Label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Looking to</Label>
        <div className="grid grid-cols-3 gap-1.5">
          {TX.map((t) => (
            <button
              key={t.key}
              onClick={() => patch({ tx: value.tx === t.key ? undefined : t.key })}
              className={
                "rounded-xl border px-2 py-2 text-xs font-medium transition " +
                (value.tx === t.key ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted")
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3">
        <div>
          <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">State</Label>
          <Select value={value.state} onValueChange={(v) => patch({ state: v, city: undefined })}>
            <SelectTrigger><SelectValue placeholder="Any state" /></SelectTrigger>
            <SelectContent>{STATES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">City</Label>
          <Select value={value.city} onValueChange={(v) => patch({ city: v })} disabled={!value.state}>
            <SelectTrigger><SelectValue placeholder={value.state ? "Any city" : "Select state first"} /></SelectTrigger>
            <SelectContent>{citiesFor(value.state).map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Property type</Label>
          <Select value={value.type} onValueChange={(v) => patch({ type: v as PropertyType })}>
            <SelectTrigger><SelectValue placeholder="Any type" /></SelectTrigger>
            <SelectContent>{PROP_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Price range · ₦{min.toLocaleString()} – ₦{max.toLocaleString()}
        </Label>
        <Slider
          min={0}
          max={MAX_PRICE}
          step={1_000_000}
          value={[min, max]}
          onValueChange={([a, b]) => patch({ minPrice: a, maxPrice: b })}
          className="mt-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Beds</Label>
          <Input type="number" min={0} value={value.beds ?? ""} onChange={(e) => patch({ beds: e.target.value ? +e.target.value : undefined })} placeholder="Any" />
        </div>
        <div>
          <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Baths</Label>
          <Input type="number" min={0} value={value.baths ?? ""} onChange={(e) => patch({ baths: e.target.value ? +e.target.value : undefined })} placeholder="Any" />
        </div>
      </div>

      <div className="space-y-3">
        {([
          ["furnished", "Furnished"],
          ["parking", "Parking"],
          ["pool", "Swimming pool"],
          ["newlyBuilt", "Newly built"],
        ] as const).map(([k, label]) => (
          <div key={k} className="flex items-center justify-between rounded-xl  bg-card px-3 py-2">
            <span className="text-sm">{label}</span>
            <Switch checked={!!value[k]} onCheckedChange={(c) => patch({ [k]: c } as any)} />
          </div>
        ))}
      </div>

      <Button variant="ghost" className="w-full " onClick={onClear}>Clear filters</Button>
    </div>
  );
}

export function filterProperties<T extends Filters>(list: import("@/lib/mock/types").Property[], f: T) {
  return list.filter((p) => {
    if (f.tx && p.transaction !== f.tx) return false;
    if (f.state && p.state !== f.state) return false;
    if (f.city && p.city !== f.city) return false;
    if (f.type && p.type !== f.type) return false;
    if (f.beds && p.bedrooms < f.beds) return false;
    if (f.baths && p.bathrooms < f.baths) return false;
    if (f.minPrice && p.price < f.minPrice) return false;
    if (f.maxPrice && p.price > f.maxPrice) return false;
    if (f.furnished && !p.furnished) return false;
    if (f.parking && !p.parking) return false;
    if (f.pool && !p.pool) return false;
    if (f.newlyBuilt && !p.newlyBuilt) return false;
    if (f.q) {
      const q = f.q.toLowerCase();
      if (!(`${p.title} ${p.area} ${p.city} ${p.state} ${p.type}`.toLowerCase().includes(q))) return false;
    }
    return true;
  });
}