import { Faceitems } from "../../constent";
import FaceMakeup from "../../component/FaceMakeup";
import Link from "next/link";
const page = () => {
  return (
    <section className="bg-[rgb(238,236,233)] padding padding-l padding-r">
      <div className="max-container">
        <h1 className="flex justify-center text-[#A31D4B] leading-normal font-sans text-5xl font-bold">
          Face
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-0 justify-items-center">
          {Faceitems.map((items, index) => (
            <div key={index}>
              <Link
                href={`/Makeup/${items.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <FaceMakeup key={items.name} {...items} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
