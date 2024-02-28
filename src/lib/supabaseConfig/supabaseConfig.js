import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ygcamtfqinntwoxaqxad.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnY2FtdGZxaW5udHdveGFxeGFkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzY0ODQyNSwiZXhwIjoyMDIzMjI0NDI1fQ.nJqaVIoNmvQTlChl1hlao3l0vy0hY7KbA7hMeFgFE7c";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// import { createClient } from "@supabase/supabase-js";
//
// const supabaseUrl =  process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey =     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);