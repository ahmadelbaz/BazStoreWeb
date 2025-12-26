import { useState } from "react";
import type { FilterType } from "../App";

interface Params {
  setFilteredProducts: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function Recommended({ setFilteredProducts }: Params) {
  const [selectedName, setSelectedName] = useState<string>("");
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
          className={`${
            selectedName === "All" ? "button-selected" : "button-not-selected"
          }`}
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
            selectedName === "Sigma Fit"
              ? "button-selected"
              : "button-not-selected"
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
            selectedName === "Magma Sportswear"
              ? "button-selected"
              : "button-not-selected"
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
            selectedName === "BF sportswear"
              ? "button-selected"
              : "button-not-selected"
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
            selectedName === "LIBRA Sport"
              ? "button-selected"
              : "button-not-selected"
          }`}
        >
          LIBRA Sport
        </button>
      </div>
    </div>
  );
}
