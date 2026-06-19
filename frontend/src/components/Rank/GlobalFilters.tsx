import { Globe2 } from "lucide-react";
import { CustomSelect } from "./CustomSelect";
import { Country } from "country-state-city";
import type { SelectOption } from "../../types/types";

const globalCountryOptions: SelectOption[] = [
  { label: "All countries", value: "all" },
  ...Country.getAllCountries().map((c) => ({
    label: c.name,
    value: c.isoCode,
  })),
];

interface GlobalFiltersProps {
  selectedCountry: string;
  onCountryChange: (value: string) => void;
}

export function GlobalFilters({
  selectedCountry,
  onCountryChange,
}: GlobalFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:max-w-xs">
      <CustomSelect
        label="Country"
        icon={<Globe2 className="size-3.5" />}
        options={globalCountryOptions}
        value={selectedCountry}
        onChange={(v) => onCountryChange(v ?? "all")}
        placeholder="All countries"
      />
    </div>
  );
}
