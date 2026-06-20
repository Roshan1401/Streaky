import type { Period, RankUser } from "../types/types";
import { supabase } from "../lib/supabase";

interface RankingFilters {
  mode: "global" | "region";
  period: Period;
  country: string | null;
  state: string | null;
  city: string | null;
}

export async function fetchRankings(
  filters: RankingFilters,
): Promise<RankUser[]> {
  const { mode, period, country, state, city } = filters;

  if (mode === "global") {
    return fetchGlobalRankings(period, country);
  }
  return fetchRegionRankings(period, country, state, city);
}

async function fetchGlobalRankings(
  period: Period,
  country: string | null,
): Promise<RankUser[]> {
  const { data, error } = await supabase.rpc("get_global_rankings", {
    period_filter: period,
    country_filter: country && country !== "all" ? country : null,
  });

  if (error) {
    console.error("Error fetching global rankings: ", error);
    throw new Error(error.message);
  }
  return data as RankUser[];
}

async function fetchRegionRankings(
  period: Period,
  country: string | null,
  state: string | null,
  city: string | null,
): Promise<RankUser[]> {
  const { data, error } = await supabase.rpc("get_region_rankings", {
    period_filter: period,
    country_filter: country && country !== "all" ? country : null,
    state_filter: state && state !== "all" ? state : null,
    city_filter: city && city !== "all" ? city : null,
  });

  if (error) {
    console.error("Error fetching region rankings: ", error);
    throw new Error(error.message);
  }
  return data as RankUser[];
}
