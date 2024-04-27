import type { Metadata } from "next";
import { Source_Code_Pro, Exo, Manrope } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

const exo = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seedstarter",
  description: "SEEDSTARTER - decentralized private investors venture fund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
