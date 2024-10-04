export default function Intro() {
  return (
    <div className="flex flex-col justify-center gap-4 text-center md:justify-start md:text-start">
      <div className="text-5xl font-semibold md:text-6xl">
        Total Daily <span className="text-indigo-500">Energy</span> Expenditure
        (TDEE)
      </div>
      <div className="text-sm font-light md:text-lg">
        Calculate the total calories your body burns daily, including energy for
        basic functions, physical activity, and digestion. It varies based on
        factors like age, gender, weight, height, and activity level. This
        calculator estimates TDEE to help you determine their ideal calorie
        intake for maintaining, losing, or gaining weight.
      </div>
    </div>
  );
}
