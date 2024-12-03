import Image from "next/image";
import PageHeader from "../ui/pageHeader";
import { SectionTitle } from "../ui/sectionTitle";
import aboutIMG from "@/public/about-me.avif";
import KeyValueCard from "../ui/keyValueCard";

const experianceData = [
  {
    dataName: "2018 — Now",
    metaInfo: "Head of Design at Alpha",
  },
];

const educationData = [
  {
    dataName: "2018 — Now",
    metaInfo: "Head of Design at Alpha",
  },
  {
    dataName: "2018 — Now",
    metaInfo: "Head of Design at Alpha",
  },
];

export default function About() {
  return (
    <div className="my-10  px-0 lg:w-3/6">
      <div>
        <PageHeader
          header={"About"}
          tagline={"A few things you should know"}
          className="lg:ml-28"
        />
      </div>

      <div className="flex w-full justify-center p-4 lg:p-0">
        <div className="hidden lg:block lg:w-2/12">
          <SectionTitle>Intro</SectionTitle>
        </div>
        <div className="lg:w-11/12">
          <Image className="rounded-2xl" src={aboutIMG} alt="about_img"></Image>

          <p className="my-10">
            Hello, I&lsquo;m Dean Smith, a product designer based in New York
            City, and I currently serve as the Head of Design at Alpha. I&#39;m
            passionate about using design to solve real-world problems and
            create meaningful experiences that enhance people&lsquo;s lives.
            With a bachelor&lsquo;s degree in design from Parsons School of
            Design, I&lsquo;ve honed my skills through years of experience as a
            senior designer at various tech companies. I firmly believe that
            design should be user-centric, and I always keep the end-user in
            mind when creating products. My focus at Alpha is on developing
            products that are both functional and aesthetically pleasing. When
            I&lsquo;m not working, I love to travel and immerse myself in new
            cultures and cuisines. I also stay up-to-date with the latest
            advancements in technology and design by attending conferences and
            workshops. I&lsquo;m proud to be part of the talented team at Alpha
            and excited about the work we&lsquo;ve accomplished together.
            I&lsquo;m committed to continuing to push the boundaries of product
            design and create products that make a real difference in
            people&lsquo;s lives.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-start  p-4 lg:p-0">
        <div className="hidden lg:block lg:w-2/12">
          <SectionTitle>Experiance</SectionTitle>
        </div>
        <div className="lg:w-11/12 ">
          <KeyValueCard projectMetadata={experianceData} />
        </div>
      </div>

      <div className="my-10 flex w-full justify-start p-4 lg:p-0">
        <div className="hidden lg:block lg:w-2/12">
          <SectionTitle>Education</SectionTitle>
        </div>
        <div className="lg:w-11/12 ">
          <KeyValueCard projectMetadata={educationData} />
        </div>
      </div>
    </div>
  );
}
