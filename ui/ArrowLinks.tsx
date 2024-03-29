"use client";

import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSound } from "use-sound";
import { useSettingSound } from "../app/shard/SoundContext";

const ArrowLinks = ({
  nextPath,
  prevPath,
}: {
  nextPath: string | null;
  prevPath: string | null;
}) => {
  const [sound] = useSettingSound();
  const [playClick] = useSound("/sounds/click.mp3", {
    volume: sound === true ? 0.8 : 0,
  });
  return (
    <div className="flex justify-between items-center px-4 py-8 w-full ">
      <Link
        onClick={() => playClick()}
        href={`/writing/${prevPath}`}
        className={`flex items-center group relative w-16 h-10        
        ${prevPath === null && "invisible"}`}
      >
        <BsArrowLeftShort
          size={30}
          className="group-hover:animate-[arrowLeft_1s_ease-in-out_infinite] text-green-400 dark:text-blue-500"
        />
        <h6 className="text-gradient ">prev</h6>
      </Link>

      <Link
        onClick={() => playClick()}
        href={`/writing/${nextPath}`}
        className={`flex items-center group relative w-16 h-10           
        ${nextPath === null && "invisible"}`}
      >
        <h6 className="text-gradient ">next</h6>
        <BsArrowRightShort
          size={30}
          className="group-hover:animate-[arrowRight_1s_ease-in-out_infinite] text-green-400 dark:text-blue-500"
        />
      </Link>
    </div>
  );
};

export default ArrowLinks;
