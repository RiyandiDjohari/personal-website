import ActiveSectionContextProvider from "@/context/active-section-context";
import "./globals.css";
import { Inter, Figtree } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Riyandi Djohari | Portfolio",
  description: "Personal Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${figtree.className} text-[#0D2341] pt-28 sm:pt-36  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f9cfa7] absolute top-[-13rem] -z-10 right-[2rem] lg:right-[8rem] xl:right-[13rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[40.75rem] md:w-[50.75rem] lg:w-[68.75rem]  dark:bg-cyan-300/40 lg:h-[25.25rem]"></div>
        {/* <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <main className="app">{children}</main>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
