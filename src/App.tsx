import { useMemo, useState } from "react";
import Content from "./Content/Content";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Side from "./SideBar/Side";
import data from "./db/db";

export type FilterType = {
  search: string;
  companyName: string;
  category: string;
  price: string;
  color: string;
};

export default function App() {
  const [products, setProducts] = useState(data);

  const [filter, setFilter] = useState<FilterType>({
    search: "",
    companyName: "All",
    category: "All",
    price: "All",
    color: "All",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searcFilter =
        filter.search === "" ||
        product.title.toLowerCase().includes(filter.search);

      const companyNameFilter =
        filter.companyName === "All" || product.company === filter.companyName;

      const categoryFilter =
        filter.category === "All" || product.category === filter.category;

      const priceFilter =
        filter.price === "All" ||
        (filter.price === "0-50"
          ? Number(product.newPrice) >= 0 && Number(product.newPrice) <= 50
          : filter.price === "50-100"
          ? Number(product.newPrice) > 50 && Number(product.newPrice) <= 100
          : filter.price === "100-150"
          ? Number(product.newPrice) > 100 && Number(product.newPrice) <= 150
          : Number(product.newPrice) > 150 && Number(product.newPrice) <= 200);
      const colorFilter =
        filter.color === "All" || product.color === filter.color;

      return (
        searcFilter &&
        companyNameFilter &&
        categoryFilter &&
        priceFilter &&
        colorFilter
      );
    });
  }, [filter]);

  return (
    <div className="flex flex-wrap min-h-full justify-center w-full">
      <Side setFilteredProducts={setFilter} />
      <Content
        children={
          <>
            <Nav setFilteredProducts={setFilter} />
            <Recommended setFilteredProducts={setFilter} />
            <Products products={filteredProducts} />
          </>
        }
      />
    </div>
  );
}
