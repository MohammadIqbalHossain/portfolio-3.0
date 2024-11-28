"use client";

import { useState } from "react";
import { copiedTickSVG, copySVG } from "../ui/svgs";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return { isCopied, copyToClipboard };
};

export function CopyToClipboard() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div
      className="flex items-center gap-1"
      onClick={() => copyToClipboard("being.iqbal.hossain@gmail.com")}
    >
      {isCopied ? `Copied` : `Copy email`}
      {isCopied ? copiedTickSVG : copySVG}
    </div>
  );
}
