import Image from "next/image";
import profileImage from "@/public/profile.jpeg";
import { Tooltip } from "./ui/tooltip";

import Link from "next/link";

import { socialLinkdata } from "./lib/placeholder-data";

export default function Home() {
  // Neccessary code for formatting current time that is used in home page.
  const time = new Date();
  const currentHour = time.getHours();
  const currentMinute = time.getMinutes();
  const formattedTime = `${currentHour}:${currentMinute
    .toString()
    .padStart(2, "0")}`;

  return (
    <main className="">
      <div className="pt-10">
        <span className="text-[#707070] leading-0 text-[12px] overflow-hidden ">
          {formattedTime}
        </span>

        <Image
          className="w-[80px] rounded-full"
          src={profileImage}
          alt="PROFILE_IMG"
        />

        <h1>Iqbal Hossain</h1>
        <h2>Front-end Developer</h2>
        <h4>Available for new opportunities</h4>

        <div className="flex">
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
      </div>
    </main>
  );
}
