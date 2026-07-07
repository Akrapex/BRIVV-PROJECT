import { createClient } from "@/lib/supabase/client";
import z from "zod";

const supabase = createClient();

const getProfileSetupRedirectUrl = () =>
  `${window.location.origin}/auth/callback?next=${encodeURIComponent(
    "/auth/profile-setup",
  )}`;

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  email: string;
  password: string;
  redirectTo?: string;
};

export const RegisterSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

/**
 * Sign in an existing user using email and password.
 * Returns the Supabase auth response so callers can handle redirection or errors.
 */
export async function signInWithEmailPassword({
  email,
  password,
}: SignInPayload) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

/**
 * Create a new user using email and password.
 * Returns the Supabase auth response so the registration flow can continue.
 */
export async function signUpWithEmailPassword({
  email,
  password,
  redirectTo,
}: SignUpPayload) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectTo ?? getProfileSetupRedirectUrl(),
    },
  });
}

export async function resendVerificationEmail(email: string) {
  return supabase.auth.resend({
    type: "signup",
    email,
    options: {
      emailRedirectTo: getProfileSetupRedirectUrl(),
    },
  });
}

/**
 * Start OAuth sign-in flow for Google.
 * This is a reusable helper for client-side Google login.
 */
export async function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

/**
 * Exchange the OAuth authorization code for a Supabase session.
 * Used by the auth callback route after Google sign-in.
 */
export async function exchangeOAuthCodeForSession(code: string) {
  return supabase.auth.exchangeCodeForSession(code);
}

/**
 * Retrieve the currently authenticated user.
 * Returns the user payload and any auth error.
 */
export async function getCurrentUser() {
  return supabase.auth.getUser();
}

/**
 * Sign out the currently authenticated user.
 */
export async function signOutUser() {
  return supabase.auth.signOut();
}

/**
 * Get the current session (reads from cookie / local storage).
 * Prefer this over getUser() in client components for a fast, non-network read.
 */
export async function getSession() {
  return supabase.auth.getSession();
}
