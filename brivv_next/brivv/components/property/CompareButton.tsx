import { GitCompareArrows } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCompare } from "@/lib/store/compare";
import { toast } from "sonner";

export function CompareButton({ id }: { id: string }) {
  const ids = useCompare((s) => s.ids);
  const toggle = useCompare((s) => s.toggle);
  const active = ids.includes(id);
  return (
    <Button
      variant={active ? "default" : "outline"}
      className="rounded-full"
      onClick={() => {
        const added = toggle(id);
        if (!active && !added && ids.length >= 4) toast.error("You can compare up to 4 properties");
        else toast.success(active ? "Removed from compare" : "Added to compare");
      }}
    >
      <GitCompareArrows className="mr-2 h-4 w-4" /> {active ? "Comparing" : "Compare"}
    </Button>
  );
}