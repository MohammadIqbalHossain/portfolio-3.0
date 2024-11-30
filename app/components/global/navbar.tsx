"use client";

import Link from "next/link";
import { Tooltip } from "@/app/ui/tooltip";
import { navbarData } from "@/app/lib/placeholder-data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <nav className="fixed bottom-0 z-50 h-16 w-full bg-[#232323] lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-full lg:w-auto lg:items-center lg:border-r lg:border-[#343434] ">
      <ul className="flex w-full items-center justify-between border-t border-[#343434] px-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2 lg:border-none lg:px-6">
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
