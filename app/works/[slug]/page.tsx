import { Sidebar } from "@/app/components/global/sidebar";

import { workData } from "@/app/lib/placeholder-data";
import KeyValueCard from "@/app/ui/keyValueCard";

import Image from "next/image";

import { Metadata } from "next";
import { Button } from "@/app/ui/button";
import { githubSVG, websiteSVG } from "@/app/ui/svgs";

export const metadata: Metadata = {
  title: "Work",
};

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = workData.find((item) => item.slug === slug);

  if (!project) return <div>Data not found!</div>;

  interface metadataProps {
    dataName: string;
    metaInfo: string;
  }

  const projectMetadata: metadataProps[] = [
    {
      dataName: "client",
      metaInfo: project.client,
    },
    {
      dataName: "timeline",
      metaInfo: project.timeline,
    },
    {
      dataName: "role",
      metaInfo: project.role,
    },
    {
      dataName: "outcome",
      metaInfo: project.outcome,
    },
  ];

  return (
    <main className="w-full lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="my-16 flex flex-col items-center justify-center  lg:w-3/4">
        <div className="p-5 lg:w-2/4 lg:p-0">
          <Image
            className="rounded-lg"
            src={project.image}
            width={500}
            height={500}
            alt="Project_Img"
          ></Image>
          <h1 className="my-5 text-[24px]">{project.title}</h1>
          <div className="my-5 flex gap-2">
            <Button
              href={project.liveView}
              className="bg-white text-black hover:bg-slate-300"
              svg={websiteSVG}
            >
              Live
            </Button>
            <Button href={project.githubLink} svg={githubSVG}>
              Github
            </Button>
          </div>

          <KeyValueCard projectMetadata={projectMetadata} />

          <div className="mt-10">
            <p>{project.details}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
