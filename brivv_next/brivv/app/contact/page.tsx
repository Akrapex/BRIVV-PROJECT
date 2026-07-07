"use client"
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";



export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <PageHeader
          title="Get in touch"
          description="We usually reply within 24 hours."
        />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent — we'll be in touch.");
              (e.target as HTMLFormElement).reset();
            }}
            className="grid gap-4 rounded border border-border bg-card p-6"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="n">Name</Label>
                <Input id="n" required />
              </div>
              <div>
                <Label htmlFor="e">Email</Label>
                <Input id="e" type="email" required />
              </div>
            </div>
            <div>
              <Label htmlFor="s">Subject</Label>
              <Input id="s" required />
            </div>
            <div>
              <Label htmlFor="m">Message</Label>
              <Textarea id="m" rows={5} required />
            </div>
            <Button type="submit" className="w-fit rounded-md">
              Send message
            </Button>
          </form>
          <div className="rounded border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold">
              Contact details
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> hello@akrapex.ng
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +234 800 000 0000
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Victoria Island,
                Lagos
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
