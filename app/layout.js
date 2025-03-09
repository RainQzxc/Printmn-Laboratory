import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Printmn",
  description: "Printmn - Хэрэглэгчийн сонгосон зургийг хэвлэх",
  icons: "bat.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
