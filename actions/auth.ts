"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

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

export async function signInWithOTP(email: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback?next=/dashboard`,
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function verifyOTP(email: string, token: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
