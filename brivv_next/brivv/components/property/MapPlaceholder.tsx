import { MapPin } from "lucide-react";

export function MapPlaceholder({ address }: { address: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border">
      <div
        className="aspect-[16/9] w-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--brand-sage) 0, transparent 45%), radial-gradient(circle at 70% 60%, var(--primary-soft) 0, transparent 50%), linear-gradient(135deg, var(--brand-cream), var(--muted))",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-2xl bg-background/90 backdrop-blur px-4 py-3 shadow-lift text-center">
          <MapPin className="mx-auto h-5 w-5 text-primary" />
          <div className="mt-1 text-sm font-medium">{address}</div>
          <div className="text-xs text-muted-foreground">Interactive map coming soon</div>
        </div>
      </div>
    </div>
  );
}