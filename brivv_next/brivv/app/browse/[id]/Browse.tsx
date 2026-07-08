"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { propertyById, similarProperties } from "@/lib/mock/properties";
import { agentById } from "@/lib/mock/agents";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { AmenitiesGrid } from "@/components/property/AmenitiesGrid";
import { MapPlaceholder } from "@/components/property/MapPlaceholder";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PriceTag } from "@/components/property/PriceTag";
import { SaveButton } from "@/components/property/SaveButton";
import { ShareButton } from "@/components/property/ShareButton";
import { CompareButton } from "@/components/property/CompareButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Bath,
  BedDouble,
  Calendar,
  Eye,
  MapPin,
  MessageSquare,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
} from "lucide-react";
import { initials } from "@/lib/utils/format";
import { useRecentlyViewed } from "@/lib/store/recentlyViewed";
import { toast } from "sonner";

export default function Detail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const property = id ? propertyById(id) : undefined;
  const agent = property ? agentById(property.agentId) : undefined;
  const push = useRecentlyViewed((s) => s.push);

  useEffect(() => {
    if (property) push(property.id);
  }, [property, push]);

  const similar = property ? similarProperties(property) : [];

  if (!property) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
          <h1 className="font-display text-2xl font-semibold">
            Property not found
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The requested listing could not be found. Please go back to the
            browse page and try again.
          </p>
          <Link
            href="/browse"
            className="mt-6 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Back to browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10 animate-fade-in">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <Link href="/browse" className="hover:text-foreground">
          ← Back to browse
        </Link>
        <div className="inline-flex items-center gap-2">
          {property.verified && (
            <span className="inline-flex items-center gap-1 text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Verified
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" /> {property.views.toLocaleString()}{" "}
            views
          </span>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <PropertyGallery images={property.images} alt={property.title} />
          <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="mb-1.5 flex flex-wrap gap-1.5">
                <Badge className="rounded-full capitalize bg-primary text-primary-foreground">
                  {property.transaction === "short-let"
                    ? "Short-let"
                    : property.transaction}
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  {property.type}
                </Badge>
                {property.newlyBuilt && (
                  <Badge variant="secondary" className="rounded-full">
                    Newly built
                  </Badge>
                )}
              </div>
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {property.title}
              </h1>
              <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {property.address}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                {property.bedrooms > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-primary" />{" "}
                    {property.bedrooms} bed
                  </span>
                )}
                {property.bathrooms > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <Bath className="h-4 w-4 text-primary" />{" "}
                    {property.bathrooms} bath
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Ruler className="h-4 w-4 text-primary" />{" "}
                  {property.sqm.toLocaleString()} sqm
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SaveButton id={property.id} variant="icon" />
              <ShareButton />
              <CompareButton id={property.id} />
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="rounded-full bg-muted p-1">
              <TabsTrigger
                value="overview"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="amenities"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Amenities
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Location
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6 space-y-4">
              <p className="text-[15px] leading-relaxed text-foreground/90">
                {property.description}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {property.features.map((f) => (
                  <div
                    key={f}
                    className=" bg-card px-3 py-2 text-sm"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="amenities" className="mt-6">
              <AmenitiesGrid items={property.amenities} />
            </TabsContent>
            <TabsContent value="location" className="mt-6">
              <MapPlaceholder address={property.address} />
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit ">
          <div className="rounded-lg border border-border bg-card p-6 shadow-lift">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Asking price
            </div>
            <PriceTag property={property} size="lg" className="mt-1" />
            <div className="mt-4 flex items-center gap-3">
              <Avatar className="h-11 w-11">
                <AvatarImage src={agent?.avatar} />
                <AvatarFallback>{initials(agent?.name ?? "")}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <div className="font-display font-semibold">{agent?.name}</div>
                <div className="text-xs text-muted-foreground">
                  {agent?.agency}
                </div>
                <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-primary">
                  <Star className="h-3 w-3 fill-current" /> {agent?.rating} ·{" "}
                  {agent?.reviews} reviews
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              <InspectionDialog propertyTitle={property.title} />
              <Button variant="outline" className="rounded border border-none shadow-none">
                <MessageSquare className="mr-2 h-4 w-4" /> Message agent
              </Button>
              <Button variant="ghost" className="rounded">
                <Phone className="mr-2 h-4 w-4" /> {agent?.phone}
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-4 font-display text-xl font-bold sm:text-2xl">
            Similar properties
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {similar.map((s) => (
              <PropertyCard key={s.id} property={s} span="sm" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function InspectionDialog({ propertyTitle }: { propertyTitle: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-lg">
          <Calendar className="mr-2 h-4 w-4" /> Schedule inspection
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule an inspection</DialogTitle>
          <DialogDescription>
            For {propertyTitle}. The agent will confirm your slot.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Inspection request sent!");
            setOpen(false);
          }}
          className="grid gap-3"
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="d">Date</Label>
              <Input id="d" type="date" required />
            </div>
            <div>
              <Label htmlFor="t">Time</Label>
              <Input id="t" type="time" required />
            </div>
          </div>
          <div>
            <Label htmlFor="n">Note (optional)</Label>
            <Textarea
              id="n"
              placeholder="Any specific rooms you'd like to see?"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="rounded-full">
              Send request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
