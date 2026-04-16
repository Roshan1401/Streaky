import { GitFork, Star } from "lucide-react";
import { Link } from "lucide-react";
import { GithubIcon } from "../../../assets/Icons";

interface Repo {
  name: string;
  stars: number;
  language: string;
  description: string;
  forks: number;
  updatedAt: string;
}

const demoRepos: Repo[] = [
  {
    name: "Devsteak",
    stars: 42,
    language: "TypeScript",
    description: "Developer contribution tracking platform",
    forks: 8,
    updatedAt: "2 days ago",
  },
  {
    name: "react-dashboard",
    stars: 128,
    language: "JavaScript",
    description: "Modern React dashboard template",
    forks: 45,
    updatedAt: "1 week ago",
  },
  {
    name: "vite-plugin-template",
    stars: 89,
    language: "TypeScript",
    description: "Quick start Vite plugin template",
    forks: 12,
    updatedAt: "3 days ago",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  React: "bg-cyan-400",
};

function TopRepo() {
  return (
    <div className="flex w-full flex-col gap-5 px-7 py-3">
      {demoRepos.map((repo, index) => (
        <div
          key={repo.name}
          className="cursor-pointer rounded-lg border border-(--color-border) bg-(--color-bg-secondary) px-4 py-8 transition-colors hover:border-orange-500/30"
        >
          <div className="flex items-start justify-between">
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <GithubIcon className="h-6 w-6 text-[#aaa]" />
                  <span className="text-xl font-semibold text-(--color-text-primary)">
                    {repo.name}
                  </span>
                  {index === 0 && (
                    <span className="rounded-full border border-orange-500/50 bg-orange-500/10 px-2 py-0.5 text-[10px] font-medium text-orange-500">
                      Top
                    </span>
                  )}
                </div>
                <button className="flex-end flex text-(--color-text-primary)">
                  <Link className="h-5 w-5" />
                </button>
              </div>
              <p className="pl-9 text-sm text-(--color-text-secondary)">
                {repo.description}
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4 pl-9 text-sm">
            <span className="flex items-center gap-1.5 text-(--color-text-secondary)">
              <span
                className={`h-3 w-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`}
              />
              {repo.language}
            </span>
            <span className="flex items-center gap-1 text-(--color-text-secondary)">
              <Star className="h-4 w-4" />
              {repo.stars.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 text-(--color-text-secondary)">
              <GitFork className="h-4 w-4" />
              {repo.forks}
            </span>
            <span className="ml-auto text-(--color-text-secondary)">
              Updated {repo.updatedAt}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRepo;
