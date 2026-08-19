"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm" onClick={closeCart} aria-hidden="true" />
      )}

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Order request list"
      >
        <div className="flex items-center justify-between border-b border-forest/10 px-5 py-4">
          <h2 className="font-serif text-lg font-bold text-forest">Your Order Request</h2>
          <button onClick={closeCart} aria-label="Close" className="rounded-full p-2 hover:bg-forest/10">
            <X className="h-5 w-5 text-forest" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-charcoal/60">No products added yet.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={`${item.slug}-${item.variantLabel}`} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-cream-dark">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-forest line-clamp-1">{item.name}</p>
                    <p className="text-xs text-charcoal/60">{item.variantLabel}</p>
                    <div className="mt-2 flex items-center gap-2 rounded-full border border-forest/20 px-2 py-1 w-fit">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.slug, item.variantLabel, item.quantity - 1)}
                      >
                        <Minus className="h-3.5 w-3.5 text-forest" />
                      </button>
                      <span className="w-4 text-center text-xs font-semibold">{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.slug, item.variantLabel, item.quantity + 1)}
                      >
                        <Plus className="h-3.5 w-3.5 text-forest" />
                      </button>
                    </div>
                  </div>
                  <button
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeItem(item.slug, item.variantLabel)}
                    className="self-start text-charcoal/40 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-forest/10 px-5 py-4">
            <p className="mb-3 text-center text-xs text-charcoal/50">
              We&apos;ll confirm pricing and availability once you submit your request.
            </p>
            <Link href="/checkout" onClick={closeCart} className="btn-primary w-full">
              Continue to Order Request
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
