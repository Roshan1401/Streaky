import React from "react";
import { GithubIcon } from "../../assets/Icons";

interface Props {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
}
function DevloperCard(props: Props) {
  const { id, name, username, avatar } = props;

  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-xl border border-(--color-border-secondary) bg-(--color-bg-secondary) px-4 py-3 transition-colors hover:border-orange-400">
      <div className="size-8 overflow-hidden rounded-full transition-all duration-75 ease-out hover:scale-103 md:size-15 dark:border-black">
        <img
          src={avatar}
          className="h-full w-full object-cover"
          alt="Profile"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-semibold text-(--color-text-primary) xl:text-2xl">
          {name}
        </span>
        <span className="xl:text-md text-sm text-(--color-text-secondary)">
          @{username}
        </span>
        <div className="mt-2 flex items-center gap-1">
          <GithubIcon className="inline-block h-4 w-4 text-(--color-text-secondary) group-hover:text-orange-500" />
          <span className="text-sm text-(--color-text-secondary) group-hover:text-orange-500">
            Roshan1401
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-end gap-2">
        <button className="text-md rounded-full border-[1.5px] border-orange-400 px-3 py-1 font-medium text-orange-500 transition-all hover:bg-orange-400 hover:text-white">
          Follow
        </button>
      </div>
    </div>
  );
}

export default DevloperCard;
