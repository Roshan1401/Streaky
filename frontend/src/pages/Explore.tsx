import DevloperCard from "../components/explore/DevloperCard";
import Searchbar from "../components/explore/Searchbar";
import { useState } from "react";
import profilImg from "../assets/image.png";

interface SearchResult {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

const MOCK_RESULTS: SearchResult[] = Array.from({ length: 7 }, (_, i) => ({
  id: `result-${i + 1}`,
  name: "Roshan Patil",
  username: "patilrosha99",
  avatar: profilImg,
  bio: "Learning React",
}));

function Explore() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>(MOCK_RESULTS);
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="px-5 py-5 md:px-10">
      <Searchbar onSearch={handleSearch} query={query} setQuery={setQuery} />
      {query.trim() !== "" && (
        <div className="rounded-lg border border-t-0 border-(--color-border) bg-(--color-bg-primary)">
          <div className="flex flex-col py-5">
            <div className="mt-5">
              {searchResults.length === 0 ? (
                <div className="text-center text-sm text-gray-500">
                  No results found
                </div>
              ) : (
                <div className="flex flex-col gap-4 px-4">
                 {searchResults.length === 0 ? (
  <div className="text-center text-sm text-gray-500">
    No results found
  </div>
) : (
  <div className="grid grid-cols-1 gap-2 px-4 sm:grid-cols- ">
    {searchResults.map((result) => (
      <DevloperCard key={result.id} {...result} />
    ))}
  </div>
)}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;
