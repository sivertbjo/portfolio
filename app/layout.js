import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sivert Bjørnerås - Webutvikler",
  description:
    "Moderne nettsider og digitale løsninger for håndverkere og små bedrifter",
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
