import { products } from "../constent";
import ProductCard from "../component/ProductCard";
import Link from "next/link";

const product = () => {
  return (
    <div className="padding-x max-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pr-0 max-md:justify-items-center">
        {products.map((items, index) => (
          <div key={index}>
            <Link
              href={`/Makeup/${items.name.toLowerCase().replace(/ /g, "-")}`}
            >
              <ProductCard key={items.name} {...items} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default product;
