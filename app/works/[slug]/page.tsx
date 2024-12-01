import { Sidebar } from "@/app/components/global/sidebar";
import { workData } from "@/app/lib/placeholder-data";

export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = workData.find((item) => item.slug === slug);

  if (!project) return <div>Data not found!</div>;

  return (
    <main className="w-full lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="flex w-screen justify-center lg:w-3/4">
        {project.slug || project.title}
      </div>
    </main>
  );
}
