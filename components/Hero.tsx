import Image from "next/image";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest">
      <Image
        src="/images/hero-kodaikanal.jpg"
        alt="Misty green mountains of Kodaikanal"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest/60 to-forest" />

      <div className="container-px relative mx-auto flex max-w-7xl flex-col items-center py-20 text-center sm:py-28 lg:py-36">
        <span className="rounded-full border border-honey/40 bg-honey/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-honey-light">
          {siteConfig.location}
        </span>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-extrabold leading-tight text-cream sm:text-5xl lg:text-6xl">
          Freshness From The Hills of Kodaikanal
        </h1>

        <p className="mt-5 max-w-xl text-sm font-medium text-honey-light sm:text-base">
          Fresh Fruits • Mountain Honey • Homemade Chocolates • Farm Fresh Vegetables
        </p>

        <p className="mt-4 max-w-xl text-sm text-cream/80 sm:text-base">
          Handpicked goodness from the beautiful hills of Kodaikanal, delivered with care to your doorstep.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#shop" className="btn-secondary">
            <ShoppingBag className="h-4 w-4" /> Shop Now
          </a>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest">
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
