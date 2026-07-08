import { createClient } from "@/lib/supabase/client";

// Lazy client resolution (memoized in createClient) so importing this module
// during build/prerender doesn't require Supabase env vars to be present.
const supabase = () => createClient();

export type PropertyFormData = {
  title?: string;
  description?: string;
  property_type?: string;
  listing_type?: string;
  price?: number;
  currency?: string;
  bedrooms?: number;
  bathrooms?: number;
  size_sqm?: number;
};

export type PropertyLocationData = {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

export type PropertyImageRow = {
  property_id: string;
  image_url: string;
  is_cover: boolean;
  position: number;
};

/**
 * Create a new property row and return the inserted record.
 */
export async function createProperty(
  propertyData: PropertyFormData & { owner_id: string },
) {
  return supabase().from("properties").insert([propertyData]).select();
}

/**
 * Upload a single property image to the storage bucket and return the public URL.
 */
export async function uploadPropertyImage(file: File, propertyId: string) {
  const fileExtension = file.name.split(".").pop() || "png";
  const fileName = `${propertyId}/${crypto.randomUUID()}.${fileExtension}`;

  const { data, error } = await supabase()
    .storage.from("PROPERTIES")
    .upload(fileName, file);

  if (error) {
    throw error;
  }

  const { data: publicUrl } = supabase()
    .storage.from("PROPERTIES")
    .getPublicUrl(data.path);

  return publicUrl.publicUrl;
}

/**
 * Insert uploaded image rows for a property.
 */
export async function insertPropertyImages(rows: PropertyImageRow[]) {
  return supabase().from("property_images").insert(rows);
}

/**
 * Add or update the location row for a property.
 */
export async function addPropertyLocation(
  propertyId: string,
  locationData: PropertyLocationData,
) {
  return supabase().from("property_locations").insert({
    ...locationData,
    property_id: propertyId,
  });
}

/**
 * Update an existing property row by property ID.
 */
export async function updateProperty(
  propertyId: string,
  updates: Partial<PropertyFormData>,
) {
  return supabase()
    .from("properties")
    .update(updates)
    .eq("id", propertyId)
    .select();
}

/**
 * Delete a property row by property ID.
 */
export async function deleteProperty(propertyId: string) {
  return supabase().from("properties").delete().eq("id", propertyId);
}
