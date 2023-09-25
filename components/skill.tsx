"use client"
import { title, subtitle } from "@/components/primitives";
import html from "@/public/html.svg"
import css from "@/public/css.svg"
import js from "@/public/js.svg"
import react from "@/public/react.svg"
import node from "@/public/icons8-nodejs.svg"
import tailwind from "@/public/tailwind.svg"
import next from "@/public/icons8-nextjs.svg"
import mongodb from "@/public/icons8-mongodb.svg"
import graph from "@/public/icons8-graphql.svg"
import git from "@/public/icons8-git.svg"
import typeScript from "@/public/typeScript.png"

import React from 'react'
import Image from "next/image";

const Skill = () => {
    const skill = [
        {
            icon : html,
            name : "Html",
        },
        {
            icon : css,
            name : "CSS",
        },
        {
            icon : js,
            name :"JavaScript" ,
        },
        {
            icon : react ,
            name : "React.js",
        },


        {
            icon : tailwind,
            name : "Tailwind CSS" ,
        },
        {
            icon : node ,
            name :"Node.js",
        },
        {
            icon : next ,
            name : "Next.js",
        },


        {
            icon : mongodb,
            name : "MongoDB" ,
        },
        {
            icon : typeScript,
            name : "TypeScript"
        },
        {
            icon : graph,
            name :"GraphQl" ,
        },
        {
            icon : git,
            name : "GitHub"
        }

    ]
  return (
    <div className="flex  flex-col justify-center text-center items-center gap-4">
        <h1 className={title({color : "yellow"})}>
            Skills
        </h1>
        <p className={subtitle()}>Developer skills are often applied to the non-design aspects of building websites – writing markup and coding.</p>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-10 mt-10">
        {
            skill.map((item) => (
                <>
                <div className="flex flex-col justify-center items-center gap-3 ">
                <Image height={50} width={50}  src={item.icon} alt="icon"/>  
                <p className="text-gray-400 dark:text-gray-600">{item.name}</p>
                </div> 
                </>
            ))
        }
        </div>
    </div>
  )
}

export default Skill