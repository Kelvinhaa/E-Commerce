import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SellPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <section className="grid gap-8 md:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#826251]">Sell On BrewMarket</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#3C2A21] md:text-5xl">Bring your roastery to a serious coffee audience</h1>
          <p className="mt-5 text-base leading-8 text-[#5C4033]">
            Join a curated marketplace where product quality and storytelling matter. We help you
            publish products faster, reach cafe buyers, and grow recurring orders.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#5C4033]">
            <div className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <p className="font-semibold text-[#3C2A21]">Fast onboarding</p>
              <p className="mt-1">Go live with listings, origins, and roast profiles in under one week.</p>
            </div>
            <div className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <p className="font-semibold text-[#3C2A21]">Marketplace visibility</p>
              <p className="mt-1">Appear in curated collections and category campaigns.</p>
            </div>
            <div className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <p className="font-semibold text-[#3C2A21]">Operational support</p>
              <p className="mt-1">Track inventory and demand from one seller dashboard.</p>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded-xl border border-[#EAE0D5] bg-white p-6 shadow-[0_14px_30px_rgba(130,98,81,0.12)]">
          <div>
            <label htmlFor="businessName" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Business Name
            </label>
            <Input id="businessName" placeholder="Moonlight Roasters" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="website" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Website
            </label>
            <Input id="website" type="url" placeholder="https://" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="contactEmail" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              Contact Email
            </label>
            <Input id="contactEmail" type="email" placeholder="team@roastery.com" className="h-11 border-[#EAE0D5] bg-white" />
          </div>

          <div>
            <label htmlFor="notes" className="mb-1 block text-sm font-medium text-[#3C2A21]">
              What do you sell?
            </label>
            <Textarea
              id="notes"
              rows={5}
              placeholder="Tell us about your beans, roast profiles, and monthly volume."
              className="border-[#EAE0D5] bg-white"
            />
          </div>

          <label className="flex items-start gap-3 rounded-lg border border-[#EAE0D5] bg-[#f8efe7] p-3 text-sm text-[#5C4033]">
            <Checkbox className="mt-1" />
            <span>I agree to the seller onboarding and quality standards policy.</span>
          </label>

          <Button type="submit" className="h-11 w-full">Submit Application</Button>
        </form>
      </section>
    </main>
  );
}
