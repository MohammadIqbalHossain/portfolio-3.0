"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import PageHeader from "../ui/pageHeader";

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
          <Button>Book call</Button>
          <Button>Copy email </Button>
          <Button>DM me</Button>
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
          className="my-2 w-full rounded-lg bg-white px-0 py-2 text-black"
        >
          submit
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
