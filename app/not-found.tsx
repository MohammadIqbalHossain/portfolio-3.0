import Link from "next/link";
import { arrowSvg } from "./ui/svgs";
export default function NotFound() {
  return (
    <div className="flex size-full h-screen flex-col items-center justify-center gap-y-5 text-[--avt-text-secondary]">
      <h2>¯\_(ツ)_/¯</h2>
      <p>Page not found</p>
      <Link href="/" className="flex items-center justify-center text-white">
        <span>Back Home</span> {arrowSvg}
      </Link>
    </div>
  );
}
