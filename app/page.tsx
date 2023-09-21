import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";
import About from "@/components/about";
import Skill from "@/components/skill";
import Project from "@/components/project";
import Testimonial from "@/components/testimonial";
import Contect from "@/components/Contect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-[10rem]">
      <section className="flex flex-col items-center justify-center gap-4 mt-10 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Hi&nbsp;</h1>
          <h1 className={title({ color: "yellow" })}>There,&nbsp;</h1>
          <br />
          <h1 className={title()}>I am Darshit Mistry</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Web Developer | UI Designer
          </h2>
        </div>

        <div className="flex gap-3 items-center">
          <p>Connect Me with</p>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              Coding like poetry should be&nbsp;
              <Code color="primary"> short.</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4">
        <About />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 pt-10">
        <Skill />
      </section>
      <section className="flex flex-col items-center justify-center">
        <Project />
      </section>
      <section className="flex flex-col items-center justify-center ">
        <Testimonial />
      </section>
      </div>
      <section className="flex flex-col items-center justify-center py-[17rem] md:py-[17rem]">
        <Contect />
      </section>
      <Footer/>
    </>
  );
}
