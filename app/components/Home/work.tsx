import { Button } from "@/app/ui/button";
import { githubSVG } from "@/app/ui/svgs";
import projectImg_1 from "@/public/project-1.avif";
import projectImg_2 from "@/public/project-2.avif";
import projectImg_3 from "@/public/project-3.avif";
import Image from "next/image";

const workSectionData = [
  { projectTitle: "RocketRock", logo: githubSVG, image: projectImg_1 },
  { projectTitle: "MerchEasy", logo: githubSVG, image: projectImg_2 },
  { projectTitle: "PickTimely", logo: githubSVG, image: projectImg_3 },
];

export function Work() {
  return (
    <div>
      {workSectionData.map((element, index) => (
        <div
          key={index}
          className="group relative my-5 max-w-full cursor-pointer rounded-xl border-t-0 bg-[#282828] p-[10px] pt-0 shadow-xl transition duration-300 hover:bg-[#464646]"
        >
          <h3 className="flex items-center bg-[#282828] py-2 transition duration-300 group-hover:bg-[#464646]">
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
        </div>
      ))}

      {/* View all button */}
      <Button>View all</Button>
    </div>
  );
}
