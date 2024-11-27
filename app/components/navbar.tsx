import Link from "next/link";
import {
  aboutSVG,
  contactSVG,
  homeSVG,
  stackSVG,
  storeSVG,
  workSVG,
  writingSVG,
} from "../ui/svgs";
import { Tooltip } from "../ui/tooltip";

export function Navbar() {
  return (
    <nav className="h-full bg-[#232323] list-none border-r-[1px] border-x-[#343434] absolute left-0 top-0 px-4 center-item">
      <ul>
        <li>
          <Tooltip content={"Home"} placement="right">
            <Link href={"/"}>{homeSVG}</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"work"} placement="right">
            <Link href={"/work"}>{workSVG}</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"work"} placement="right">
            <Link href={"/writing"}>{writingSVG}</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"work"} placement="right">
            <Link href={"/writing"}>{storeSVG}</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"work"} placement="right">
            <Link href={"/writing"}>{stackSVG}</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"work"} placement="right">
            <Link href={"/writing"}>{aboutSVG}</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"work"} placement="right">
            <Link href={"/writing"}>{contactSVG}</Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}
