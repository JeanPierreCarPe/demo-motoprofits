"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GoldButton } from "@/components/ui/Button";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => router.push("/account"), 500);
  }

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-5 pb-24 pt-[140px] sm:px-10">
      <Image src="/images/auction-hero-04.webp" alt="" fill priority className="-z-20 object-cover" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-black/80" aria-hidden />

      <div className="flex w-full max-w-md flex-col gap-8 rounded-[20px] border-2 border-gold bg-surface/95 p-6 backdrop-blur-[6px] sm:p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="break-words font-heading text-3xl font-extrabold uppercase text-foreground sm:text-4xl">
            {mode === "login" ? "Welcome Back" : "Create Your Account"}
          </h1>
          <p className="font-body text-sm text-foreground/70 sm:text-base">
            {mode === "login"
              ? "Sign in to bid, track listings, and manage payouts."
              : "One account, buy or sell — verified in minutes."}
          </p>
        </div>

        <div className="flex gap-3 self-center rounded-full border border-gold bg-surface-alt p-1.5">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-full px-6 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider ${
                mode === m ? "bg-gold-gradient text-surface-alt" : "text-foreground"
              }`}
            >
              {m === "login" ? "Log In" : "Sign Up"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {mode === "signup" && (
            <label className="flex flex-col gap-2">
              <span className="font-body text-sm text-foreground/70">Full Name</span>
              <input
                required
                type="text"
                placeholder="Alex Rivera"
                className="h-12 rounded-lg border-2 border-foreground/50 bg-[#131313] px-4 font-body text-foreground placeholder:text-foreground/50 focus:border-gold focus:outline-none"
              />
            </label>
          )}
          <label className="flex flex-col gap-2">
            <span className="font-body text-sm text-foreground/70">Email</span>
            <input
              required
              type="email"
              placeholder="you@email.com"
              className="h-12 rounded-lg border-2 border-foreground/50 bg-[#131313] px-4 font-body text-foreground placeholder:text-foreground/50 focus:border-gold focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-body text-sm text-foreground/70">Password</span>
            <input
              required
              type="password"
              placeholder="••••••••"
              minLength={8}
              className="h-12 rounded-lg border-2 border-foreground/50 bg-[#131313] px-4 font-body text-foreground placeholder:text-foreground/50 focus:border-gold focus:outline-none"
            />
          </label>

          <GoldButton type="submit" className="mt-2 w-full">
            {submitting ? "Please wait…" : mode === "login" ? "Log In" : "Create Account"}
          </GoldButton>
        </form>

        <p className="text-center font-body text-xs text-foreground/50">
          {mode === "login" ? (
            <>
              New to Motoprofits?{" "}
              <button type="button" onClick={() => setMode("signup")} className="font-semibold text-gold">
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button type="button" onClick={() => setMode("login")} className="font-semibold text-gold">
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
