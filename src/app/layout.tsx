import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["200", "400", "600"],
   // variable: "--font-poppins",
});

export const metadata: Metadata = {
   title: "Frontend Mentor | Four card feature section",
   description: "Frontend Mentor | Four card feature section",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="text-[15px]">
         <body className={twMerge(poppins.className, "antialiased")}>{children}</body>
      </html>
   );
}
