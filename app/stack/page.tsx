import Link from "next/link";
import { SectionTitle } from "../ui/sectionTitle";
import {
  cssSVG,
  expressjsSVG,
  gitSVG,
  javascriptSVG,
  mongoDBSVG,
  nextjsSVG,
  nodejsSVG,
  reactjsSVG,
  tailwindcssSVG,
} from "../ui/svgs";
import { Tag } from "../ui/tag";
import Image from "next/image";
import workspace from "@/public/workspace.jpg";
import monitor from "@/public/monitor.avif";
import keyboard from "@/public/keyboard.avif";
import webcam from "@/public/webcam.avif";
import laptop from "@/public/laptop.png";

export default function Stack() {
  interface skillsDataProps {
    slug: string;
    name: string;
    href: string;
    icon: JSX.Element;
    tag: string;
  }
  const skillsData: skillsDataProps[] = [
    {
      slug: "1",
      name: "javaScript",
      href: "https://javascript.info/",
      icon: javascriptSVG,
      tag: "Programming Language",
    },
    {
      slug: "2",
      name: "tailwindCSS",
      href: "https://tailwindcss.com/",
      icon: tailwindcssSVG,
      tag: "CSS Framework",
    },
    {
      slug: "3",
      name: "React JS",
      href: "https://react.dev/",
      icon: reactjsSVG,
      tag: "JavaScript Library",
    },
    {
      slug: "4",
      name: "Node JS",
      href: "https://nodejs.org/en",
      icon: nodejsSVG,
      tag: "JavaScript Runtime",
    },
    {
      slug: "5",
      name: "Express JS",
      href: "https://expressjs.com/",
      icon: expressjsSVG,
      tag: "Node Framework",
    },
    {
      slug: "6",
      name: "Next JS",
      href: "https://nextjs.org/",
      icon: nextjsSVG,
      tag: "React Framework",
    },
    {
      slug: "7",
      name: "MongoDB",
      href: "https://www.mongodb.com/",
      icon: mongoDBSVG,
      tag: "React Framework",
    },
    {
      slug: "8",
      name: "CSS",
      href: "https://www.w3.org/Style/CSS/",
      icon: cssSVG,
      tag: "Website styles",
    },
    {
      slug: "9",
      name: "Git",
      href: "https://git-scm.com/",
      icon: gitSVG,
      tag: "Version Control",
    },
  ];

  const physicalToolsData = [
    {
      slug: "1",
      name: "HP Y21",
      href: "",
      tag: "screen",
      image: monitor,
    },
    {
      slug: "2",
      name: "Magic keyboard",
      href: "",
      tag: "Keyboard",
      image: keyboard,
    },
    {
      slug: "3",
      name: "Logitech BRIO",
      href: "",
      tag: "Webcam",
      image: webcam,
    },
    {
      slug: "4",
      name: "HP Elitebook",
      href: "",
      tag: "Laptop",
      image: laptop,
    },
  ];

  return (
    <div className="my-10 px-4 lg:w-2/4">
      <div className="my-8 px-2">
        <h1 className="text-2xl capitalize">stack</h1>
        <h2 className="text-[20px] text-[--avt-text-secondary]">
          My skills, Software & physical products I use
        </h2>
      </div>
      <div className="flex w-full justify-center">
        <div className="mr-10 hidden lg:block">
          <SectionTitle>Skills</SectionTitle>
        </div>

        <div className="grid grid-cols-2 items-center gap-3 lg:grid-cols-3">
          {/* Tech skills section. */}
          {skillsData.map((element) => (
            <Link
              target="__blank"
              key={element.slug}
              href={element.href}
              className="flex flex-col items-center rounded-xl bg-[#282828] p-2 shadow-md lg:p-5"
            >
              <span>{element.icon}</span>
              <Tag className="my-2">{element.tag}</Tag>
              <p className="my-2 capitalize">{element.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* workspace section. */}
      <div className="my-10 flex w-full justify-center">
        <div className="mr-2 hidden lg:block">
          <SectionTitle>Workspace</SectionTitle>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="rounded-2xl"
            src={workspace}
            alt="workspace_Img"
          ></Image>
        </div>
      </div>

      {/* Physical */}
      <div className="flex w-full justify-center">
        <div className="mr-10 hidden lg:block">
          <SectionTitle>Physical</SectionTitle>
        </div>

        <div className="grid  grid-cols-2 gap-3">
          {/* Tech skills section. */}
          {physicalToolsData.map((element) => (
            <Link
              target="__blank"
              key={element.slug}
              href={element.href}
              className="flex flex-col items-start rounded-xl bg-[#282828] p-5 shadow-md"
            >
              <Image src={element.image} alt="tool_img"></Image>
              <Tag className="my-2">{element.tag}</Tag>
              <p className="my-2 capitalize">{element.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
