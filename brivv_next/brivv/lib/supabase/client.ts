import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

// Cache a single browser client for the lifetime of the tab.
let browserClient: SupabaseClient | undefined;

/**
 * Lazily create (and memoize) the Supabase browser client.
 *
 * IMPORTANT: this must stay lazy. Creating the client at module scope would run
 * during static prerendering / SSR, where the public env vars may be absent,
 * and `@supabase/ssr` throws when the URL or key is missing — which breaks the
 * production build. By only reading env + constructing the client on first call,
 * modules can be safely imported during build without a live Supabase config.
 */
export const createClient = () => {
  if (browserClient) return browserClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  browserClient = createBrowserClient(supabaseUrl, supabaseKey);
  return browserClient;
};
