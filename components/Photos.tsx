"use client";
import { cx } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
  useGSAP(() => {
    gsap.from("#box-photos", {
      opacity: 0,
      y: -40,
      duration: 2,
      scrollTrigger: {
        trigger: "#box-photos",
      },
    });
    gsap.fromTo(
      ".photo-l",
      {
        scrollTrigger: {
          trigger: "#box-photos",
        },
        opacity: 0,
        duration: 1,
        x: -200,
        stagger: 1,
        y: -100,
      },
      {
        scrollTrigger: {
          trigger: "#box-photos",
        },
        opacity: 1,
        duration: 1,
        x: 0,
        stagger: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".photo-r",
      {
        scrollTrigger: {
          trigger: "#box-photos",
        },
        opacity: 0,
        duration: 1,
        x: 200,
        stagger: 1,
        y: -100,
      },
      {
        scrollTrigger: {
          trigger: "#box-photos",
        },
        opacity: 1,
        duration: 1,
        x: 0,
        stagger: 1,
        y: 0,
      }
    );
  }, []);
  return (
    <div>
      <h3 className="mb-4 text-xl font-medium">Photos</h3>
      <p className="opacity-60">
        I immortalize moments, for each memory tells an endless story, wish to
        keep with all my heart, forever.
      </p>
      <div
        id="box-photos"
        className=" mt-8 grid grid-cols-3 gap-4 max-sm:grid-cols-2 "
      >
        {[1, 2, 3, 4, 5, 6].map((photo) => (
          <Image
            key={photo}
            width={160}
            height={120}
            src={`/images/photo${photo}.jpg`}
            alt="photo"
            className={cx(
              photo % 2 ? "photo-l" : "photo-r",
              "h-32 rounded-xl max-sm:h-40 max-sm:w-auto opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
