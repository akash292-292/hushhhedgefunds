import { createClient } from "@supabase/supabase-js";

const config = {
  SUPABASE_URL: "https://rpmzykoxqnbozgdoqbpc.supabase.co",
  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwbXp5a294cW5ib3pnZG9xYnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5Mjc5NzEsImV4cCI6MjAxNzUwMzk3MX0.3GwG8YQKwZSWfGgTBEEA47YZAZ-Nr4HiirYPWiZtpZ0",
  redirect_url: "http://localhost:5173",
};

function createSupabaseClient() {
  return createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
}

const supabaseClient = createSupabaseClient();

export default { ...config, supabaseClient };
