import clsx from "clsx";
import { ButtonProps } from "../lib/definations";
import { arrowSvg } from "./svgs";

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "center-item p-4 w-full py-2 bg-[#2E2E2E] rounded-lg leading-tight border-[1px] border-[#464646] hover:bg-[#373737] transition-colors button-box-shadow",
        className
      )}
    >
      {children}
      {arrowSvg}
    </button>
  );
}
