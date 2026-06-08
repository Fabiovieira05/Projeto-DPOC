import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Science_Gothic, Poppins } from "next/font/google";
import VLibrasWidget from "@/components/providers/vlibras";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPOC",
  description: "Portal informativo sobre a Doença Pulmonar Obstrutiva Crônica",
  icons: {
    icon: "/favicon-transparente.png",
  },
};

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  variable: "--font-science-gothic",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${scienceGothic.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-poppins overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-green-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider>
          <Navbar />
          <VLibrasWidget />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}