import Link from "next/link";
import { xSVG } from "../ui/svgs";
import { Tooltip } from "../ui/tooltip";

export function Navbar() {
  return (
    <nav className="h-full bg-[#232323] list-none border-r-[1px] border-x-[#343434] absolute left-0 top-0 px-4 center-item">
      <ul>
        <li>
          <Tooltip content={"x.com"} placement="right">
            <Link href={"/"}>{xSVG}</Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}
