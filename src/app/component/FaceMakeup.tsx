import Image, { StaticImageData } from "next/image";
import BuyNow from "./BuyNow";

interface Card {
  imgURL: string | StaticImageData;
  name: string;
  description: string;
  price: string;
}
const FaceMakeup = ({ imgURL, name, description, price }: Card) => {
  return (
    <>
      <div className="p-0 m-0 overflow-hidden">
        <div>
          <Image
            src={imgURL}
            alt={name}
            width={300}
            height={230}
            className="relative object-cover sm:w-[300px] h-[230px] mt-16 m-0 p-0 transform transition duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="mt-2">
          <h2 className="font-sans font-medium text-lg leading-7 text-black">
            {name}
          </h2>
          <div className="max-lg:w-32 lg:w-40 xl:w-52">
            <p className="font-sans text-sm leading-normal max-lg:truncate max-xl:truncate xl:truncate">
              {description}
            </p>
          </div>
          <p className="font-sans text-sm leading-normal">{price}</p>
        </div>

        {/* Buy Now component */}
        <div className="mt-10">
          <BuyNow
            product={{
              img: imgURL,
              name: name,
              price: price,
              description: description,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FaceMakeup;
