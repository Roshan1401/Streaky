function ActivitySectionSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <div className="mx-auto h-3 w-32 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700" />

      <div className="grid grid-cols-1 gap-3 text-center xl:grid-cols-2">
        <div className="h-22.5 w-40 animate-pulse rounded-md bg-gray-300 xl:h-27.5 xl:w-27.5 dark:bg-neutral-700" />
        <div className="h-22.5 w-40 animate-pulse rounded-md bg-gray-300 xl:h-27.5 xl:w-27.5 dark:bg-neutral-700" />
        <div className="h-22.5 w-40 animate-pulse rounded-md bg-gray-300 xl:h-27.5 xl:w-27.5 dark:bg-neutral-700" />
        <div className="h-22.5 w-40 animate-pulse rounded-md bg-gray-300 xl:h-27.5 xl:w-27.5 dark:bg-neutral-700" />
      </div>
    </div>
  );
}

export default ActivitySectionSkeleton;
