import { wrtitingData } from "@/app/lib/placeholder-data";
import { Button } from "@/app/ui/button";
import { Tag } from "@/app/ui/tag";

export function WritingCard() {
  return (
    <div>
      {wrtitingData.map((element, index) => (
        <div
          key={index}
          className="mb-4 flex w-full cursor-pointer items-start justify-between rounded-lg p-3 transition-colors duration-300 hover:bg-[--hover-color]"
        >
          <div>
            <h1 className="pb-2 pr-5 text-[15px] capitalize lg:pr-10">
              {element.title}
            </h1>
            <Tag>{element.tag}</Tag>
          </div>
          <div>
            <h3 className="text-[14px] text-[--avt-text-secondary]">
              {element.date}
            </h3>
          </div>
        </div>
      ))}

      <Button href="/writing/1">View all</Button>
    </div>
  );
}
