import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ShareButton({ url, variant = "ghost" }: { url?: string; variant?: "outline" | "ghost" }) {
  const handle = async () => {
    const link = url ?? (typeof window !== "undefined" ? window.location.href : "");
    try {
      if (typeof navigator !== "undefined" && (navigator as any).share) {
        await (navigator as any).share({ title: "Akrapex property", url: link });
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(link);
        toast.success("Link copied to clipboard");
      }
    } catch {
      toast.error("Couldn't share right now");
    }
  };
  return (
    <Button variant={variant} onClick={handle} className="rounded-full">
      <Share2 className="h-4 w-4 shadow" /> 
    </Button>
  );
}