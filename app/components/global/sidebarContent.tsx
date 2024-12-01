export function SidebarContent() {
  return (
    <div className="mx-4 my-8 flex flex-col items-center lg:ml-20">
      {/* sidebar items here */}
      <div>
        <h2 className="my-5 ml-4">Work</h2>
        <div className="cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-[#2E2E2E]">
          <h2 className="my-2  text-[17px]">
            Building a design system for Beta
          </h2>
          <p className="text-[16px] text-[--avt-text-secondary]">
            Going from 0 to 1 enable product experiances at scale
          </p>
        </div>
      </div>
    </div>
  );
}
