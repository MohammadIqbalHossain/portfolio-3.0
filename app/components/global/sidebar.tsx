"use client";

import { useState, useEffect } from "react";

export function Sidebar() {
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

    handleResize(); // Set initial state
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
      {/* Overlay */}
      {isOpen && window.innerWidth < 1024 && (
        <div
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={closeSidebar} // Close sidebar when clicking outside
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
          <div className="mx-4 my-8 flex flex-col items-center text-[16px] lg:ml-20">
            {/* Add more sidebar items here */}

            <div className="">
              <h2 className="ml-4">Work</h2>
              <div className="rounded-lg p-4 transition-colors duration-300 hover:bg-[#2E2E2E]">
                <h2 className="my-2 text-[14px]">
                  Building a design system for Beta
                </h2>
                <p className="text-[15px] text-[--avt-text-secondary]">
                  Going from 0 to 1 enable product experiances at scale
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className={`flex-1 p-4 ${isOpen ? "ml-64" : "ml-0"}`}>
          {/* Button to toggle sidebar */}
          <div className="ml-auto lg:hidden">
            {/* Hide button on larger screens */}
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Toggle icon based on isOpen state */}
              {isOpen ? (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
