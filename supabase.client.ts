import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabase = createClient<Database>(
  "https://nbmrxlppzwvaqrcjanhl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibXJ4bHBwend2YXFyY2phbmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyODU3MjIsImV4cCI6MjA0Nzg2MTcyMn0.4riUnfEGlr7Lyg9lkoH8nUb2CyvszbSZGcR2POZ5YVs"
);

export default supabase;
