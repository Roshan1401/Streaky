function ProfileSectionSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="size-25 animate-pulse rounded-full bg-gray-300 xl:size-30 dark:bg-neutral-700" />

      <div className="flex w-full flex-col items-center gap-2">
        <div className="h-6 w-32 animate-pulse rounded-md bg-gray-300 xl:h-7 xl:w-40 dark:bg-neutral-700" />

        <div className="h-4 w-20 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-700" />
      </div>

      <div className="h-11 w-full animate-pulse rounded-lg bg-gray-300 xl:h-12 dark:bg-neutral-700" />
    </div>
  );
}

export default ProfileSectionSkeleton;
