import type { IconType } from "react-icons";
import Card from "../components/Card";

export type ProductType = {
  img: string;
  title: string;
  star: IconType;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
};

interface ProductsParam {
  products: ProductType[];
}

export default function Products({ products }: ProductsParam) {
  return (
    <div className="flex flex-wrap gap-10 justify-center md:justify-start">
      {products.map((product) => (
        <Card key={products.indexOf(product)} product={product} />
      ))}
    </div>
  );
}
