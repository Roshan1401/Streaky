// HeatMapCalenderSkeleton.tsx
function HeatMapCalenderSkeleton() {
  return (
    <div className="px-4 xl:px-10 ">
      <div className="my-4 rounded-xl border border-(--color-border) bg-(--color-surface)">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-3 p-8 md:flex-row">
          <div className="skeleton h-5 w-40 rounded-md" />
          <div className="skeleton flex items-center rounded-md h-4 w-20 md:w-40" />
        </div>

        <div className="flex gap-2   px-4 md:gap-4 xl:gap-5 md:px-8">

        <div className="mt-5 mb-8  h-70 w-full skeleton rounded-lg" />
        </div>

        </div>
      </div>
  );
}

export default HeatMapCalenderSkeleton;
