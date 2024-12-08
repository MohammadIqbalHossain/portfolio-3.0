import {
  arsenaldataProps,
  iconDataType,
  workDataProps,
  workSectionDataProps,
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
  linkedinSVG,
  boxSVG,
  hexagonSVG,
  sunSVG,
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

import { arcSVG, chatgptSVG, figmaSVG, vsCodeSVG } from "../ui/svgs";

import projectImg_1 from "@/public/project-1.avif";
import projectImg_2 from "@/public/project-2.avif";
import projectImg_3 from "@/public/project-3.avif";

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
  {
    content: "x.com",
    placement: "bottom",
    href: "https://x.com/IQBAL96993312",
    svg: xSVG,
  },
  {
    content: "Threads",
    placement: "bottom",
    href: "https://www.threads.net/@_being.iqbal",
    svg: threadsSVG,
  },
  {
    content: "github",
    placement: "bottom",
    href: "https://github.com/MohammadIqbalHossain",
    svg: githubSVG,
  },
  {
    content: "instagram",
    placement: "bottom",
    href: "https://www.instagram.com/_being.iqbal",
    svg: instagramSVG,
  },
  {
    content: "facebook",
    placement: "bottom",
    href: "https://web.facebook.com/iqbal.abdullah.927543/",
    svg: facebookSVG,
  },
  {
    content: "linkedIn",
    placement: "bottom",
    href: "https://www.linkedin.com/in/iqbalhs/",
    svg: linkedinSVG,
  },
];

// Writing sections data.

export const wrtitingData: writingDataProps[] = [
  {
    slug: "1",
    image: "https://i.ibb.co/MDcwDsF/blockchainavif.jpg",
    date: "01/01/2000",
    href: "/writing/1",
    title:
      "Designing for the Future: Exploring the Role of AI and Crypto in Product Design",
    tag: "process",
  },

  {
    slug: "2",
    image: "https://i.ibb.co/fnCvhQQ/crypto.jpg",
    date: "01/01/2000",
    href: "/writing/2",
    title:
      "The Intersection of AI and Design: Creating User-Centric Solutions in the Digital Age Copy",
    tag: "crypto",
  },

  {
    slug: "3",
    image: "https://i.ibb.co/DLCGpyR/blog-3.jpg",
    date: "01/01/2000",
    href: "/writing/3",
    title:
      "Blockchain and Design: Opportunities and Challenges for Designers in the Crypto Industry",
    tag: "AI",
  },
];

export const workData: workDataProps[] = [
  {
    slug: "1",
    image: "https://i.ibb.co/bd765pJ/pick-timely.jpg",
    title: "Picktimely",

    client: "A team project for Institution assignment.",
    timeline: "Jan 22 – Feb 22",
    role: "Full-stack developer.",
    tagline: "Scheduling and appointment management solution",
    githubLink: "https://github.com/endgamers-404-Not-Found/Pick-timely",
    liveView: "https://pick-timely.web.app/",
    outcome:
      "PickTimely simplifies time management with an intuitive dashboard for scheduling tasks and meetings. Users can choose their preferred platforms like Google Meet or Zoom, making organization effortless and life easier.",
    details:
      "PickTimely is a scheduling and appointment booking platform designed to help businesses and professionals manage their time more effectively. The website offers a range of features, including calendar integration, automated reminders, and client management tools. With PickTimely, users can easily schedule appointments, set availability, and manage bookings from a single, centralized platform. The intuitive interface and customizable settings make it easy to tailor the platform to individual needs. Whether you are a freelancer, a small business owner, or part of a larger organization, PickTimely provides the tools you need to streamline your scheduling process and improve efficiency. The platform also includes robust reporting and analytics, allowing users to track appointment trends and make data-driven decisions.",
  },
  {
    slug: "2",
    image: "https://i.ibb.co/jhzN36D/merch-easy.jpg",
    client: "Personal",
    title: "MarchEasy",
    timeline: "Mar 22 – Apr 22",
    githubLink:
      "https://github.com/MohammadIqbalHossain/warehouse-management-client-site",
    liveView: "https://warehouse-site.web.app/",
    role: "Front-end developeor",
    tagline: "Book warehouse management solution.",
    outcome:
      "MarchEasy simplifies organizing and managing marches and protests with tools for planning, promoting, and tracking event success.",
    details:
      "MarchEasy is an innovative platform designed to simplify the process of organizing and managing events, marches, and protests. The website offers tools and resources for event coordinators to plan, promote, and execute successful events. Users can create detailed event pages, manage registrations, and communicate with participants through the platform. MarchEasy also provides analytics and reporting features, allowing organizers to track attendance, engagement, and overall event performance. With a focus on social activism, MarchEasy aims to empower communities and advocacy groups by providing a comprehensive solution for event management. The platform's intuitive design and robust functionality make it an essential tool for anyone looking to organize impactful events.",
  },
  {
    slug: "3",
    image: "https://i.ibb.co/WpR4ckh/rocket-Rock.jpg",
    client: "Rocket rock",
    title: "Rocket Rock",
    timeline: "May 23 – Jul 23",
    role: "Front-end developer.",
    tagline: "Solutions of all curosity of spaceships",
    githubLink:
      "https://github.com/MohammadIqbalHossain/rocket-rock-client-site",
    liveView: "https://rocket-rock-cce05.web.app/",
    outcome:
      "Rocket Rock is your go-to site for spacecraft engines and parts, offering a wide range of products, detailed specs, and secure checkout for space enthusiasts and professionals.",
    details:
      "Rocket Rock is a website for selling spacecraft engines and other parts of spaceships. This site offers a wide range of products for space enthusiasts and professionals alike. From propulsion systems to structural components, Rocket Rock provides everything needed to build or maintain a spacecraft. The website features detailed descriptions and specifications for each product, ensuring that customers can make informed decisions. Additionally, Rocket Rock offers a user-friendly interface, making it easy to navigate and find the required items. With a secure checkout process and reliable shipping options, Rocket Rock aims to be the go-to source for all space-related hardware. The site also includes a blog with the latest news and advancements in space technology, providing valuable insights and updates to its users.",
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

// Stack software data.

export const stackSoftwareData: arsenaldataProps[] = [
  {
    slug: "1",
    name: "Arc",
    href: "https://arc.net/",
    icon: arcSVG,
    image: "",
    tag: "web Browser",
  },
  {
    slug: "2",
    name: "ChatGPT",
    href: "https://chatgpt.com/",
    icon: chatgptSVG,
    image: "",
    tag: "Artificial Inteligence",
  },
  {
    slug: "3",
    name: "Figma",
    href: "https://www.figma.com/",
    icon: figmaSVG,
    image: "",
    tag: "Design tool",
  },
  {
    slug: "4",
    name: "VS code",
    href: "https://www.figma.com/",
    icon: vsCodeSVG,
    image: "",
    tag: "Code IDE",
  },
];

// Home page work section data.
export const workSectionData: workSectionDataProps[] = [
  {
    projectTitle: "RocketRock",
    href: "/works/1",
    logo: boxSVG,
    image: projectImg_1,
  },
  {
    projectTitle: "MerchEasy",
    href: "/works/2",
    logo: hexagonSVG,
    image: projectImg_2,
  },
  {
    projectTitle: "PickTimely",
    href: "/works/3",
    logo: sunSVG,
    image: projectImg_3,
  },
];
