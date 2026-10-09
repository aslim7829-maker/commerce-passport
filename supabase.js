const SUPABASE_URL =
    "https://glzpkrgchzbayztsnkwu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_BKCqlwyiaQMaDMEf_bdKCA_jh6EX0v7";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
