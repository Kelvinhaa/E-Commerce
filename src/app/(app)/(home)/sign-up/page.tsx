import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-2xl items-center px-4 py-14 md:px-6">
      <section className="w-full rounded-xl border border-[#EAE0D5] bg-white p-6 shadow-[0_16px_32px_rgba(130,98,81,0.12)] md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#826251]">Create Account</p>
        <h1 className="mt-2 text-4xl font-semibold text-[#3C2A21]">Join BrewMarket</h1>
        <p className="mt-3 text-sm text-[#5C4033]">Build your account to save products, track orders, and unlock personalized recommendations.</p>

        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              First Name
            </label>
            <Input id="firstName" placeholder="Alex" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Last Name
            </label>
            <Input id="lastName" placeholder="Tran" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@brewmarket.au" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Password
            </label>
            <Input id="password" type="password" placeholder="Create a secure password" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" className="h-11 w-full">Create Account</Button>
          </div>
        </form>

        <p className="mt-5 text-sm text-[#5C4033]">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-[#3C2A21] underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}
