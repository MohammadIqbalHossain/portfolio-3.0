import { Sidebar } from "@/app/components/global/sidebar";
import { wrtitingData } from "@/app/lib/placeholder-data";

export default function WritingDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = wrtitingData.find((item) => item.slug === slug);
  return (
    <div className="w-full lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="my-16 flex flex-col items-center justify-center lg:w-3/4">
        <h1>{article?.title}</h1>
      </div>
    </div>
  );
}
