import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  placement?: "bottom" | "right";
  count?: string;
  clasName?: string;
}

export interface navbarDataType {
  content: string;
  placement: "right";
  href: string;
  svg: ReactNode;
  count?: string;
}
