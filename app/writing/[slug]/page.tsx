import { Sidebar } from "@/app/components/global/sidebar";
import { wrtitingData } from "@/app/lib/placeholder-data";
import { Tag } from "@/app/ui/tag";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Writing",
};

export default async function WritingDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = wrtitingData.find((item) => item.slug === slug);
  return (
    <div className="w-full lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="my-16 flex flex-col items-center justify-center lg:w-3/4">
        <div className="p-4 lg:w-2/4 lg:p-0">
          <Image
            className="rounded-xl"
            width={500}
            height={500}
            src={article?.image as string}
            alt="Article_IMG"
          ></Image>
          <p className="my-8 text-[--avt-text-secondary]">{article?.date}</p>

          <h1 className="mb-4 text-[24px]">{article?.title}</h1>
          <span className="my-8">
            <Tag>{article?.tag}</Tag>
          </span>

          <div className="my-8">
            <p>{article?.blog}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
