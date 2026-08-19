"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantIdx, setVariantIdx] = useState(0);
  const variant = product.variants[variantIdx];

  const whatsappLink = buildWhatsAppLink(
    `Hi Heavenly Fruits! I'd like to enquire about ${product.name} (${variant.label}). Could you share the price and availability?`
  );

  return (
    <div className="card group flex flex-col overflow-hidden transition hover:shadow-soft">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square w-full overflow-hidden bg-cream-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {product.seasonal && (
          <span className="absolute left-2 top-2 rounded-full bg-forest/90 px-2.5 py-1 text-[10px] font-semibold text-cream">
            Seasonal
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-base font-semibold text-forest line-clamp-1">{product.name}</h3>
        </Link>
        <p className="mt-1 text-xs text-charcoal/60 line-clamp-2">{product.shortDescription}</p>

        {product.variants.length > 1 ? (
          <select
            value={variantIdx}
            onChange={(e) => setVariantIdx(Number(e.target.value))}
            className="mt-3 w-full rounded-lg border border-forest/20 bg-white px-2 py-1.5 text-xs font-medium text-charcoal"
          >
            {product.variants.map((v, idx) => (
              <option key={v.label} value={idx}>
                {v.label}
              </option>
            ))}
          </select>
        ) : (
          <p className="mt-3 text-xs font-medium text-charcoal/70">{variant.label}</p>
        )}

        <p className="mt-3 text-sm font-semibold text-honey-dark">Contact for Price</p>

        <div className="mt-3 flex gap-2">
          <Link href={`/products/${product.slug}`} className="btn-outline flex-1 !px-3 !py-2 text-xs">
            View
          </Link>
          <button
            onClick={() =>
              addItem({
                slug: product.slug,
                name: product.name,
                image: product.image,
                variantLabel: variant.label,
              })
            }
            className="btn-primary !px-3 !py-2 text-xs"
            aria-label={`Add ${product.name} to order request`}
          >
            Add
          </button>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-1.5 text-xs font-medium text-[#128C4A] hover:underline"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}
