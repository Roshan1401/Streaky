export function RankSkeleton() {
  return (
    <div className="space-y-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="mx-2 my-3 animate-pulse rounded-xl border border-(--color-border) bg-(--color-bg-secondary) p-4 md:m-0 md:rounded-none md:border-0 md:border-t md:px-8 md:py-6"
        >
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="size-11 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-32 rounded bg-zinc-300 dark:bg-zinc-700" />
              <div className="h-2 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <div className="h-3 w-12 rounded bg-zinc-300 dark:bg-zinc-700" />
            <div className="h-3 w-16 rounded bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>
      ))}
    </div>
  );
}
