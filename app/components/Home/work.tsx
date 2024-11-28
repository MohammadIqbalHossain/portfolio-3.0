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
          className="relative max-w-full my-5 border-[10px] border-t-0 border-[#282828] rounded-xl shadow-xl cursor-pointer group"
        >
          <h3 className="bg-[#282828] py-2 flex items-center">
            <span>{element.logo}</span>
            {element.projectTitle}
          </h3>
          <div className="rounded-lg bg-cover bg-no-repeat overflow-hidden ">
            <Image
              className="max-w-full transition duration-300 ease-in-out group-hover:scale-110"
              src={element.image}
              alt="project_imae"
            ></Image>
          </div>
        </div>
      ))}
    </div>
  );
}
