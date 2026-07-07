"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/common/PageHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <PageHeader
          title="About Akrapex"
          description="We're building the trust layer for African real estate."
        />
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-lg text-foreground/90">
            Akrapex was founded with a simple idea: finding a home shouldn't be
            a full-time job. From verified listings and vetted agents to
            transparent pricing and end-to-end journeys, we exist to make
            property in Nigeria — and eventually across Africa — feel modern,
            safe and delightful.
          </p>
          <h3 className="mt-8 font-display text-xl font-semibold">
            Our values
          </h3>
          <ul className="mt-3 space-y-2 text-foreground/90">
            <li>
              · <b>Trust first.</b> Every listing is reviewed before it goes
              live.
            </li>
            <li>
              · <b>Local expertise.</b> Real people in the neighborhoods you're
              moving to.
            </li>
            <li>
              · <b>Zero-noise design.</b> Fewer duplicates. Better filters. No
              wasted trips.
            </li>
            <li>
              · <b>Built for Africa.</b> Starting in Nigeria, scaling
              continent-wide.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
