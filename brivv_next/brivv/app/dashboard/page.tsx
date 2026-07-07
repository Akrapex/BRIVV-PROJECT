"use client";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { useFavorites } from "@/lib/store/favorites";
import { useRecentlyViewed } from "@/lib/store/recentlyViewed";
import { INSPECTIONS } from "@/lib/mock/inspections";
import { NOTIFICATIONS } from "@/lib/mock/notifications";
import { PROPERTIES } from "@/lib/mock/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Heart, Clock, CalendarCheck, Bell } from "lucide-react";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/store/auth";

function Overview() {
  const user = useAuth((s) => s.user);
  const favs = useFavorites((s) => s.ids);
  const recent = useRecentlyViewed((s) => s.ids);
  const upcoming = INSPECTIONS.filter((i) => i.status !== "completed").length;
  const unread = NOTIFICATIONS.filter((n) => !n.read).length;
  const favProps = PROPERTIES.filter((p) => favs.includes(p.id)).slice(0, 3);
  const suggestions = PROPERTIES.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <PageHeader
        title={`Welcome back${user?.name ? ", " + user.name.split(" ")[0] : ""}`}
        description="Everything you need to find and manage your property journey."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Heart} label="Saved" value={favs.length} />
        <StatCard icon={Clock} label="Recently viewed" value={recent.length} />
        <StatCard
          icon={CalendarCheck}
          label="Upcoming inspections"
          value={upcoming}
        />
        <StatCard icon={Bell} label="Unread notifications" value={unread} />
      </div>

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">
            Your saved properties
          </h2>
          <Link
            href="/dashboard/saved"
            className="text-xs font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        {favProps.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="No favorites yet"
            body="Tap the heart on any listing to save it here."
            action={
              <Button asChild className="rounded-md py-6 font-semibold px-4">
                <Link href="/browse">Browse properties</Link>
              </Button>
            }
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favProps.map((p) => (
              <PropertyCard key={p.id} property={p} span="sm" />
            ))}
          </div>
        )}
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">
            Suggested for you
          </h2>
          <Link
            href="/browse"
            className="text-xs font-medium text-primary hover:underline"
          >
            See more
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((p) => (
            <PropertyCard key={p.id} property={p} span="sm" />
          ))}
        </div>
      </section>
    </>
  );
}

export default Overview;
