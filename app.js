const { data } = await supabase
  .from("purchases")
  .select("*");
