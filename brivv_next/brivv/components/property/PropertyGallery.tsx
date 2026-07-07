import { useState } from "react";
import { cn } from "@/lib/utils";

export function PropertyGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const main = images[active];
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_120px]">
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <img src={main} alt={alt} className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className="flex gap-3 overflow-x-auto sm:flex-col">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            className={cn("group relative shrink-0 overflow-hidden rounded-lg border transition", active === i ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/40")}
            style={{ width: 108, height: 82 }}
            aria-label={`Show image ${i + 1}`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}