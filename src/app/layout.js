"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/Redux/Provider";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn It in the easiest way",
  description: "Created by pouriya moshfegh ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
