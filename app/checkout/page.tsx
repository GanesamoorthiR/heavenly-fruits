import type { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Order Request",
  description: "Request your Heavenly Fruits order — we'll confirm pricing and availability.",
};

export default function CheckoutPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-10 sm:py-14">
      <h1 className="font-serif text-3xl font-bold text-forest">Order Request</h1>
      <p className="mt-2 text-sm text-charcoal/60">
        Fill in your details and we&apos;ll get back to you to confirm pricing and availability.
      </p>

      <div className="mt-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
