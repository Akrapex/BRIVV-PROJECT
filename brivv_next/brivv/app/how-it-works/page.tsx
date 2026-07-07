"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Search,
  MessageSquare,
  Calendar,
  KeyRound,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";



export default function How() {
  const steps = [
    {
      icon: Search,
      title: "Search smart",
      body: "Use our zero-noise filters to shortlist verified properties in minutes, not weeks.",
    },
    {
      icon: MessageSquare,
      title: "Message agents",
      body: "Chat directly with vetted agents. Ask questions, get floor plans, request video tours.",
    },
    {
      icon: Calendar,
      title: "Schedule inspections",
      body: "Book a date and time that works for you. Reminders, in-app. Cancel or reschedule instantly.",
    },
    {
      icon: KeyRound,
      title: "Move in with confidence",
      body: "Negotiate, sign and get the keys. We're with you end-to-end.",
    },
  ];
  const trust = [
    {
      icon: ShieldCheck,
      title: "Verified only",
      body: "Every listing reviewed and every agent background-checked.",
    },
    {
      icon: TrendingUp,
      title: "Fair pricing",
      body: "See asking prices and average price per sqm for every area.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <PageHeader
          title="How Akrapex works"
          description="From first search to move-in day, we've made real estate simple."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-md border border-border bg-card p-6 shadow-soft"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Step {i + 1}
              </div>
              <div className="mt-2 grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-display text-lg font-semibold">
                {s.title}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.body}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {trust.map((t) => (
            <div
              key={t.title}
              className="rounded-md border border-border bg-card p-6 shadow-soft"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-display text-lg font-semibold">
                {t.title}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{t.body}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
