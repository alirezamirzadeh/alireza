"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Article({
  slug,
  title,
  date,
}: {
  slug: string;
  title: string;
  date: string;
}) {
  useGSAP(() => {
   gsap.from(".animated-element", {
      opacity: 0,
      y: -40,
      duration: 1,
      scrollTrigger: {
        trigger: ".animated-element",
    
      }
    });


  
  }, []);
  return (
    <Link
      href={"/blog/" + slug}
      className="animated-element border-b border-dashed border-gray-300 pb-2 opacity-60 hover:opacity-90 dark:border-gray-600"
    >
      <h3>{title}</h3>
      <h4 className="text-[15px] opacity-60">{date}</h4>
    </Link>
  );
}
