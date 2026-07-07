import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

const getSafeRedirectPath = (next: string | null) => {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/dashboard";
  }

  return next;
};

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");
  const errorDescription = requestUrl.searchParams.get("error_description");
  const next = getSafeRedirectPath(requestUrl.searchParams.get("next"));

  if (error) {
    const verifyUrl = new URL("/auth/verify-email", requestUrl.origin);
    verifyUrl.searchParams.set(
      "error",
      errorDescription || "Unable to verify your email link.",
    );
    return NextResponse.redirect(verifyUrl);
  }

  if (!code) {
    return NextResponse.redirect(new URL("/auth/login", requestUrl.origin));
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    const verifyUrl = new URL("/auth/verify-email", requestUrl.origin);
    verifyUrl.searchParams.set(
      "error",
      exchangeError.message || "Unable to verify your email link.",
    );
    return NextResponse.redirect(verifyUrl);
  }

  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
