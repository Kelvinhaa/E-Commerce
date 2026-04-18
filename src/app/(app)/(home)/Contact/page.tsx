import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <section className="grid gap-8 md:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#826251]">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#3C2A21] md:text-5xl">Let us help you brew better.</h1>
          <p className="mt-5 text-base leading-8 text-[#5C4033]">
            Reach out for wholesale onboarding, product support, or partnership opportunities. The
            BrewMarket team replies within one business day.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#5C4033]">
            <div className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <p className="font-semibold text-[#3C2A21]">Sales & Wholesale</p>
              <p className="mt-1">sales@brewmarket.au</p>
            </div>
            <div className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <p className="font-semibold text-[#3C2A21]">Customer Support</p>
              <p className="mt-1">support@brewmarket.au</p>
            </div>
            <div className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <p className="font-semibold text-[#3C2A21]">Phone</p>
              <p className="mt-1">+61 2 9000 1542 (Mon-Fri, 9AM-5PM AEST)</p>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded-xl border border-[#EAE0D5] bg-white p-6 shadow-[0_14px_30px_rgba(130,98,81,0.12)]">
          <div className="grid gap-4 sm:grid-cols-2">
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
              <Input id="lastName" placeholder="Nguyen" className="h-11 border-[#EAE0D5] bg-white" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@company.com" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="topic" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Topic
            </label>
            <Input id="topic" placeholder="Wholesale inquiry" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Message
            </label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Tell us about your cafe, expected volume, or support issue."
              className="border-[#EAE0D5] bg-white"
            />
          </div>

          <Button type="submit" className="h-11 w-full">Send Message</Button>
        </form>
      </section>
    </main>
  );
}