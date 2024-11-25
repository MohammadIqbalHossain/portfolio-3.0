import clsx from "clsx";
import { ButtonProps } from "../lib/definations";

export function Button({ children, className, ...rest }: ButtonProps) {
  const arrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="#676767"
      className="h-4 w-5 ml-4"
      strokeWidth="2"
    >
      <path
        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
        data-name="3-Arrow Right"
      />
    </svg>
  );

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
