import Project from "@/components/Project";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="mt-28">
      <p className="mb-6 text-xl font-medium ">Projects</p>
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-14">
        {[1, 2, 3, 4, 5].map((project) => (
          <Project
            title="Alireza"
            body={"Music recommendation app for iOS" }
            urlImage={"/images/photo1.jpg"}
            key={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
