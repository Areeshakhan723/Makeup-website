import { Buttons } from "@/app/component";
import { rightarrow } from "@/app/assets/icons";

const page = () => {
  return (
    <>
      <div className="bg-backgroundWhite flex justify-center items-center py-10 px-5">
        <div className="bg-white border outline-none flex justify-center items-center flex-col md:h-[500px] h-auto w-full max-w-[500px] p-5 md:w-[500px]">
          <h1 className="flex justify-center text-[#A31D4B] leading-normal font-sans text-4xl font-bold">
            Contect Us
          </h1>
          <p className="text-center mt-3 font-sans">
            Feel free to reach out to us with any questions, feedback, or
            inquiries. We're here to hel
          </p>

          <div className="mt-10 w-full">
            <form className="flex justify-center items-center flex-col w-full ">
              <input
                type="text"
                placeholder="Your name"
                required
                className="border-b-2 border-[#EB89B5] outline-none p-3 m-1 w-full sm:w-[350px]"
              />
              <input
                type="text"
                placeholder="Your Mail"
                required
                className="border-b-2 border-[#EB89B5] outline-none w-full p-3 m-1 sm:w-[350px]"
              />
              <input
                type="text"
                placeholder="Your Message"
                required
                className="border-b-2 border-[#EB89B5] outline-none w-full p-3 m-1 sm:w-[350px]"
              />

              <div className="mt-5">
                <Buttons
                  label={"Submit"}
                  iconURL={rightarrow}
                  showDialog={true}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
