"use client";
import { useParams } from "next/navigation";
import { allmakeupProducts } from "@/app/constent/index";
import Image from "next/image";
import Link from "next/link";
import AddtoCard from "@/app/component/AddToCart";
import Product from "../Product";
const Page = () => {
  const { slug } = useParams();
  const products = allmakeupProducts.find(
    (items) => items.name.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!products) {
    return <div>Product Not Found</div>;
  }

  let productPrice: number = NaN;

  if (typeof products.price === "string") {
    productPrice = parseFloat(products.price.replace(/[^0-9.-]+/g, ""));
  } else if (typeof products.price === "number") {
    productPrice = products.price;
  }

  // If productPrice is still NaN, handle it appropriately
  if (isNaN(productPrice)) {
    return <div>Error: Invalid price format</div>;
  }

  return (
    <>
      <div className="max-container pt-14 padding">
        <div className="flex justify-start items-start gap-24 max-lg:flex-col">
          <div>
            <Image
              src={products.imgURL}
              alt={`product${products.name}`}
              width={300}
              height={300}
              priority
              className="w-auto h-auto bg-white"
            />
          </div>
          <div className="flex justify-start items-start flex-col">
            <div className="flex justify-center flex-col">
              <h1 className="text-2xl text-black tracking-wide">
                {products.name}
              </h1>
              <p className="max-w-[500px] mt-5 text-gray-600">
                {products.description}
              </p>
              <p className="text-lg mt-2 text-black tracking-wide">
                {products.price}
              </p>
            </div>
            <div className="mt-10">
              <Link href="/sections/Cart">
                <AddtoCard
                  product={{
                    img: products.imgURL,
                    name: products.name,
                    price: products.price,
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <h1 className="text-black text-center text-[30px] max-sm:text-[24px]">
            You might also like
          </h1>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Page;
