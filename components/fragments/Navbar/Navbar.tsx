import { navLink } from "@/constants/navLink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};
function Navbar({ openNav }: Props) {
  const path = usePathname();

  return (
    <nav className="fixed w-full flex justify-between items-center padding-x py-3 bg-primary shadow-md z-[1009]">
      {/* logo */}
      <div className="flex h-full items-center">
      <Image src={"/logo.png"} width={40} height={40} alt={"Logo"} />
<h1 className="font-bold text-black ml-1">CV. TATA SURYA ABADI</h1>
      </div>

      <div className="hidden lg:flex gap-4 h-[100%] ">
        {navLink.map((link) => {
          return (
            <Link href={link.link} key={link.id} className="text-text">
              <span
                className={
                  path === link.link ? "nav__link__active" : "nav__link"
                }
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
      <HiBars3BottomRight
        className="w-8 h-8 cursor-pointer text-text lg:hidden"
        onClick={openNav}
      />
    </nav>
  );
}

export default Navbar;
