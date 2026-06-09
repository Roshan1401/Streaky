import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GithubIcon } from "../../assets/Icons";

interface Props {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  totalHours?: number;
  totalLanguages?: number;
  avgHours?: number;
}

function DevloperCard({
  name,
  username,
  avatar,
  bio = "No bio yet",
  totalHours = 0,
  totalLanguages = 0,
  avgHours = 0,
}: Props) {
  const navigate = useNavigate();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const stats = [
    { label: "Total hours", value: `${totalHours}h` },
    { label: "Languages", value: totalLanguages },
    { label: "Avg/day", value: `${avgHours}h` },
  ];

  return (
    <div className="rounded-[32px] mt-5 p-[1px]  shadow-[0_0_20px_rgba(255,140,60,0.25),0_0_40px_rgba(255,140,60,0.15),inset_0_0_30px_rgba(255,140,60,0.08)] bg-gradient-to-b from-[#f3c9aa] via-[#f6ddd0] to-white dark:bg-gradient-to-b dark:from-[#915D3B] dark:via-[#5B2E12] dark:to-[#874C23] ">
      <div
        className="relative flex flex-col gap-4 overflow-hidden rounded-[31px] p-6
       
  bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF8F3_40%,rgba(246,167,106,0.5)_100%)]
  shadow-[0_30px_60px_rgba(0,0,0,0.08),0_10px_30px_rgba(237,169,105,0.08)]
 dark:bg-[linear-gradient(180deg,#1D1819_0%,#28180E_60%,#5B2E12_100%)]
"
      >
      <div
    className="
      dark:absolute
      dark:left-[15%]
      dark:right-[15%]
      dark:-bottom-5
      dark:h-20
      dark:bg-orange-500/40
      dark:blur-[50px]
      dark:pointer-events-none
    "
  ></div>
        

        <div className="relative z-10 flex flex-col gap-4">
          {/* Github */}
          <div className="flex justify-end">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="text-(--color-text-secondary) transition-colors hover:text-orange-500"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Avatar + Info */}
          <div className="flex flex-col gap-1.5">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="size-14 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-14 items-center justify-center rounded-full bg-orange-100 text-base font-medium text-orange-700">
                {getInitials(name)}
              </div>
            )}

            <p className="mt-1 text-lg font-semibold text-(--color-text-primary)">
              {name}
            </p>

            <p className="text-sm text-(--color-text-secondary)">
              @{username}
            </p>

            <p className="line-clamp-2 text-sm text-(--color-text-secondary)">
              {bio}
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid pt-4"
            style={{
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
            }}
          >
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col items-center gap-0.5 py-1">
                  <span className="text-base font-semibold text-(--color-text-primary)">
                    {stat.value}
                  </span>

                  <span className="text-center text-xs text-neutral-500">
                    {stat.label}
                  </span>
                </div>

                {i !== stats.length - 1 && (
                  <div className="h-8 w-px self-center bg-orange-300" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Button */}
          <button
    onClick={() => navigate(`/profile/${username}`)}
    className="
      relative z-10
      flex w-full items-center justify-center gap-1.5
      rounded-full
      py-3

      text-sm font-semibold
      text-black dark:text-white

      border
      border-orange-300/80
      dark:border-orange-400/50

      bg-gradient-to-b
      from-[rgba(255,184,133,0.45)]
      to-[#FFF6EF]

      dark:bg-[linear-gradient(180deg,rgba(28,24,24,0.95)_0%,rgba(61,35,19,0.95)_100%)]

      shadow-[
        inset_0_-2px_2px_rgba(255,255,255,0.9),
        0_8px_24px_rgba(255,122,0,0.08)
      ]

      dark:shadow-[
        0_0_12px_rgba(255,140,60,0.18),
        0_0_24px_rgba(255,140,60,0.12),
        inset_0_1px_0_rgba(255,255,255,0.08),
        inset_0_0_20px_rgba(255,140,60,0.06)
      ]

      transition-all duration-300
      hover:scale-[1.01]

      hover:border-orange-400

      hover:dark:shadow-[
        0_0_16px_rgba(255,140,60,0.28),
        0_0_32px_rgba(255,140,60,0.18),
        inset_0_1px_0_rgba(255,255,255,0.12),
        inset_0_0_24px_rgba(255,140,60,0.10)
      ]

      cursor-pointer
    "
  >
    <span>View Profile</span>
    <ArrowUpRight size={15} />
  </button>
        </div>
      </div>
    </div>
  );
}

export default DevloperCard;