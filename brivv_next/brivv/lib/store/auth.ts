import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@supabase/supabase-js";
import type { AppUser } from "@/lib/mock/types";
import { DEMO_USER, USERS } from "@/lib/mock/users";
import type { ProfileData } from "@/lib/services/profileService";

type Role = AppUser["role"];

interface AuthState {
  user: AppUser | null;
  /** Map a real Supabase User object into the AppUser shape and persist it */
  loginWithUser: (supabaseUser: User) => void;
  /** Map the user's profiles table row into the AppUser shape and persist it */
  loginWithProfile: (supabaseUser: User, profile: ProfileData) => void;
  /** Legacy helper — kept for backward compatibility */
  login: (email: string, role?: Role) => void;
  logout: () => void;
  register: (name: string, email: string, role: Role) => void;
  switchRole: (role: Role) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,

      /**
       * Primary login action after a successful Supabase sign-in.
       * Maps `user_metadata` fields into the AppUser shape so the rest of the
       * UI keeps working without any changes.
       */
      loginWithUser: (supabaseUser: User) => {
        const meta = supabaseUser.user_metadata ?? {};
        const appUser: AppUser = {
          id: supabaseUser.id,
          name:
            (meta.full_name as string | undefined) ??
            (meta.name as string | undefined) ??
            supabaseUser.email?.split("@")[0] ??
            "User",
          email: supabaseUser.email ?? "",
          avatar:
            (meta.avatar_url as string | undefined) ??
            `https://i.pravatar.cc/200?u=${supabaseUser.id}`,
          role: ((meta.role as Role | undefined) ?? "seeker") as Role,
          phone: meta.phone as string | undefined,
          location: meta.location as string | undefined,
          joined: supabaseUser.created_at,
        };
        set({ user: appUser });
      },

      loginWithProfile: (supabaseUser, profile) => {
        const appUser: AppUser = {
          id: supabaseUser.id,
          name:
            profile.full_name ||
            supabaseUser.email?.split("@")[0] ||
            "User",
          email: supabaseUser.email ?? "",
          avatar:
            profile.avatar_url ||
            `https://i.pravatar.cc/200?u=${supabaseUser.id}`,
          role: "seeker",
          phone: profile.phone,
          location: [profile.state, profile.country].filter(Boolean).join(", "),
          joined: supabaseUser.created_at,
        };
        set({ user: appUser });
      },

      /** Kept for backward compatibility (mock-based lookup) */
      login: (email, role = "seeker") => {
        const found = USERS.find((u) => u.email === email);
        const user = found ?? { ...DEMO_USER, email, role };
        set({ user: { ...user, role } });
      },

      /** Clear local auth state. Callers should also invoke signOutUser() from authService */
      logout: () => set({ user: null }),

      register: (name, email, role) => {
        set({
          user: {
            ...DEMO_USER,
            id: `u_${Date.now()}`,
            name,
            email,
            role,
            joined: new Date().toISOString(),
          },
        });
      },

      switchRole: (role) => {
        const u = get().user ?? DEMO_USER;
        set({ user: { ...u, role } });
      },
    }),
    { name: "akrapex-auth" },
  ),
);
