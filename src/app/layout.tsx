import "./globals.css";
import {Chakra_Petch } from "next/font/google";

const chakra_petch = Chakra_Petch({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Series tracker",
  description: "Keep track of your favourite TV shows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${chakra_petch.className} container`}>{children}</body>
    </html>
  );
}
