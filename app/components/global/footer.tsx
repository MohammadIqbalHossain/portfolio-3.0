import Link from "next/link";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="center-item lg:ml-24">
      <div className="center-item mt-20 flex-col justify-center gap-y-3 text-center">
        <p className="text-sm text-[--avt-text-secondary] ">
          {" "}
          &#169; {getYear} made by{" "}
          <Link
            className="hover:text-white hover:underline"
            href={"https://github.com/MohammadIqbalHossain"}
          >
            @Iqbal
          </Link>
        </p>
        {/* TODO: Have to add link to github */}
        <p className="text-sm hover:text-[--avt-text-secondary] hover:underline">
          <Link
            target="__blank"
            href={
              "https://github.com/MohammadIqbalHossain/portfolio-3.0?tab=readme-ov-file#acknowledgements"
            }
          >
            About the design
          </Link>
        </p>
      </div>
    </footer>
  );
}
