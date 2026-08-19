import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmail, OrderEmailPayload } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as OrderEmailPayload;

    if (!payload.orderId || !payload.items?.length) {
      return NextResponse.json({ sent: false, error: "Invalid order payload." }, { status: 400 });
    }

    const result = await sendOrderEmail(payload);

    // Order stays successful even if email fails — we just report status.
    return NextResponse.json({ sent: !result.skipped, ...result });
  } catch (err: any) {
    console.error("send-order-email error:", err);
    return NextResponse.json({ sent: false, error: "Failed to send email." }, { status: 500 });
  }
}
