import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wtjhncbcejbzejzmrtqi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0amhuY2JjZWpiemVqem1ydHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0MDQyMzksImV4cCI6MjAyMjk4MDIzOX0.EplWIczGOohQDdaaHfpFOy5o_Ym5BqJH4RNQBffiVFE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)