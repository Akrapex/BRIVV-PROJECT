"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/layout/DashboardShell";
import DashboardTour from "@/components/common/DashboardTour";
import { getCurrentUser } from "@/lib/services/authService";
import {
  getUserProfile,
  isProfileComplete,
} from "@/lib/services/profileService";
import { useAuth } from "@/lib/store/auth";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const loginWithProfile = useAuth((state) => state.loginWithProfile);
  const [isCheckingProfile, setIsCheckingProfile] = useState(true);

  useEffect(() => {
    let isActive = true;

    const checkProfile = async () => {
      const { data: userData, error: userError } = await getCurrentUser();

      if (!isActive) return;

      if (userError || !userData?.user) {
        router.replace("/auth/login");
        return;
      }

      const { data: profile, error: profileError } = await getUserProfile(
        userData.user.id,
      );

      if (!isActive) return;

      if (profileError) {
        toast.error(
          profileError.message || "Unable to load your profile details.",
        );
        router.replace("/auth/profile-setup");
        return;
      }

      if (!isProfileComplete(profile)) {
        router.replace("/auth/profile-setup");
        return;
      }

      loginWithProfile(userData.user, profile);
      setIsCheckingProfile(false);
    };

    checkProfile();

    return () => {
      isActive = false;
    };
  }, [loginWithProfile, router]);

  if (isCheckingProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-cream/40">
        <Loader2 className="h-6 w-6 animate-spin text-[#23A136]" />
      </div>
    );
  }

  return (
    <Dashboard>
      {children}
      <DashboardTour />
    </Dashboard>
  );
}
