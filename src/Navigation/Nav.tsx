import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";
import type { FilterType } from "../App";
import SearchBar from "../components/SearchBar";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Nav({ setFilteredProducts }: Params) {
  return (
    <nav className="flex justify-between mb-12 gap-2">
      <SearchBar setFilteredProducts={setFilteredProducts} />
      <section className="flex gap-3 items-center">
        <GrFavorite />
        <CiShoppingCart size={20} />
        <GoPerson />
      </section>
    </nav>
  );
}
