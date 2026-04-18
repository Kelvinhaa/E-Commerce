import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
            <section className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#826251]">Our Story</p>
                    <h1 className="mt-3 text-4xl font-semibold text-[#3C2A21] md:text-5xl">About BrewMarket</h1>
                    <p className="mt-6 text-base leading-8 text-[#5C4033]">
                        BrewMarket was built to make specialty coffee sourcing easier for both cafe operators and
                        home brewers. We partner with independent Australian roasters and quality equipment makers
                        to bring transparent, high-standard products into one trusted marketplace.
                    </p>
                    <p className="mt-4 text-base leading-8 text-[#5C4033]">
                        Every listing is curated for freshness, traceability, and brew performance. We focus on
                        meaningful details: roast profile, origin notes, best-use brewing style, and practical
                        fulfillment windows that work for small businesses.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button asChild>
                            <Link href="/products">Explore Products</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-[#EAE0D5] bg-white">
                            <Link href="/sell">Sell on BrewMarket</Link>
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#EAE0D5] bg-white p-2 shadow-[0_16px_40px_rgba(130,98,81,0.14)]">
                    <Image
                        src="/coffee_chat.webp"
                        alt="Coffee tasting and planning session"
                        width={800}
                        height={1000}
                        className="h-full w-full rounded-lg object-cover"
                        priority
                    />
                </div>
            </section>

            <section className="mt-14 grid gap-4 md:grid-cols-3">
                <article className="rounded-lg border border-[#EAE0D5] bg-white p-5">
                    <h2 className="text-2xl font-semibold text-[#3C2A21]">Curated Quality</h2>
                    <p className="mt-2 text-sm leading-7 text-[#5C4033]">
                        We focus on standout beans and tools with proven cup consistency and practical quality control.
                    </p>
                </article>
                <article className="rounded-lg border border-[#EAE0D5] bg-white p-5">
                    <h2 className="text-2xl font-semibold text-[#3C2A21]">Transparent Sourcing</h2>
                    <p className="mt-2 text-sm leading-7 text-[#5C4033]">
                        Origin notes, roast levels, and prep recommendations are standardized for better buying decisions.
                    </p>
                </article>
                <article className="rounded-lg border border-[#EAE0D5] bg-white p-5">
                    <h2 className="text-2xl font-semibold text-[#3C2A21]">Built for Scale</h2>
                    <p className="mt-2 text-sm leading-7 text-[#5C4033]">
                        From solo baristas to multi-location cafes, BrewMarket supports flexible ordering and growth.
                    </p>
                </article>
            </section>
        </main>
    );
}