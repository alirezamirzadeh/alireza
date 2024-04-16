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
      <Image src={urlImage} alt={title} width={640} height={640} className="rounded-lg" />
      <p className="mt-3 text-lg">{title}</p>
      <p className="text-sm opacity-70">{body}</p>
    </div>
  );
}

export default Project;
