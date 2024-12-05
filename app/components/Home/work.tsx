import { workSectionData } from "@/app/lib/placeholder-data";
import { Button } from "@/app/ui/button";

import Image from "next/image";
import Link from "next/link";

// TODO: Home page work section. I've to redesign it. data loads are should comes from one place. this section may be could become global to use in sidebar.
export function Work() {
  return (
    <div>
      {workSectionData.map((element, index) => (
        <div
          key={index}
          className="group relative my-5 max-w-full cursor-pointer rounded-xl border-t-0 bg-[#282828] p-[10px] pt-0 shadow-xl transition duration-300 hover:bg-[--hover-color]"
        >
          <Link href={element.href}>
            <h3 className="flex items-center bg-[#282828] py-2 transition duration-300 group-hover:bg-[--hover-color]">
              <span>{element.logo}</span>
              {element.projectTitle}
            </h3>
            <div className="overflow-hidden rounded-lg bg-cover bg-no-repeat ">
              <Image
                className="max-w-full transition duration-300 ease-in-out group-hover:scale-110"
                src={element.image}
                alt="project_imae"
              ></Image>
            </div>
          </Link>
        </div>
      ))}

      {/* View all button */}
      <Button href="/works/1">View all</Button>
    </div>
  );
}
