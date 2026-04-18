import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl items-center px-4 py-14 md:px-6">
      <section className="w-full rounded-xl border border-[#EAE0D5] bg-white p-6 shadow-[0_16px_32px_rgba(130,98,81,0.12)] md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#826251]">Account Access</p>
        <h1 className="mt-2 text-4xl font-semibold text-[#3C2A21]">Welcome back</h1>
        <p className="mt-3 text-sm text-[#5C4033]">Sign in to manage your orders, saved products, and seller dashboard.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@brewmarket.au" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Password
            </label>
            <Input id="password" type="password" placeholder="********" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <Button type="submit" className="h-11 w-full">Sign In</Button>
        </form>

        <p className="mt-5 text-sm text-[#5C4033]">
          New to BrewMarket?{" "}
          <Link href="/sign-up" className="font-semibold text-[#3C2A21] underline underline-offset-4">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}
