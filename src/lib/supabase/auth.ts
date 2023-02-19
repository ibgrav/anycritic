import { Provider } from "@supabase/supabase-js";
import { supabase } from "src/lib/supabase/client";
import { APP_DEEPLINK_URL } from "src/lib/constants";
import { user } from "src/lib/signals";

supabase.auth.onAuthStateChange((_, session) => {
  user.value = session?.user || null;
});

export async function signOut() {
  await supabase.auth.signOut();
}

export async function signInWithProvider(provider: Provider) {
  await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: APP_DEEPLINK_URL },
  });
}
