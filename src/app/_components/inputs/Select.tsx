interface SelectProps {
  selectId: string;
  selectLabel?: string;
  selectValue?: string;
  selectOptions?: {
    value: string | number;
    label: string;
  }[];
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  selectId,
  selectLabel,
  selectValue,
  selectOptions,
  onSelectChange,
}: SelectProps) {
  return (
    <div>
      {selectLabel && (
        <label
          htmlFor={selectId}
          className="block text-xs font-medium leading-6 text-white md:text-sm"
        >
          {selectLabel}
        </label>
      )}
      <div className={selectLabel && "mt-1"}>
        <select
          id={selectId}
          name={selectId}
          onChange={onSelectChange}
          className="block w-full rounded-md border-0 bg-slate-950 py-2.5 text-xs text-white ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-sm"
        >
          {selectOptions?.map((opt, index) => (
            <option
              key={index}
              value={opt.value}
              selected={opt.value === selectValue}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
