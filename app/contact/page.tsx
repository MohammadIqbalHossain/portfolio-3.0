"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import PageHeader from "../ui/pageHeader";
import Link from "next/link";
import { CopyToClipboard } from "../components/Home/copyToClipboard";
import { calenderSVG, clockSVG, linkedinSVG } from "../ui/svgs";
import Image from "next/image";
import loadingIMG from "@/public/loading.svg";

// import { Metadata } from "next";

// TODO: metadata is not working becaus it's a client component I've do it manually
// export const metadata: Metadata = {
//   title: "Contact",
// };

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  //Handler function for the form submition.
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message, name }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setEmail("");
        setMessage("");
        setName("");
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="my-20 p-4 lg:w-5/12 lg:p-0">
      <div className="mb-10">
        <PageHeader
          header="Contact"
          tagline="Let's talk about working together"
          className=""
        />
        {/* TODO: This opputuniy section could be a reusable component. */}
        <h4 className="flex items-center gap-2 text-sm text-[--avt-heading-secondary]">
          <div className="hidden size-2 rounded-full bg-green-600 lg:block"></div>{" "}
          Available for new opportunities
        </h4>

        {/* Actions buttons in contact page */}
        <div className="my-5 flex flex-col gap-5 lg:flex-row">
          <Button>
            <Link
              target="__blank"
              href={"https://cal.com/iqbal-hossain-7cwwif/15min"}
            >
              Book call
            </Link>
            <span className="ml-1">{calenderSVG}</span>
          </Button>

          <Button>
            <CopyToClipboard />
          </Button>

          <Button>
            <Link target="__blank" href={"https://www.linkedin.com/in/iqbalhs"}>
              {" "}
              DM me
            </Link>
            <span className="ml-1"> {linkedinSVG}</span>
          </Button>
        </div>
      </div>

      {/* Contact page form */}
      <form action="" onSubmit={handleSubmit}>
        <div className="flex w-full gap-4">
          <input
            className="input-styles w-2/4"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="input-styles w-2/4"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email "
            required
          />
        </div>
        <textarea
          name="textarea"
          className="input-styles w-full"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* Conditionally redering loading icon in sumnit button */}
        <button
          type="submit"
          className="my-2 flex w-full items-center justify-center rounded-lg bg-white px-0 py-2 text-black"
        >
          {status === "Sending..." ? (
            <Image
              className="my-0 h-8 w-full border"
              src={loadingIMG}
              alt="Loading_img"
            ></Image>
          ) : (
            "Submit"
          )}
        </button>

        {/* Response confimation section */}
        <p className="flex items-center justify-center gap-1 text-xs text-[--avt-text-secondary]">
          <span>{clockSVG}</span>
          Around 1 - 2 hours to respond
        </p>

        {/* Showing errors and sucess texts */}
        <p
          className={` text-center text-sm text-black ${
            status === "Email sent successfully!" || "Sending..."
              ? "text-green-500"
              : "text-red-400"
          }`}
        >
          {status}
        </p>
      </form>
    </div>
  );
}
