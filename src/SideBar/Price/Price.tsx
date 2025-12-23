import { useState } from "react";
import type { FilterType } from "../../App";
import Radio from "../../components/Radio";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Price({ setFilteredProducts }: Params) {
  const [selectedPrice, setSelectedPrice] = useState("All");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedPrice(event.target.value);
    setFilteredProducts((prev) => ({ ...prev, price: event.target.value }));
  }
  return (
    <section className="flex flex-col">
      <h3 className="mb-4">Price</h3>
      <Radio
        name="All"
        value="All"
        selectedOption={selectedPrice}
        onChange={onChange}
      />
      <Radio
        name="$0 - $50"
        value="0-50"
        selectedOption={selectedPrice}
        onChange={onChange}
      />
      <Radio
        name="$50 - $100"
        value="50-100"
        selectedOption={selectedPrice}
        onChange={onChange}
      />
      <Radio
        name="$100 - $150"
        value="100-150"
        selectedOption={selectedPrice}
        onChange={onChange}
      />
      <Radio
        name="$150 - $200"
        value="150-200"
        selectedOption={selectedPrice}
        onChange={onChange}
      />
    </section>
  );
}
