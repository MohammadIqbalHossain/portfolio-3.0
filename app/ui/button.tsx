import { ButtonProps } from "../lib/definations";
import { arrowSvg } from "./svgs";

export function Button({ children, className, svg, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`center-item button-box-shadow w-full rounded-lg border border-[#464646] bg-[#2E2E2E] p-4 py-2 leading-tight transition-colors hover:bg-[#373737] ${className}`}
    >
      {children}
      {children === "View all" ? arrowSvg : svg}
    </button>
  );
}
