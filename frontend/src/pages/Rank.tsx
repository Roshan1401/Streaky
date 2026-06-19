import { useState } from "react";
import { FloatingTabs } from "../components/Rank/FloatingTabs";
import { Globe, MapPin } from "lucide-react";
import image from "../assets/image.png";
import { PeriodSelect } from "../components/Rank/PeriodSelect";
import { GlobalFilters } from "../components/Rank/GlobalFilters";
import { RegionFilters } from "../components/Rank/RegionFilters";
import { useLocationFilter } from "../hooks/useLocationFilter";
import useProfileStore from "../store/useProfileStore";

type Mode = "global" | "region";

function Rank() {
  const [mode, setMode] = useState<Mode>("global");
  const [period, setPeriod] = useState("allTime");
  const [selectedGlobalCountry, setSelectedGlobalCountry] =
    useState<string>("all");

  const { profile } = useProfileStore();

  const {
    selectedCountry,
    selectedState,
    selectedCity,
    countryOptions,
    stateOptions,
    cityOptions,
    handleCountryChange,
    handleStateChange,
    setSelectedCity,
  } = useLocationFilter({
    country: profile?.country || undefined,
    state: profile?.state || undefined,
    city: profile?.city || undefined,
  });

  return (
    <div className="flex flex-col gap-4 px-5 py-10 xl:px-15">
      <div className="flex items-center justify-between border-b border-zinc-300 pb-4 dark:border-zinc-700">
        <div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Developer Rankings
          </h1>
          <p className="text-sm text-zinc-400">
            Discover top developers in your region
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FloatingTabs
            tabs={[
              { value: "global", label: "Global", icon: <Globe /> },
              { value: "region", label: "Region", icon: <MapPin /> },
            ]}
            onChange={(value) => setMode(value as Mode)}
            defaultValue="global"
          />
          <PeriodSelect value={period} onChange={setPeriod} />
        </div>
      </div>

      <div className="h-50 w-full rounded-md border border-zinc-300 dark:border-zinc-700 dark:bg-neutral-900">
        <div className="flex w-full items-center justify-between gap-4 border-b border-zinc-300 px-5 py-3 dark:border-zinc-600">
          {mode === "global" ? (
            <GlobalFilters
              selectedCountry={selectedGlobalCountry}
              onCountryChange={setSelectedGlobalCountry}
            />
          ) : (
            <RegionFilters
              countryOptions={countryOptions}
              stateOptions={stateOptions}
              cityOptions={cityOptions}
              selectedCountry={selectedCountry}
              selectedState={selectedState}
              selectedCity={selectedCity}
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
              onCityChange={setSelectedCity}
            />
          )}
          <img
            src={image}
            className="size-15 rounded-full border border-black"
            alt="Rank"
          />
        </div>
      </div>
    </div>
  );
}

export default Rank;
