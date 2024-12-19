import { products } from "../constent";
import ProductCard from "../component/ProductCard";
import Link from "next/link";

const PopularProducts = () => {
  return (
    <div className="padding-x">
      <h1 className="mt-0 flex justify-center text-[#A31D4B] leading-normal font-sans text-5xl font-bold">
        New Arrivals
      </h1>
      <div className="padding-x max-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pr-0 max-md:justify-items-center">
          {products.map((items, index) => (
            <div key={index}>
              <Link
                href={`/sections/${items.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <ProductCard key={items.name} {...items} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
