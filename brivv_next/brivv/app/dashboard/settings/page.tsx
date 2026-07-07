"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Settings() {
  return (
    <>
      <PageHeader
        title="Account settings"
        description="Manage password, notifications and security."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Password updated");
          }}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft"
        >
          <h3 className="font-display text-lg font-semibold">
            Change password
          </h3>
          <div className="mt-4 grid gap-3">
            <div>
              <Label htmlFor="c">Current password</Label>
              <Input id="c" type="password" required />
            </div>
            <div>
              <Label htmlFor="n">New password</Label>
              <Input id="n" type="password" required />
            </div>
            <div>
              <Label htmlFor="cf">Confirm new password</Label>
              <Input id="cf" type="password" required />
            </div>
            <Button type="submit" className="mt-2 w-fit rounded-full">
              Update password
            </Button>
          </div>
        </form>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-display text-lg font-semibold">Notifications</h3>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["Email — property alerts", true],
              ["Email — messages", true],
              ["Email — weekly digest", false],
              ["Push — inspection reminders", true],
              ["Push — price drops on saved", true],
            ].map(([label, def]) => (
              <div
                key={String(label)}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
              >
                <span>{label as string}</span>
                <Switch defaultChecked={def as boolean} />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <h3 className="font-display text-lg font-semibold">Security</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
              <span>Two-factor authentication (SMS)</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
              <span>Login alerts to email</span>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
