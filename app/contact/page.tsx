"use client";

import { Suspense, useState } from "react";
import { Button } from "../ui/button";
import PageHeader from "../ui/pageHeader";
import Link from "next/link";
import { CopyToClipboard } from "../components/Home/copyToClipboard";
import { calenderSVG, linkedinSVG } from "../ui/svgs";
import Image from "next/image";
import loadingIMG from "@/public/loading.svg";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

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
        <h4 className="flex items-center gap-2 text-sm text-[--avt-heading-secondary]">
          <div className="hidden size-2 rounded-full bg-green-600 lg:block"></div>{" "}
          Available for new opportunities
        </h4>

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

        <button
          type="submit"
          className="my-2 flex w-full items-center justify-center rounded-lg bg-white px-0 py-2 text-black"
        >
          {status === "Sending..." ? (
            <Image
              className="size-[60px]"
              src={loadingIMG}
              alt="Loading_img"
            ></Image>
          ) : (
            "Submit"
          )}
        </button>

        <p
          className={`${
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
