"use client"
import Image from "next/image";
import logo from "/public/image.png";
import { Search, CircleUser } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";


const Topbar = () => {
  const pathName = usePathname();
  return (
    <div className={`${pathName === "/sections/Cart" ? "hidden" : "block" } max-container`}>
      <div className="p-2 flex justify-between items-center border-b-2 border-BorderGrey max-lg:px-3">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={30}
            className="cursor-pointer rounded-full bg-transparent"
          />
        </div>

        {/* input search */}
        <div className="flex w-[500px] px-3 shadow-sm shadow-gray-200 border border-gray-300 gap-3 justify-center bg-white items-center max-lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none w-[500px]"
          />

          <Search className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-3 px-2 ">
          <ShoppingCart className="h-[30px] w-[30px]" />
          <CircleUser className="h-[30px] w-[30px]"/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
