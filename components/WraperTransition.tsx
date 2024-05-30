"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ReactNode } from "react";

export default function WraperTransition({
  children,
}: {
  children: ReactNode;
}) {
  useGSAP(() => {
    gsap.from(".page", {
      opacity: 0,

      duration: 4,
    });
  }, []);
  return <div className="page">{children}</div>;
}
