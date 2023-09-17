"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { title } from "./primitives";

const Testimonial = () => {
  return (
    <div className="text-center">
      <h1 className={title({ color: "yellow" })}>Testimonials</h1>
      <div className=" flex flex-col md:flex-row gap-x-5">
      <Card className="max-w-[400px] mt-16 ">
        <CardBody>
          <p>
            I thought it was impossible to make a website as beautiful as our
            product, but Rick proved me wrong.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] mt-16">
        <CardBody>
          <p>
            I've never met a web developer who truly cares about their clients'
            success like Rick does.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] mt-16">
        <CardBody>
          <p>
            After Rick optimized our website, our traffic increased by 50%. We
            can't thank them enough!
          </p>
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default Testimonial;
