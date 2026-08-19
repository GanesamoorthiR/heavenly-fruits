"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WhatsAppButton() {
  const link = buildWhatsAppLink("Hi Heavenly Fruits! I would like to know more about your Kodaikanal products.");

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Heavenly Fruits on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={1.5} />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-forest px-3 py-1.5 text-xs font-medium text-cream shadow-soft group-hover:sm:block">
        Chat with Heavenly Fruits
      </span>
    </a>
  );
}
