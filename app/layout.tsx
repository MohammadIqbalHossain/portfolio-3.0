import { Navbar } from "@/app/components/global/navbar";
import "./globals.css";
import { inter } from "./ui/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Iqbal Hossain",
    default: "Iqbal Hossain",
  },
  description: "The official portfolio website by Iqbal Hossain.",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`center-item ${inter.className} relative mb-24 min-h-screen antialiased lg:mb-0`}
      >
        {children}

        <Navbar />
      </body>
    </html>
  );
}
