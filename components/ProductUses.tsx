import Image from "next/image";
import React from "react";

function Project({
  urlImage,
  title,
  body,
  
}: {
  urlImage: string;
  title: string;
  body: string;
}) {
  return (
    <div className="text-center">
        <Image
          src={urlImage}
          alt={title}
          width={320}
          height={320}
          className="h-48 w-96 rounded-lg shadow-xl max-sm:h-56 max-sm:w-full"
        />
      <p className="mt-3 text-lg font-bold">{title}</p>
      <p className="text-sm opacity-60">{body}</p>
    </div>
  );
}

export default Project;
