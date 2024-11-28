"use client";

import Link from "next/link";
import { Tooltip } from "../ui/tooltip";
import { navbarData } from "../lib/placeholder-data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <nav className="lg:w-auto lg:h-full lg:border-r lg:border-[#343434] lg:fixed lg:left-0 lg:top-0 lg:flex lg:items-center bg-[#232323] w-full h-16 fixed bottom-0 z-50 ">
      <ul className="lg:flex lg:flex-col lg:justify-center lg:gap-2 lg:items-center lg:px-6 flex justify-between items-center w-full px-4 border-t border-[#343434] lg:border-none">
        {navbarData.map((element, index) => {
          const isActive = currentPath === element.href;

          return (
            <li
              key={index}
              className={`relative my-1 transition duration-500 ${
                isActive &&
                "border-b-[0.5px] border-[--avt-text-secondary] py-0"
              }`}
            >
              <Tooltip
                content={element.content}
                placement={element.placement}
                count={element.count}
              >
                <Link href={element.href}>{element.svg}</Link>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
