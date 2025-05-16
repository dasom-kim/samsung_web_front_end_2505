export default function TextField({
  label,
  hint,
  value,
  onChange,
  deleteValue,
  ...restProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  deleteValue: () => void
}) {
  return (
    <div>
      <label className="block">
        {label && <span>{label}</span>}
        <input
          className="w-full border-2 border-gray-400"
          {...restProps}
          value={value}
          onChange={onChange}
        />
      </label>
      <button
        className="bg-red-500 text-white"
        onClick={deleteValue}>
        삭제
      </button>
      {hint && <p>{hint}</p>}
    </div>
  )
}
