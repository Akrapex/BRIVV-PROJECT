import * as React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen h-screen overflow-y-auto bg-white flex items-center justify-center">
      <div className="w-full max-w-[1580px] flex items-center">
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
        </div>

        {/* Right Side: Dynamic Auth Content (Form injector) */}
        <div className=" w-1/2 py-4 p-12 overflow-y-auto flex flex-col items-center justify-center">
          {/* Logo Component Space */}
          <div className="mb-8 lg:mb-0">
            <span className="text-base font-bold tracking-tight text-neutral-900">
              Logo
            </span>
          </div>

          {/* This renders either the login page or the register page content dynamically */}
          {children}

          {/* Bottom layout spacer for pixel-perfect structural mirroring */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
