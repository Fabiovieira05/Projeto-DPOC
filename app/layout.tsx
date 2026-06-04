import "./globals.css";
import { Science_Gothic, Poppins } from "next/font/google";
import { Header } from "@/components/ui/Header";

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
    <html lang="pt-BR" className={`${scienceGothic.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}