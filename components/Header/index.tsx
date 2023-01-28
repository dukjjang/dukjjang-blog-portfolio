"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import UnderLine from "../UnderLine";
import Wizard from "/public/images/wizard.png";

import { useEffect, useRef, useState } from "react";
import useTouch from "../../Hooks/useTouch";
import { useScrollDirection } from "../../Hooks/useScrollDirection";

const Header = () => {
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;
  const dragRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);
  const cloneRef = useRef<HTMLElement>(null);
  const [scrolling, setScrolling] = useState(false);

  const scrollDirection = useScrollDirection();
  console.log(pathName.match("studio"));

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setScrolling(true);
    });

    createScrollStopListener(
      window,
      function () {
        setScrolling(false);
      },
      150
    );
  }, []);

  function createScrollStopListener(element, callback, timeout) {
    let handle = null;
    let onScroll = function () {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener("scroll", onScroll);
    return function () {
      element.removeEventListener("scroll", onScroll);
    };
  }

  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

  const { x, y } = useTouch({
    dragRef,
    cloneRef,
    wrapperRef,
  });

  const animation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <motion.header
      id="header"
      ref={wrapperRef}
      {...animation}
      className={`${!isHomePage && "sticky"} ${
        pathName.match("studio") && "hidden"
      } top-0 left-0 w-full ${
        isHomePage ? " bg-primary ts-color" : "bg-transparent"
      } backdrop-blur-sm z-50 ${
        scrolling && !isHomePage && scrollDirection === "down" && "invisible"
      } `}
    >
      <div className=" text-background mx-auto flex py-5 px-5 md:px-20 lg:px-64 w-full items-center">
        <Logo />
        <nav
          id="nav"
          className=" text-background h-14  gap-3 md:gap-8 font-normal text-[16px] ml-auto flex items-center justify-center"
        >
          <i
            id={"wizard-wrapper"}
            ref={dragRef}
            draggable
            className={`peer z-10 ${pathName !== "writing" && "hidden"}`}
          >
            <Image
              id="wizard"
              width={50}
              height={50}
              alt="magic stick"
              src={Wizard}
            />
          </i>
          <i
            id={"wizard-clone-wrapper"}
            ref={cloneRef}
            style={{ top: y, left: x }}
            draggable
            className=" absolute hidden opacity-80 w-20 h-20 z-0"
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
