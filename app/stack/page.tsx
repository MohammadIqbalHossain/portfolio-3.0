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

        <div className="flex flex-wrap items-center justify-center gap-5">
          {skillsData.map((element) => (
            <Link
              key={element.slug}
              href={element.href}
              className="flex w-[150px] flex-col items-center rounded-xl bg-[#282828] p-5"
            >
              <span>{element.icon}</span>
              <Tag className="my-2">{element.tag}</Tag>
              <p className="my-2 capitalize">{element.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
