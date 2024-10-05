interface NumberProps {
  inputId: string;
  inputLabel?: string;
  inputValue?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasSelection?: boolean;
  selectId?: string;
  selectLabel?: string;
  selectValue?: string;
  selectOptions?: {
    value: string | number;
    label: string;
  }[];
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Number({
  inputId,
  inputLabel,
  inputValue,
  onInputChange,
  hasSelection = false,
  selectId,
  selectLabel,
  selectValue,
  selectOptions,
  onSelectChange,
}: NumberProps) {
  return (
    <div>
      {inputLabel && (
        <label
          htmlFor={inputId}
          className="block text-xs font-medium leading-6 text-white md:text-sm"
        >
          {inputLabel}
        </label>
      )}
      <div className={`relative rounded-md ${inputLabel && "mt-1"}`}>
        <input
          id={inputId}
          name={inputId}
          type="text"
          placeholder="0.0"
          value={inputValue}
          onChange={onInputChange}
          inputMode="decimal"
          className={`block w-full rounded-md border-0 bg-slate-950 py-2.5 ${hasSelection && "pr-20"} text-xs text-white ring-1 ring-inset ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-sm`}
        />
        {hasSelection && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            {selectLabel && (
              <label htmlFor={selectId} className="sr-only">
                {selectLabel}
              </label>
            )}
            <select
              id={selectId}
              name={selectId}
              onChange={onSelectChange}
              className="h-full rounded-md border-0 bg-transparent py-0 pl-3.5 pr-7 text-xs text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-sm"
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
        )}
      </div>
    </div>
  );
}
