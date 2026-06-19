import Select from "react-select";
import type { SelectOption } from "../../types/types";
import { Country } from "country-state-city";

const globalCountryOptions: SelectOption[] = [
  { label: "All Countries", value: "all" },
  ...Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  })),
];

interface GlobalFiltersProps {
  selectedCountry: string | null;
  onCountryChange: (country: string) => void;
}

export function GlobalFilters({
  selectedCountry,
  onCountryChange,
}: GlobalFiltersProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
        Country
      </label>
      <Select
        options={globalCountryOptions}
        value={globalCountryOptions.find((o) => o.value === selectedCountry)}
        onChange={(opt) => onCountryChange(opt ? opt.value : "all")}
        className="w-48"
        classNamePrefix="select"
        placeholder="Select Country"
      />
    </div>
  );
}
