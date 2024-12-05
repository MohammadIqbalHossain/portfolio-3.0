import { TooltipProps } from "../lib/definations";

export function Tooltip({ children, content, placement, count }: TooltipProps) {
  return (
    <div className="center-item relative my-2 list-none">
      <button className="rounded">{children}</button>
      <div
        className={`c-tooltip center-item z-10 mx-4 rounded-none ${
          placement === "bottom" && "s-place-bottom"
        } ${placement === "right" && "s-place-right"}`}
      >
        {content}{" "}
        {placement === "right" ? (
          <span className="relative rounded-sm bg-[#505050] px-1.5 py-[-0.5] text-center text-[12px] leading-tight shadow-2xl  drop-shadow-2xl">
            {count}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
