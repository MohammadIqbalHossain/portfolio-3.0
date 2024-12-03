import Image from "next/image";
import PageHeader from "../ui/pageHeader";
import { SectionTitle } from "../ui/sectionTitle";
import aboutIMG from "@/public/about-me.avif";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center border">
      <div>
        <PageHeader
          header={"About"}
          tagline={"A few things you should know"}
          className=""
        />
      </div>

      <div className="w-3/4 border">
        <div>
          <SectionTitle>Intro</SectionTitle>
        </div>
        <div>
          <Image src={aboutIMG} alt="about_img"></Image>
        </div>
      </div>
    </div>
  );
}
