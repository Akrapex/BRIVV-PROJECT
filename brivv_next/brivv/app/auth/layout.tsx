"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/utils/format";
import { AGENTS } from "@/lib/mock/agents";
import { Logo } from "@/components/brand/Logo";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const testimonialItems = [
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
    quote: "First-time buyers finally have a platform that isn't overwhelming.",
    role: "Ibrahim Homes",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialItems.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialItems[activeTestimonial];

  return (
    <main className={geistSans.className}>
      <div className="min-h-screen h-screen overflow-y-auto bg-white flex items-center justify-center">
        <div className="w-full max-w-[1580px] lg:flex items-center">
          {/* Left Side: Shared Architectural Showcase Frame */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 h-screen relative w-1/2 ">
            <div className="absolute inset-0 overflow-hidden shadow-sm w-full">
              <Image
                src="/image.png" // Ensure this image is saved in your /public directory
                alt="Modern luxury architecture estate showcase"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md blur-container">
              <div className="absolute left-8 right-8 bottom-8 rounded-[1.5rem] border border-white/30 h-fit bg-white p-6 text-neutral-900 shadow-2xl backdrop-blur-xl sm:left-10 sm:right-10 sm:top-10 lg:max-w-xl">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#446000]">
                    BRIVV
                  </p>
                  <div className="flex gap-2">
                    {testimonialItems.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`View testimonial ${index + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          index === activeTestimonial
                            ? "bg-[#446000]"
                            : "bg-neutral-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-0.5 text-[#446000]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 font-display text-xl leading-snug text-neutral-900 font-semibold">
                    “{currentTestimonial.quote}”
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={currentTestimonial.agent.avatar} />
                      <AvatarFallback>
                        {initials(currentTestimonial.agent.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-semibold text-neutral-900">
                        {currentTestimonial.agent.name}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {currentTestimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial(
                        (prev) =>
                          (prev - 1 + testimonialItems.length) %
                          testimonialItems.length,
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-50"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial(
                        (prev) => (prev + 1) % testimonialItems.length,
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-50"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Dynamic Auth Content (Form injector) */}
          <div className=" lg:w-1/2 py-4 p-12 mt-10 overflow-y-auto flex flex-col items-center justify-center h-screen overflow-auto">
            {/* Logo Component Space */}

            {/* This renders either the login page or the register page content dynamically */}
            {children}

            {/* Bottom layout spacer for pixel-perfect structural mirroring */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
2;
