import { buildOrderEmailHtml } from '@/app/api/checkout/route';

// GET /api/email-preview — renders the order confirmation email with sample data
export async function GET() {
  const html = buildOrderEmailHtml({
    order_id: 'ORD-X9K2',
    customer_name: 'Priya Sharma',
    cart_total: 1279,
  });

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
