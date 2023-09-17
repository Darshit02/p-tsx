"use client";
import React from "react";
import { title } from "./primitives";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <div className="text-center ">
        <h1 className={title({ color: "yellow" })}>Blogs</h1>
        <div className="mt-16">
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/images/hero-card.jpeg"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Blog Title</p>
              <Button
                className="text-tiny text-white bg-black/50"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                CheckOut
              </Button>
            </CardFooter>
          </Card>
          <a href="./blog">
            <Button className="mt-10">
              Checkout More
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
                className="lucide lucide-chevrons-right"
              >
                <path d="m6 17 5-5-5-5" />
                <path d="m13 17 5-5-5-5" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;
