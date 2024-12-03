import { Button } from "../ui/button";
import PageHeader from "../ui/pageHeader";

export default function Contact() {
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

      <form action="">
        <div className="flex w-full gap-4">
          <input
            className="input-styles w-2/4"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="input-styles w-2/4"
            type="email"
            placeholder="Your Email "
          />
        </div>
        <textarea
          name="textarea"
          id=""
          className="input-styles w-full"
          color="#6A6A6A"
          placeholder=" Your message"
        ></textarea>

        <button type="submit" className="w-full">
          <Button className="bg-white text-black hover:bg-[#d8d2d2]">
            Submit
          </Button>
        </button>
      </form>
    </div>
  );
}
