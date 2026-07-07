"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { getCurrentUser } from "@/lib/services/authService";
import { upsertUserProfile } from "@/lib/services/profileService";
import { useAuth } from "@/lib/store/auth";
import { Loader2, UserRound } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const profileSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  phone: z.string().min(7, "Phone number is required"),
  gender: z.string().min(1, "Gender is required"),
  state: z.string().min(2, "State is required"),
  LocalGovernment: z.string().min(2, "Local government is required"),
  country: z.string().min(2, "Country is required"),
  address: z.string().min(5, "Address is required"),
});

export default function ProfileSetupPage() {
  const router = useRouter();
  const loginWithProfile = useAuth((state) => state.loginWithProfile);
  const [userId, setUserId] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      gender: "",
      state: "",
      LocalGovernment: "",
      country: "",
      address: "",
    },
  });

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await getCurrentUser();
      if (error || !data?.user) {
        router.replace("/auth/login");
        return;
      }
      setUserId(data.user.id);
      setAuthUser(data.user);
      setIsLoadingUser(false);
    };

    loadUser();
  }, [router]);

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    if (!userId || !authUser) {
      toast.error("Your session is not ready yet. Please sign in again.");
      return;
    }

    try {
      const profilePayload = {
        id: userId,
        full_name: values.full_name,
        phone: values.phone,
        avatar_url: "",
        gender: values.gender,
        state: values.state,
        LocalGovernment: values.LocalGovernment,
        country: values.country,
        address: values.address,
      };
      const savedProfiles = await upsertUserProfile(profilePayload);
      loginWithProfile(authUser, savedProfiles?.[0] ?? profilePayload);

      toast.success("Profile completed successfully.");
      router.replace("/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to save your profile.";
      toast.error(message);
    }
  };

  if (isLoadingUser) {
    return (
      <div className="flex min-h-80 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-[#23A136]" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-6 h-full">
      <div className="space-y-2 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#23A136]/10 text-[#23A136]">
          <UserRound className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-neutral-900">
          Complete your profile
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Tell us a bit more about yourself so we can personalize your
          experience.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded-2xl  bg-white p-5"
      >
        <Controller
          control={control}
          name="full_name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Full name
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="Ada Lovelace"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Phone number
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="08012345678"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="gender"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Gender
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="Male"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="state"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                State
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="Lagos"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="LocalGovernment"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Local Government
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="Ikeja"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="country"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Country
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="Nigeria"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="font-semibold">
                Address
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ""}
                placeholder="12, Example Street"
                id={field.name}
                className="mb-1 h-12 bg-slate-50 border-0"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          type="submit"
          className="w-full flex items-center justify-center h-12 mt-2 bg-[#23A136] text-white font-semibold hover:bg-[#334800] rounded-md text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Continue"
          )}
        </Button>

        <p className="text-center text-sm text-neutral-500">
          Changed your mind?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-neutral-900 underline underline-offset-4"
          >
            Return to sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
