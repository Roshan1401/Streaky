import { useState, useEffect } from "react";
import { fetchUserRank } from "../queries/fetchUserRank.ts";
import type { UserRank } from "../types/types";
import type { RankingFilters } from "../queries/fetchRankings.ts";

export function useUserGlobalRank(userId: string, filters: RankingFilters) {
  const [rank, setRank] = useState<UserRank | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    let cancelled = false;
    setLoading(true);

    fetchUserRank(userId, filters).then((data) => {
      if (!cancelled) {
        setRank(data);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [
    userId,
    filters.mode,
    filters.period,
    filters.country,
    filters.state,
    filters.city,
  ]);
  return { rank, loading };
}
