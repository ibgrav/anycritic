import { signal } from "@preact/signals";
import { User } from "@supabase/supabase-js";

export const user = signal<User | null>(null);

export const navIndex = signal(1);

export const captureImageData = signal("");
