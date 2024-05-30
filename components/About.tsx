"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  useGSAP(() => {
    gsap.from("#title", { opacity: 0, duration: 1, y: -20 });
    gsap.to("#hand", {
      rotation: 45,
      duration: 1,
      yoyo: true,
      repeat: -1,
      delay: 1,
      ease: "power1.inOut"
    });
    gsap.from(".item", { opacity: 0, duration: 1, stagger: 0.2 });

    gsap.to("#profile", {
      boxShadow: "0px 0px 12px -4px #FFDB70",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between gap-2  ">
        <h1 className=" font-mono text-3xl flex gap-4 flex-wrap" id="title">
          <span className="opacity-60"> Hi, I&apos;m</span>{" "}
          <span className="font-medium">Alireza!</span>
          <div id="hand">👋</div>
        </h1>
        <Image
          id="profile"
          className="cursor-pointer rounded-full  border-2 border-gray-300/70 p-1
         dark:border-gray-600/50"
          src="/images/profile.jpg"
          alt="profile"
          width={100}
          height={100}
        />
      </div>
      <ul className="-mt-2 ml-4 flex list-disc flex-col gap-2 text-gray-700 dark:text-gray-400 max-sm:mt-6">
        <li className="item">Software engineer based in Sirjan(Iran)</li>
        <li className="item">Focus on user experience and performance</li>
        <li className="item">
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
        <li className="item">
          Enjoy creating simple websites with{" "}
          <Link
            href="https://gsap.com/"
            target="_blank"
            className="text-gray-800 underline underline-offset-4 dark:text-white"
          >
            smooth animations
          </Link>{" "}
        </li>
        <li className="item">Open-Source Lover </li>
        <li className="item">
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
