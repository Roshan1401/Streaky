import { useState } from "react";

interface Props {}
type LeaderboardRow = "24 Hours" | "7 Days" | "30 Days";

function LeaderboardRow(props: Props) {
  const {} = props;
  const days: LeaderboardRow[] = ["24 Hours", "7 Days", "30 Days"];
  const [activeRow, setActiveRow] = useState<LeaderboardRow>("24 Hours");

  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-4xl border border-(--color-border) bg-neutral-900 px-2 py-1">
      {days.map((day) => {
        const isActive = activeRow === day;
        return (
          <button
            key={day}
            type="button"
            onClick={() => setActiveRow(day)}
            className={[
              "md:text:md cursor-pointer rounded-4xl px-3 py-1 text-sm font-bold transition-colors md:px-6 md:py-2",
              isActive
                ? "bg-(--color-bg-primary) text-(--color-text-primary)"
                : "text-(--color-text-secondary)",
            ].join(" ")}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}

export default LeaderboardRow;
