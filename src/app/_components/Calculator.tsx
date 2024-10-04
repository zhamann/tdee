import type { Dispatch, SetStateAction } from "react";
import {
  activityLevels,
  gender,
  heightUnits,
  weightUnits,
  type FormData,
} from "../page";
import Number from "./inputs/Number";
import Switch from "./inputs/Switch";
import Select from "./inputs/Select";

interface CalculatorProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  validation?: string;
  setValidation: Dispatch<SetStateAction<string | undefined>>;
  handleCalculate: () => void;
}

export default function Calculator({
  formData,
  setFormData,
  validation,
  setValidation,
  handleCalculate,
}: CalculatorProps) {
  function handleSwitch(name: string, value: string) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    // Regular expression to allow only numbers and at most one decimal point
    const regex = /^[0-9]*\.?[0-9]*$/;

    // Only update state if the input matches the regex
    if (regex.test(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex min-w-96 max-w-md flex-col gap-4 rounded-xl bg-slate-900 p-8 md:gap-6">
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <Switch
          value={formData?.gender}
          options={gender}
          onClick={(value) => handleSwitch("gender", value)}
        />
        <Number
          inputId="weight"
          inputLabel="Weight"
          inputValue={formData?.weight}
          onInputChange={(e) => handleNumber(e)}
          hasSelection
          selectId="weightUnit"
          selectLabel="Weight Unit"
          selectValue={formData?.weightUnit}
          selectOptions={weightUnits.map((unit) => {
            return { value: unit, label: unit };
          })}
          onSelectChange={(e) => handleSelect(e)}
        />
        <Number
          inputId="height"
          inputLabel="Height"
          inputValue={formData?.height}
          onInputChange={(e) => handleNumber(e)}
          hasSelection
          selectId="heightUnit"
          selectLabel="Height Unit"
          selectValue={formData?.heightUnit}
          selectOptions={heightUnits.map((unit) => {
            return { value: unit, label: unit };
          })}
          onSelectChange={(e) => handleSelect(e)}
        />
        <Number
          inputId="age"
          inputLabel="Age"
          inputValue={formData?.age}
          onInputChange={(e) => handleNumber(e)}
        />
        <Select
          selectId="activityLevel"
          selectLabel="Activity Level"
          selectValue={formData?.activityLevel}
          selectOptions={activityLevels.map((level) => {
            return {
              value: level,
              label: level,
            };
          })}
          onSelectChange={(e) => handleSelect(e)}
        />
      </div>
      {validation && <div className="text-xs text-red-500">{validation}</div>}
      <div>
        <button
          onClick={handleCalculate}
          className="w-full rounded-md bg-indigo-600 p-3 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
