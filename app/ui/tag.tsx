import { ButtonProps } from "../lib/definations";

export function Tag({ className, children }: ButtonProps) {
  return (
    <span
      className={`rounded-md border border-[#525252] p-1 text-[12px] uppercase text-[#A0A0A0] ${className}`}
    >
      {children}
    </span>
  );
}
