import Image from "next/image";
import PageHeader from "../ui/pageHeader";
import { SectionTitle } from "../ui/sectionTitle";
import aboutIMG from "@/public/about-me.avif";
import KeyValueCard from "../ui/keyValueCard";
import { Metadata } from "next";
import Footer from "../components/global/footer";

export const metadata: Metadata = {
  title: "about",
};

const experianceData = [
  {
    dataName: "Nov, 2024 — Now",
    metaInfo: "Front-end developer at Nexlent",
  },
];

const educationData = [
  {
    dataName: "2023 — Now",
    metaInfo:
      "Continues education in web developmnet, design and technology. including attending various conferences and workshops to stay up-to-date on industry trends and best practices.",
  },

  {
    dataName: "2021 — 2023",
    metaInfo: "HSC - from Fatikchhari govt. college.",
  },
];

export default function About() {
  return (
    <section className="my-10  px-0 lg:w-3/6">
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

          <article className="my-10">
            <p className="pb-5">
              Hello, I’m Mohammad Iqbal Hossain, a Front-End Developer based in
              Chattogram, Bangladesh. I’m passionate about building modern,
              user-centric web applications that combine functionality with
              aesthetic appeal.
            </p>

            <p className="pb-5">
              As a fresher with a strong foundation in technologies like
              React.js, Tailwind CSS, and SCSS, I’ve honed my skills by
              developing projects such as RocketRock, MerchEasy, and
              Picktimely—each showcasing my ability to create seamless and
              engaging user experiences. While my primary focus is on front-end
              development, my familiarity with back-end tools like Node.js and
              MongoDB enables me to collaborate effectively on full-stack
              projects.
            </p>

            <p className="pb-5">
              I firmly believe that great design is more than just visuals—it’s
              about delivering meaningful experiences that make an impact. I’m
              constantly exploring new tools and trends in web development to
              stay at the forefront of the field and bring innovative solutions
              to life.
            </p>

            <p className="pb-5">
              When I’m not coding, I enjoy learning about emerging technologies
              and contributing to team projects that challenge me to grow. I’m
              excited to continue building applications that solve real-world
              problems and leave a lasting impression.
            </p>
          </article>
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

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
