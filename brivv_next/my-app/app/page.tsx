"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  CheckCircle,
  Play,
  ArrowRight,
  Star,
  MapPin,
  Home,
  Search,
  Heart,
  FileCheck,
  Key,
  Zap,
  Shield,
  Smartphone,
  Share2,
  MessageCircle,
  Camera,
  Video,
  ChevronRight,
  Droplets,
  Flame,
  Trash2,
} from "lucide-react";

// ── COLOUR TOKENS ──────────────────────────────────────────────
const C = {
  lime: "#8CC63F",
  limeDark: "#6FA832",
  black: "#0A0A0A",
  offWhite: "#F7F8F3",
  stone: "#F0F0EB",
  charcoal: "#1A1A1A",
  muted: "#6B7280",
  white: "#FFFFFF",
};

// ── DATA ───────────────────────────────────────────────────────
const navLinks = ["Buy", "Sell", "Rent", "About", "Services", "Contact"];

const features = [
  {
    icon: <CheckCircle size={28} />,
    title: "Verified Listings Only",
    desc: "Every property is vetted and confirmed before it reaches you.",
  },
  {
    icon: <Search size={28} />,
    title: "Smart Property Search",
    desc: "Filter by location, price, type, and more with intelligent search.",
  },
  {
    icon: <Home size={28} />,
    title: "Book Property Visits",
    desc: "Schedule in-person or virtual tours directly from the platform.",
  },
  {
    icon: <Shield size={28} />,
    title: "Utility Platform",
    desc: "Manage electricity, water, and internet bills from one dashboard.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Eco Friendly",
    desc: "We partner only with sustainable, green-certified developments.",
  },
];

const journeySteps = [
  { icon: <Search size={20} />, label: "Browse" },
  { icon: <Heart size={20} />, label: "Shortlist" },
  { icon: <FileCheck size={20} />, label: "Verify" },
  { icon: <Key size={20} />, label: "Close" },
  { icon: <Home size={20} />, label: "Move In" },
];

const properties = [
  {
    name: "The Ivory Residences",
    location: "Lekki Phase 1",
    price: "₦120,000,000",
    tag: "For Sale",
    color: "#D4A853",
  },
  {
    name: "Skyrift Standalone",
    location: "Ikoyi, Lagos",
    price: "₦200,000,000",
    tag: "Featured",
    color: C.lime,
  },
  {
    name: "The Garden Stone",
    location: "Victoria Island",
    price: "₦800,000,000",
    tag: "Luxury",
    color: "#C0392B",
  },
];

const stats = [
  { value: "500+", label: "Properties" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "50+", label: "Top Transactions" },
  { value: "₦100M+", label: "Total Sales Volume" },
];

const featured = [
  {
    name: "Grand Meadow Retreat",
    price: "₦1.2B",
    tag: "Luxury",
  },
  {
    name: "Azure Heights",
    price: "₦2.5B",
    tag: "New",
  },
  {
    name: "Terra Stone Villa",
    price: "₦3.1B",
    tag: "Featured",
  },
];

const testimonials = [
  {
    name: "Amara Okafor",
    role: "First-time Buyer",
    text: "Brivv made buying my first home stress-free. The verified listings saved me so much time.",
    rating: 5,
  },
  {
    name: "Chidi Nwosu",
    role: "Property Investor",
    text: "The smart matching technology found exactly what I was looking for within days.",
    rating: 5,
  },
  {
    name: "Fatima Bello",
    role: "Home Seller",
    text: "I sold my property 40% faster than traditional agents. Highly recommended.",
    rating: 5,
  },
  {
    name: "Emeka Eze",
    role: "Landlord",
    text: "Managing utility payments for my tenants is now incredibly seamless.",
    rating: 5,
  },
];

const utilityBills = [
  { icon: <Zap size={16} />, label: "Electricity", amount: "₦45,000.00" },
  { icon: <Droplets size={16} />, label: "Water Supply", amount: "₦12,500.00" },
  { icon: <Flame size={16} />, label: "Gas Service", amount: "₦8,200.00" },
  { icon: <Trash2 size={16} />, label: "Waste Management", amount: "₦3,800.00" },
];

