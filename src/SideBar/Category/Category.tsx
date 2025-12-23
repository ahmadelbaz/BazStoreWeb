import { useState } from "react";
import type { FilterType } from "../../App";
import Radio from "../../components/Radio";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Category({ setFilteredProducts }: Params) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function changeCategory(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedCategory(event.target.value);
    setFilteredProducts((prev) => ({ ...prev, category: event.target.value }));
  }
  return (
    <section className="flex flex-col">
      <h3 className="mb-4">Category</h3>
      <form>
        <Radio
          name="All"
          value="All"
          selectedOption={selectedCategory}
          onChange={changeCategory}
        />
        <Radio
          name="Sneakers"
          value="sneakers"
          selectedOption={selectedCategory}
          onChange={changeCategory}
        />
        <Radio
          name="Flats"
          value="flats"
          selectedOption={selectedCategory}
          onChange={changeCategory}
        />
        <Radio
          name="Sandals"
          value="sandals"
          selectedOption={selectedCategory}
          onChange={changeCategory}
        />
        <Radio
          name="Heels"
          value="heels"
          selectedOption={selectedCategory}
          onChange={changeCategory}
        />
      </form>
    </section>
  );
}
