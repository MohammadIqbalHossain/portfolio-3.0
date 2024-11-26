import { ButtonProps } from "../lib/definations";
import { inter } from "./font";

export function Tooltip({ children, content }: ButtonProps) {
  return (
    <li className="relative center-item list-none my-2">
      <button className="rounded">{children}</button>
      <div
        className={`${inter.className} z-10 c-tooltip rounded-none text-[14px]`}
      >
        {content}
      </div>
    </li>
  );
}
