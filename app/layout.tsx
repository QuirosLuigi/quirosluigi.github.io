import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnold Luigi G. Quiros | SuiteCloud Portfolio",
  description:
    "Modern portfolio for Arnold Luigi G. Quiros, Oracle NetSuite SuiteCloud Technical Support Engineer.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
