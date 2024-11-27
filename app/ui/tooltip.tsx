import { TooltipProps } from "../lib/definations";
import { inter } from "./font";
import clsx from "clsx";

export function Tooltip({ children, content, placement }: TooltipProps) {
  return (
    <div className="relative center-item list-none my-2">
      <button className="rounded">{children}</button>
      <div
        className={clsx(`${inter.className} z-10 c-tooltip rounded-none mx-4`, {
          "s-place-bottom": placement === "bottom",
          "s-place-right": placement === "right",
        })}
      >
        {content}
      </div>
    </div>
  );
}
