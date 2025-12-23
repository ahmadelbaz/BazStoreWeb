import type { FilterType } from "../App";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Side({ setFilteredProducts }: Params) {
  return (
    <section className="hidden min-h-full flex-[0_0_15%] border-r border-r-gray-500 md:flex flex-col p-8 items-center gap-12">
      <section className="flex items-center">
        <h3>BazStore</h3>
      </section>
      <Category setFilteredProducts={setFilteredProducts} />
      <Price setFilteredProducts={setFilteredProducts} />
      <Colors setFilteredProducts={setFilteredProducts} />
    </section>
  );
}
