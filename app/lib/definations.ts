import { StaticImageData } from "next/image";
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
  slug: string;
  tagline?: string;
  image: string;
  date?: string;
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
  image: string;
  title: string;
  client: string;
  timeline: string;
  date?: string;
  role: string;
  tagline: string;
  outcome: string;
  details: string;
}
// Stack sections skills data properties.
export interface skillsDataProps {
  slug: string;
  name: string;
  href: string;
  icon: JSX.Element;
  tag: string;
}
//stack physical tools data propertes.
export interface physicalToolsDataProps {
  slug: string;
  name: string;
  href?: string;
  tag: string;
  image: StaticImageData;
}
