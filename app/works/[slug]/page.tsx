import { Sidebar } from "@/app/components/global/sidebar";
import { WorkData } from "@/app/lib/placeholder-data";

export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = WorkData.find((item) => item.slug === slug);

  if (!project) return <div>Data not found!</div>;

  return (
    <main className="w-full lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="flex w-screen justify-center bg-red-600 lg:w-3/4">
        {project.slug || project.title}
      </div>
    </main>
  );
}
