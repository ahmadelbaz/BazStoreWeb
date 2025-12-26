import type { FilterType } from "../App";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function SearchBar({ setFilteredProducts }: Params) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilteredProducts((prev) => ({ ...prev, search: event.target.value }));
  }
  return (
    <input
      type="text"
      className="w-28 xs:w-72 h-10 border-2 border-[#333] bg-[#333] rounded-2xl p-4  focus:outline-none focus:border-[#555]"
      placeholder="Enter your search here..."
      onChange={onChange}
    />
  );
}
