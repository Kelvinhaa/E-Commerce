import { Button } from "@/components/ui/button";
import Link from "next/link";

const cartItems = [
  {
    name: "Ethiopia Yirgacheffe",
    note: "Light roast, 250g",
    qty: 1,
    price: "$22",
  },
  {
    name: "Cafe Starter Set",
    note: "Beans + dripper + filters",
    qty: 1,
    price: "$45",
  },
];

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h1 className="text-4xl font-semibold text-[#3C2A21] md:text-5xl">Your Cart</h1>
      <p className="mt-3 text-sm text-[#5C4033]">Review your selection before checkout.</p>

      <section className="mt-8 grid gap-6 md:grid-cols-[1.45fr_1fr]">
        <div className="space-y-3">
          {cartItems.map((item) => (
            <article key={item.name} className="rounded-lg border border-[#EAE0D5] bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-[#3C2A21]">{item.name}</h2>
                  <p className="mt-1 text-sm text-[#5C4033]">{item.note}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#826251]">Qty {item.qty}</p>
                </div>
                <p className="text-lg font-semibold text-[#3C2A21]">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-lg border border-[#EAE0D5] bg-white p-5 shadow-[0_12px_24px_rgba(130,98,81,0.1)]">
          <h2 className="text-2xl font-semibold text-[#3C2A21]">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm text-[#5C4033]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$67</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$8</span>
            </div>
            <div className="flex items-center justify-between border-t border-[#EAE0D5] pt-2 text-base font-semibold text-[#3C2A21]">
              <span>Total</span>
              <span>$75</span>
            </div>
          </div>

          <Button asChild className="mt-5 h-11 w-full">
            <Link href="/sign-in">Proceed to Checkout</Link>
          </Button>
          <Button asChild variant="outline" className="mt-2 h-11 w-full border-[#EAE0D5] bg-white">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </aside>
      </section>
    </main>
  );
}
