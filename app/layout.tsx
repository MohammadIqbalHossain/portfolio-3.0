import "./globals.css";
import { inter } from "./ui/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`center-item ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
