import { Plus, Search } from "lucide-react";
import { useState } from "react";

interface SearchbarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (query: string) => void;
}

function Searchbar({ onSearch, query, setQuery }: SearchbarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };
  return (
    <div className="group flex items-center gap-2.5 rounded-xl border-[1.5px] border-(--color-border-secondary) bg-(--color-bg-primary) px-4 py-2.5 transition-colors focus-within:border-orange-500 focus-within:shadow-[0_0_0_3px_rgba(249,115,22,0.1)]">
      <span className="shrink-0 text-(--color-text-secondary) transition-colors group-focus-within:text-orange-500">
        <Search className="size-5" />
      </span>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className="flex-1 border-none bg-transparent text-sm text-(--color-text-primary) outline-none"
      />

      {query && (
        <button
          onClick={handleClear}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-none bg-(--color-bg-secondary) p-0 text-gray-500"
        >
          <Plus size={12} className="rotate-45" />
        </button>
      )}
    </div>
  );
}

export default Searchbar;
