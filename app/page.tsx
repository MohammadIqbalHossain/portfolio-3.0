// import Image from "next/image";
import { Button } from "./ui/button";
import { githubSVG, instagramSVG, xSVG } from "./ui/svgs";
import { Tag } from "./ui/tag";
import { Tooltip } from "./ui/tooltip";

export default function Home() {
  return (
    <main className="w-4/12">
      <Button>View full</Button>
      <Tag>process</Tag>
      <Tooltip content={"x.com"}>{xSVG}</Tooltip>
      <Tooltip content={"GitHub"}>{githubSVG}</Tooltip>
      <Tooltip content={"Instagram"}>{instagramSVG}</Tooltip>
    </main>
  );
}
