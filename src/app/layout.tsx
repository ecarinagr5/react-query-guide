import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Query App Movies",
  description: "Aplication using React Query to get Movies from TMDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
