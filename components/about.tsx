"use client";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import FileDown from "lucide";
import { Tooltip, Button } from "@nextui-org/react";

const About = () => {
  return (
    <div className="text-center">
      <h1 className={title({ color: "yellow" })}>About Me</h1>
      <h2 className={subtitle({})}>
        Every developer should possess a good set of problem-solving skills.
      </h2>
      {/* components */}
      <Card className="mt-10 w-full">
        <CardBody>
          <p>
            I am a passionate and creative web developer with a strong
            foundation in designing and building responsive, user-friendly
            websites. I have very much cleared the basics of React, Tailwind
            CSS, Next.js, TypeScript, and many more. I am a lifelong learner,
            and I am continually expanding my skill set to adapt to the
            ever-evolving landscape of web development.
          </p>
        </CardBody>
      </Card>
      <div className="mt-9">
        {/* Numbers */}
        <div className="flex gap-7 justify-center">
          <div>
            <h1>0 + </h1>
            <p> Experiance</p>
          </div>
          <div>
            <h1>5 + </h1>
            <p> Projects</p>
          </div>
          <div>
            <h1>5 + </h1>
            <p> Languages</p>
          </div>
        </div>
      </div>
      {/* Buttton */}
      <a href="/public/Mistry_Darshit_Resume_08-09-2023-21-31-55.pdf" download>
        <Tooltip
          showArrow
          placement="right"
          content="Dawnload Resume"
          classNames={{
            base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
            arrow: "bg-neutral-400 dark:bg-white",
          }}
        >
          <Button variant="faded" className="mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-file-down"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M12 18v-6" />
              <path d="m9 15 3 3 3-3" />
            </svg>
            <p>Download</p>
          </Button>
        </Tooltip>
      </a>
    </div>
  );
};

export default About;
