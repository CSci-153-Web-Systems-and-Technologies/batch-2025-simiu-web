"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { useState } from "react";
import { signInWithGoogle } from "@/actions/auth";
import googleIcon from "@/public/icons8-google-30.png";

type AuthFormProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: "signin" | "signup";
};

export function LoginForm({
  className,
  variant = "signin",
  ...props
}: AuthFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { url } = await signInWithGoogle("/dashboard");
      if (url) {
        window.location.href = url;
      } else {
        setError("Failed to get authentication URL");
        setIsLoading(false);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during login"
      );
      setIsLoading(false);
    }
  };

  const isSignup = variant === "signup";

  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-max-width-sm", className)}
      {...props}
    >
      <Card className="bg-white/5 backdrop-blur-md border-none px-4 py-16">
        <CardHeader className="gap-6 mb-2">
          <CardTitle className="text-4xl font-thin text-center ">
            {isSignup ? "Join Simiu" : "Welcome Back!"}
          </CardTitle>
          <CardDescription className="text-center text-lg font-thin text-white">
            {isSignup
              ? "Sign up to start your interview prep journey"
              : "Sign in to continue with your interview prep"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-lg">
                Email Address
              </label>
              <input
                className="px-2 py-3 bg-white/10 border border-white/20 rounded-xl"
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <Button
              type="submit"
              className="w-full text-2xl flex gap-2.5 p-8 font-normal bg-linear-to-br from-[#8310B5] to-[#B83AEF] hover:bg-white/50 rounded-xl mb-6 mt-4"
            >
              <p className="text-white">
                {isSignup ? "Sign up with Email" : "Sign in with Email"}
              </p>
            </Button>
          </form>
          <p className="text-center text-2xl mb-8">or</p>
          <form onSubmit={handleSocialLogin}>
            <div className="flex flex-col gap-6">
              {error && <p className="text-sm text-destructive-500">{error}</p>}
              <Button
                type="submit"
                className="w-full text-2xl flex gap-2.5 p-8 font-normal border-2 bg-white/20 border-white/40 hover:bg-white/50 rounded-xl"
                disabled={isLoading}
              >
                <Image src={googleIcon} alt="Google icon" />
                <p className="text-white">
                  {isLoading
                    ? isSignup
                      ? "Creating account..."
                      : "Logging in..."
                    : isSignup
                    ? "Sign up with Google"
                    : "Sign in with Google"}
                </p>
              </Button>
            </div>
          </form>
          <p className="text-center text-md mt-4 font-thin text-white">
            {isSignup ? "Already have an account? " : "No account? "}
            <a
              href={isSignup ? "/login" : "/signup"}
              className="text-white underline"
            >
              {isSignup ? "Sign in now!" : "Sign up now!"}
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
