import Image from "next/image";
import profileImage from "@/public/profile.jpeg";
import { Tooltip } from "./ui/tooltip";

import Link from "next/link";

import { socialLinkdata } from "./lib/placeholder-data";
import { dmMono } from "./ui/font";
import { Button } from "./ui/button";
import { githubSVG } from "./ui/svgs";

export default function Home() {
  // Neccessary code for formatting current time that is used in home page.
  const time = new Date();
  const currentHour = time.getHours();
  const currentMinute = time.getMinutes();
  const formattedTime = `${currentHour}:${currentMinute
    .toString()
    .padStart(2, "0")}`;

  return (
    <main className=" w-full md:w-8/12 lg:w-5/12 lg:my-10">
      <div className="text-center">
        <span
          className={`${dmMono.className} text-[--avt-text-secondary] leading-0 text-[12px] overflow-hidden`}
        >
          {formattedTime}
        </span>

        <div className="center-item my-4">
          <Image
            className="w-[60px] rounded-full"
            src={profileImage}
            alt="PROFILE_IMG"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-[--avt-primary]">Iqbal Hossain</h1>
          <h2 className="text-xl text-[--avt-heading-secondary]">
            Front-end Developer at Nextlent
          </h2>
          <h4 className="text-[--avt-heading-secondary] text-md">
            Available for new opportunities
          </h4>
        </div>

        <div className="center-item gap-5 my-4 flex-grow">
          {socialLinkdata.map((elemnet, index) => (
            <Tooltip
              key={index}
              content={elemnet.content}
              placement={elemnet.placement}
            >
              <Link href={elemnet.href}>{elemnet.svg}</Link>
            </Tooltip>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mx-5 lg:mx-10 flex-wrap lg:flex-nowrap">
          <Button svg={githubSVG} className="bg-white text-black">
            Copy Email
          </Button>
          <p>or</p>
          <Button>Copy Email</Button>
        </div>
      </div>
    </main>
  );
}
