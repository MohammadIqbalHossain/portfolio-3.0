import { IntroCard } from "./components/Home/introCard";

import { SectionTitle } from "./ui/sectionTitle";
import { Work } from "./components/Home/work";
import { WritingCard } from "./components/Home/writingCard";
import { Newsletter } from "./components/Home/newsletter";
import { Metadata } from "next";
import Footer from "./components/global/footer";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="my-20 w-full md:w-8/12 lg:my-10 lg:w-6/12">
      <IntroCard />

      {/* detils about Information   */}
      <div className="flex items-start gap-10">
        <div className="hidden h-full w-2/12 lg:block">
          {/* Section title */}
          <SectionTitle>About</SectionTitle>
        </div>
        <div className="gap-y-5 p-4 text-[15px] lg:p-0">
          {/* Section details */}
          <p className="pb-5">
            I&apos;m Iqbal Hossain, a passionate Front-End Developer based in
            Chattogram, Bangladesh.
          </p>
          <p className="pb-5">
            Specializing in cutting-edge technologies like Next.js, Tailwind
            CSS, and modern design systems, I excel at building sleek,
            responsive, and user-centric web applications. I thrive on
            transforming innovative ideas into seamless digital experiences that
            are both functional and visually compelling.
          </p>
          <p className="pb-5">
            Whether it&apos;s collaborating with cross-functional teams or
            leading design projects, my attention to detail and dedication to
            excellence has earned me a reputation for delivering exceptional
            results.
          </p>
        </div>
      </div>

      {/* Work section */}
      <div className="flex items-start gap-10">
        <div className="mt-5 hidden h-full w-2/12 lg:block">
          <SectionTitle>Work</SectionTitle>
        </div>
        <div className="p-4 text-[15px] lg:p-0">
          <Work />
        </div>
      </div>

      {/* writing Card */}
      {/*TODO: I've to work on gap property later. Why gap is taking some extra spaces in this perticular section? and also when adding some padding in the card it's mismatches alignment with section name and section content in the desktop version.  */}
      <div className="mt-10 flex items-start">
        <div className="mt-3 hidden h-full w-2/12 lg:block">
          <SectionTitle>Writing</SectionTitle>
        </div>
        <div className="w-full p-4 text-[15px] lg:p-0">
          <WritingCard />
        </div>
      </div>

      {/* Newsletter */}

      <div className="mt-10 flex items-start">
        <div className="mt-3 hidden h-full w-2/12 lg:block"></div>
        <div className="w-full p-4 text-[15px] lg:p-0">
          <Newsletter />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
