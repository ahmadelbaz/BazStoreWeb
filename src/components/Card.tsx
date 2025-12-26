import { useEffect, useRef } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import type { ProductType } from "../Products/Products";

interface NewProduct {
  product: ProductType;
}

export default function Card({ product }: NewProduct) {
  const ref = useRef<HTMLDivElement>(null);

  const strangeData: [string, boolean] = ["Ahmad", Boolean(0)];

  console.log(strangeData);

  const Star = product.star;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let fontSize = 18; // start large
    el.style.fontSize = fontSize + "px";

    while (el.scrollWidth > el.clientWidth && fontSize > 10) {
      fontSize -= 1;
      el.style.fontSize = fontSize + "px";
    }
  }, [product.title]);
  return (
    <div className="flex flex-col border justify-center border-gray-500 w-56 sm:w-75 p-8 gap-y-3 rounded-lg hover:scale-105 transition-all">
      <div>
        <img
          src={product.img}
          alt={product.title}
          width={200}
          className="h-32 object-contain"
        />
      </div>
      <h3 className="w-full whitespace-nowrap overflow-hidden" ref={ref}>
        {product.title}
      </h3>
      <div className="flex items-center">
        <Star className="col" />
        <Star className="col" />
        <Star className="col" />
        <Star className="col" />
        <p className="ps-2">{product.reviews}</p>
      </div>
      <div className="flex justify-between">
        <p>
          <span className="line-through"> {product.prevPrice}</span>
          {`  ${product.newPrice}`}
        </p>
        <HiShoppingCart />
      </div>
    </div>
  );
}
