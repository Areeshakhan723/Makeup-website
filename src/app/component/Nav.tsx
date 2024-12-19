"use client";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { arrow } from "../assets/icons";
import { socialMedia } from "../constent";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItems = {
  label: string;
  link: string;
  children?: NavItems[];
};

const NavItem: NavItems[] = [
  {
    label: "Makeup",
    link: "#",
    children: [
      { label: "Eye Shadow", link: "../Makeup/Eyes" },
      { label: "Foundations & Concealers", link: "../Makeup/Face" },
      { label: "Lipstick", link: "../Makeup/Lipsticks" },
      { label: "Nail Paints", link: "../Makeup/Nailpaints" },
      { label: "Primer & Remover", link: "../Makeup/PrimerRemover" },
      { label: "Liner & Mascaras", link: "../Makeup/Liner" },
      { label: "Accessory", link: "../Makeup/Brushes" },
    ],
  },
];

const Nav = () => {
  return (
    <>
      <header className="xl:px-4 max-xl:px-2 bg-white z-10 w-full">
        <nav className="max-container flex justify-between items-center">
          <ul className="flex p-2 justify-between gap-6 max-xl:gap-4 text-deco max-lg:hidden">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>

            <li className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 hover:underline">
                    Makeup
                    <Image src={arrow} alt="arrow" height={20} width={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 text-xl bg-white text-secondary p-3 font-semibold shadow-lg">
                  {NavItem[0].children?.map((child, index) => (
                    <DropdownMenuItem key={index}>
                      <Link href={child.link}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="hover:underline">
              <Link href="/sections/SkinCare">SkinCare</Link>
            </li>
            <li className="hover:underline">
              <Link href="/sections/HairCare">HairCare</Link>
            </li>
            <li className="hover:underline">
              <Link href="/sections/HandFeet">Hand&Feet</Link>
            </li>
            <li className="hover:underline">
              <Link href="/sections/BodyCare">BodyCare</Link>
            </li>
            <li className="hover:underline">
              <Link href="/sections/Cart">Cart</Link>
            </li>
            <li className="hover:underline">
              <Link href="/sections/ContectUs">Contact Us</Link>
            </li>
          </ul>

          <div className="hidden lg:flex justify-between items-center gap-5 mt-5">
            {socialMedia.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between flex-row items-center gap-1"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="w-8 h-8 bg-slate-100 mb-2 rounded-full transition duration-300 hover:scale-110"
                />
                {icon.text && (
                  <p className="hidden xl:block text-[16px] text-gray-600 font-medium">
                    {icon.text}
                  </p>
                )}
              </a>
            ))}
          </div>

          <MobileNav />
        </nav>
      </header>
    </>
  );
};

export default Nav;
