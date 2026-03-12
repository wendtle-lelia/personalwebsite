import type { Metadata } from "next";
import { outfit, dmSans } from "@/lib/fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lennart Wendt — Builder, Berlin",
  description:
    "Founder based in Berlin. Building AI for industries where getting it wrong isn't an option.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
