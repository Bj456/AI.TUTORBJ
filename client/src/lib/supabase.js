// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

// Environment variables from Netlify
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Supabase URL or ANON key is missing! Please set them in Netlify Environment Variables.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
