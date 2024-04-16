import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between gap-2  ">
        <h1 className=" font-mono text-3xl ">
          <span className="opacity-60"> Hi, I&apos;m</span>{" "}
          <span className="font-medium">Alireza!</span>👋
        </h1>
        <Image
          className="cursor-pointer rounded-full  border-2 border-gray-300/70 p-1
         dark:border-gray-600/50"
          src="/images/profile.jpg"
          alt="profile"
          width={100}
          height={100}
        />
      </div>
      <ul className="-mt-2 max-sm:mt-6 ml-4 flex list-disc flex-col gap-2 text-gray-700 dark:text-gray-400">
        <li>Software engineer based in Sirjan(Iran)</li>
        <li>Focus on user experience and performance</li>
        <li>
          Work with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="text-gray-800 underline underline-offset-4 dark:text-white"
          >
            NextJS
          </Link>
          ,{" "}
          <Link
            href="https://react.dev/"
            target="_blank"
            className="text-gray-800 underline underline-offset-4 dark:text-white"
          >
            React
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-gray-800 underline underline-offset-4 dark:text-white"
          >
            Python
          </Link>{" "}
          ...
        </li>
        <li>
          Enjoy creating simple websites with{" "}
          <Link
            href="https://www.framer.com/motion"  
            target="_blank"
            className="text-gray-800 underline underline-offset-4 dark:text-white"
          >
            smooth animations
          </Link>{" "}
        </li>
        <li>Open-Source Lover </li>
        <li>
          Constantly learning and{" "}
          <Link
            href="https://github.com/alirezamirzadeh"
            target="_blank"
            className="text-gray-800 underline underline-offset-4 dark:text-white"
          >
            improving
          </Link>{" "}
          my skills
        </li>
      </ul>
    </div>
  );
};

export default About;
