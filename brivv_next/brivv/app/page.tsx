"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/search/SearchBar";
import { PropertyCard } from "@/components/property/PropertyCard";
import {
  CATEGORIES,
  featuredProperties,
  PROPERTIES,
} from "@/lib/mock/properties";
import { POPULAR_LOCATIONS } from "@/lib/mock/locations";
import { AGENTS } from "@/lib/mock/agents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  MessageSquare,
  KeyRound,
  Sparkles,
  TrendingUp,
  Building2,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/utils/format";

export default function Landing() {
  const featured = featuredProperties().slice(0, 4);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedBento featured={featured} />
      <PopularLocations />
      <WhyAkrapex />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CtaBand />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 15% 10%, color-mix(in oklab, var(--primary) 22%, transparent) 0, transparent 60%), radial-gradient(50% 40% at 90% 20%, color-mix(in oklab, var(--brand-sage) 45%, transparent) 0, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="animate-fade-in">
            {/* <Badge className="rounded-full bg-primary-soft text-primary border-transparent">
              <Sparkles className="mr-1 h-3 w-3" /> Now live in 8+ Nigerian
              cities
            </Badge> */}
            <h1 className="text-balance mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Find a place you'll actually want to call{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                home
              </span>
              .
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Akrapex brings together verified listings, trusted agents and a
              smoother way to buy, rent, short-let or invest anywhere in
              Nigeria.
            </p>
            <div className="mt-6">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Verified
                agents
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-primary" /> 4.9 average rating
              </span>
              <span className="inline-flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-primary" /> New listings
                weekly
              </span>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-[4/4.6] max-w-lg ml-auto">
              <img
                src={PROPERTIES[0].images[0]}
                alt=""
                className="col-span-4 row-span-4 h-full w-full rounded-3xl object-cover shadow-lift"
              />
              <img
                src={PROPERTIES[2].images[0]}
                alt=""
                className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-soft"
              />
              <img
                src={PROPERTIES[8].images[0]}
                alt=""
                className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-soft"
              />
              <div className="col-span-4 row-span-2 rounded-3xl bg-brand-gradient p-5 text-primary-foreground shadow-lift flex flex-col justify-center">
                <div className="text-xs uppercase tracking-wider opacity-80">
                  Featured this week
                </div>
                <div className="mt-1 font-display text-xl font-bold leading-tight">
                  {PROPERTIES[0].title}
                </div>
                <div className="mt-0.5 text-sm opacity-90">
                  {PROPERTIES[0].area}, {PROPERTIES[0].city}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Browse by category
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Whatever you're looking for, we've probably got it.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {CATEGORIES.map((c) => (
          <Link
            key={c.key}
            href={{
              pathname: "/browse",
              query: { tx: c.key },
            }}
            className="group rounded-md border border-border bg-card p-5 shadow-soft transition hover-lift"
          >
            <div className="text-3xl">{c.icon}</div>
            <div className="mt-3 font-display font-semibold">{c.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Explore{" "}
              <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedBento({
  featured,
}: {
  featured: ReturnType<typeof featuredProperties>;
}) {
  const [big, ...rest] = featured;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Featured properties
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Hand-picked listings from top-rated agents.
          </p>
        </div>
        <Link href="/browse" className="hidden sm:block">
          <Button variant="link" className="rounded-md shadow-none">
            See all <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        {big && (
          <PropertyCard property={big} span="xl" className="lg:row-span-2" />
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {rest.slice(0, 2).map((p) => (
            <PropertyCard key={p.id} property={p} span="md" />
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROPERTIES.slice(4, 8).map((p) => (
          <PropertyCard key={p.id} property={p} span="sm" />
        ))}
      </div>
    </section>
  );
}

function PopularLocations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Popular locations
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Where Nigerians are moving right now.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_LOCATIONS.map((l, i) => (
          <Link
            key={i}
            href={{
              pathname: "/browse",
              query: { state: l.state, city: l.city }
            }}
            className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-soft transition hover-lift"
          >
            <img
              src={l.image}
              alt={l.city}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 text-primary-foreground">
              <div className="font-display text-xl font-bold">{l.city}</div>
              <div className="text-xs opacity-90">
                {l.state} · {l.count} properties
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyAkrapex() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Verified listings",
      body: "Every property is reviewed by our team before it goes live.",
    },
    {
      icon: Star,
      title: "Trusted agents",
      body: "Work only with rated, background-checked local experts.",
    },
    {
      icon: Sparkles,
      title: "Zero-noise search",
      body: "Smarter filters. No duplicate listings. No wasted trips.",
    },
    {
      icon: KeyRound,
      title: "End-to-end journey",
      body: "Discover, tour, negotiate and close — all in one place.",
    }, {
      icon: TrendingUp,
      title: "Eco-Friendly insights",
      body: "Make informed decisions with data on sustainable housing options.",
    }
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="rounded-md border border-border bg-card p-6 sm:p-10 shadow-soft">
        <div className="mb-6 max-w-2xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Why choose Akrapex
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We built the real estate platform Nigerians deserve.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-md border border-border/60 bg-background p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-display font-semibold">{it.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      body: "Use powerful filters to narrow down verified listings across Nigeria.",
    },
    {
      icon: MessageSquare,
      title: "Connect",
      body: "Message vetted agents directly and schedule inspections.",
    },
    {
      icon: KeyRound,
      title: "Move in",
      body: "Negotiate, sign and get the keys — Akrapex is with you end-to-end.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-muted-foreground">
            Three simple steps from search to move-in.
          </p>
          <Link href="/how-it-works">
            <Button variant="ghost" className="mt-5 rounded-full">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-md border border-border bg-card p-5 shadow-soft"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Step {i + 1}
              </div>
              <div className="mt-2 grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 font-display font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "12,400+", l: "Verified listings" },
    { v: "850+", l: "Trusted agents" },
    { v: "8", l: "Cities live" },
    { v: "4.9★", l: "Average rating" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="overflow-hidden rounded-md bg-brand-gradient p-8 text-primary-foreground shadow-lift">
        <div className="grid gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-extrabold sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider opacity-90">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    {
      agent: AGENTS[4],
      quote:
        "Akrapex tripled qualified leads to my listings in the first month. Game-changer.",
      role: "Adeleke Estates",
    },
    {
      agent: AGENTS[0],
      quote:
        "Everything from search to inspection just… works. Buyers actually reply now.",
      role: "Okafor & Sons Realty",
    },
    {
      agent: AGENTS[8],
      quote:
        "First-time buyers finally have a platform that isn't overwhelming.",
      role: "Ibrahim Homes",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">
        Loved by agents and buyers
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Real words from real people using Akrapex.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((t, i) => (
          <figure
            key={i}
            className="rounded-md border border-border bg-card p-6 shadow-soft"
          >
            <div className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 font-display text-lg leading-snug">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={t.agent.avatar} />
                <AvatarFallback>{initials(t.agent.name)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-semibold">{t.agent.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-soft">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 60%)",
          }}
        />
        <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            {/* <Badge className="rounded-full bg-primary-soft text-primary border-transparent">
              <Building2 className="mr-1 h-3 w-3" /> For agents & owners
            </Badge> */}
            <h2 className="text-balance mt-3 font-display text-3xl font-bold sm:text-4xl">
              List once. Reach every serious buyer in Nigeria.
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Powerful listing tools, real analytics, and a vetted buyer
              audience actively looking for what you have.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <Link href="/auth/register">
              <Button size="lg" className="rounded-md shadow-none">
                Get started free
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="rounded-md shadow-none"
              >
                See how it works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
