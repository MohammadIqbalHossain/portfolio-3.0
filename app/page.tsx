import { IntroCard } from "./components/Home/introCard";

import { SectionTitle } from "./ui/sectionTitle";
import { Work } from "./components/Home/work";
import { WritingCard } from "./components/Home/writingCard";
import { Newsletter } from "./components/Home/newsletter";

export default function Home() {
  return (
    <main className="my-20 w-full md:w-8/12 lg:my-10 lg:w-6/12">
      <IntroCard />

      {/* about Information   */}
      <div className="flex items-start gap-10">
        <div className="hidden h-full w-2/12 lg:block">
          {/* Section title */}
          <SectionTitle>Store</SectionTitle>
        </div>
        <div className="gap-y-5 p-4 text-[15px] lg:p-0">
          {/* Section details */}
          <p className="pb-5">
            I&apos;m Dean Smith, a multidisciplinary designer based in New York
            City.
          </p>
          <p className="pb-5">
            With over 15 years of experience in the field, I take pride in
            delivering visually stunning and user-friendly designs that exceed
            client expectations.
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
    </main>
  );
}
