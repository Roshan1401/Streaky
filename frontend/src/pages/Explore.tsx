import DevloperCard from "../components/explore/DevloperCard";
import Searchbar from "../components/explore/Searchbar";
import { useState } from "react";
import profilImg from "../assets/image.png";

function Explore() {
  const [query, setQuery] = useState("");
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };
  const [serarchResults, setSearchResults] = useState([
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
    {
      id: "1",
      name: "Roshan Patil",
      username: "patilrosha99",
      avatar: profilImg,
      bio: "Learning React",
    },
  ]);

  return (
    <div className="px-5 py-5 md:px-10">
      <Searchbar onSearch={handleSearch} query={query} setQuery={setQuery} />
      {query.trim() !== "" && (
        <div className="rounded-lg border border-t-0 border-(--color-border) bg-(--color-bg-primary)">
          <div className="flex flex-col py-5">
            <div className="mt-5">
              {serarchResults.length === 0 ? (
                <div className="text-center text-sm text-gray-500">
                  No results found
                </div>
              ) : (
                <div className="flex flex-col gap-4 px-4">
                  {serarchResults.map((result) => (
                    <DevloperCard key={result.id} {...result} />
                  ))}
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
