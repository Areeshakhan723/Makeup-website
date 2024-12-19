import { hairCare } from "@/app/constent";
import { HairCard } from "@/app/component/index";
import Link from "next/link";

const Page = () => {
  return (
    <section className="bg-backgroundWhite padding ">
      <div className="max-container">
        <h1 className="flex justify-center text-[#A31D4B] leading-normal font-sans text-5xl font-bold">
          Hair Care
        </h1>

        <div className="flex justify-between items-center flex-wrap pr-0">
          {hairCare.map((items, index) => (
            <div key={index}>
              <Link
                href={`/sections/${items.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <HairCard key={items.name} {...items} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
