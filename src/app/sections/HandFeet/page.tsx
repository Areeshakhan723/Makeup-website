import { handCare } from "@/app/constent";
import { HandFeetCard } from "@/app/component/index";
import Link from "next/link";

const Page = () => {
  return (
    <section className="bg-[rgb(238,236,233)] padding">
      <div className="max-container">
        <h1 className="flex justify-center text-[#A31D4B] leading-normal font-sans text-5xl font-bold">
          Hand & Feet
        </h1>

        <div className="flex justify-between max-md:justify-center items-center flex-wrap pr-0">
          {handCare.map((items, index) => (
            <div key={index}>
              <Link
                href={`/sections/${items.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <HandFeetCard key={items.name} {...items} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
