import { Hero, Megadeals, PopularProducts, Services } from "./sections/index";

const page = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="padding-x bg-backgroundWhite">
        <Megadeals />
      </section>
      <section className="bg-backgroundWhite padding">
        <PopularProducts />
      </section>
      <section className="padding bg-backgroundWhite">
        <Services />
      </section>
    </>
  );
};

export default page;
