import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  username: string;
  avatar?: string;
}

function DevloperCard({ name, username, avatar }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex cursor-pointer items-center gap-3 px-4 py-2 hover:bg-(--color-bg-secondary)"
        onClick={() => navigate(`/profile/:${username}`)}
      >
        <div className="relative shrink-0">
          <img
            src={avatar}
            alt="userAvatar"
            className="size-11 rounded-full object-cover ring-2 ring-orange-400 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900"
          />
          <span className="absolute right-0 bottom-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-neutral-900" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="truncate text-sm font-semibold text-(--color-text-primary)">
            {name}
          </span>
          <span className="truncate text-xs font-medium text-(--color-text-secondary)">
            {username}
          </span>
        </div>
      </div>
    </>
  );
}

export default DevloperCard;
