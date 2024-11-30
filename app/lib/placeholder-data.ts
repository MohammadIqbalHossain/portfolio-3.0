import { iconDataType, writingDataProps } from "./definations";
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

// Writing sections data.
export const wrtitingData: writingDataProps[] = [
  {
    date: "01/01/2000",
    title:
      "The Intersection of AI and Design: Creating User-Centric Solutions in the Digital Age Copy",
    tag: "process",
    blog: "The rise of blockchain technology has revolutionized various industries, and one sector that is greatly impacted is the world of design. From creating user-friendly interfaces for cryptocurrency wallets to designing captivating NFT marketplaces, designers have a unique role to play in the crypto industry. However, along with the opportunities, they also face distinctive challenges. In this blog post, we will explore the exciting possibilities and obstacles that designers encounter in the realm of blockchain.",
  },

  {
    date: "01/01/2000",
    title:
      "The Intersection of AI and Design: Creating User-Centric Solutions in the Digital Age Copy",
    tag: "crypto",
    blog: "The rise of blockchain technology has revolutionized various industries, and one sector that is greatly impacted is the world of design. From creating user-friendly interfaces for cryptocurrency wallets to designing captivating NFT marketplaces, designers have a unique role to play in the crypto industry. However, along with the opportunities, they also face distinctive challenges. In this blog post, we will explore the exciting possibilities and obstacles that designers encounter in the realm of blockchain.",
  },

  {
    date: "01/01/2000",
    title:
      "Blockchain and Design: Opportunities and Challenges for Designers in the Crypto Industry",
    tag: "AI",
    blog: "The rise of blockchain technology has revolutionized various industries, and one sector that is greatly impacted is the world of design. From creating user-friendly interfaces for cryptocurrency wallets to designing captivating NFT marketplaces, designers have a unique role to play in the crypto industry. However, along with the opportunities, they also face distinctive challenges. In this blog post, we will explore the exciting possibilities and obstacles that designers encounter in the realm of blockchain.",
  },
];
