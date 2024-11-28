import { iconDataType } from "./definations";
import {
  aboutSVG,
  contactSVG,
  homeSVG,
  stackSVG,
  storeSVG,
  workSVG,
  writingSVG,
  githubSVG,
  instagramSVG,
  xSVG,
  threadsSVG,
  facebookSVG,
} from "../ui/svgs";

export const navbarData: iconDataType[] = [
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

export const socialLinkdata: iconDataType[] = [
  { content: "x.com", placement: "bottom", href: "/", svg: xSVG },
  { content: "Threads", placement: "bottom", href: "/", svg: threadsSVG },
  { content: "github", placement: "bottom", href: "/", svg: githubSVG },
  { content: "instagram", placement: "bottom", href: "/", svg: instagramSVG },
  { content: "facebook", placement: "bottom", href: "/", svg: facebookSVG },
];
