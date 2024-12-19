import { Buttons } from "./index";
import Image, { StaticImageData } from "next/image";
import { buy } from "../assets/icons";

interface Card {
  imgURL: string | StaticImageData;
  name: string;
  description: string;
  price: string;
}

const LipstictCard = ({ imgURL, name, description, price }: Card) => {
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

        <div className="flex mt-2 flex-row md:flex-col lg:flex-col xl:flex-col md:px-0.5 w-full max-w-xs">
          <Buttons label={"Buy it Now"} iconURL={buy} />
        </div>
      </div>
    </>
  );
};

export default LipstictCard;
