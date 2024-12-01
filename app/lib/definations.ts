import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  svg?: React.ReactNode;
}

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  placement?: "bottom" | "right";
  count?: string;
  clasName?: string;
}

export interface iconDataType {
  content: string;
  placement?: "bottom" | "right";
  href: string;
  svg: ReactNode;
  count?: string;
}

export interface writingDataProps {
  date: string;
  title: string;
  tag?: string;
  blog: string;
}

export interface sidenavStatusProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export interface workDataProps {
  slug: string;
  imgage: string;
  title: string;
  client: string;
  timeline: string;
  role: string;
  tagline: string;
  outcome: string;
  details: string;
}
