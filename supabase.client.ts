import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://glveumixusrtpghdykrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdmV1bWl4dXNydHBnaGR5a3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NTA3OTksImV4cCI6MjA0OTMyNjc5OX0.965rVce515rjhiMJSk1Wm--CzCAS8OhJRWLPNxL1LZM";

export const supabase = createClient(supabaseUrl, supabaseKey);
