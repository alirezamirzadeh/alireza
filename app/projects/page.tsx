import Project from "@/components/Project";
import WraperTransition from "@/components/WraperTransition";
import React from "react";

const ProjectsPage = () => {
  return (
    <WraperTransition>

    <div className="mt-28">
      <p className="mb-6 text-xl font-medium ">Projects</p>
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-14">
        <Project
          title="Alireza"
          body={"Personal Website Made by Next.js"}
          urlImage={"/images/alireza.jpg"}
          url="/"
        />
         <Project
          title="Atomic Habits"
          body={"Habit Tracker app Made by Next.js"}
          urlImage={"/images/atomichabits.png"}
          url="https://atomichabits.ir/"
          
        />
        <Project
          title="Weather app"
          body={"Weather app Made by SvelteKit"}
          urlImage={"/images/weather.jpg"}
          url="https://weatherapp-alirezamirzadeh.vercel.app/"
          
        />
      </div>
    </div>
    </WraperTransition>

  );
};

export default ProjectsPage;
