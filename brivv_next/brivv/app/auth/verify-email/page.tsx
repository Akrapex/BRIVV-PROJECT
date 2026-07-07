"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react";
import { resendVerificationEmail } from "@/lib/services/authService";
import { toast } from "sonner";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    if (!email) {
      toast.error("We could not find the email for this request.");
      return;
    }

    try {
      setIsResending(true);
      const { error } = await resendVerificationEmail(email);

      if (error) {
        toast.error(
          error.message || "Unable to resend the verification email.",
        );
        return;
      }

      toast.success("Verification email resent.");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to resend the verification email.";
      toast.error(message);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 h-full">
      <div className="space-y-2 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#23A136]/10 text-[#23A136]">
          <Mail className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-neutral-900">
          Verify your email
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          We have sent a verification link to{" "}
          <span className="font-semibold text-neutral-700">
            {email || "your inbox"}
          </span>
          . Open it to continue setting up your profile.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <Button
          type="button"
          className="w-full flex items-center justify-center h-12 bg-[#23A136] text-white font-semibold hover:bg-[#334800] rounded-md text-base"
          onClick={() =>
            window.open(
              "https://mail.google.com",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          Open email app
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center h-12 bg-white text-neutral-900 font-semibold hover:bg-neutral-50 rounded-md text-base"
          onClick={handleResend}
          disabled={isResending}
        >
          {isResending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Resend verification link"
          )}
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="w-full h-10 text-sm font-medium text-neutral-600"
          onClick={() => router.push("/auth/profile-setup")}
        >
          Continue to profile setup
        </Button>
      </div>

      <div className="space-y-2 text-center text-sm text-neutral-500">
        <p>
          Already verified?{" "}
          <Link
            href="/auth/profile-setup"
            className="font-medium text-neutral-900 underline underline-offset-4"
          >
            Complete your profile
          </Link>
        </p>
        <p>
          Need to change course?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-neutral-900 underline underline-offset-4"
          >
            Return to login
          </Link>
        </p>
      </div>
    </div>
  );
}
