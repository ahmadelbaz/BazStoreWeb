import { useState } from "react";
import type { FilterType } from "../App";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Recommended({ setFilteredProducts }: Params) {
  const [selectedName, setSelectedName] = useState<String>("");
  return (
    <div className="mb-8">
      <h3 className="mb-4">Recommended</h3>
      <div className=" flex gap-2 flex-wrap">
        <button
          onClick={() =>
            setFilteredProducts((prev) => {
              setSelectedName("All");

              return { ...prev, companyName: "All" };
            })
          }
          className=""
        >
          All Products
        </button>
        <button
          onClick={() =>
            setFilteredProducts((prev) => {
              setSelectedName("Sigma Fit");
              return {
                ...prev,
                companyName: "Sigma Fit",
              };
            })
          }
          className={`${
            selectedName === "Sigma Fit" ? "border-2" : "border-0"
          }`}
        >
          Sigma Fit
        </button>
        <button
          onClick={() =>
            setFilteredProducts((prev) => {
              setSelectedName("Magma Sportswear");

              return { ...prev, companyName: "Magma Sportswear" };
            })
          }
          className={`${
            selectedName === "Magma Sportswear" ? "border-2 " : "border-0"
          }`}
        >
          Magma Sportswear
        </button>
        <button
          onClick={() =>
            setFilteredProducts((prev) => {
              setSelectedName("BF sportswear");

              return { ...prev, companyName: "BF sportswear" };
            })
          }
          className={`${
            selectedName === "BF sportswear" ? "border-2" : "border-0"
          }`}
        >
          BF sportswear
        </button>
        <button
          onClick={() =>
            setFilteredProducts((prev) => {
              setSelectedName("LIBRA Sport");

              return { ...prev, companyName: "LIBRA Sport" };
            })
          }
          className={`${
            selectedName === "LIBRA Sport" ? "border-2" : "border-0"
          }`}
        >
          LIBRA Sport
        </button>
      </div>
    </div>
  );
}
