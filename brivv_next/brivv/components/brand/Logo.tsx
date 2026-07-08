import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim = size === "sm" ? 22 : size === "lg" ? 32 : 26;
  const text =
    size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  const content = (
    <>
      <span
        aria-hidden
        className="grid place-items-center rounded-xl bg-brand-gradient text-primary-foreground font-black shadow-soft transition-transform group-hover:scale-105"
        style={{ width: dim + 8, height: dim + 8, fontSize: dim * 0.55 }}
      >
        B
      </span>
      <span className={cn("font-display font-extrabold tracking-tight", text)}>
        AKRAPEX
      </span>
    </>
  );

  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      {content}
    </Link>
  );
}
