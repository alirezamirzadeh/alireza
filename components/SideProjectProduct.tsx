
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideProjectProduct = () => {
  return (
    <Link  href="/" 
      className="flex grow cursor-pointer flex-col gap-4 rounded-lg border
     border-gray-200  px-6 py-4 shadow-[0_0_8px_rgba(0,0,0,0.06)] backdrop-blur-lg hover:bg-gray-100
     dark:border-gray-500/30  dark:bg-gray-500/10
      dark:shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:hover:border-gray-700 dark:hover:bg-gray-500/20"
    >
      <div className="flex justify-between">
        <Image
          src="/images/favicon.png"
          alt="Alirzea"
          className="rounded-full drop-shadow-xl"
          width={40}
          height={40}
        />
        <div  className="h-min contrast-50  transition-all  delay-150
         ease-in-out hover:scale-125 hover:dark:contrast-0">
          <Image
            src="/images/icons/link.svg"
            alt="link"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div>
        <p className="font-medium">Alireza</p>
        <p className="text-sm opacity-60">My Personal Website</p>
      </div>
    </Link>
  );
};

export default SideProjectProduct;
