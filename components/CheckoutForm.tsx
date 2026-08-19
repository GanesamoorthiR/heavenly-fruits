"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";

type FormState = {
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  notes: string;
};

const initialForm: FormState = {
  fullName: "",
  mobile: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
  notes: "",
};

export default function CheckoutForm() {
  const { items, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "processing" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!/^[0-9]{10}$/.test(form.mobile.trim())) next.mobile = "Enter a valid 10-digit mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.address.trim()) next.address = "Delivery address is required.";
    if (!form.city.trim()) next.city = "City is required.";
    if (!/^[0-9]{6}$/.test(form.pincode.trim())) next.pincode = "Enter a valid 6-digit pincode.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmitRequest() {
    setErrorMessage("");

    if (items.length === 0) {
      setErrorMessage("Please add at least one product before submitting your order request.");
      return;
    }
    if (!validate()) return;

    setStatus("processing");

    const orderId = `HF-${Date.now().toString().slice(-8)}`;
    const orderDate = new Date().toLocaleString("en-IN");

    const orderPayload = {
      orderId,
      customerName: form.fullName,
      phone: form.mobile,
      email: form.email,
      address: form.address,
      city: form.city,
      pincode: form.pincode,
      notes: form.notes,
      items,
      orderDate,
    };

    // Send order request email — best-effort, doesn't block the flow.
    fetch("/api/send-order-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload),
    }).catch(() => {
      // Non-blocking — request still succeeds even if email fails.
    });

    try {
      sessionStorage.setItem("hf-last-order", JSON.stringify(orderPayload));
    } catch {
      // ignore storage errors
    }

    clearCart();
    router.push("/order-success");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Customer information form */}
      <div>
        <h2 className="font-serif text-xl font-bold text-forest">Customer Information</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="Full Name *" error={errors.fullName}>
            <input
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="input"
              placeholder="Your full name"
            />
          </Field>
          <Field label="Mobile Number *" error={errors.mobile}>
            <input
              value={form.mobile}
              onChange={(e) => handleChange("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="input"
              placeholder="10-digit mobile number"
              inputMode="numeric"
            />
          </Field>
          <Field label="Email *" error={errors.email} full>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="input"
              placeholder="you@example.com"
              type="email"
            />
          </Field>
          <Field label="Delivery Address *" error={errors.address} full>
            <textarea
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="input min-h-[80px]"
              placeholder="House no, street, area"
            />
          </Field>
          <Field label="City *" error={errors.city}>
            <input value={form.city} onChange={(e) => handleChange("city", e.target.value)} className="input" placeholder="City" />
          </Field>
          <Field label="Pincode *" error={errors.pincode}>
            <input
              value={form.pincode}
              onChange={(e) => handleChange("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="input"
              placeholder="6-digit pincode"
              inputMode="numeric"
            />
          </Field>
          <Field label="Order Notes (optional)" full>
            <textarea
              value={form.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="input min-h-[60px]"
              placeholder="Any delivery instructions?"
            />
          </Field>
        </div>
      </div>

      {/* Order summary + submit */}
      <div>
        <div className="card p-5 sm:p-6">
          <h2 className="font-serif text-xl font-bold text-forest">Order Summary</h2>

          {items.length === 0 ? (
            <p className="mt-4 text-sm text-charcoal/60">
              No products added yet.{" "}
              <Link href="/#shop" className="font-semibold text-forest underline">
                Browse products
              </Link>
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={`${item.slug}-${item.variantLabel}`} className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cream-dark">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium text-charcoal line-clamp-1">{item.name}</p>
                    <p className="text-xs text-charcoal/50">
                      {item.variantLabel} × {item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-5 rounded-lg bg-honey/10 px-3 py-2 text-xs font-medium text-honey-dark">
            Pricing and availability will be confirmed by our team after you submit this request.
          </p>

          {errorMessage && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{errorMessage}</p>
          )}

          <button
            onClick={handleSubmitRequest}
            disabled={status === "processing" || items.length === 0}
            className="btn-primary mt-5 w-full disabled:opacity-60"
          >
            {status === "processing" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Order Request"
            )}
          </button>
        </div>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1.5px solid rgba(31, 58, 40, 0.15);
          background: white;
          padding: 0.65rem 0.9rem;
          font-size: 0.875rem;
          color: #26261f;
        }
        .input:focus {
          outline: none;
          border-color: #1f3a28;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block text-xs font-semibold text-forest ${full ? "sm:col-span-2" : ""}`}>
      {label}
      <div className="mt-1.5 font-normal">{children}</div>
      {error && <span className="mt-1 block text-[11px] font-medium text-red-500">{error}</span>}
    </label>
  );
}
