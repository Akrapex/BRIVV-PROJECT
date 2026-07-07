"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  RegisterSchema,
  signUpWithEmailPassword,
} from "@/lib/services/authService";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema as any),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    try {
      const { data: authData, error } = await signUpWithEmailPassword(data);

      if (error) {
        toast.error(
          error.message || "Unable to create your account right now.",
        );
        return;
      }

      toast.success("Verification link sent. Please check your inbox.");
      router.replace(
        `/auth/verify-email?email=${encodeURIComponent(data.email)}`,
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to create your account right now.";
      toast.error(message);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 h-full ">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-neutral-900">Welcome back!</h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Sign in to continue to your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Email address
              </FieldLabel>
              <Input
                {...field}
                type="email"
                placeholder="e.g email@example.com"
                id={field.name}
                aria-invalid={fieldState.invalid}
                className="mb-1 h-12 bg-slate-50 border-0"
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Password
              </FieldLabel>
              <Input
                {...field}
                type="password"
                placeholder="••••••••••••"
                id={field.name}
                aria-invalid={fieldState.invalid}
                className="mb-1 h-12 bg-slate-50 border-0"
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field>
          <Button
            type="submit"
            className="w-full flex items-center h-12 mt-2 bg-[#23A136] text-white font-semibold hover:bg-[#334800] rounded-md text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Loading ...
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </Field>
      </form>

      <div className="relative flex py-2 items-center">
        <div className="grow border-t border-neutral-300"></div>
        <span className="shrink mx-4 text-xs text-neutral-400">OR</span>
        <div className="grow border-t border-neutral-300"></div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center h-12 bg-white text-neutral-900 font-semibold hover:bg-neutral-50 rounded-md text-base"
      >
        {/* <Globe size={20} /> */}G<span>Sign up with Google</span>
      </Button>

      <p className="text-sm text-neutral-500">
        Alreadt have an account?{" "}
        <Link
          href="/auth/login"
          className="text-neutral-900 underline underline-offset-4 font-medium hover:text-neutral-700"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
