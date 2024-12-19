// import { footerLinks } from "../constent";
import logo from "/public/image.png";
import { socialMedia } from "../constent";
import Image from "next/image";
import FooterCard from "../component/FooterCard";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-center max-lg:flex-col flex-wrap gap-20">
        <div className="flex justify-center lg:gap-10 gap-20 flex-wrap">
          <FooterCard />
        </div>

        {/* Vertical line */}
        <div className="flex flex-1 justify-center items-center">
          <div className="max-lg:hidden inline-block h-[270px] min-h-[1em] w-0.5 self-stretch bg-secondary "></div>
          <div className="hidden max-lg:block w-[280px] h-0.5 self-stretch bg-secondary "></div>
        </div>

        {/* Subscribe section*/}
        <div className="text-secondary ">
          <h3 className="font-semibold font-sans text-[20px]">
            Subscribe to our Newsletter
          </h3>
          <p className="text">
            Subscribe to receive updates, access to <br /> exclusive deals, and
            more.
          </p>

          <div className="">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address!"
              className="text-sm p-0 leading-normal mt-3 h-[50px] w-[300px] px-3 rounded-[20px] border-[2px] border-gray-300  active:border-sebg-secondary focus:outline-none "
            />
            <button className="h-[50px] w-[140px] bg-secondary text-white font-bold rounded-[10px] ml-3 text-center active:bg-[#710D46] hover:bg-[#8A123D] focus:outline-none mt-3">
              Subscribe
            </button>
          </div>

          <p className="text">
            By clicking "submit," you agree to receive emails from Beauty <br />
            Cosmetics and accept our web terms of use and privacy and <br />
            cookie policy. *Terms apply.
          </p>
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-start flex-col mt-20">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={30}
          className="cursor-pointer rounded-full bg-transparent"
        />

        <div className="flex items-center gap-3 mt-5">
          {socialMedia.map((icons, index) => (
            <a
              className="flex justify-center items-center rounded-full w-12 h-12 bg-white"
              key={index}
              href={icons.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icons.src}
                alt={icons.alt}
                width={24}
                height={24}
                className="w-8 h-8  rounded-full transition duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

      {/* copyright sign */}
      <div className="flex text-secondary font-bold justify-center items-center mt-10 pb-3 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-center font-sans cursor-pointer gap-2 ">
          <Image
            src={copyrightSign}
            alt="copyright sign"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>
            <i>2024 Areesha Cosmatics. All rights reserved.</i>
          </p>
        </div>
        <p className="font-sans cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
