import "./globals.css";

import MainLayout from "@/components/MainLayout/MainLayout";
import type { Metadata } from "next";
import MuiXLicense from "@/components/MuiXLicense/MuiXLicense";

export const metadata: Metadata = {
  title: "IMDB Movies",
  description: "IMDB Movies Application by demirdanis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          sizes="32x32"
          href="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png"
        />
      </head>
      <body>
        <MainLayout>
          {children}
          <MuiXLicense />
        </MainLayout>
      </body>
    </html>
  );
}
