import { data } from "react-router-dom";
import { supabase } from "../lib/supabase";
import useTokenStore from "../store/useTokenStore";
import useUserStore from "../store/useUserStore";

interface ApiToken {
  user_id: string;
  token: string;
  revoked: boolean;
}

export async function getApiToken(userId: string) {
  const { data, error } = await supabase
    .from("api_tokens")
    .select("*")
    .eq("user_id", userId)
    .eq("revoked", false)
    .single();

  if (error) {
    console.error("Error while fetching token ", error);
    return;
  }

  return data?.token || null;
}

export async function createApiToken(userId: string) {
  const token = crypto.randomUUID();

  const { data, error } = await supabase
    .from("api_tokens")
    .insert({
      user_id: userId,
      token,
      revoked: false,
    })
    .select("*")
    .single();

  if (error) {
    return null;
  }

  return data.token;
}
