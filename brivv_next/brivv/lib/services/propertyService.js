import { supabase } from "../supabase";

export async function uploadProperty(title, description, location, features) {
  const { data, error } = await supabase
    .from("properties")
    .insert([
      {
        title,
        description,
        location,
        features,
      },
    ])
    .select();

  if (error) {
    throw error;
  }

  return data;
}
