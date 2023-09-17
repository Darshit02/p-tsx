import React from 'react'
import thread from '@/public/thread.png'
import fitapp from '@/public/fitapp.png'
import racipe from '@/public/recipe.png'
import promptopia from '@/public/prompt.png'
import blog from '@/public/blog.png'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from 'next/image'
import git from '@/public/com_.png'
import { Github } from 'lucide'

const Web = () => {
  const projects = [
    {
      name: "Thread Cloan",
      description:
        "Threads is an online social media and social networking service operated by Meta Platforms. The app offers users the ability to post and share text",
      tags: [
        {
          name: "Next",
          
        },
        {
          name: "mongodb",
         
        },
        {
          name: "tailwind",
          
        },
        {
          name: "Clerk",
          
        },
      ],
      teach :" Next.js | React.js | MongoDb | mongoose | TailwindCss | Clerk | UploadThings",
      image: thread,
      icon :  git,
      source_code_link: "https://github.com/Darshit02/Thread-cloan",
    },
    {
      name: "Finess App",
      description:
        "A fitness app is an application that can be Use on any mobile device and used anywhere to get fit. ",
      tags: [
        {
          name: "react",
          
        },
        {
          name: "Tailwind",
          
        },
        {
          name: "Matirial UI",
          
        },
      ],
      teach : " React.js | Matirial Ui | RapidApi",
      image: fitapp,
      icon :  git,
      source_code_link: "https://github.com/Darshit02/Fitness_App",
    },
    {
      name: "Recipe",
      description:
        " This feature provides a complete description of the selected recipes. There is a link for every recipe.",
      tags: [
        {
          name: "Reactjs",
        
        },
        {
          name: "Spoonacular Api",
          
        },
        {
          name: "Styled Components",
          
        },
        
      ],
      teach : " React.js | Spoonacular API | styled-components",
      image: racipe,
      icon :  git,
      source_code_link: "https://github.com/Darshit02/Recipes-App",
    },
    {
      name: "Promptopia",
      description:
        "Share Your thought with world using propmts That is basically ba MERN stack app using google cloud service",
      tags: [
        {
          name: "Next.js",
          
        },
        {
          name: "MongoDB",
          
        },
        {
          name: "Google Cloud",
          
        },
        {
          name: "Node.js",
         
        },
        
      ],
      teach : "Next.js | React.js | TailwindCss | NextAuth | MOngoDB | NodeJs ",
      image: promptopia,
      icon :  git,
      source_code_link: "https://github.com/Darshit02/Prompts",
    },
  {
    name: "Blog-App",
    description:
      "The Blog app was using Next.js with Tailwind Css are awsome. used that for daily reading and Teach related Blog",
    tags: [
      {
        name: "Next.js",
       
      },
      {
        name: "GraphQl",
       
      },
      {
        name: "GraphCMS",
        
      },
      
    ],
    teach : "Next.js | Graphql | GraphCMS | React.js | TailwindCSS ",
    image: blog,
    icon :  git,
    source_code_link: "https://github.com/Darshit02/Blog_App",
  },
  ];
  
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-3 '>
      {
        projects.map((item) => (
          <>
          <Card className="py-4 w-full h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              {item.name}
            </p>
            
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl mb-5"
              src={item.image}
              width={270}
            />
            <small className="text-default-500 mb-2">{item.teach}</small>
            <h4 className="font-bold text-large">{item.description}</h4>
            <a href={item.source_code_link} className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </CardBody>
        </Card>
        </>
        ))
      }
    </div>
  )
}

export default Web