import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Viewport, Metadata } from "next";

export const metadata: Metadata = {
  title: "TDEE Calculator",
  description: "Total Daily Energy Expenditure (TDEE) Calculator.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
