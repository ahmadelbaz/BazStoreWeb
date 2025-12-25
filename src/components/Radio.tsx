interface Props {
  name: string;
  value: string;
  selectedOption: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio({
  name,
  value,
  selectedOption,
  onChange,
}: Props) {
  return (
    <label className="flex gap-4 mb-1.5">
      <input
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={onChange}
        className="hover:cursor-pointer"
      />
      <span className="hover:cursor-pointer">{name}</span>
    </label>
  );
}
