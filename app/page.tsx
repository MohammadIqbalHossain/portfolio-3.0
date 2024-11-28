import { IntroCard } from "./components/Home/introCard";

import { SectionTitle } from "./ui/sectionTitle";
import { Work } from "./components/Home/work";

export default function Home() {
  return (
    <main className="w-full md:w-8/12 lg:my-10 lg:w-6/12 ">
      <IntroCard />

      {/* about Information   */}
      <div className="flex items-start gap-10">
        <div className="h-full w-2/12 hidden lg:block">
          {/* Section title */}
          <SectionTitle>Store</SectionTitle>
        </div>
        <div className="p-4 lg:p-0 gap-y-5 text-[15px]">
          {/* Section details */}
          <p className="first:pb-5">
            I'm Dean Smith, a multidisciplinary designer based in New York City.
          </p>
          <p className="pb-5">
            With over 15 years of experience in the field, I take pride in
            delivering visually stunning and user-friendly designs that exceed
            client expectations.
          </p>
          <p className="pb-5">
            Whether it's collaborating with cross-functional teams or leading
            design projects, my attention to detail and dedication to excellence
            has earned me a reputation for delivering exceptional results.
          </p>
        </div>
      </div>

      {/* Work section */}
      <div className="flex items-start gap-10">
        <div className="h-full w-2/12 hidden lg:block">
          <SectionTitle>Work</SectionTitle>
        </div>
        <div className="p-4 lg:p-0 text-[15px]">
          <Work />
        </div>
      </div>
    </main>
  );
}
