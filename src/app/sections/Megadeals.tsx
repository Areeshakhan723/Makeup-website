import { megaDeal } from "../constent";
import DealsCard from "../component/DealsCard";

const Megadeals = () => {
  return (
    <section className="padding max-container">
      <h1 className="text-5xl font-bold font-sans text-center leading-normal text-[#A31D4B]">
        Mega Deals
      </h1>

      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-5 ">
        {megaDeal.map((deals) => (
          <DealsCard key={deals.name} {...deals} />
        ))}
      </div>
    </section>
  );
};

export default Megadeals;
