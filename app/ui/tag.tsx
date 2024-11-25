import { ButtonProps } from "../lib/definations";
import clsx from "clsx";

export function Tag({ className, children }: ButtonProps) {
  return (
    <span
      className={clsx(
        "p-1 uppercase text-[#A0A0A0] text-[12px] border-[1px] border-[#525252] rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
}
