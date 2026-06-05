import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Science_Gothic, Poppins } from "next/font/google";
import VLibrasWidget from "./components/Vlibras";

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
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <VLibrasWidget />
        {children}
        <Footer />
      </body>
    </html>
  );
}