import React from 'react'
import cross from "@/public/cross.png"
import air from "@/public/air.png"
import game from "@/public/game.png"
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from 'next/image'

const Design = () => {
    const UI = [
        {
          name: "Cross Air",
          description:
            "This is Bassically a Creoss air new Launch Gaming RGB mouse , I was copy that a redesign that Landing page",
          tags: [
            {
              name: "Figma",
              color: "blue-text-gradient",
            },
          ],
          image: cross,
          teach : "Figma",
          source_code_link: "https://www.figma.com/community/file/1273658654095172729/cross-air",
        },
        {
          name: "Nike Air Max 3",
          description:
            "A Nike air max 3 presantation page was basically used for presant thair new sport design",
          tags: [
            {
              name: "Figma",
              color: "blue-text-gradient",
            },
            {
              name: "Adobe Xd",
              color: "Pink-text-gradient",
            },
          ],
          image: air,
          teach :" figma | AdobeXD",
          source_code_link:
            "https://www.figma.com/community/file/1273659050188884091/Nike-Air-MAX",
        },
        {
          name: "Gaming Controller",
          description:
            "A Gaming controller was controll that design that gradients and other thing, a dual sence controller was good thing.",
          tags: [
            {
              name: "Figma",
              color: "blue-text-gradient",
            },
          ],
          image: game,
          teach : "Figma",
          source_code_link:
            "https://www.figma.com/community/file/1273658877003432058/GamingConsole",
        },
      ];
  return (
    <div className='grid grid-cols-2  gap-5 md:grid-cols-3 xl:grid-cols-3'>
      {
        UI.map((item) => (
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
            <small className="text-default-500 mb-4">{item.teach}</small>
            <h4 className="font-bold text-large">{item.description}</h4>
            <a href={item.source_code_link} className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
            </a>
          </CardBody>
        </Card>
        </>
        ))
      }
    </div>
  )
}

export default Design