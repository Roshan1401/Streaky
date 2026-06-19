import { useState } from "react";
import { FloatingTabs } from "../components/Rank/FloatingTabs";
import { Globe, MapPin } from "lucide-react";
import image from "../assets/image.png";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import type { SelectOption } from "../types/types";

const globalCountryOptions: SelectOption[] = [
  { label: "All Countries", value: "all" },
  ...Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  })),
];

function Rank() {
  const [mode, setMode] = useState("global");
  const [selectedGlobalCountry, setSelectedGlobalCountry] =
    useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("In");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const periodOptions = [
    { value: "allTime", label: "All Time" },
    { value: "today", label: "Today" },
    { value: "thisWeek", label: "This Week" },
    { value: "thisMonth", label: "This Month" },
  ];

  const countryOptions: SelectOption[] = Country.getAllCountries().map(
    (country) => ({
      label: country.name,
      value: country.isoCode,
    }),
  );

  const stateOptions: SelectOption[] = selectedCountry
    ? State.getStatesOfCountry(selectedCountry).map((state) => ({
        label: state.name,
        value: state.isoCode,
      }))
    : [];

  const cityOptions: SelectOption[] = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState).map((city) => ({
        label: city.name,
        value: city.name,
      }))
    : [];

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
            onChange={(value) => setMode(value)}
            defaultValue="global"
            className=""
          />
          <div className="relative">
            <select
              className="h-11 w-44 appearance-none rounded-md border border-zinc-300 bg-zinc-50 px-4 pr-10 text-sm font-medium text-zinc-800 transition-all outline-none hover:border-zinc-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              defaultValue="allTime"
            >
              {periodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <svg
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-zinc-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-50 w-full rounded-md border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex w-full items-center justify-between gap-4 border-b border-zinc-300 px-5 py-3 dark:border-x-zinc-700">
          {mode === "global" ? (
            <div>
              <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
                Country
              </label>
              <Select
                options={globalCountryOptions}
                value={globalCountryOptions.find(
                  (option) => option.value === selectedGlobalCountry,
                )}
                onChange={(option) =>
                  setSelectedGlobalCountry(option ? option.value : "all")
                }
                className="w-48"
                classNamePrefix="select"
                placeholder="Select Country"
              />
            </div>
          ) : (
            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
                  Country
                </label>
                <Select
                  options={countryOptions}
                  value={countryOptions.find(
                    (option) => option.value === selectedCountry,
                  )}
                  onChange={(option) =>
                    setSelectedCountry(option ? option.value : "")
                  }
                  className="w-48"
                  classNamePrefix="select"
                  placeholder="Select Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
                  State
                </label>
                <Select
                  options={stateOptions}
                  value={stateOptions.find(
                    (option) => option.value === selectedState,
                  )}
                  onChange={(option) =>
                    setSelectedState(option ? option.value : "")
                  }
                  className="w-48"
                  classNamePrefix="select"
                  placeholder="Select State"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
                  City
                </label>
                <Select
                  options={cityOptions}
                  value={cityOptions.find(
                    (option) => option.value === selectedCity,
                  )}
                  onChange={(option) =>
                    setSelectedCity(option ? option.value : "")
                  }
                  className="w-48"
                  classNamePrefix="select"
                  placeholder="Select State"
                />
              </div>
            </div>
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
