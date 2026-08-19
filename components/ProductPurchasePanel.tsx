"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingBag, MessageCircle, CheckCircle2 } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const router = useRouter();
  const [variantIdx, setVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const variant = product.variants[variantIdx];

  const handleAddToOrder = () => {
    addItem(
      {
        slug: product.slug,
        name: product.name,
        image: product.image,
        variantLabel: variant.label,
      },
      quantity
    );
    openCart();
  };

  const handleRequestOrder = () => {
    addItem(
      {
        slug: product.slug,
        name: product.name,
        image: product.image,
        variantLabel: variant.label,
      },
      quantity
    );
    router.push("/checkout");
  };

  const whatsappLink = buildWhatsAppLink(
    `Hi Heavenly Fruits! I'd like to order ${product.name} (${variant.label}) x${quantity}. Could you share the price and confirm availability?`
  );

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-leaf">
        {product.category.replace(/-/g, " ")}
      </p>
      <h1 className="mt-1 font-serif text-3xl font-bold text-forest sm:text-4xl">{product.name}</h1>

      {product.seasonal && (
        <p className="mt-2 inline-block rounded-full bg-honey/20 px-3 py-1 text-xs font-semibold text-honey-dark">
          Availability may vary by season
        </p>
      )}

      <p className="mt-4 text-sm text-charcoal/70 sm:text-base">{product.shortDescription}</p>

      <p className="mt-5 font-serif text-xl font-bold text-honey-dark">Contact for Price</p>

      {/* Variant selector */}
      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-forest">Weight / Size</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v, idx) => (
            <button
              key={v.label}
              onClick={() => setVariantIdx(idx)}
              className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition ${
                idx === variantIdx
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/20 text-charcoal/70 hover:border-forest/50"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity selector */}
      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-forest">Quantity</p>
        <div className="inline-flex items-center gap-4 rounded-full border-2 border-forest/20 px-4 py-2">
          <button aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            <Minus className="h-4 w-4 text-forest" />
          </button>
          <span className="w-6 text-center text-sm font-bold">{quantity}</span>
          <button aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 1)}>
            <Plus className="h-4 w-4 text-forest" />
          </button>
        </div>
      </div>

      {/* Availability */}
      <p className="mt-5 flex items-center gap-2 text-sm font-medium text-leaf">
        <CheckCircle2 className="h-4 w-4" />
        {product.available ? "In stock — ready to pack" : "Currently unavailable"}
      </p>

      {/* Action buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button onClick={handleAddToOrder} className="btn-outline flex-1" disabled={!product.available}>
          <ShoppingBag className="h-4 w-4" /> Add to Order
        </button>
        <button onClick={handleRequestOrder} className="btn-primary flex-1" disabled={!product.available}>
          Request Order
        </button>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-6 py-3 text-sm font-semibold text-[#128C4A] transition hover:bg-[#25D366]/10"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Order
      </a>

      {/* Why choose */}
      <div className="mt-8 grid grid-cols-2 gap-2">
        {product.whyChoose.map((point) => (
          <p key={point} className="flex items-center gap-1.5 text-xs font-medium text-charcoal/70 sm:text-sm">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-leaf" /> {point}
          </p>
        ))}
      </div>

      {/* Full description */}
      <div className="mt-8 border-t border-forest/10 pt-6">
        <h2 className="font-serif text-lg font-bold text-forest">Product Details</h2>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{product.fullDescription}</p>
      </div>
    </div>
  );
}
