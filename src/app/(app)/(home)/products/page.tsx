import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const filters = ["Beans", "Roast", "Country", "Brewing", "Price"];

const products = [
  {
    name: "Ethiopia Yirgacheffe",
    roaster: "Moonlight Roasters",
    note: "Floral, citrus, tea-like body",
    category: "Single Origin",
    roastLevel: "Light Roast",
    price: "$22",
    tone: "from-stone-100 via-amber-50 to-zinc-100",
  },
  {
    name: "House Espresso Blend",
    roaster: "Urban Brew Co.",
    note: "Chocolate, caramel, velvety crema",
    category: "Espresso",
    roastLevel: "Medium Roast",
    price: "$19",
    tone: "from-zinc-100 via-stone-100 to-amber-50",
  },
  {
    name: "Colombia Huila",
    roaster: "Peak Coffee Lab",
    note: "Brown sugar, red apple, cocoa",
    category: "Single Origin",
    roastLevel: "Medium Roast",
    price: "$21",
    tone: "from-stone-100 via-amber-50 to-neutral-100",
  },
  {
    name: "Decaf Night Bloom",
    roaster: "North Bean Studio",
    note: "Toffee, almond, smooth finish",
    category: "Decaf",
    roastLevel: "Medium Roast",
    price: "$20",
    tone: "from-stone-100 via-zinc-100 to-amber-50",
  },
  {
    name: "Guatemala Huehuetenango",
    roaster: "Craft Cartel",
    note: "Cherry, milk chocolate, clean cup",
    category: "Single Origin",
    roastLevel: "Light Roast",
    price: "$23",
    tone: "from-amber-50 via-stone-100 to-zinc-100",
  },
  {
    name: "Cold Brew Builder",
    roaster: "Dockside Beans",
    note: "Dark chocolate, low acidity, bold",
    category: "Cold Brew",
    roastLevel: "Dark Roast",
    price: "$18",
    tone: "from-stone-100 via-amber-50 to-neutral-100",
  },
  {
    name: "Kenya AA Nyeri",
    roaster: "Altitude Supply",
    note: "Blackcurrant, grapefruit, bright",
    category: "Single Origin",
    roastLevel: "Light Roast",
    price: "$24",
    tone: "from-zinc-100 via-stone-100 to-amber-50",
  },
  {
    name: "Cafe Starter Set",
    roaster: "BrewMarket Essentials",
    note: "Beans + dripper + filters bundle",
    category: "Bundle",
    roastLevel: "Mixed",
    price: "$45",
    tone: "from-stone-100 via-amber-50 to-zinc-100",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50/35 to-stone-100/70">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-8 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">
                BrewMarket selection
              </p>
              <h1 className="mt-2 text-3xl font-bold text-amber-900 md:text-4xl">
                Coffee Listings
              </h1>
            </div>

            <div className="w-full max-w-lg">
              <Input
                type="search"
                placeholder="Search beans, roast profile, origin..."
                className="h-11 border-amber-200 bg-white"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="rounded-full border-amber-200 bg-white text-amber-900 hover:bg-amber-50"
              >
                {filter}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-auto rounded-full border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100"
            >
              Sort: Best Sellers
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className={`h-44 bg-gradient-to-br ${product.tone} p-4`}
                aria-hidden="true"
              >
                <div className="inline-flex rounded-full border border-amber-500/30 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
                  {product.category}
                </div>
              </div>

              <div className="space-y-2 p-4">
                <h2 className="text-lg font-semibold text-zinc-900">{product.name}</h2>
                <p className="text-sm text-zinc-600">{product.roaster}</p>
                <p className="text-sm text-zinc-500">{product.note}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
                  {product.roastLevel}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-amber-100 px-4 py-3">
                <span className="text-lg font-bold text-amber-900">{product.price}</span>
                <Button
                  size="sm"
                  className="bg-zinc-900 text-white hover:bg-zinc-800 group-hover:translate-x-0.5"
                >
                  Add to Cart
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="border-amber-300 bg-white hover:bg-amber-100">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
