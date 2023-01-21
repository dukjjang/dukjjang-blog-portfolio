"use client";

import Link from "next/link";
import Logo from "../Logo";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="transition-colors ease-in-out duration-1000 top-0 w-full text-black bg-primary backdrop-blur-sm z-50 ">
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 1 }}
        className=" mx-auto flex py-8 px-5 md:px-64 w-full items-center"
      >
        <Logo />
        <nav className=" gap-3 md:gap-8 font-normal text-[14px] ml-auto flex items-center  justify-center">
          <Link href="/writing">
            <h6>Writing</h6>
          </Link>
          <Link href="/contact">
            <h6>Contact</h6>
          </Link>
          <ThemeToggleButton />
        </nav>
      </motion.div>
    </header>
  );
};
export default Header;
