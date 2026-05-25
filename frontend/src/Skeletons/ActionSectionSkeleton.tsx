function ActionsSectionSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {/* Copy API Token Button */}
      <div className="flex items-center justify-center gap-2 rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) px-3 py-2">
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-300 xl:h-5 xl:w-5 dark:bg-neutral-700" />

        <div className="h-4 w-28 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700" />
      </div>

      {/* Extension Card */}
      <div className="rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <div className="h-4 w-4 animate-pulse rounded-full bg-gray-300 xl:h-5 xl:w-5 dark:bg-neutral-700" />

            <div className="flex flex-col gap-2">
              <div className="h-4 w-20 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700" />

              <div className="h-3 w-24 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700" />
            </div>
          </div>

          <div className="hidden h-3 w-14 animate-pulse rounded-md bg-gray-300 xl:flex dark:bg-neutral-700" />
        </div>

        {/* Test Connection Button */}
        <div className="mt-3 h-9 w-full animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700" />
      </div>

      {/* Sign Out Button */}
      <div className="h-9 w-full animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700"></div>
    </div>
  );
}

export default ActionsSectionSkeleton;
