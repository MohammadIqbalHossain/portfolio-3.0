import { navbarDataType } from "./definations";
import {
  aboutSVG,
  contactSVG,
  homeSVG,
  stackSVG,
  storeSVG,
  workSVG,
  writingSVG,
} from "../ui/svgs";

export const navbarData: navbarDataType[] = [
  { content: "home", placement: "right", href: "/", svg: homeSVG, count: "1" },
  {
    content: "work",
    placement: "right",
    href: "/works",
    svg: workSVG,
    count: "2",
  },
  {
    content: "writing",
    placement: "right",
    href: "/writing",
    svg: writingSVG,
    count: "3",
  },
  {
    content: "store",
    placement: "right",
    href: "/store",
    svg: storeSVG,
    count: "4",
  },
  {
    content: "stack",
    placement: "right",
    href: "/stack",
    svg: stackSVG,
    count: "5",
  },
  {
    content: "about",
    placement: "right",
    href: "/about",
    svg: aboutSVG,
    count: "6",
  },
  {
    content: "contact",
    placement: "right",
    href: "/contact",
    svg: contactSVG,
    count: "7",
  },
];
