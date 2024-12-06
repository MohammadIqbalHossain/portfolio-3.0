"use client";

import { useState, useEffect } from "react";
import { SidebarNav } from "./sidebarNav";
import { SidebarContent } from "./sidebarContent";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const checkPath = pathname.includes("works");
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open the sidebar for larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle outside click
  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed z-20 h-screen border-r border-[#343434] bg-[--bg-theme] text-white 
                transition-all duration-300 
                ${isOpen ? "w-4/5 lg:w-[400px]" : "w-0 overflow-hidden"}`}
          //   onClick={(e) => e.stopPropagation()} // Prevent outside click close
        >
          {/* Sidebar content */}
          <SidebarContent />
        </div>

        {/* Button to toggle sidebar */}
        <SidebarNav setIsOpen={setIsOpen} isOpen={isOpen} path={checkPath} />
      </div>
    </>
  );
}
