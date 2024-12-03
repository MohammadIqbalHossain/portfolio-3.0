import Link from "next/link";
import { SectionTitle } from "../ui/sectionTitle";

import { Tag } from "../ui/tag";
import Image from "next/image";
import workspace from "@/public/workspace.jpg";
import { physicalToolsData, skillsData } from "../lib/placeholder-data";
import PageHeader from "../ui/pageHeader";

export default function Stack() {
  return (
    <div className="my-10 px-4 lg:w-2/4">
      <PageHeader
        className="lg:ml-24"
        header={"stack"}
        tagline={"My skills, Software & physical products I use"}
      />
      <div className="flex w-full justify-center">
        <div className="mr-10 hidden lg:block">
          <SectionTitle>Skills</SectionTitle>
        </div>

        <div className="grid grid-cols-1 items-center justify-center gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Tech skills section. */}
          {skillsData.map((element) => (
            <Link
              target="__blank"
              key={element.slug}
              href={element.href}
              className="flex flex-col items-start rounded-xl bg-[#282828] p-2 shadow-md lg:p-5"
            >
              <div className="w-full">
                <span className="flex items-center justify-center ">
                  {element.icon}
                </span>
              </div>

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

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {/* Tech skills section. */}
          {physicalToolsData.map((element) => (
            <Link
              target="__blank"
              key={element.slug}
              href={element.href as string}
              className="flex h-auto flex-col items-start rounded-xl bg-[#282828] p-5 shadow-md"
            >
              <Image
                className="w-[300px] lg:w-full"
                src={element.image}
                alt="tool_img"
              ></Image>
              <Tag className="my-2">{element.tag}</Tag>
              <p className="my-2 capitalize">{element.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
