import type { Metadata } from "next";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
   subsets: ["latin"],
   weight: ["200", "400", "600"],
});

export const metadata: Metadata = {
   title: "Frontend Mentor | Four card feature section",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={twMerge(poppins.className, "leading-normal antialiased")}>
            <main className="min-h-screen w-full">{children}</main>
         </body>
      </html>
   );
}
