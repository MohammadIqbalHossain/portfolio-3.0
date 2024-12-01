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

export const WorkData = [
  {
    slug: "1",
    imgage: "",
    title: "New mobile app for Alpha",
    client: "alpha",
    timeline: "Jan 22 – Jul 22",
    role: "Product Designer & User Researcher",
    tagline: "Translating ecommerce into fully native experiance.",
    outcome:
      "The redesigned Alpha App proved to be highly impactful, particularly on mobile devices, as users exhibited increased shopping activity. Mobile users experienced a remarkable 50% surge in shopping behavior, with a substantial 45% increase in mobile conversions",
    details:
      "Alpha.com approached me as a product designer to redesign their e-commerce website and translate it into a fully mobile experience. The primary goals of this case study were to discuss my approach to the redesign, the design decisions made, and the outcomes achieved in successfully translating Alpha.com's e-commerce web experience into a fully mobile experience.",
  },
  {
    slug: "2",
    imgage: "",
    client: "alpha",
    title: "New mobile app for Alpha",
    timeline: "Jan 22 – Jul 22",
    role: "Product Designer & User Researcher",
    tagline: "Translating ecommerce into fully native experiance.",
    outcome:
      "The redesigned Alpha App proved to be highly impactful, particularly on mobile devices, as users exhibited increased shopping activity. Mobile users experienced a remarkable 50% surge in shopping behavior, with a substantial 45% increase in mobile conversions",
    details:
      "Alpha.com approached me as a product designer to redesign their e-commerce website and translate it into a fully mobile experience. The primary goals of this case study were to discuss my approach to the redesign, the design decisions made, and the outcomes achieved in successfully translating Alpha.com's e-commerce web experience into a fully mobile experience.",
  },
  {
    slug: "3",
    imgage: "",
    client: "alpha",
    title: "New mobile app for Alpha",
    timeline: "Jan 22 – Jul 22",
    role: "Product Designer & User Researcher",
    tagline: "Translating ecommerce into fully native experiance.",
    outcome:
      "The redesigned Alpha App proved to be highly impactful, particularly on mobile devices, as users exhibited increased shopping activity. Mobile users experienced a remarkable 50% surge in shopping behavior, with a substantial 45% increase in mobile conversions",
    details:
      "Alpha.com approached me as a product designer to redesign their e-commerce website and translate it into a fully mobile experience. The primary goals of this case study were to discuss my approach to the redesign, the design decisions made, and the outcomes achieved in successfully translating Alpha.com's e-commerce web experience into a fully mobile experience.",
  },
];
