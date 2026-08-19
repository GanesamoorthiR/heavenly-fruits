import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-forest/10 bg-forest text-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Heavenly Fruits logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="font-serif text-lg font-bold">Heavenly Fruits</span>
          </div>
          <p className="mt-3 text-sm text-cream/70">{siteConfig.tagline}.</p>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-honey-light">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <a href={`/#${cat.slug}`} className="hover:text-honey-light">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-honey-light">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-cream/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-honey-light" /> {siteConfig.whatsappDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-honey-light" /> {siteConfig.email}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-honey-light">Order on WhatsApp</h4>
          <p className="mt-3 text-sm text-cream/70">
            Prefer to chat? Message us directly and we&apos;ll help you place your order.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-forest-dark transition hover:bg-honey-light"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © 2026 Heavenly Fruits. All Rights Reserved.
      </div>
    </footer>
  );
}
