import { useState } from "react";
import type { FilterType } from "../../App";
import Radio from "../../components/Radio";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Colors({ setFilteredProducts }: Params) {
  const [selectedColor, setSelectedColor] = useState("All");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedColor(event.target.value);
    setFilteredProducts((prev) => ({ ...prev, color: event.target.value }));
  }
  return (
    <section className="flex flex-col">
      <h3 className="mb-4">Colors</h3>
      <Radio
        name="All"
        value="All"
        selectedOption={selectedColor}
        onChange={onChange}
      />
      <Radio
        name="Black"
        value="black"
        selectedOption={selectedColor}
        onChange={onChange}
      />
      <Radio
        name="Blue"
        value="blue"
        selectedOption={selectedColor}
        onChange={onChange}
      />
      <Radio
        name="Red"
        value="red"
        selectedOption={selectedColor}
        onChange={onChange}
      />
      <Radio
        name="Green"
        value="green"
        selectedOption={selectedColor}
        onChange={onChange}
      />
      <Radio
        name="White"
        value="white"
        selectedOption={selectedColor}
        onChange={onChange}
      />
    </section>
  );
}
