import Image from "next/image";
import React from "react";

const Photos = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-medium">Photos</h3>
      <p className="opacity-60">
        I immortalize moments, for each memory tells an endless story, wish to keep with all my heart, forever.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
        {[1, 2, 3,4,5,6].map((photo) => (
          <Image
            key={photo}
            width={160}
            height={120}
            src={`/images/photo${photo}.jpg`} 
            alt="photo"
            className="rounded-xl h-32"
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
