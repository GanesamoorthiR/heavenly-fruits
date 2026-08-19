import { Resend } from "resend";
import { CartItem } from "@/lib/cart";
import { siteConfig } from "@/lib/site-config";

export type OrderEmailPayload = {
  orderId: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  notes?: string;
  items: CartItem[];
  orderDate: string;
};

export async function sendOrderEmail(payload: OrderEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Don't throw — the order request should still be considered
    // successful even if email sending isn't configured. Log for visibility.
    console.error("RESEND_API_KEY is missing. Skipping order email.");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);

  const itemRows = payload.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #eee;">${item.name} (${item.variantLabel})</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
      </tr>`
    )
    .join("");

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color:#26261F;">
      <h2 style="color:#1F3A28;">New Order Request — Heavenly Fruits</h2>
      <p><strong>Order Reference:</strong> ${payload.orderId}</p>
      <p><strong>Date:</strong> ${payload.orderDate}</p>
      <hr style="margin:16px 0;" />
      <h3 style="color:#1F3A28;">Customer Details</h3>
      <p>
        ${payload.customerName}<br/>
        ${payload.phone}<br/>
        ${payload.email}<br/>
        ${payload.address}, ${payload.city} - ${payload.pincode}
      </p>
      ${payload.notes ? `<p><strong>Notes:</strong> ${payload.notes}</p>` : ""}
      <h3 style="color:#1F3A28;">Products Requested</h3>
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr>
            <th style="text-align:left;padding:8px;border-bottom:2px solid #1F3A28;">Product</th>
            <th style="text-align:center;padding:8px;border-bottom:2px solid #1F3A28;">Qty</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>
      <p style="margin-top:16px;color:#4C7A4A;">Please contact the customer to confirm availability and pricing.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Heavenly Fruits Orders <orders@heavenlyfruits.in>",
      to: siteConfig.email,
      subject: `New Order Request — ${payload.orderId}`,
      html,
    });
    return { skipped: false };
  } catch (err) {
    console.error("Failed to send order email:", err);
    return { skipped: true, error: true };
  }
}
