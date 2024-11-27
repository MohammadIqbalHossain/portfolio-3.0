import { TooltipProps } from "../lib/definations";
import { inter } from "./font";
import clsx from "clsx";

export function Tooltip({ children, content, placement }: TooltipProps) {
  return (
    <div className="relative center-item list-none my-2">
      <button className="rounded">{children}</button>
      <div
        className={clsx(
          `${inter.className} z-10 c-tooltip rounded-none mx-4 center-item`,
          {
            "s-place-bottom": placement === "bottom",
            "s-place-right": placement === "right",
          }
        )}
      >
        {content}{" "}
        {placement === "right" ? (
          <span className="relative px-1.5 py-[-0.5] rounded-sm drop-shadow-2xl leading-tight text-[12px] shadow-2xl bg-[#505050]  text-center">
            1
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
