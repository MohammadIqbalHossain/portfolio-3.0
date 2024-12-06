"use client";

import { workData, wrtitingData } from "@/app/lib/placeholder-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarContent() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  // check route to render data conditionally.
  const isWorkRoute = pathname.includes("works");

  // Reorder WorkData so the active item comes first
  //conditionally load data.
  const reorderedWorkData = [...(isWorkRoute ? workData : wrtitingData)].sort(
    (a, b) => {
      if (a.slug === currentSlug) return -1; // Move the active item to the top
      if (b.slug === currentSlug) return 1;
      return 0; // Keep other items in their original order
    }
  );

  return (
    <section>
      {/* Show title based on the route */}
      <h2 className="my-5 ml-24 hidden capitalize lg:block">
        {isWorkRoute ? "Work" : "Writing"}
      </h2>
      <div className="mx-4 my-8 flex flex-col items-start overflow-auto lg:ml-20">
        {/* sidebar items here */}
        {reorderedWorkData.map((element, index) => {
          const isActive = currentSlug === element.slug;

          return (
            <Link
              href={`/${isWorkRoute ? "works" : "writing"}/${element.slug}`}
              key={index}
            >
              {isActive && (
                <span className="my-[30px] ml-2 text-[15px] text-[--avt-text-secondary]">
                  Now viewing
                </span>
              )}
              {/* main sidebar content */}
              <div
                className={`my-2 cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-[#2E2E2E] ${
                  isActive ? "bg-[#2E2E2E]" : ""
                }`}
              >
                <h2 className="my-2 text-[17px]">{element.title}</h2>
                <p className="text-[16px] text-[--avt-text-secondary]">
                  {isWorkRoute ? element.tagline : element.date}
                </p>
              </div>

              {isActive && (
                <span className="my-[30px] ml-2 text-[15px] text-[--avt-text-secondary]">
                  Up next
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
