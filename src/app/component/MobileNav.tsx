import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import { arrow } from "../assets/icons";

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
      {
        label: "Eye Shadow",
        link: "../Makeup/Eyes",
      },
      {
        label: "Foundations & Concelore",
        link: "../Makeup/Face",
      },
      {
        label: "Lipstick",
        link: "../Makeup/Lipsticks",
      },
      {
        label: "NailsPaints",
        link: "../Makeup/Nailpaints",
      },
      {
        label: "Primer & Remover",
        link: "../Makeup/PrimerRemover",
      },
      {
        label: "Liner & Mascare's",
        link: "../Makeup/Liner",
      },
      {
        label: "Accessory",
        link: "../Makeup/Brushes",
      },
    ],
  },
];

const MobileNav = () => {
  return (
    <div className="hidden max-lg:block mt-2">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <nav>
            <ul className="flex mt-10 items-center flex-col gap-6 text-deco">
              <li className="hover:underline">
                <Link href="/">Home</Link>
              </li>

              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    Makeup
                    <Image src={arrow} alt="arrow" height={20} width={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-xl bg-white text-secondary p-3 font-semibold ">
                    {NavItem[0].children?.map((child, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link href={child.link}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li className="hover:underline">
                <Link href={"../sections/SkinCare"}>SkinCare</Link>
              </li>
              <li className="hover:underline">
                <Link href={"../sections/HairCare"}>HairCare</Link>
              </li>
              <li className="hover:underline">
                <Link href={"../sections/HandFeet"}>Hand&Feet</Link>
              </li>
              <li className="hover:underline">
                <Link href={"../sections/BodyCare"}>BodyCare</Link>
              </li>
              <li className="hover:underline">
                <Link href="/sections/Cart">Cart</Link>
              </li>
              <li className="hover:underline">
                <Link href="../sections/ContectUs">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
