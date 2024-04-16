import Project from "@/components/Project";
import React from "react";

const UsesPage = () => {
  return (
    <div className="mt-28">
      <div className="opacity-75">
        I've been spending hours and hours at my desk every day. So, I've been
        continuously improving my workspace in order to boost my productivity.
        
      </div>
      <div className='max-sm:grid-cols-1 grid grid-cols-2 gap-6 mt-8 '>
        {[1, 2, 3, 4, 5].map((project) => (
          <Project
            title="MacBook Air M1"
            body={"Laptop Computer" }
            urlImage={"/images/macbook-air.jpg"}
            key={project}
            
          />
        ))}
      </div>
    </div>
  );
};

export default UsesPage;
