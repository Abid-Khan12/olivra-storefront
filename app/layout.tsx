import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
   preload: false,
   variable: "--font-sans",
   fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
   title: "Olivra",
   description:
      "Find everyday essentials and fresh favorites at Olivra. Shop quality products designed to make modern life simpler.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
   return (
      <html
         suppressHydrationWarning
         lang="en"
         className={`${montserrat.variable} h-full antialiased`}
      >
         <body className="mx-auto flex min-h-full w-full max-w-[2560px] flex-col">
            <Navbar />
            <>{children}</>
            <Footer />
         </body>
      </html>
   );
}
