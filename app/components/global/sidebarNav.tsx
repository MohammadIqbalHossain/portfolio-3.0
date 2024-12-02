import { sidenavStatusProps } from "@/app/lib/definations";
import { crossSVG, hamburgerSVG } from "@/app/ui/svgs";

export function SidebarNav({ setIsOpen, isOpen }: sidenavStatusProps) {
  return (
    <div className="center-item mb-5 w-full  border-b border-[#343434] px-5 py-4 lg:hidden">
      <div>
        <h2>Work</h2>
      </div>
      <div className="ml-auto ">
        <button
          className="rounded px-4 py-2 font-bold text-[#34343]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Toggle icon based on isOpen state */}
          {isOpen ? hamburgerSVG : crossSVG}
        </button>
      </div>
    </div>
  );
}
