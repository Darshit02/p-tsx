"use client";

import { title } from "./primitives";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contect = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_v8ht3bu",
        "template_3s2og8y",
        {
          form_name: form.name,
          to_name: "darshit",
          from_email: form.email,
          to_email: "darshitmistry2@gmail.com",
          message: form.message,
        },
        "XIUVZ0gQj3uAWi3Gx"
      )
      .then(
        () => {
          setLoading(false);
          alert("ThankYou,I will get back to you as soon as Posible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("something want wrong");
        }
      );
  };
  return (
    <div className="w-full text-center">
      <h1 className={title({ color: "yellow" })}>Contect</h1>
      <div className="mt-10  ">
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="w-full h-full gap-5 flex flex-col"
        >
          <Input
            onChange={handleChange}
            value={form.name}
            name="name"
            type="name"
            placeholder="DarshitMistry"
            labelPlacement="outside"
            startContent={
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
                className="lucide lucide-mail text-2xl text-default-400 pointer-events-none flex-shrink-0"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            }
          />
          <Input
            onChange={handleChange}
            value={form.email}
            name="email"
            type="email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
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
                className="lucide lucide-mail text-2xl text-default-400 pointer-events-none flex-shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
            <Textarea
            onChange={handleChange}
      labelPlacement="outside"
      placeholder="Enter your description"
    />
          <Button className="bg-yellow-300 text-black/80 text-md font-bold" type="submit">
            {loading ? "sending..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
