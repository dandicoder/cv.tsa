import { navLink } from "@/constants/navLink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  handleHideNav: () => void;
};
function MobileNavbar({ showNav, handleHideNav }: Props) {
  const path = usePathname();

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="w-full h-full z-[1010] lg:hidden">
      {/* overly */}
      <div
        className={`absolute ${navOpen} inset-0 transform transition-all duration-100 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`${navOpen} text-white fixed flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-primary space-y-6 z-[1009]`}
      >
        {/* logo */}
        <Image
          src={"/logo.png"}
          width={40}
          height={40}
          alt={"Logo"}
          className="mx-auto pt-4"
        />
        {navLink.map((link) => {
          return (
            <Link href={link.link} key={link.id} className="text-text">
              <span
                className={
                  path === link.link
                    ? "nav__link__active ml-12"
                    : "nav__link ml-12"
                }
              >
                {link.label}
              </span>
            </Link>
          );
        })}
        <CgClose
          className="absolute top-0 right-2 sm:w-8 sm:h-8 cursor-pointer"
          onClick={handleHideNav}
        />
      </div>
    </div>
  );
}

export default MobileNavbar;
