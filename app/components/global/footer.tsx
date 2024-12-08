import Link from "next/link";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="center-item lg:ml-24">
      <div className="center-item mt-20 flex-col justify-center gap-y-3 text-center">
        <p className="text-sm text-[--avt-text-secondary] ">
          {" "}
          &#169; {getYear} made by{" "}
          <Link className="hover:text-white hover:underline" href={""}>
            @Iqbal
          </Link>
        </p>
        {/* TODO: Have to add link to github */}
        <p className="text-sm hover:underline">
          <Link href={""}>About the design</Link>
        </p>
      </div>
    </footer>
  );
}
