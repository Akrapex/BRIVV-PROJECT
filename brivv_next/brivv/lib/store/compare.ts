import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Cmp {
  ids: string[];
  toggle: (id: string) => boolean;
  clear: () => void;
}

export const useCompare = create<Cmp>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const s = get();
        if (s.ids.includes(id)) {
          set({ ids: s.ids.filter((x) => x !== id) });
          return false;
        }
        if (s.ids.length >= 4) return false;
        set({ ids: [...s.ids, id] });
        return true;
      },
      clear: () => set({ ids: [] }),
    }),
    { name: "akrapex-compare" }
  )
);