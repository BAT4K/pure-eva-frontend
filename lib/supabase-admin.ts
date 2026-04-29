import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client using the service_role key.
 * This bypasses Row-Level Security (RLS) and should ONLY be used
 * in server-side code (API routes, server actions) — never on the client.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
