import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({
  urlImage,
  title,
  body,
  url
}: {
  urlImage: string;
  title: string;
  body: string;
  url: string
}) {
  return (
    <div className="text-center">
      <Link href={url}>
        {" "}
        <Image
          src={urlImage}
          alt={title}
          width={320}
          height={320}
          className="h-48 w-96 cursor-pointer rounded-lg shadow-xl"
        />
      </Link>
      <p className="mt-3 text-lg">{title}</p>
      <p className="text-sm opacity-70">{body}</p>
    </div>
  );
}

export default Project;
