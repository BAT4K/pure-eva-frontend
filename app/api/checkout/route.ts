import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { order_id, customer_name, customer_email, address, phone, cart_total } = body;

    if (!order_id || !customer_name || !address || !phone || cart_total === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          order_id,
          customer_name,
          customer_email,
          address,
          phone,
          cart_total,
          status: 'Processing',
        }
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // --- Send Order Confirmation Email via Resend ---
    if (customer_email) {
      try {
        await resend.emails.send({
          from: 'Pure Eva <orders@pureeva.shop>',
          to: customer_email,
          subject: `Order Confirmed — ${order_id}`,
          html: buildOrderEmailHtml({ order_id, customer_name, cart_total }),
        });
      } catch (emailError) {
        // Log but do NOT block the success response — the DB write already succeeded
        console.error("Resend email error:", emailError);
      }
    }

    return NextResponse.json({ success: true, order: data && data[0] ? data[0] : null });
  } catch (error: any) {
    console.error("Checkout API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ── Order Confirmation Email Template ──────────────────────────────────────────
export function buildOrderEmailHtml({
  order_id,
  customer_name,
  cart_total,
}: {
  order_id: string;
  customer_name: string;
  cart_total: number;
}) {
  const formattedTotal = Number(cart_total).toFixed(2);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light only" />
  <title>Order Confirmation</title>
  <style>
    :root { color-scheme: light only; }
    * { color-scheme: light only; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#FAFAF9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#212121;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E0E0E0;">

          <!-- Header with Logo -->
          <tr>
            <td style="background-color:#FFFFFF;padding:32px 32px 24px;text-align:center;border-bottom:2px solid #A5D6A7;box-shadow:inset 0 0 0 600px #FFFFFF;">
              <a href="https://pureeva.shop" style="text-decoration:none;">
                <img src="https://pureeva.shop/pure-eva-logov2.png" alt="Pure Eva" width="160" style="display:block;margin:0 auto;max-width:160px;height:auto;background:#FFFFFF;padding:8px;border-radius:8px;" />
              </a>
            </td>
          </tr>

          <!-- Checkmark Icon -->
          <tr>
            <td align="center" style="padding:32px 0 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" valign="middle" width="56" height="56" style="width:56px;height:56px;border-radius:28px;background-color:#A5D6A7;text-align:center;vertical-align:middle;font-size:26px;color:#212121;font-weight:bold;">
                    &#10003;
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:20px 32px 0;text-align:center;">
              <h2 style="margin:0;font-size:22px;font-weight:600;color:#212121;">
                Thank you, ${customer_name}!
              </h2>
              <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#212121;opacity:0.7;">
                Your Cash on Delivery order has been received and is now being processed. We'll have it on its way soon.
              </p>
            </td>
          </tr>

          <!-- Order Details Card -->
          <tr>
            <td style="padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF9;border-radius:12px;border:1px solid #E8E8E8;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:14px;border-bottom:1px solid #E0E0E0;">
                          <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#212121;opacity:0.5;">
                            Order Reference
                          </p>
                          <p style="margin:6px 0 0;font-size:18px;font-weight:600;font-family:'Courier New',monospace;color:#212121;letter-spacing:1px;">
                            ${order_id}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:14px;padding-bottom:14px;border-bottom:1px solid #E0E0E0;">
                          <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#212121;opacity:0.5;">
                            Payment Method
                          </p>
                          <p style="margin:6px 0 0;font-size:14px;color:#212121;">
                            Cash on Delivery
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:14px;">
                          <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#212121;opacity:0.5;">
                            Total Amount
                          </p>
                          <p style="margin:6px 0 0;font-size:22px;font-weight:700;color:#212121;">
                            &#8377;${formattedTotal}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding:0 32px 28px;">
              <a href="https://pureeva.shop/track?id=${order_id}" style="display:inline-block;background-color:#A5D6A7;color:#212121;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:2px;text-decoration:none;padding:14px 36px;border-radius:50px;">
                Track Your Order
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <div style="height:1px;background-color:#E0E0E0;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#212121;opacity:0.45;">
                If you have questions about your order, reply to this email or reach us at
                <a href="mailto:support@pureeva.shop" style="color:#2E7D32;text-decoration:underline;">support@pureeva.shop</a>.
              </p>
              <p style="margin:16px 0 0;font-size:11px;color:#212121;opacity:0.3;letter-spacing:1px;">
                &copy; ${new Date().getFullYear()} Pure Eva
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
