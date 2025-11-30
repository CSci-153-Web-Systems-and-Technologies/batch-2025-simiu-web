"use server";

import { createClient } from "@/lib/supabase/server";

export async function signInWithGoogle(redirectTo: string) {
  const supabase = await createClient();
  const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback?next=${redirectTo}`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUrl,
    },
  });
  if (error) {
    throw error;
  }

  return data;
}
