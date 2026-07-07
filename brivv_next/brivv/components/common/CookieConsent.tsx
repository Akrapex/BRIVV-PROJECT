"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Cookie, Settings, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
    personalization: true,
  });

  useEffect(() => {
    // Check if user already made a choice
    const savedConsent = localStorage.getItem("brivv-cookie-consent");
    if (!savedConsent) {
      // Delay showing the panel slightly for a smoother entry
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    saveConsent(allRejected);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("brivv-cookie-consent", JSON.stringify(prefs));
    setIsVisible(false);
    // You could trigger analytics initialize or configure tags here
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Necessary cookies are always enabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-t from-background/90 via-background/80 to-transparent pointer-events-none flex justify-center animate-in slide-in-from-bottom duration-500">
      <div className="w-full max-w-4xl bg-card/90 dark:bg-card/95 border border-border shadow-2xl rounded-2xl p-5 md:p-6 backdrop-blur-lg pointer-events-auto flex flex-col gap-4 relative overflow-hidden transition-all duration-300">
        
        {/* Decorative subtle background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0 hidden sm:block">
              <Cookie className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-foreground text-base md:text-lg flex items-center gap-2">
                We value your privacy
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                We use cookies to improve your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 md:self-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
              className="text-xs flex items-center gap-1.5 hover:bg-accent"
            >
              <Settings className="h-3.5 w-3.5" />
              Customize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectAll}
              className="text-xs border-muted-foreground/20 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20"
            >
              Reject All
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleAcceptAll}
              className="text-xs bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
            >
              Accept All
            </Button>
          </div>
        </div>

        {/* Detailed Preferences Panel */}
        {showSettings && (
          <div className="border-t border-border pt-4 mt-2 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-3 rounded-xl bg-muted/30 border border-muted/50">
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Strictly Necessary</span>
                    <span className="text-[10px] font-medium bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">Required</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">
                    Essential cookies to ensure basic operations, security, navigation, and state-persistence.
                  </p>
                </div>
                <div className="pt-0.5">
                  <Switch checked={true} disabled={true} />
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="flex items-start justify-between p-3 rounded-xl bg-muted/30 border border-muted/50">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-foreground">Preferences</span>
                  <p className="text-xs text-muted-foreground leading-normal">
                    Remembers choices you make such as theme, layout preferences, and saved states.
                  </p>
                </div>
                <div className="pt-0.5">
                  <Switch
                    checked={preferences.personalization}
                    onCheckedChange={() => togglePreference("personalization")}
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-3 rounded-xl bg-muted/30 border border-muted/50">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-foreground">Analytics & Performance</span>
                  <p className="text-xs text-muted-foreground leading-normal">
                    Helps us count visits, track traffic sources, and identify how to optimize our platform.
                  </p>
                </div>
                <div className="pt-0.5">
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={() => togglePreference("analytics")}
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-3 rounded-xl bg-muted/30 border border-muted/50">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-foreground">Targeting & Marketing</span>
                  <p className="text-xs text-muted-foreground leading-normal">
                    Used to track visitor behavior across websites to display relevant, engaging advertisements.
                  </p>
                </div>
                <div className="pt-0.5">
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={() => togglePreference("marketing")}
                  />
                </div>
              </div>

            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleSavePreferences}
                className="text-xs bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
