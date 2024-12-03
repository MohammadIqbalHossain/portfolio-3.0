import {
  arsenaldataProps,
  iconDataType,
  workDataProps,
  writingDataProps,
} from "./definations";
import {
  aboutSVG,
  contactSVG,
  homeSVG,
  stackSVG,
  // storeSVG,
  workSVG,
  writingSVG,
  githubSVG,
  instagramSVG,
  xSVG,
  threadsSVG,
  facebookSVG,
} from "../ui/svgs";

import {
  cssSVG,
  expressjsSVG,
  gitSVG,
  javascriptSVG,
  mongoDBSVG,
  nextjsSVG,
  nodejsSVG,
  reactjsSVG,
  tailwindcssSVG,
} from "../ui/svgs";

import monitor from "@/public/monitor.avif";
import keyboard from "@/public/keyboard.avif";
import webcam from "@/public/webcam.avif";
import laptop from "@/public/laptop.png";

export const navbarData: iconDataType[] = [
  { content: "home", placement: "right", href: "/", svg: homeSVG, count: "1" },
  {
    content: "work",
    placement: "right",
    href: "/works/1",
    svg: workSVG,
    count: "2",
  },
  {
    content: "writing",
    placement: "right",
    href: "/writing/1",
    svg: writingSVG,
    count: "3",
  },
  // {
  //   content: "store",
  //   placement: "right",
  //   href: "/store",
  //   svg: storeSVG,
  //   count: "4",
  // },
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
    slug: "1",
    image: "https://i.ibb.co.com/DLCGpyR/blog-3.jpg",
    date: "01/01/2000",
    title:
      "The Intersection of AI and Design: Creating User-Centric Solutions in the Digital Age Copy",
    tag: "process",
    blog: "The rise of blockchain technology has revolutionized various industries, and one sector that is greatly impacted is the world of design. From creating user-friendly interfaces for cryptocurrency wallets to designing captivating NFT marketplaces, designers have a unique role to play in the crypto industry. However, along with the opportunities, they also face distinctive challenges. In this blog post, we will explore the exciting possibilities and obstacles that designers encounter in the realm of blockchain.",
  },

  {
    slug: "2",
    image: "https://i.ibb.co.com/DLCGpyR/blog-3.jpg",
    date: "01/01/2000",
    title:
      "The Intersection of AI and Design: Creating User-Centric Solutions in the Digital Age Copy",
    tag: "crypto",
    blog: "The rise of blockchain technology has revolutionized various industries, and one sector that is greatly impacted is the world of design. From creating user-friendly interfaces for cryptocurrency wallets to designing captivating NFT marketplaces, designers have a unique role to play in the crypto industry. However, along with the opportunities, they also face distinctive challenges. In this blog post, we will explore the exciting possibilities and obstacles that designers encounter in the realm of blockchain.",
  },

  {
    slug: "3",
    image: "https://i.ibb.co.com/DLCGpyR/blog-3.jpg",
    date: "01/01/2000",
    title:
      "Blockchain and Design: Opportunities and Challenges for Designers in the Crypto Industry",
    tag: "AI",
    blog: "The rise of blockchain technology has revolutionized various industries, and one sector that is greatly impacted is the world of design. From creating user-friendly interfaces for cryptocurrency wallets to designing captivating NFT marketplaces, designers have a unique role to play in the crypto industry. However, along with the opportunities, they also face distinctive challenges. In this blog post, we will explore the exciting possibilities and obstacles that designers encounter in the realm of blockchain.",
  },
];

export const workData: workDataProps[] = [
  {
    slug: "1",
    image: "https://i.ibb.co.com/DLCGpyR/blog-3.jpg",
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
    image: "https://i.ibb.co.com/DLCGpyR/blog-3.jpg",
    client: "alpha",
    title: "Redesigning Gamma",
    timeline: "Jan 22 – Jul 22",
    role: "Product Designer & User Researcher",
    tagline: "Redesigning Gamma for better rousouces",
    outcome:
      "The redesigned Alpha App proved to be highly impactful, particularly on mobile devices, as users exhibited increased shopping activity. Mobile users experienced a remarkable 50% surge in shopping behavior, with a substantial 45% increase in mobile conversions",
    details:
      "Alpha.com approached me as a product designer to redesign their e-commerce website and translate it into a fully mobile experience. The primary goals of this case study were to discuss my approach to the redesign, the design decisions made, and the outcomes achieved in successfully translating Alpha.com's e-commerce web experience into a fully mobile experience.",
  },
  {
    slug: "3",
    image: "https://i.ibb.co.com/DLCGpyR/blog-3.jpg",
    client: "alpha",
    title: "New mobile app for Alpha",
    timeline: "Jan 22 – Jul 22",
    role: "Building a design system for Beta",
    tagline: "Building a design system for Beta fully designed with custom",
    outcome:
      "The redesigned Alpha App proved to be highly impactful, particularly on mobile devices, as users exhibited increased shopping activity. Mobile users experienced a remarkable 50% surge in shopping behavior, with a substantial 45% increase in mobile conversions",
    details:
      "Alpha.com approached me as a product designer to redesign their e-commerce website and translate it into a fully mobile experience. The primary goals of this case study were to discuss my approach to the redesign, the design decisions made, and the outcomes achieved in successfully translating Alpha.com's e-commerce web experience into a fully mobile experience.",
  },
];

export const skillsData: arsenaldataProps[] = [
  {
    slug: "1",
    name: "javaScript",
    href: "https://javascript.info/",
    icon: javascriptSVG,
    image: "",
    tag: "P Language",
  },
  {
    slug: "2",
    name: "tailwindCSS",
    href: "https://tailwindcss.com/",
    icon: tailwindcssSVG,
    image: "",
    tag: "CSS Framework",
  },
  {
    slug: "3",
    name: "React JS",
    href: "https://react.dev/",
    icon: reactjsSVG,
    image: "",
    tag: "JS Library",
  },
  {
    slug: "4",
    name: "Node JS",
    href: "https://nodejs.org/en",
    icon: nodejsSVG,
    image: "",
    tag: "JS Runtime",
  },
  {
    slug: "5",
    name: "Express JS",
    href: "https://expressjs.com/",
    icon: expressjsSVG,
    image: "",
    tag: "Node Framework",
  },
  {
    slug: "6",
    name: "Next JS",
    href: "https://nextjs.org/",
    icon: nextjsSVG,
    image: "",
    tag: "React Framework",
  },
  {
    slug: "7",
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: mongoDBSVG,
    image: "",
    tag: "React Framework",
  },
  {
    slug: "8",
    name: "CSS",
    href: "https://www.w3.org/Style/CSS/",
    icon: cssSVG,
    image: "",
    tag: "Website styles",
  },
  {
    slug: "9",
    name: "Git",
    href: "https://git-scm.com/",
    icon: gitSVG,
    image: "",
    tag: "Version Control",
  },
];

export const physicalToolsData: arsenaldataProps[] = [
  {
    slug: "1",
    name: "HP Y21",
    href: "",
    tag: "screen",
    image: monitor,
    icon: "",
  },
  {
    slug: "2",
    name: "Magic keyboard",
    href: "",
    tag: "Keyboard",
    image: keyboard,
    icon: "",
  },
  {
    slug: "3",
    name: "Logitech BRIO",
    href: "",
    tag: "Webcam",
    image: webcam,
    icon: "",
  },
  {
    slug: "4",
    name: "HP Elitebook",
    href: "",
    tag: "Laptop",
    image: laptop,
    icon: "",
  },
];
