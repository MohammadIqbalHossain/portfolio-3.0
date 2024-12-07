import Link from "next/link";
import { ButtonProps } from "../lib/definations";
import { arrowSvg } from "./svgs";

export function Button({
  children,
  href,
  className,
  svg,
  ...rest
}: ButtonProps) {
  //Button sytles
  const buttonCls = `center-item button-box-shadow w-full rounded-lg border border-[#464646] bg-[#2E2E2E] p-4 py-2 leading-tight transition-colors hover:bg-[#373737]  ${className}`;

  //conditionally rendering svg.
  const childConditon = children === "View all" ? arrowSvg : svg;

  return (
    <div
      className={`flex flex-col items-center justify-center lg:w-full lg:flex-row`}
    >
      {href ? (
        <Link target="__blank" className={`${buttonCls}`} href={`${href}`}>
          {children}
          {childConditon}
        </Link>
      ) : (
        <button {...rest} className={`${buttonCls} ${className} `}>
          {children}
          {childConditon}
        </button>
      )}
    </div>
  );
}
