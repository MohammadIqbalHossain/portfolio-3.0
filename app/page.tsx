// import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Button } from "./ui/button";
import { githubSVG, instagramSVG, xSVG } from "./ui/svgs";
import { Tag } from "./ui/tag";
import { Tooltip } from "./ui/tooltip";

export default function Home() {
  return (
    <main className="w-4/12">
      <Button>View full</Button>
      <Tag>process</Tag>
      <Tooltip content={"x.com"} placement="bottom">
        {xSVG}
      </Tooltip>
      <Tooltip content={"GitHub"} placement="bottom">
        {githubSVG}
      </Tooltip>
      <Tooltip content={"Instagram"} placement="bottom">
        {instagramSVG}
      </Tooltip>
      <Navbar />
    </main>
  );
}
