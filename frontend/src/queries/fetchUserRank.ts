import type { Period, UserRank } from "../types/types";
import { supabase } from "../lib/supabase";
import type { RankingFilters } from "./fetchRankings";

export async function fetchUserRank(
  userId: string,
  filters: RankingFilters,
): Promise<UserRank | null> {
  const { mode, period, country, state, city } = filters;

  if (mode === "global") {
    return fetchUserGlobalRank(userId, period, country);
  }
  return fetchUserRegionRank(userId, period, country, state, city);
}

export async function fetchUserGlobalRank(
  userId: string,
  period: Period,
  country: string | null,
): Promise<UserRank | null> {
  const { data, error } = await supabase.rpc("get_user_global_rank", {
    p_user_id: userId,
    period_filter: period,
    country_filter: country && country !== "all" ? country : null,
  });

  if (error) {
    console.error("Error fetching global rankings: ", error);
    throw new Error(error.message);
  }
  return (data?.[0] as UserRank) ?? null;
}

export async function fetchUserRegionRank(
  userId: string,
  period: Period,
  country: string | null,
  state: string | null,
  city: string | null,
): Promise<UserRank | null> {
  const { data, error } = await supabase.rpc("get_user_region_rank", {
    p_user_id: userId,
    period_filter: period,
    country_filter: country && country !== "all" ? country : null,
    state_filter: state && state !== "all" ? state : null,
    city_filter: city && city !== "all" ? city : null,
  });

  if (error) {
    console.error("Error fetching region rankings: ", error);
    throw new Error(error.message);
  }
  return (data?.[0] as UserRank) ?? null;
}
