import { bodyCare } from "@/app/constent";
import { BodyCard } from "@/app/component/index";
import Link from "next/link";

const Page = () => {
  return (
    <section className="bg-bgwhite padding">
      <div className="max-container">
        <h1 className="flex justify-center text-[#A31D4B] leading-normal font-sans text-5xl font-bold">
          Body Care
        </h1>

        <div className="flex justify-between items-center flex-wrap pr-0">
          {bodyCare.map((items, index) => (
            <div key={index}>
              <Link
                href={`/sections/${items.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <BodyCard key={items.name} {...items} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
