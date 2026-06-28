"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  RegisterSchema,
  signInWithEmailPassword,
  signUpWithEmailPassword,
} from "@/lib/services/authService";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
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
      const res = await signInWithEmailPassword(data);
      console.log(res);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 h-full">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Welcome back!
        </h1>
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
              <FieldLabel htmlFor={field.name}>Email address</FieldLabel>
              <Input
                {...field}
                type="email"
                placeholder="e.g email@example.com"
                id={field.name}
                aria-invalid={fieldState.invalid}
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
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                type="password"
                placeholder="••••••••••••"
                id={field.name}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field>
          <Button
            type="submit"
            className="w-full flex items-center h-12 mt-2 bg-[#446000] text-white hover:bg-[#334800] rounded-md font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Loading ...
              </>
            ) : (
              "Login"
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
        className="w-full h-12 bg-[#111318] text-white hover:bg-[#1f2229] rounded-md font-medium flex items-center justify-center gap-2"
      >
        <FcGoogle size={24} />
        <span>Sign in with Google</span>
      </Button>

      <p className="text-sm text-neutral-500">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="text-neutral-900 underline underline-offset-4 font-medium hover:text-neutral-700"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
