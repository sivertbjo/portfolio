import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sivert Bjørnerås",
  description:
    "Norsk lyd- og systemtekniker i P4 Radio Hele Norge. Spesialisert innen lydteknikk, it-drift, video og kringkastingsteknologi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" data-theme="abyss">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
