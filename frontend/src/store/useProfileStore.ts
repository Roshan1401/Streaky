import { create } from "zustand";
import { supabase } from "../lib/supabase";

interface ProfileState {
  profile: {
    id: string;
    name: string;
    username: string;
    bio: string | null;
    avatar_url: string;
  } | null;
  loading: boolean;
  setProfile: (profile: ProfileState["profile"]) => void;
  setLoading: (loading: boolean) => void;
  fetchProfile: () => Promise<void>;
}

const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: true,
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),
  fetchProfile: async () => {
    set({ loading: true });
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        set({ profile: null, loading: false });
        return;
      }
      console.log("Fetching profile for user ID:", user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
        set({ profile: null, loading: false });
        return;
      }

      set({ profile: data, loading: false });
    } catch (error) {
      console.error("Unexpected error:", error);
      set({ profile: null, loading: false });
    }
  },
}));
export default useProfileStore;
