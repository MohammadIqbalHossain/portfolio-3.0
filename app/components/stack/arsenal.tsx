import { arsenaldataProps } from "@/app/lib/definations";
import { physicalToolsData, skillsData } from "@/app/lib/placeholder-data";
import { SectionTitle } from "@/app/ui/sectionTitle";
import { Tag } from "@/app/ui/tag";
import Image from "next/image";
import Link from "next/link";

export default function Arsenal({ type }: { type: string }) {
  let data: arsenaldataProps[] = [];

  switch (type) {
    case "skills":
      data = skillsData;
      break;
    case "physical":
      data = physicalToolsData;
      break;
    default:
      console.error("Invalid type provided to Arsenal component");
  }

  return (
    <div className="flex w-full justify-center">
      <div className="mr-10 hidden lg:block">
        <SectionTitle>
          {" "}
          {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
          {/* Capitalizes the type */}
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 items-center justify-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        {/* Tech skills section. */}
        {data.map((element) => (
          <Link
            target="__blank"
            key={element.slug}
            href={element.href as string}
            className="flex flex-col items-start rounded-xl bg-[#282828] p-2 shadow-md lg:p-5"
          >
            <div className="w-full">
              <div className="flex items-center justify-center ">
                {type === "skills" ? (
                  element.icon
                ) : (
                  <Image src={element.image} alt="Icon_img"></Image>
                )}
              </div>
            </div>

            <Tag className="my-2">{element.tag}</Tag>
            <p className="my-2 capitalize">{element.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
