"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fruits", href: "/#kodaikanal-fruits" },
  { label: "Mountain Honey", href: "/#mountain-honey" },
  { label: "Chocolates", href: "/#homemade-chocolates" },
  { label: "Vegetables", href: "/#hill-vegetables" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Heavenly Fruits logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            priority
          />
          <span className="font-serif text-lg font-bold text-forest sm:text-xl">Heavenly Fruits</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream transition hover:bg-forest-light"
          >
            <ShoppingBasket className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-honey px-1 text-[11px] font-bold text-forest-dark">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-cream lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest/5 py-3 text-sm font-medium text-charcoal/80 last:border-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
