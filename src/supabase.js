import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rzsrxhqnsldqrlgknphm.supabase.co";
const supabaseKey = "sb_publishable_EZbDeVIda2o_bRGoyF-96Q_PEUPWi7Y";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
