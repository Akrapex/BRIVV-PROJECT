"use client";

import Dashboard from "@/components/layout/DashboardShell";
import DashboardTour from "@/components/common/DashboardTour";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dashboard>
      {children}
      <DashboardTour />
    </Dashboard>
  );
}
