import { lipsticks } from "../../constent";
import LipstickCard from "../../component/LipstickCard";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[rgb(238,236,233)] padding">
      <div className="max-container">
        <h1 className="mt-0 flex justify-center text-[#A31D4B] leading-normal font-sans text-5xl font-bold">
          Lipsticks
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-0 justify-items-center">
          {lipsticks.map((items,index) => (
            <div key={index}>
              <Link
                href={`/Makeup/${items.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <LipstickCard key={items.name} {...items} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
