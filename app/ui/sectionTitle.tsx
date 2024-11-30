import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="px-2 text-[--avt-section-title]">{children}</h2>;
}
