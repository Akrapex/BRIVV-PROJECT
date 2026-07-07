"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  CalendarCheck, 
  MessageSquare, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  Sparkles,
  LayoutDashboard,
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";

type TourStep = {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlightSelector?: string;
  badge?: string;
};

export default function DashboardTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps: TourStep[] = [
    {
      title: "Welcome to BRIVV!",
      description: "Let's take a quick 1-minute guided tour of your new dashboard to help you find and lease your next dream home.",
      icon: <Sparkles className="h-10 w-10 text-primary animate-pulse" />,
      badge: "Getting Started",
    },
    {
      title: "Seamless Navigation",
      description: "Use the sidebar on the left to navigate between your personal dashboard, search listings, and manage settings.",
      icon: <LayoutDashboard className="h-10 w-10 text-[#23A136]" />,
      highlightSelector: "[data-sidebar=sidebar]",
      badge: "Sidebar",
    },
    {
      title: "Saved Properties",
      description: "Keep track of listings you love by tapping the heart icon. They will show up here under 'Saved' for quick access.",
      icon: <Heart className="h-10 w-10 text-rose-500 animate-bounce" />,
      highlightSelector: "a[href='/dashboard/saved']",
      badge: "Shortlists",
    },
    {
      title: "Track Inspections",
      description: "View and manage scheduled property viewings, confirm walk-throughs, and communicate with agents about your visits.",
      icon: <CalendarCheck className="h-10 w-10 text-[#23A136]" />,
      highlightSelector: "a[href='/dashboard/inspections']",
      badge: "Appointments",
    },
    {
      title: "Real-time Messaging",
      description: "Message property owners and verified agents directly. Ask questions, negotiate rents, and coordinate details securely.",
      icon: <MessageSquare className="h-10 w-10 text-[#23A136]" />,
      highlightSelector: "a[href='/dashboard/messages']",
      badge: "Inbox",
    },
    {
      title: "Complete Your Profile",
      description: "Ensure your profile and document credentials are up to date under 'Profile' to stand out and speed up applications.",
      icon: <User className="h-10 w-10 text-[#23A136]" />,
      highlightSelector: "a[href='/dashboard/profile']",
      badge: "Onboarding",
    }
  ];

  useEffect(() => {
    // Check if user has completed the tour
    const tourCompleted = localStorage.getItem("brivv-dashboard-tour-completed");
    if (!tourCompleted) {
      // Delay slightly after dashboard render
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    localStorage.setItem("brivv-dashboard-tour-completed", "true");
    setIsOpen(false);
    // Remove custom styling overlays if any
    document.querySelectorAll(".tour-highlight").forEach((el) => {
      el.classList.remove("tour-highlight");
    });
  };

  // Add visual outline class to the targeted element
  useEffect(() => {
    if (!isOpen) return;

    // Clean up previous highlights
    document.querySelectorAll(".tour-highlight").forEach((el) => {
      el.classList.remove("tour-highlight");
    });

    const selector = steps[currentStep].highlightSelector;
    if (selector) {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.add("tour-highlight");
        // Scroll slightly into view if needed
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [currentStep, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Spotlight CSS Inject */}
      <style jsx global>{`
        .tour-highlight {
          position: relative !important;
          z-index: 51 !important;
          outline: 3px solid var(--primary, #23A136) !important;
          outline-offset: 4px !important;
          border-radius: 8px !important;
          background-color: var(--card) !important;
          box-shadow: 0 0 20px rgba(35, 161, 54, 0.4) !important;
          transition: all 0.3s ease !important;
        }
      `}</style>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4 transition-all duration-300">
        
        {/* Onboarding Dialog Card */}
        <div className="bg-card dark:bg-card/95 border border-border shadow-2xl rounded-2xl max-w-md w-full p-6 text-center relative flex flex-col gap-5 overflow-hidden animate-in zoom-in-95 duration-300">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

          {/* Close button */}
          <button 
            onClick={handleSkip} 
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-muted"
            aria-label="Skip Tour"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Step content header */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <div className="p-4 bg-primary/10 rounded-2xl flex items-center justify-center">
              {steps[currentStep].icon}
            </div>
            
            {steps[currentStep].badge && (
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {steps[currentStep].badge}
              </span>
            )}
            
            <h3 className="font-display font-bold text-xl text-foreground mt-1">
              {steps[currentStep].title}
            </h3>
          </div>

          {/* Step description */}
          <p className="text-sm text-muted-foreground leading-relaxed px-2 min-h-16 flex items-center justify-center">
            {steps[currentStep].description}
          </p>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-border/80 pt-4 mt-2">
            
            {/* Step Count Indicators */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === currentStep 
                      ? "w-5 bg-primary" 
                      : "w-1.5 bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              {currentStep > 0 ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrev}
                  className="text-xs flex items-center gap-1 hover:bg-muted"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSkip}
                  className="text-xs hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  Skip
                </Button>
              )}

              <Button
                variant="default"
                size="sm"
                onClick={handleNext}
                className="text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1"
              >
                {currentStep === steps.length - 1 ? "Finish" : "Next"}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
