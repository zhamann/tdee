import type { Dispatch, SetStateAction } from "react";

interface ResultsProps {
  bmr: number;
  tdee: number;
  setShowResults: Dispatch<SetStateAction<boolean>>;
}

export default function Results({ bmr, tdee, setShowResults }: ResultsProps) {
  return (
    <div className="flex flex-col justify-center gap-4 text-start md:justify-start md:text-start">
      <div className="md:hidden">
        <button onClick={() => setShowResults(false)}>← Back</button>
      </div>
      <div className="text-5xl font-semibold md:text-6xl">
        Your <span className="text-indigo-500">Results</span>
      </div>
      <div className="text-sm md:text-lg">
        <div className="font-medium">
          {`BMR (Basal Metabolic Rate): ${bmr.toLocaleString("en-us", { maximumFractionDigits: 2 })} calories`}
        </div>
        <p className="mt-1 text-sm font-light md:text-base">
          This is the amount of energy your body needs to function at rest. It
          represents the calories your body burns for essential functions like
          breathing, circulating blood, and maintaining body temperature.
        </p>
      </div>
      <div className="text-sm md:text-lg">
        <div className="font-medium">
          {`TDEE (Total Daily Energy Expenditure): ${tdee.toLocaleString("en-us", { maximumFractionDigits: 2 })} calories`}
        </div>
        <p className="mt-1 text-sm font-light md:text-base">
          This is an estimate of how many calories you burn per day when
          exercise and activity are factored in. TDEE takes into account not
          only your BMR but also your physical activity levels.
        </p>
      </div>
    </div>
  );
}
