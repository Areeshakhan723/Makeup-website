import Image from "next/image";
import { StaticImageData } from "next/image";

interface DealsCardProps {
  name: string;
  imgURL: string | StaticImageData;
  originalPrice: string;
  offer: string;
  description: string;
  dealDuration: string;
}

const DealsCard = ({
  name,
  imgURL,
  originalPrice,
  offer,
  description,
  dealDuration,
}: DealsCardProps) => {
  return (
    <div className="flex items-center p-0 m-0 mt-4 flex-col w-[40] h-[50]">
      <Image
        src={imgURL}
        alt={name}
        width={500}
        height={500}
        className="object-cover px-0 py-0"
      />

      <p className="font-sans text-md leading-normal text-center mt-2">
        {offer}
      </p>
      <p className="font-sans text-md leading-normal text-center">
        {originalPrice}
      </p>
      <p className="font-sans font-semibold leading-normal text-center text-[#A31D4B] ">
        {dealDuration}
      </p>
      <p className="font-sans text-sm leading-normal text-center">
        {description}
      </p>
    </div>
  );
};

export default DealsCard;
