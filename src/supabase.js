import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uagolaiaqvgzgscnpwlr.supabase.co";
const supabaseKey = "sb_publishable_gDKy8ZgTdjosgc3uEYTDXg_UzOriUGk";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
