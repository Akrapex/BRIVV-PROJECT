"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { NOTIFICATIONS } from "@/lib/mock/notifications";
import {
  Bell,
  MessageSquare,
  CalendarCheck,
  ClipboardCheck,
  TrendingUp,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { relTime } from "@/lib/utils/format";

const ICON = {
  message: MessageSquare,
  inspection: CalendarCheck,
  approval: ClipboardCheck,
  update: TrendingUp,
  account: Shield,
} as const;

export default function NotifPage() {
  const [items, setItems] = useState(NOTIFICATIONS);
  const unread = items.filter((n) => !n.read).length;

  return (
    <>
      <PageHeader
        title="Notifications"
        description={`${unread} unread`}
        action={
          unread > 0 ? (
            <Button
              variant="ghost"
              className="rounded-full"
              onClick={() =>
                setItems((l) => l.map((n) => ({ ...n, read: true })))
              }
            >
              Mark all read
            </Button>
          ) : undefined
        }
      />
      <div className="space-y-2">
        {items.map((n) => {
          const Icon = ICON[n.kind] ?? Bell;
          return (
            <div
              key={n.id}
              className={
                "flex items-start gap-3 rounded-2xl border p-4 transition " +
                (n.read
                  ? "border-border bg-card"
                  : "border-primary/30 bg-primary-soft/40")
              }
            >
              <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-background">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="truncate text-sm font-semibold">
                    {n.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {relTime(n.at)}
                  </div>
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {n.body}
                </div>
              </div>
              {!n.read && (
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
