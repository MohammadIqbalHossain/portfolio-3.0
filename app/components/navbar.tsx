import Link from "next/link";
import { Tooltip } from "../ui/tooltip";
import { navbarData } from "../lib/placeholder-data";

export function Navbar() {
  return (
    <nav className="h-full bg-[#232323] list-none border-r-[1px] border-x-[#343434] absolute left-0 top-0 px-4 center-item">
      <ul>
        {navbarData.map((element, index) => (
          <li key={index} className="my-8">
            {" "}
            <Tooltip
              content={element.content}
              placement={element.placement}
              count={element.count}
            >
              <Link href={element.href}>{element.svg}</Link>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  );
}
