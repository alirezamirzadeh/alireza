import React from "react";
import Line from "./Line";
import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  { name: "dribble", url: "/" },
  { name: "email", url: "/" },
  { name: "github", url: "/" },
  { name: "linkdin", url: "/" },
  { name: "telegram", url: "/" },
];

const Footer = () => {
  return (
    <div className="my-10 max-sm:px-4 ">
      <Line />
      <div className="flex items-center justify-between gap-4 max-sm:flex-col " >
        <span className="flex gap-1 opacity-50 dark:opacity-20  ">
          Follow Me :)
        </span>
        <div className="flex gap-6 opacity-50 dark:contrast-50 ">
          {socialMedia.map((item) => (
            <Link href={item.url} key={item.name}>
              <Image
                src={`/images/icons/${item.name}.svg`}
                alt={item.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
