import { contactSVG, keyboardEnterSVG } from "@/app/ui/svgs";

export function Newsletter() {
  return (
    <div className="center-item flex-col gap-y-3 text-center lg:mx-10">
      <span className="my-5 text-2xl">{contactSVG}</span>
      <h2 className="text-xl">Subscribe to my newsletter</h2>
      <h3 className="my-2 text-[15px] text-[--avt-text-secondary]">
        I send out a biweekly newsletter where I share updates on my latest case
        studies, essays and products.
      </h3>

      <form className="relative w-full">
        <input
          className="w-full rounded-lg border border-[#464646] bg-[#1F1F1F] px-3 py-2 text-[--avt-text-secondary] shadow-lg outline-none transition duration-1000 placeholder:text-[#464646] focus:border-[0.5px]"
          type="email"
          placeholder="name@gamil.com"
        />
        <button
          type="submit"
          className="subscribe-button absolute right-2 top-2"
        >
          <span className="full-text flex items-center gap-1 text-[--avt-text-secondary]">
            {keyboardEnterSVG} Enter to subscribe
          </span>
          <span className="short-text -mt-1 rounded-md bg-[#282828] px-2 py-1 lg:hidden">
            Subscribe
          </span>
        </button>
      </form>

      <p className="text-xs text-[--avt-text-secondary]">
        Join 1500 + subscribers
      </p>
    </div>
  );
}
