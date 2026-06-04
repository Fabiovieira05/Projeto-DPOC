import "./globals.css";
import { Science_Gothic } from "next/font/google";

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  variable: "--font-science-gothic",
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={scienceGothic.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}