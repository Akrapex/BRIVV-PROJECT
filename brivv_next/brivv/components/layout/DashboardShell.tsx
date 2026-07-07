import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/brand/Logo";
import {
  Heart,
  Clock,
  CalendarCheck,
  MessageSquare,
  Bell,
  User,
  Settings,
  LayoutDashboard,
  Home as HomeIcon,
  ListTree,
  PlusCircle,
  Users,
  Shield,
  Building2,
  ClipboardCheck,
  BarChart3,
  Tags,
  Cog,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/lib/store/auth";
import { signOutUser } from "@/lib/services/authService";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/utils/format";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

type Item = { to: string; label: string; icon: LucideIcon };

const SEEKER: Item[] = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/saved", label: "Saved", icon: Heart },
  { to: "/dashboard/viewed", label: "Recently viewed", icon: Clock },
  { to: "/dashboard/inspections", label: "Inspections", icon: CalendarCheck },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/profile", label: "Profile", icon: User },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const AGENT: Item[] = [
  { to: "/agent", label: "Overview", icon: LayoutDashboard },
  { to: "/agent/listings", label: "Listings", icon: ListTree },
  { to: "/agent/listings/new", label: "Add property", icon: PlusCircle },
  { to: "/agent/enquiries", label: "Enquiries", icon: MessageSquare },
  { to: "/agent/inspections", label: "Inspections", icon: CalendarCheck },
  { to: "/agent/performance", label: "Performance", icon: BarChart3 },
];

const ADMIN: Item[] = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/agents", label: "Agents", icon: Shield },
  { to: "/admin/properties", label: "Properties", icon: Building2 },
  { to: "/admin/approvals", label: "Approvals", icon: ClipboardCheck },
  { to: "/admin/reports", label: "Reports", icon: BarChart3 },
  { to: "/admin/settings", label: "Settings", icon: Cog },
];

export default function DashboardShell({ children }: { children: ReactNode }) {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const switchRole = useAuth((s) => s.switchRole);
  const router = useRouter();
  const pathname = usePathname();
  const role = user?.role ?? "seeker";

  const sections: { label: string; items: Item[] }[] = [];
  if (role === "seeker" || role === "owner" || role === "admin")
    sections.push({ label: "Personal", items: SEEKER });
  if (role === "agent" || role === "admin")
    sections.push({ label: "Agent", items: AGENT });
  if (role === "admin") sections.push({ label: "Admin", items: ADMIN });

  const isActive = (to: string) => pathname === to;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-brand-cream/40">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1">
              <Logo size="sm" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            {sections.map((sec) => (
              <SidebarGroup key={sec.label}>
                <SidebarGroupLabel>{sec.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sec.items.map((it) => (
                      <SidebarMenuItem key={it.to}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive(it.to)}
                          tooltip={it.label}
                        >
                          <Link
                            href={it.to}
                            className="flex items-center gap-2"
                          >
                            <it.icon className="h-4 w-4" />
                            <span>{it.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
            <SidebarGroup>
              <SidebarGroupLabel>Public</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Back to site">
                      <Link href="/" className="flex items-center gap-2">
                        <HomeIcon className="h-4 w-4" />
                        <span>Back to site</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="rounded-2xl border border-border bg-card p-3">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>
                    {initials(user?.name ?? "AK")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1 text-xs">
                  <div className="truncate font-medium">
                    {user?.name ?? "Guest"}
                  </div>
                  <div className="truncate capitalize text-muted-foreground">
                    {role}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  aria-label="Sign out"
                  onClick={async () => {
                    await signOutUser(); // invalidate Supabase session cookie
                    logout();           // clear Zustand store
                    router.push("/");
                  }}
                >
                  <LogOut className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1">
                {/* {(["seeker"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      switchRole(r);
                      if (r === "agent") router.push("/agent");
                      else if (r === "admin") router.push("/admin");
                      else router.push("/dashboard");
                    }}
                    className={
                      "rounded-lg px-1 py-1 text-[10px] capitalize transition " +
                      (role === r
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-accent")
                    }
                  >
                    {r}
                  </button>
                ))} */}
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-border/70 bg-background/80 px-3 backdrop-blur">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-1">
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 lg:p-8 animate-fade-in">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
