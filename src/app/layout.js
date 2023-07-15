'use client'
import "./globals.css";
// import { Inter } from "next/font/google";
import ReduxProvider from "@/Redux/Provider";
// const inter = Inter({ subsets: ["latin"] });
import localFont from 'next/font/local'

const roboto = localFont({
  src: [
    {
      path: '../fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "Learn It in the easiest way",
  description: "Created by pouriya moshfegh ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
