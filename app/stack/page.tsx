import { SectionTitle } from "../ui/sectionTitle";

import Image from "next/image";
import workspace from "@/public/workspace.jpg";

import PageHeader from "../ui/pageHeader";
import Arsenal from "../components/stack/arsenal";

export default function Stack() {
  return (
    <div className="my-10 px-4 lg:w-2/4">
      <PageHeader
        className="lg:ml-24"
        header={"stack"}
        tagline={"My skills, Software & physical products I use"}
      />

      <Arsenal type={"skills"} />

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

      <Arsenal type={"physical"} />
    </div>
  );
}
