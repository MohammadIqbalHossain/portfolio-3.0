import Image from "next/image";
import profileImage from "@/public/profile.jpeg";
import { Tooltip } from "./ui/tooltip";

import Link from "next/link";

import { socialLinkdata } from "./lib/placeholder-data";
import { dmMono } from "./ui/font";
import { Button } from "./ui/button";
import { contactSVG } from "./ui/svgs";
import { CopyToClipboard } from "./components/copyToClipboard";

export default function Home() {
  // Neccessary code for formatting current time that is used in home page.
  const time = new Date();
  const currentHour = time.getHours();
  const currentMinute = time.getMinutes();
  const formattedTime = `${currentHour}:${currentMinute
    .toString()
    .padStart(2, "0")}`;

  return (
    <main className=" w-full md:w-8/12 lg:my-10 lg:w-5/12">
      <div className="text-center">
        <span
          className={`${dmMono.className} overflow-hidden text-[12px] text-[--avt-text-secondary]`}
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
          <h4 className="text-sm text-[--avt-heading-secondary]">
            Available for new opportunities
          </h4>
        </div>

        <div className="center-item my-4 grow gap-5">
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

        <div className="mx-5 flex flex-wrap items-center justify-center gap-4 md:mx-10 md:flex-nowrap lg:mx-10 lg:flex-nowrap">
          <Button
            svg={contactSVG}
            className="gap-2 bg-[--foreground] text-black hover:bg-slate-200"
          >
            Contact me
          </Button>
          <p>or</p>
          <Button>
            <CopyToClipboard />
          </Button>
        </div>
      </div>
    </main>
  );
}
