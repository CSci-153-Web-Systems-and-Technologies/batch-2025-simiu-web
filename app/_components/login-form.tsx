"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { useState } from "react";
import { signInWithGoogle, signInWithOTP } from "@/actions/auth";
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
  const [email, setEmail] = useState("");
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

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

  const handleSendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await signInWithOTP(email);
      setMagicLinkSent(true);
      setSuccess("Check your email for the magic link!");
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send magic link"
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
          <CardTitle className="text-4xl font-thin text-center">
            {isSignup ? "Join Simiu" : "Welcome Back!"}
          </CardTitle>
          <CardDescription className="text-center text-lg font-thin text-white">
            {isSignup
              ? "Sign up to start your interview prep journey"
              : "Sign in to continue with your interview prep"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {error && (
            <div className="text-sm text-red-400 bg-red-400/10 p-3 rounded-md">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm text-green-400 bg-green-400/10 p-3 rounded-md">
              {success}
            </div>
          )}

          {!magicLinkSent ? (
            <form
              onSubmit={handleSendMagicLink}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#B83AEF] hover:bg-[#9c2ed1]"
              >
                {isLoading ? "Sending..." : "Send Magic Link"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="text-center text-white/80">
                <p className="mb-2">We&apos;ve sent a magic link to:</p>
                <p className="font-semibold text-white">{email}</p>
                <p className="mt-4 text-sm">
                  Click the link in your email to sign in. The link will expire
                  in 1 hour.
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setMagicLinkSent(false);
                  setEmail("");
                  setSuccess(null);
                }}
                className="text-white/70 hover:text-white"
              >
                Use different email
              </Button>
            </div>
          )}

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-white/50">Or</span>
          </div>

          <Button
            onClick={handleSocialLogin}
            variant="outline"
            disabled={isLoading}
            className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Image src={googleIcon} alt="Google" className="mr-2 h-5 w-5" />
            Continue withGoogle
          </Button>

          <p className="text-center text-lg font-thin text-white">
            {isSignup ? "Already have an account? " : "No account? "}
            <a
              href={isSignup ? "/login" : "/sign-up"}
              className="text-white hover:text-[#B83AEF] underline"
            >
              {isSignup ? "Sign in now!" : "Sign up now!"}
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
