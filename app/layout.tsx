import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   weight: ["400", "600"], // يمكنك تحديد الأوزان التي تحتاجها
//   subsets: ["latin"], // يمكنك تحديد مجموعة الحروف
// });

export const metadata: Metadata = {
  title: "Jamal Mohafil Portfolio  ",
  description: "Best Amazon Clone in the world in 2025",
};
// ${geistMono.className} ${geistSans.className}         ${poppins.className}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`antialiased ${geistMono.className} ${geistSans.className}
          `}
      >
        {children}
      </body>
    </html>
  );
}
