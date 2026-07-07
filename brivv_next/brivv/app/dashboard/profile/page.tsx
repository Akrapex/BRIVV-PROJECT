"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { useAuth } from "@/lib/store/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { initials } from "@/lib/utils/format";
import { toast } from "sonner";
import { Upload } from "lucide-react";

export default function Profile() {
  const user = useAuth((s) => s.user);

  return (
    <>
      <PageHeader
        title="Your profile"
        description="How other people see you on Akrapex."
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Profile saved");
        }}
        className="grid gap-6 lg:grid-cols-[280px_1fr]"
      >
        <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
          <Avatar className="mx-auto h-24 w-24">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{initials(user?.name ?? "AK")}</AvatarFallback>
          </Avatar>
          <div className="mt-3 font-display text-lg font-semibold">
            {user?.name ?? "Guest"}
          </div>
          <div className="text-xs capitalize text-muted-foreground">
            {user?.role ?? "seeker"}
          </div>
          <Button type="button" variant="outline" className="mt-4 rounded-full">
            <Upload className="mr-2 h-4 w-4" /> Upload photo
          </Button>
        </div>
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="n">Full name</Label>
              <Input id="n" defaultValue={user?.name ?? ""} />
            </div>
            <div>
              <Label htmlFor="e">Email</Label>
              <Input id="e" type="email" defaultValue={user?.email ?? ""} />
            </div>
            <div>
              <Label htmlFor="p">Phone</Label>
              <Input id="p" defaultValue={user?.phone ?? ""} />
            </div>
            <div>
              <Label htmlFor="l">Location</Label>
              <Input id="l" defaultValue={user?.location ?? ""} />
            </div>
          </div>
          <div>
            <Label htmlFor="b">Bio</Label>
            <Textarea id="b" rows={4} placeholder="Tell us about yourself" />
          </div>
          <div>
            <Button type="submit" className="rounded-full">
              Save changes
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
