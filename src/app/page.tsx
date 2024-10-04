"use client";

import { useState } from "react";
import Calculator from "./_components/Calculator";
import Intro from "./_components/Intro";
import Results from "./_components/Results";
import type {
  gender,
  weightUnits,
  heightUnits,
  activityLevels,
} from "~/utils/constants";

export interface FormData {
  gender: (typeof gender)[number];
  weight?: string;
  weightUnit: (typeof weightUnits)[number];
  height?: string;
  heightUnit: (typeof heightUnits)[number];
  age?: string;
  activityLevel: (typeof activityLevels)[number];
}

export default function HomePage() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    gender: "Male",
    weightUnit: "lbs",
    heightUnit: "in",
    activityLevel: "Sedentary",
  });
  const [validation, setValidation] = useState<string>();
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  function handleCalculate() {
    const {
      gender,
      weight,
      weightUnit,
      height,
      heightUnit,
      age,
      activityLevel,
    } = formData;

    if (!weight || !height || !age) {
      setValidation("Please fill out all missing fields");
      return;
    }
    setValidation(undefined);

    const kg =
      weightUnit === "kg" ? parseFloat(weight) : parseFloat(weight) * 0.453;
    const cm =
      heightUnit === "cm" ? parseFloat(height) : parseFloat(height) * 2.54;

    const updatedBmr = calculateBMR(gender, kg, cm, parseFloat(age));
    setBmr(updatedBmr);
    setTdee(calculateTDEE(updatedBmr, activityLevel));

    setShowResults(true);
  }

  return (
    <main className="flex h-svh flex-col justify-center gap-12 bg-slate-950 py-8 text-white md:flex-row md:justify-start md:gap-0 md:overflow-hidden md:py-0">
      <div
        className={`flex shrink-0 items-center justify-center px-8 transition-transform duration-500 md:h-full md:w-[60svw] md:shrink-0 md:ps-16 ${
          showResults
            ? "hidden md:flex md:-translate-x-full"
            : "md:translate-x-0"
        }`}
      >
        <Intro />
      </div>
      <div
        className={`flex shrink-0 items-center justify-center px-4 transition-transform duration-500 md:h-full md:w-[40svw] md:px-16 ${
          showResults
            ? "hidden md:flex md:-translate-x-[60vw]"
            : "md:translate-x-0"
        }`}
      >
        <Calculator
          formData={formData}
          setFormData={setFormData}
          validation={validation}
          handleCalculate={handleCalculate}
        />
      </div>
      <div
        className={`flex grow items-center justify-center px-8 transition-transform duration-500 md:h-full md:w-[60svw] md:shrink-0 md:pe-16 ${
          showResults
            ? "md:-translate-x-[60vw]"
            : "hidden md:flex md:translate-x-0"
        }`}
      >
        <Results bmr={bmr} tdee={tdee} setShowResults={setShowResults} />
      </div>
    </main>
  );
}

function calculateBMR(
  g: (typeof gender)[number],
  kg: number,
  cm: number,
  age: number,
) {
  // uses Mifflin-St. Jeor equation
  if (g === "Male") {
    return 9.99 * kg + 6.25 * cm - 4.92 * age + 5;
  } else {
    return 9.99 * kg + 6.25 * cm - 4.92 * age - 161;
  }
}

function calculateTDEE(
  bmr: number,
  activityLevel: (typeof activityLevels)[number],
) {
  // uses Katch-McArdle formula
  if (activityLevel === "Sedentary") {
    return bmr * 1.2;
  } else if (activityLevel === "Light (1-2 Days/Week)") {
    return bmr * 1.375;
  } else if (activityLevel === "Moderate (3-5 Days/Week)") {
    return bmr * 1.55;
  } else if (activityLevel === "Heavy (6-7 Days/Week)") {
    return bmr * 1.725;
  } else {
    return bmr * 1.9;
  }
}
