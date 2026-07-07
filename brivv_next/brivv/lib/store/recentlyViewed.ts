import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RV {
  ids: string[];
  push: (id: string) => void;
  clear: () => void;
}

export const useRecentlyViewed = create<RV>()(
  persist(
    (set) => ({
      ids: [],
      push: (id) => set((s) => ({ ids: [id, ...s.ids.filter((x) => x !== id)].slice(0, 12) })),
      clear: () => set({ ids: [] }),
    }),
    { name: "akrapex-recent" }
  )
);