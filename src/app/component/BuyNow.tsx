"use client";
import { buy } from "../assets/icons";
import Image, { StaticImageData } from "next/image";
import { useCart } from "../context/BuyContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"; // Import toast function
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS for styling
import { Bounce } from "react-toastify";

const BuyNow = ({
  product,
}: {
  product: {
    img: string | StaticImageData;
    name: string;
    price: number | string;
    description: string;
  };
}) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent Link propagation
    e.preventDefault(); // Prevent default link behavior if inside a link

    // Add item to cart
    addToCart({ ...product, quantity: 1 });

    // Navigate to payment page
    router.push("/sections/Payment");

     // Show toast message
    toast.success("Enjoy Your Shopping", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="text-center">
      <button
        className="flex justify-center w-full items-center px-2 py-2 text-deco border border-transparent bg-primaryPink mt-2 ml-2 md:ml-0 transition duration-300 hover:scale-110"
        onClick={handleClick}
      >
        Buy it Now
        <Image
          src={buy}
          alt="icon"
          width={25}
          height={25}
          className="ml-2 hover:animate-bounce"
        />
      </button>
    </div>
  );
};

export default BuyNow;
