"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Menu, LogIn, Heart, GitCompareArrows } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/lib/store/auth";
import { useFavorites } from "@/lib/store/favorites";
import { useCompare } from "@/lib/store/compare";
import { Badge } from "@/components/ui/badge";

const LINKS = [
  { to: "/browse", label: "Browse" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const user = useAuth((s) => s.user);
  const favCount = useFavorites((s) => s.ids.length);
  const cmpCount = useCompare((s) => s.ids.length);
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (to: string) => pathname === to;
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground ${isActive(l.to) ? "bg-muted text-foreground font-semibold" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <Link href="/compare" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm" className="rounded-full">
              <GitCompareArrows className="mr-1.5 h-4 w-4" />
              Compare{" "}
              {cmpCount > 0 && (
                <Badge className="ml-1.5 rounded-full px-1.5">{cmpCount}</Badge>
              )}
            </Button>
          </Link>
          <Link
            href={user ? "/dashboard/saved" : "/auth/login"}
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="rounded-full">
              <Heart className="mr-1.5 h-4 w-4" />
              Saved{" "}
              {favCount > 0 && (
                <Badge className="ml-1.5 rounded-full px-1.5">{favCount}</Badge>
              )}
            </Button>
          </Link>
          <ThemeToggle />
          {user ? null : (
            <div className="hidden items-center gap-1 md:flex">
              <Link href="/auth/login">
                <Button variant="ghost" size="lg" className="rounded py-6 px-4 font-semibold">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="lg" className="rounded-md px-4 py-6 font-semibold">
                  Get started
                </Button>
              </Link>
            </div>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-1">
                {LINKS.map((l) => (
                  <Link
                    key={l.to}
                    href={l.to}
                    className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/compare"
                  className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  Compare
                </Link>
              </div>
              <div className="mt-6 grid gap-2">
                {user ? (
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => router.push("/dashboard/saved")}
                  >
                    View saved
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      onClick={() => router.push("/auth/login")}
                    >
                      Log in
                    </Button>
                    <Button
                      className="rounded-full"
                      onClick={() => router.push("/auth/register")}
                    >
                      Get started
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
