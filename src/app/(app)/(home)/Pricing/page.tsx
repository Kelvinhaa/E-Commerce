import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Starter Roaster",
    price: "$29",
    period: "/month",
    description: "Great for new sellers testing demand and building profile trust.",
    features: [
      "Up to 20 active listings",
      "Basic analytics dashboard",
      "Seller profile + story page",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth Roaster",
    price: "$79",
    period: "/month",
    description: "Best for established roasters scaling wholesale and direct orders.",
    features: [
      "Unlimited listings",
      "Priority placement opportunities",
      "Advanced inventory insights",
      "Promotional campaign support",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise Partner",
    price: "Custom",
    period: "",
    description: "For multi-brand portfolios and large cafe group procurement workflows.",
    features: [
      "Multi-storefront support",
      "Custom reporting exports",
      "Dedicated account manager",
      "Custom SLA + onboarding",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#826251]">Pricing</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#3C2A21] md:text-5xl">Plans for every stage of coffee growth</h1>
        <p className="mt-5 text-base leading-8 text-[#5C4033]">
          BrewMarket pricing is designed for clarity. Start lean, scale with better visibility, and
          unlock operational support as order volume increases.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-xl border p-6 ${
              plan.featured
                ? 'border-[#caa992] bg-white shadow-[0_18px_40px_rgba(130,98,81,0.16)]'
                : 'border-[#EAE0D5] bg-white shadow-[0_10px_24px_rgba(130,98,81,0.08)]'
            }`}
          >
            <h2 className="text-2xl font-semibold text-[#3C2A21]">{plan.name}</h2>
            <p className="mt-2 text-sm leading-7 text-[#5C4033]">{plan.description}</p>

            <div className="mt-5 flex items-end gap-1">
              <span className="font-display text-4xl font-bold text-[#3C2A21]">{plan.price}</span>
              <span className="pb-1 text-sm text-[#7a5d4d]">{plan.period}</span>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-[#5C4033]">
              {plan.features.map((feature) => (
                <li key={feature} className="rounded-md bg-[#f8efe7] px-3 py-2">
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={`mt-6 h-11 w-full ${plan.featured ? '' : 'bg-[#6f5243] hover:bg-[#5d4438]'}`}
            >
              <Link href="/Contact">Choose {plan.name}</Link>
            </Button>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-[#EAE0D5] bg-white p-6 text-center">
        <h2 className="text-2xl font-semibold text-[#3C2A21]">Need a custom commercial plan?</h2>
        <p className="mt-3 text-sm leading-7 text-[#5C4033]">
          If you manage multiple cafes or large procurement cycles, we can tailor terms, fulfillment,
          and onboarding support to your operation.
        </p>
        <Button asChild variant="outline" className="mt-5 border-[#EAE0D5] bg-white">
          <Link href="/Contact">Talk to Sales</Link>
        </Button>
      </section>
    </main>
  );
}