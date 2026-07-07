import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/lib/store/favorites";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function SaveButton({ id, variant = "icon" }: { id: string; variant?: "icon" | "inline" }) {
  const has = useFavorites((s) => s.ids.includes(id));
  const toggle = useFavorites((s) => s.toggle);
  const handle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(id);
    toast.success(has ? "Removed from saved" : "Saved to your list");
  };
  if (variant === "inline") {
    return (
      <Button onClick={handle} variant={has ? "default" : "outline"} className="rounded-full">
        <Heart className={cn("mr-2 h-4 w-4", has && "fill-current")} /> {has ? "Saved" : "Save"}
      </Button>
    );
  }
  return (
    <button
      onClick={handle}
      className="grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur shadow-soft transition hover:scale-110"
      aria-label={has ? "Unsave" : "Save"}
    >
      <Heart className={cn("h-4 w-4", has ? "fill-primary text-primary" : "text-foreground")} />
    </button>
  );
}