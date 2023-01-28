"use client";

import { useTheme } from "next-themes";
import useSound from "use-sound";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [play] = useSound("/sounds/bulb.mp3", { volume: 0.2 });

  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    play();
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-all ease-in-out group md:active:translate-y-3 inline-flex 
      items-center border-0 p-1 rounded text-orange-400 dark:text-yellow-400
        md:hover:scale-150 text-blue dark:hover:text-yellow-500 relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="dark:hidden block w-6 h-6  "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 
          18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
          12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hidden dark:block w-6 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 
          0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 
          21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;