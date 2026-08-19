"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PartyPopper, MessageCircle, ShoppingBag, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildOrderWhatsAppLink, WhatsAppOrderDetails } from "@/lib/whatsapp";

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<WhatsAppOrderDetails | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("hf-last-order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      setOrder(null);
    }
  }, []);

  if (!order) {
    return (
      <div className="container-px mx-auto max-w-xl py-20 text-center">
        <h1 className="font-serif text-2xl font-bold text-forest">No recent order request found</h1>
        <p className="mt-3 text-sm text-charcoal/60">
          If you just submitted an order request, it was received successfully. This page only shows
          details right after submission.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const whatsappLink = buildOrderWhatsAppLink(order);

  return (
    <div className="container-px mx-auto max-w-xl py-14 text-center sm:py-20">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-honey/20">
        <PartyPopper className="h-8 w-8 text-honey-dark" />
      </div>
      <h1 className="mt-5 font-serif text-3xl font-bold text-forest">Order Request Received!</h1>
      <p className="mt-2 text-sm text-charcoal/70">Thank you for choosing Heavenly Fruits.</p>
      <p className="text-sm text-charcoal/70">
        We&apos;ll get back to you shortly to confirm pricing and availability.
      </p>

      <div className="card mt-8 p-6 text-left">
        <div className="flex justify-between text-sm">
          <span className="text-charcoal/60">Order Reference</span>
          <span className="font-semibold text-forest">{order.orderId}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-charcoal/60">Status</span>
          <span className="font-semibold text-leaf">Request Received</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <MessageCircle className="h-4 w-4" /> Send Order Details on WhatsApp
        </a>
        <Link href="/" className="btn-outline">
          <ShoppingBag className="h-4 w-4" /> Continue Shopping
        </Link>
      </div>

      <div className="mt-8 flex flex-col items-center gap-1.5 text-sm text-charcoal/60">
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-forest" /> {siteConfig.whatsappDisplay}
        </span>
        <span className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-forest" /> {siteConfig.email}
        </span>
      </div>
    </div>
  );
}
