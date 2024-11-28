import Image from "next/image";
import profileImage from "@/public/profile.jpeg";

import Link from "next/link";
import { socialLinkdata } from "@/app/lib/placeholder-data";
import { Tooltip } from "@/app/ui/tooltip";
import { Button } from "@/app/ui/button";
import { CopyToClipboard } from "../copyToClipboard";
import { dmMono } from "@/app/ui/font";
import { contactSVG } from "@/app/ui/svgs";

export function IntroCard() {
  // Neccessary code for formatting current time that is used in home page.
  const time = new Date();
  const currentHour = time.getHours();
  const currentMinute = time.getMinutes();
  const formattedTime = `${currentHour}:${currentMinute
    .toString()
    .padStart(2, "0")}`;
  return (
    <div className="text-center">
      {/* users current time section */}
      <span
        className={`${dmMono.className} overflow-hidden text-[12px] text-[--avt-text-secondary]`}
      >
        {formattedTime}
      </span>

      {/* Profile image */}
      <div className="center-item my-4">
        <Image
          className="w-[60px] rounded-full"
          src={profileImage}
          alt="PROFILE_IMG"
        />
      </div>

      {/* profile information: introductions */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl text-[--avt-primary]">Iqbal Hossain</h1>
        <h2 className="text-xl text-[--avt-heading-secondary]">
          Front-end Developer at Nextlent
        </h2>
        <h4 className="text-md flex items-center text-[--avt-heading-secondary] gap-2">
          <div className="h-2 w-2 bg-green-600 rounded-full hidden lg:block"></div>{" "}
          Available for new opportunities
        </h4>
      </div>

      {/* social links */}
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

      {/* Contact me buttons and copy email adress button  */}
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

      {/* location section */}
      <p
        className={`${dmMono.className} overflow-hidden text-[14px] text-[--avt-text-secondary] my-10`}
      >
        CHT, BAN · 22.7763° N, 91.7910° E
      </p>
    </div>
  );
}
