import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export type ProfileData = {
  id: string;
  full_name: string;
  phone: string;
  avatar_url: string;
  gender: string;
  state: string;
  LocalGovernment: string;
  country: string;
  address: string;
};

export function isProfileComplete(profile: ProfileData | null | undefined) {
  if (!profile) return false;

  return Boolean(
    profile.full_name?.trim() &&
      profile.phone?.trim() &&
      profile.gender?.trim() &&
      profile.state?.trim() &&
      profile.LocalGovernment?.trim() &&
      profile.country?.trim() &&
      profile.address?.trim(),
  );
}

/**
 * Upload a single file to the Supabase storage bucket and return its public URL.
 * The filename is randomized to avoid collisions and preserve the upload extension.
 */
export async function uploadAvatar(file: File) {
  const fileExtension = file.name.split(".").pop() || "png";
  const fileName = `${crypto.randomUUID()}.${fileExtension}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(fileName, file);

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(fileName);

  return publicUrl;
}

/**
 * Create or update the profile row for the currently authenticated user.
 */
export async function upsertUserProfile(profile: ProfileData) {
  const { data, error } = await supabase
    .from("profiles")
    .upsert([profile])
    .select();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Fetch the profile row for the currently authenticated user.
 */
export async function getUserProfile(userId: string) {
  return supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
}

/**
 * Build the final profile object from form data and authenticated user ID.
 */
export function buildProfilePayload(
  userId: string,
  formData: FormData,
  avatarUrl: string,
): ProfileData {
  return {
    id: userId,
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    avatar_url: avatarUrl,
    gender: formData.get("gender") as string,
    state: formData.get("state") as string,
    LocalGovernment: formData.get("LocalGovernment") as string,
    country: formData.get("country") as string,
    address: formData.get("address") as string,
  };
}
