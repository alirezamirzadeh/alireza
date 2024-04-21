"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  img: string;
  url: string;
  urlDemo: string;
  name: string;
  description: string;
}

const SideProjectProduct = (Props: Props) => {
  const router = useRouter();

  const handelGoToDemo = (url: string) => {
    router.push(url);
    console.log(44, url);
  };

  return (
    <div>
      <Link
        href={Props.url} target="_blank"
        className="flex grow cursor-pointer flex-col gap-4 rounded-lg border
     border-gray-200  px-6 py-4 shadow-[0_0_8px_rgba(0,0,0,0.06)] backdrop-blur-lg hover:bg-gray-100
     dark:border-gray-500/30  dark:bg-gray-500/10
      dark:shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:hover:border-gray-700 dark:hover:bg-gray-500/20"
      >
        <div className="flex justify-between">
          <Image
            src={Props.img}
            alt="Alirzea"
            className="rounded-full drop-shadow-xl"
            width={40}
            height={40}
          />
          <div
            className="h-min contrast-50  transition-all  delay-150
         ease-in-out hover:scale-125 hover:dark:contrast-0"
          >
            <Image
              onClick={() => handelGoToDemo(Props.urlDemo)}
              src="/images/icons/link.svg"
              alt="link"
              width={18}
              height={18}
            />
          </div>
        </div>
        <div>
          <p className="font-medium">{Props.name}</p>
          <p className="text-sm opacity-60">{Props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default SideProjectProduct;
