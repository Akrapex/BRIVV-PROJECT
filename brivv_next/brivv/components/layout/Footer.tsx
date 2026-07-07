import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Globe2, Send, MessageCircle, Mail } from "lucide-react";

const COLS = [
  {
    title: "Explore",
    links: [
      { to: "/browse", label: "Browse properties" },
      { to: "/how-it-works", label: "How it works" },
      { to: "/compare", label: "Compare" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Akrapex" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/about", label: "Terms" },
      { to: "/about", label: "Privacy" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Modern real estate for Nigeria. Verified listings, trusted agents,
              and a smoother way to find home.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {[Globe2, Send, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {c.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {c.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      href={l.to}
                      className="text-foreground/80 hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Akrapex. All rights reserved.</div>
          <div>Made with ♥ for Africa.</div>
        </div>
      </div>
    </footer>
  );
}
