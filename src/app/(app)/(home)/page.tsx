"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, type Variants } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const categories = [
  {
    title: "Coffee Beans",
    description: "Single-origin micro-lots and seasonal blends from trusted roasters.",
    cta: "Explore Beans",
    href: "/products",
    tone: "from-[#e9d9c9] via-[#f6ede4] to-[#fdf8f2]",
  },
  {
    title: "Equipment",
    description: "Precision grinders, espresso tools, and cafe-ready brew systems.",
    cta: "Browse Equipment",
    href: "/products",
    tone: "from-[#efe3d6] via-[#f8f1e9] to-[#fffaf5]",
  },
  {
    title: "Accessories",
    description: "Filters, drippers, and premium serviceware for every workflow.",
    cta: "View Accessories",
    href: "/products",
    tone: "from-[#eadbcf] via-[#f7eee5] to-[#fff8f0]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-[#5C4033]">
      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-16 md:px-6 md:pt-24">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#826251]"
          >
            Specialty Coffee Marketplace
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-6xl font-bold text-[#3C2A21] sm:text-7xl md:text-8xl"
          >
            BrewMarket
          </motion.h1>

          <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C4033]">
            Source exceptional beans, barista equipment, and curated accessories from top Australian
            roasters in one refined buying experience.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="h-12 rounded-full px-6">
              <Link href="/products">Shop Coffee</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-[#EAE0D5] bg-white px-6">
              <Link href="/sell">Start Selling</Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mx-auto mt-10 w-full max-w-2xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#826251]" />
              <Input
                type="search"
                placeholder="Search for beans..."
                className="h-14 rounded-full border-[#EAE0D5] bg-white pl-12 pr-5 text-base shadow-[0_10px_28px_rgba(130,98,81,0.12)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={heroContainer}>
          <motion.h2 variants={fadeInUp} className="mb-10 text-center text-3xl font-semibold text-[#3C2A21] md:text-4xl">
            Shop by Category
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <motion.article
                key={category.title}
                variants={fadeInUp}
                className="group rounded-[4px] border border-[#EAE0D5] bg-white/90 p-4 shadow-[0_8px_24px_rgba(130,98,81,0.08)] transition duration-300 hover:scale-105 hover:shadow-[0_22px_36px_rgba(130,98,81,0.2)]"
              >
                <div className={`mb-4 aspect-[16/10] rounded-[4px] border border-[#EAE0D5] bg-gradient-to-br ${category.tone} p-4`}>
                  <div className="flex h-full items-end rounded-[4px] border border-dashed border-[#d6c4b5] bg-white/25 p-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f5243]">
                      High-Quality Image Placeholder
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[#3C2A21]">{category.title}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-[#5C4033]">{category.description}</p>

                <Button asChild variant="outline" className="mt-4 h-11 rounded-full border-[#EAE0D5] bg-white">
                  <Link href={category.href}>{category.cta}</Link>
                </Button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
