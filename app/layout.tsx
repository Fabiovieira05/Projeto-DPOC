import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Science_Gothic, Poppins } from "next/font/google";
import VLibrasWidget from "./components/Vlibras";
import { ThemeProvider } from "./components/ThemeProvider";

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