import Image from "next/image";

interface Cards {
  iconURL: string;
  subtext: string;
  label: string;
}

const ServicesCards = ({ iconURL, subtext, label }: Cards) => {
  return (
    <div className="padding flex-1 w-full sm:w-[350px] sm:min-w-[350px]  rounded-[20px]  px-10 py-12 m-4">
      <div className="flex flex-1 justify-center items-center flex-col">
        <Image
          src={iconURL}
          alt="icon"
          width={50}
          height={50}
          className="bg-primaryPink rounded-full p-2 hover:animate-bounce"
        />

        <p className="text-deco pt-3">{label}</p>
        <p className="text-center font-sans leading-normal p-2 text-md">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServicesCards;
