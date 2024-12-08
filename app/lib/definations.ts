import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  svg?: React.ReactNode;
  href?: string;
  introCard?: boolean;
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
  href?: string;
  image: string;
  date?: string;
  title: string;
  tag?: string;
  blog?: string;
}

export interface sidenavStatusProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  path: boolean;
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
  githubLink?: string;
  liveView?: string;
}
// Stack sections data properties.
export interface arsenaldataProps {
  slug: string;
  name: string;
  href: string;
  image: StaticImageData | string | null;
  icon: ReactNode;
  tag: string;
}

//stack physical tools data propertes.
// export interface physicalToolsDataProps {
//   slug: string;
//   name: string;
//   href?: string;
//   tag: string;
//   image: StaticImageData;
// }

// Home page work section data type.
export interface workSectionDataProps {
  projectTitle: string;
  href: string;
  logo: ReactNode;
  image: StaticImageData;
}
