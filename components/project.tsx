"use client";
import React from "react";
import TabS from "./TabS";
import { subtitle, title } from "./primitives";

const Project = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 text-center">
      <h1 className={title({ color: "yellow" })}>Projects</h1>
      <p className={subtitle()}>
        I have Project done in WebDevelopment and some Design In Figma
      </p>
      <div>
      <TabS />
      </div>
    </div>
  );
};

export default Project;
