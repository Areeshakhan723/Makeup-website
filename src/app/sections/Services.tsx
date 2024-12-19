import { ServicesCards } from "../component/index";
import { services } from "../constent";

const Services = () => {
  return (
    <section className="max-container">
        <h1 className="text-5xl font-bold font-sans text-center leading-normal text-[#A31D4B]">My Service</h1>

        <div className="flex justify-center items-center flex-wrap">
          {services.map((cards) => (
            <ServicesCards key={cards.label} {...cards}/>
          ))}
        </div>
    </section>
  )
}

export default Services;
