import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
          <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
