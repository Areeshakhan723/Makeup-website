"use client";

import { StaticImageData } from "next/image";
import { useCart } from "../context/CartContaxt";

const AddtoCard = ({
  product,
}: {
  product: {
    img: string | StaticImageData;
    name: string;
    price: number | string;
  };
}) => {
  const { addToCart } = useCart();

  const handleCardItems = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="text-center">
      <button
        className="bg-primaryPink text-center text-sm font-medium text-secondary px-5 py-4 hover:bg-Primary transform transition duration-300 hover:scale-110 hover:text-white"
        onClick={handleCardItems}
      >
        Add To Card
      </button>
    </div>
  );
};

export default AddtoCard;