const footerLinks = {
  Explore: ["Buy Property", "Rent Property", "Sell Property", "New Listings"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  "Join Our Newsletter": [],
};

// ── COMPONENT ──────────────────────────────────────────────────
export default function BrivvLandingPage() {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: C.offWhite, color: C.black }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          backgroundColor: C.white,
          borderBottom: "1px solid #E5E7EB",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.5px" }}>
            bri<span style={{ color: C.lime }}>vv</span>
          </span>

          <NavigationMenu>
            <NavigationMenuList style={{ gap: 4 }}>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link}>
                  <NavigationMenuLink
                    href="#"
                    style={{
                      padding: "8px 14px",
                      fontSize: 14,
                      fontWeight: 500,
                      color: C.muted,
                      textDecoration: "none",
                      borderRadius: 6,
                    }}
                  >
                    {link}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="ghost" style={{ fontSize: 14 }}>
              Sign In
            </Button>
            <Button
              style={{
                backgroundColor: C.lime,
                color: C.black,
                fontWeight: 700,
                fontSize: 14,
                border: "none",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 24px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <Badge
            style={{
              backgroundColor: "#EEF7E0",
              color: C.limeDark,
              fontWeight: 600,
              fontSize: 12,
              marginBottom: 20,
            }}
          >
            #1 Trusted Property Platform
          </Badge>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              marginBottom: 20,
            }}
          >
            Find, Verify, and Secure
            <br />
            Your Next{" "}
            <span style={{ color: C.lime, fontStyle: "italic" }}>Property</span>
          </h1>
          <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
            Browse trusted listings, watch real video tours, pay bills, and complete property transactions seamlessly with Brivv.
          </p>
          <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
            <Button
              size="lg"
              style={{
                backgroundColor: C.black,
                color: C.white,
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 10,
                border: "none",
              }}
            >
              Browse Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              style={{
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: 10,
                borderColor: "#D1D5DB",
              }}
            >
              List Your Property
            </Button>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { val: "500+", label: "Verified Listings" },
              { val: "1K+", label: "Happy Clients" },
              { val: "50+", label: "Top Agents" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontWeight: 800, fontSize: 22, color: C.black }}>{s.val}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image placeholder */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              height: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", color: C.white }}>
              <Home size={64} style={{ marginBottom: 16, opacity: 0.6 }} />
              <p style={{ opacity: 0.5, fontSize: 14 }}>Property Hero Image</p>
            </div>
          </div>
          {/* Floating card */}
          <Card
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
              backgroundColor: C.white,
              borderRadius: 14,
              padding: 16,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: "none",
              minWidth: 180,
            }}
          >
            <CardContent style={{ padding: 0 }}>
              <div style={{ fontSize: 11, color: C.muted, marginBottom: 4 }}>Estimated Value</div>
              <div style={{ fontWeight: 800, fontSize: 20, color: C.lime }}>₦84,500,000</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>
                <MapPin size={10} style={{ display: "inline" }} /> Lekki Phase 1
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── CORE FEATURES ── */}
      <section style={{ backgroundColor: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
            What We Offer
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 8 }}>
            Core Platform Features
          </h2>
          <p style={{ color: C.muted, marginBottom: 48, maxWidth: 480, lineHeight: 1.6 }}>
            Brivv incorporates a simpler, far simplified real estate journey built for real life.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
            {features.map((f) => (
              <Card
                key={f.title}
                style={{ border: "1px solid #F0F0EB", borderRadius: 16, padding: 24 }}
              >
                <CardContent style={{ padding: 0 }}>
                  <div
                    style={{
                      color: C.lime,
                      marginBottom: 16,
                      width: 48,
                      height: 48,
                      backgroundColor: "#EEF7E0",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{f.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOUR YOUR PROPERTIES ANYTIME ── */}
      <section style={{ padding: "80px 24px", backgroundColor: C.offWhite }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Phone mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 260,
                height: 500,
                background: "linear-gradient(160deg, #1a1a2e, #0f3460)",
                borderRadius: 36,
                border: "8px solid #111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
                position: "relative",
              }}
            >
              <div style={{ textAlign: "center", color: C.white }}>
                <Play size={48} style={{ opacity: 0.7, marginBottom: 12 }} />
                <p style={{ fontSize: 12, opacity: 0.5 }}>Property Tour</p>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 16,
                  right: 16,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 12,
                  padding: "10px 14px",
                  color: C.white,
                }}
              >
                <div style={{ fontSize: 11, opacity: 0.7 }}>Lekki Penthouse</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.lime }}>₦84,200,000</div>
              </div>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              Virtual Tours
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 20 }}>
              Tour Your Properties Anytime
            </h2>
            <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 32, fontSize: 15 }}>
              Experience homes like never before with our real-life video tours. Watch, shortlist, and schedule viewings at your convenience and schedule bookings with one tap.
            </p>
            {[
              "Book walkthroughs and see the property hunt",
              "Share and shortlist your favourite listings",
              "Book instant bookings with one tap",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <CheckCircle size={18} style={{ color: C.lime, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: C.charcoal }}>{item}</span>
              </div>
            ))}
            <Button
              style={{
                marginTop: 28,
                backgroundColor: C.lime,
                color: C.black,
                fontWeight: 700,
                borderRadius: 10,
                border: "none",
              }}
            >
              Start Exploring <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── PROPERTY REELS ── */}
      <section style={{ padding: "80px 24px", backgroundColor: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>
              <span style={{ color: C.lime }}>✦</span> Property Reels
            </h2>
            <Button variant="ghost" style={{ fontSize: 13, color: C.lime, fontWeight: 600 }}>
              View All <ChevronRight size={16} />
            </Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {["Ikeja Manor", "Ajah Estate", "VI Gardens", "Ikoyi Court"].map((name, i) => (
              <div
                key={name}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background: `linear-gradient(160deg, hsl(${i * 40 + 200}, 40%, 20%), hsl(${i * 40 + 220}, 50%, 10%))`,
                  height: 260,
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play size={20} color={C.white} />
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    color: C.white,
                  }}
                >
                  <Badge style={{ backgroundColor: C.lime, color: C.black, fontSize: 10, marginBottom: 6 }}>
                    NEW
                  </Badge>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{name}</div>
                  <div style={{ fontSize: 11, opacity: 0.7 }}>Lagos Island</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AKRAPEX JOURNEY (dark) ── */}
      <section style={{ backgroundColor: C.charcoal, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.white, marginBottom: 40 }}>
            The Brivv Journey
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0 }}>
            {journeySteps.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      backgroundColor: i === 4 ? C.lime : "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: i === 4 ? C.black : C.white,
                    }}
                  >
                    {step.icon}
                  </div>
                  <span style={{ fontSize: 12, color: i === 4 ? C.lime : "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                    {step.label}
                  </span>
                </div>
                {i < journeySteps.length - 1 && (
                  <div style={{ width: 80, height: 1, backgroundColor: "rgba(255,255,255,0.15)", margin: "0 8px", marginBottom: 22 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SMART MATCHING ── */}
      <section style={{ padding: "80px 24px", backgroundColor: C.white }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Mock UI card */}
          <Card style={{ border: "1px solid #F0F0EB", borderRadius: 20, padding: 28 }}>
            <CardContent style={{ padding: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: "#EEF7E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Zap size={18} color={C.lime} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>LandlordProfessional</div>
                  <div style={{ fontSize: 11, color: C.muted }}>Active · Just now</div>
                </div>
              </div>
              {["Preference Match: 96%", "Budget Aligned", "Area Verified"].map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 14px",
                    backgroundColor: i === 0 ? "#EEF7E0" : C.stone,
                    borderRadius: 10,
                    marginBottom: 8,
                    fontSize: 13,
                    fontWeight: i === 0 ? 700 : 500,
                    color: i === 0 ? C.limeDark : C.charcoal,
                  }}
                >
                  <CheckCircle size={14} color={C.lime} />
                  {item}
                </div>
              ))}
              <Button style={{ width: "100%", marginTop: 16, backgroundColor: C.lime, color: C.black, fontWeight: 700, border: "none", borderRadius: 10 }}>
                View Match
              </Button>
            </CardContent>
          </Card>

          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              AI-Powered
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 20 }}>
              Smart Matching Technology
            </h2>
            <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
              Our algorithm learns your preferences and surfaces properties that truly match your lifestyle, budget, and location goals.
            </p>
            {[
              { title: "Preference-Based Matching", desc: "Learns from your saved searches and activity." },
              { title: "Next Time", desc: "Gets smarter with every interaction." },
              { title: "Higher Success Rate", desc: "Users find their property 3× faster." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: C.lime, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: C.muted }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UTILITY PAYMENTS (dark) ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.charcoal} 0%, #111 100%)`,
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              All-in-One Dashboard
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.5px", color: C.white, marginBottom: 20 }}>
              Simplify Utility Payments
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 32, fontSize: 15 }}>
              Stop juggling multiple apps. Pay electricity, water, gas, and waste management bills from one seamless platform.
            </p>
            {utilityBills.map((bill) => (
              <div
                key={bill.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: 10,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  marginBottom: 10,
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ color: C.lime }}>{bill.icon}</div>
                  <span style={{ fontSize: 14, color: C.white }}>{bill.label}</span>
                </div>
                <ChevronRight size={16} color="rgba(255,255,255,0.3)" />
              </div>
            ))}
          </div>

          {/* Bill card */}
          <Card
            style={{
              backgroundColor: C.white,
              borderRadius: 20,
              padding: 28,
              border: "none",
              boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
            }}
          >
            <CardContent style={{ padding: 0 }}>
              <div style={{ fontSize: 13, color: C.muted, marginBottom: 4 }}>September Bills</div>
              <div style={{ fontWeight: 900, fontSize: 28, color: C.black, marginBottom: 20 }}>
                ₦2,480.00
              </div>
              <Separator style={{ marginBottom: 16 }} />
              {utilityBills.map((bill) => (
                <div key={bill.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 13, color: C.muted }}>{bill.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{bill.amount}</span>
                </div>
              ))}
              <Button
                style={{
                  width: "100%",
                  marginTop: 16,
                  backgroundColor: C.lime,
                  color: C.black,
                  fontWeight: 700,
                  borderRadius: 10,
                  border: "none",
                }}
              >
                Pay Now Bills
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── MARKETPLACE ── */}
      <section style={{ padding: "80px 24px", backgroundColor: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                Browse Listings
              </p>
              <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.5px" }}>Marketplace</h2>
            </div>
            <Button variant="ghost" style={{ color: C.lime, fontWeight: 600, fontSize: 13 }}>
              View Full Marketplace <ChevronRight size={16} />
            </Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {properties.map((p) => (
              <Card
                key={p.name}
                style={{ border: "none", borderRadius: 18, overflow: "hidden", backgroundColor: C.white }}
              >
                <div
                  style={{
                    height: 200,
                    background: `linear-gradient(135deg, hsl(200, 30%, 20%), hsl(220, 40%, 12%))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Home size={40} color="rgba(255,255,255,0.2)" />
                  <Badge
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      backgroundColor: p.color,
                      color: p.color === C.lime ? C.black : C.white,
                      fontWeight: 700,
                      fontSize: 11,
                    }}
                  >
                    {p.tag}
                  </Badge>
                </div>
                <CardContent style={{ padding: "18px 20px" }}>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: C.muted, marginBottom: 12 }}>
                    <MapPin size={12} style={{ display: "inline", marginRight: 4 }} />
                    {p.location}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: 18, color: C.lime }}>{p.price}</span>
                    <Button size="sm" style={{ backgroundColor: C.lime, color: C.black, fontWeight: 600, border: "none", borderRadius: 8 }}>
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section style={{ backgroundColor: C.lime, padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            textAlign: "center",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontWeight: 900, fontSize: 36, color: C.black, letterSpacing: "-1px" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: C.charcoal, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUSTAINABLE FUTURE (dark) ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 100%)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: C.white,
              letterSpacing: "-1px",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Curating a{" "}
            <span style={{ color: C.lime, fontStyle: "italic" }}>Sustainable</span> Future
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 32, fontSize: 15 }}>
            We believe in building communities that thrive — partnering only with developers committed to environmental responsibility and long-term value.
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: C.lime, color: C.black, fontWeight: 700, border: "none", borderRadius: 10 }}
          >
            Learn About Our Mission
          </Button>
        </div>
      </section>

      {/* ── FEATURED SELECTIONS ── */}
      <section style={{ padding: "80px 24px", backgroundColor: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
            Hand-picked
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 36 }}>Featured Selections</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {featured.map((f) => (
              <Card
                key={f.name}
                style={{ border: "1px solid #F0F0EB", borderRadius: 18, overflow: "hidden" }}
              >
                <div
                  style={{
                    height: 180,
                    background: "linear-gradient(135deg, #1a2a1a, #0d1a0d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Home size={36} color="rgba(255,255,255,0.15)" />
                  <Badge
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      backgroundColor: C.lime,
                      color: C.black,
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {f.tag}
                  </Badge>
                </div>
                <CardContent style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{f.name}</div>
                  <div style={{ fontWeight: 800, fontSize: 17, color: C.lime, marginBottom: 12 }}>{f.price}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    style={{ width: "100%", borderColor: "#E5E7EB", fontSize: 13, borderRadius: 8 }}
                  >
                    View Property
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "80px 24px", backgroundColor: C.stone }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.lime, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, textAlign: "center" }}>
            Reviews
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 48 }}>
            Trusted by Thousands
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {testimonials.map((t) => (
              <Card
                key={t.name}
                style={{ border: "none", borderRadius: 18, padding: 24, backgroundColor: C.white }}
              >
                <CardContent style={{ padding: 0 }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill={C.lime} color={C.lime} />
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar style={{ width: 36, height: 36 }}>
                      <AvatarFallback style={{ backgroundColor: "#EEF7E0", color: C.limeDark, fontWeight: 700, fontSize: 13 }}>
                        {t.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: C.muted }}>{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.lime} 0%, ${C.limeDark} 100%)`,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 40, fontWeight: 900, color: C.black, letterSpacing: "-1px", marginBottom: 16 }}>
          Ready to Find Your Perfect Home?
        </h2>
        <p style={{ color: "rgba(0,0,0,0.6)", marginBottom: 36, fontSize: 16 }}>
          Join thousands of Nigerians who found their dream property on Brivv.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <Button
            size="lg"
            style={{ backgroundColor: C.black, color: C.white, fontWeight: 700, border: "none", borderRadius: 10, padding: "14px 32px" }}
          >
            Find Your Home
          </Button>
          <Button
            size="lg"
            variant="outline"
            style={{ fontWeight: 600, borderRadius: 10, borderColor: "rgba(0,0,0,0.3)", padding: "14px 32px" }}
          >
            ✦ Agents
          </Button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.charcoal, padding: "60px 24px 32px", color: "rgba(255,255,255,0.6)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: 48,
            marginBottom: 40,
          }}
        >
          <div>
            <span style={{ fontWeight: 800, fontSize: 24, color: C.white, display: "block", marginBottom: 16 }}>
              bri<span style={{ color: C.lime }}>vv</span>
            </span>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 240 }}>
              Nigeria's most trusted property platform. Find, verify, and secure your next home with confidence.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
              {[Share2, MessageCircle, Camera, Video].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Icon size={16} color="rgba(255,255,255,0.6)" />
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ fontWeight: 700, fontSize: 13, color: C.white, marginBottom: 16 }}>{heading}</div>
              {links.map((link) => (
                <div key={link} style={{ fontSize: 13, marginBottom: 10, cursor: "pointer" }}>
                  {link}
                </div>
              ))}
              {heading === "Join Our Newsletter" && (
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <input
                    placeholder="Your email"
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: C.white,
                      fontSize: 13,
                      outline: "none",
                    }}
                  />
                  <Button style={{ backgroundColor: C.lime, color: C.black, fontWeight: 700, border: "none", borderRadius: 8 }}>
                    →
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator style={{ backgroundColor: "rgba(255,255,255,0.08)", marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
          <span>© 2025 Brivv. All rights reserved.</span>
          <span>Built with ♥ in Lagos, Nigeria</span>
        </div>
      </footer>
    </div>
  );
}