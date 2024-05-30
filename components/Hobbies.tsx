"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const hobbies = [
  { name: "Gift-giving", emoji: "🎁" },
  { name: "Traveling", emoji: "✈️" },
  { name: "Reading books", emoji: "📚" },
  { name: "Painting", emoji: "🎨" },
  { name: "Listening to podcasts", emoji: "🎧" },
  { name: "Being a minimalist", emoji: "🌿" },
  { name: "Planning", emoji: "🗓️" },
  { name: "hike", emoji: "🚶" },
  { name: "jump rope", emoji: "🤸" },
  { name: "Chess", emoji: "♟️" },
  { name: "AI & ML", emoji: "🧠" },
];

const Hobbies = () => {
  useGSAP(() => {
    gsap.from(".hobbys", {
      opacity: 0,

      duration: 4,
      scrollTrigger: {
        trigger: ".hobbys",
      },
    });
  }, []);

  return (
    <div className="flex flex-col  hobbys">
      <span className="my-2  text-lg ">Hobbies and Interests</span>
      <div>
        {hobbies.map((hobby) => (
          <span key={hobby.name} className="opacity-70">
            {hobby.emoji} {hobby.name}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
