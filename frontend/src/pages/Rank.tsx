import { Clock } from "lucide-react";

function Rank() {
  return (
    <div className="flex min-h-120 flex-col items-center justify-center gap-2 px-6 py-10">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-orange-200 bg-orange-50">
        <Clock className="h-7 w-7 text-orange-500" />
      </div>
      <h1 className="mb-2 text-2xl font-medium text-(--color-text-primary)">
        Coming soon
      </h1>
    </div>
  );
}

export default Rank;
