import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-[--avt-section-title] px-2">{children}</h2>;
}
