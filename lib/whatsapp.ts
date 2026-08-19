import { CartItem } from "@/lib/cart";
import { buildWhatsAppLink } from "@/lib/site-config";

export type WhatsAppOrderDetails = {
  orderId: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  notes?: string;
  items: CartItem[];
};

export function buildOrderWhatsAppLink(details: WhatsAppOrderDetails) {
  const lines = [
    "NEW ORDER REQUEST — HEAVENLY FRUITS",
    "",
    `Order Reference: ${details.orderId}`,
    `Customer Name: ${details.customerName}`,
    `Mobile: ${details.phone}`,
    `Email: ${details.email}`,
    `Delivery Address: ${details.address}, ${details.city} - ${details.pincode}`,
    ...(details.notes ? [`Notes: ${details.notes}`] : []),
    "",
    "Products Requested:",
    ...details.items.map((item) => `- ${item.name} (${item.variantLabel}) x${item.quantity}`),
    "",
    "Please confirm availability and pricing for this order. Thank you!",
  ];

  return buildWhatsAppLink(lines.join("\n"));
}
