interface SwitchProps {
  value?: string;
  options: readonly string[];
  onClick: (value: string) => void;
}

export default function Switch({ value, options, onClick }: SwitchProps) {
  return (
    <div className="flex divide-x divide-slate-700 overflow-hidden rounded-md border-2 border-slate-700 text-xs font-semibold text-white md:text-sm">
      {options.map((opt, index) => (
        <button
          key={index}
          onClick={() => onClick(opt)}
          className={`flex grow basis-0 items-center justify-center py-3 ${opt === value ? "bg-indigo-600" : "bg-slate-950"}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
