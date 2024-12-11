import Image from "next/image";
import profileImage from "@/public/in-profile-2.jpg";

import Link from "next/link";
import { socialLinkdata } from "@/app/lib/placeholder-data";
import { Tooltip } from "@/app/ui/tooltip";
import { Button } from "@/app/ui/button";
import { CopyToClipboard } from "@/app/components/Home/copyToClipboard";
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
    <div className="text-center lg:pl-16">
      {/* users current time section */}
      <span
        className={`${dmMono.className} overflow-hidden text-[12px] text-[--avt-text-secondary]`}
      >
        {formattedTime}
      </span>

      {/* Profile image */}
      <div className="center-item my-4">
        <Image
          className="w-[80px] rounded-full"
          src={profileImage}
          alt="PROFILE_IMG"
        />
      </div>

      {/* profile information: introductions */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl text-[--avt-primary]">Iqbal Hossain</h1>
        <h2 className="text-xl text-[--avt-heading-secondary]">
          Front-end Developer at Nexlent
        </h2>
        <h4 className="flex items-center gap-2 text-sm text-[--avt-heading-secondary]">
          <div className="hidden size-2 rounded-full bg-green-600 lg:block"></div>{" "}
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
            <Link target="__blank" href={elemnet.href}>
              {elemnet.svg}
            </Link>
          </Tooltip>
        ))}
      </div>

      {/* Contact me buttons and copy email adress button  */}
      <div className="mx-5 flex flex-col flex-wrap items-center justify-center gap-4 md:mx-10 md:flex-nowrap lg:mx-10 lg:flex-row lg:flex-nowrap">
        <Button
          href="contact"
          introCard={true}
          svg={contactSVG}
          className="gap-2 bg-[--foreground] text-black hover:bg-slate-200"
        >
          
          contact
        </Button>
        <p>or</p>
        <Button>
          <CopyToClipboard />
        </Button>
      </div>

      {/* location section */}
      <p
        className={`${dmMono.className} my-10 overflow-hidden text-[14px] text-[--avt-text-secondary]`}
      >
        CHT, BAN · 22.7763° N, 91.7910° E
      </p>
    </div>
  );
}
