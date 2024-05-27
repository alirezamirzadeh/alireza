"use clinet";
import React from "react";
import SideProjectProduct from "./SideProjectProduct";

function SideProjects() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-medium">Side-Projects</h3>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <SideProjectProduct
          img={"/images/profile.jpg"}
          url={"/"}
          urlDemo={"/"}
          name={"Alireza"}
          description={"Personal Website"}
        />
        <SideProjectProduct
          img={"/images/Group.png"}
          url={"https://atomichabits.ir/"}
          urlDemo={"https://atomichabits.ir/"}
          name={"Atmoic Habits"}
          description={"a Habit Tracker app"}
        />
        <SideProjectProduct
          img={"/images/logo.png"}
          url={"https://weatherapp-alirezamirzadeh.vercel.app/"}
          urlDemo={"https://weatherapp-alirezamirzadeh.vercel.app/"}
          name={"Weather"}
          description={"a Weather app "}
        />
      </div>
    </div>
  );
}

export default SideProjects;
