"use client";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { INSPECTIONS } from "@/lib/mock/inspections";
import { PROPERTIES } from "@/lib/mock/properties";
import { AGENTS } from "@/lib/mock/agents";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/utils/format";
import { CalendarCheck, Clock, MapPin } from "lucide-react";
import { EmptyState } from "@/components/common/EmptyState";

const TONE: Record<string, string> = {
  confirmed: "bg-primary/15 text-primary",
  pending: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/15 text-destructive",
};

export default function Insp() {
  return (
    <>
      <PageHeader
        title="Scheduled inspections"
        description="Reminders, statuses, and past visits — all in one place."
      />
      {INSPECTIONS.length === 0 ? (
        <EmptyState icon={CalendarCheck} title="No inspections scheduled" />
      ) : (
        <div className="space-y-3">
          {INSPECTIONS.map((i) => {
            const p = PROPERTIES.find((pp) => pp.id === i.propertyId)!;
            const a = AGENTS.find((aa) => aa.id === i.agentId)!;
            return (
              <div
                key={i.id}
                className="md:flex flex-wrap items-center gap-4 rounded border bg-card p-4 space-y-4 md:space-y-0 max-w-full md:w-full"
              >
                <img
                  src={p.images[0]}
                  alt=""
                  className="h-16 w-24 hidden md:inline-block flex-none rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/browse/${p.id}`}
                    className="font-display font-semibold hover:text-primary"
                  >
                    {p.title}
                  </Link>
                  <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {p.area}, {p.city}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {i.date} · {i.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={a.avatar} />
                    <AvatarFallback>{initials(a.name)}</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:inline-block text-xs">
                    <div className="font-medium">{a.name}</div>
                    <div className="text-muted-foreground">{a.agency}</div>
                  </div>
                  <Badge
                    className={
                      "md:hidden rounded-full capitalize " + (TONE[i.status] ?? "")
                    }
                  >
                    {i.status}
                  </Badge>
                </div>
                <Badge
                  className={
                    "hidden md:block rounded-full capitalize " + (TONE[i.status] ?? "")
                  }
                >
                  {i.status}
                </Badge>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
