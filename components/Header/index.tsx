"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import UnderLine from "../UnderLine";
import Wizard from "/public/images/wizard.svg";
import { useState } from "react";

const Header = () => {
  const [grab, setGrab] = useState(false);
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;

  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

  const animation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  const handleDragStart = (e) => {
    setGrab(true);
  };

  return (
    <motion.header
      {...animation}
      className={`${pathName === "writing" && "sticky"} top-0 w-full ${
        isHomePage ? "bg-primary ts-color" : "bg-transparent"
      } backdrop-blur-sm  z-50  `}
    >
      <div className=" text-background mx-auto flex py-8 px-5 md:px-20 lg:px-64 w-full items-center">
        <Logo />
        <nav className=" text-background gap-3 md:gap-8 font-normal text-[16px] ml-auto flex items-center justify-center">
          <Image
            onTouchStart={handleDragStart}
            onTouchMove={(e) => e.preventDefault()}
            onDragStart={handleDragStart}
            onDragEnd={() => setGrab(false)}
            draggable
            width={35}
            height={35}
            alt="magic stick"
            src={Wizard}
            className={`peer ${
              grab === true ? "cursor-grabbing" : "cursor-pointer"
            } ${
              pathName === "writng" ? "block" : "hidden"
            }  hover:scale-[2] md:active:scale-[3] z-10 transition-all ease-in-out duration-200 delay-75`}
          />

          {LINKS.map((link) => (
            <Link
              key={link.id}
              className="md:p-2 rounded"
              href={`/${link.path}`}
            >
              <h6 className="relative">
                {link.name}
                {pathName === link.path && <UnderLine />}
              </h6>
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>
      </div>
      <Waves />
    </motion.header>
  );
};
export default Header;
