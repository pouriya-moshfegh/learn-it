'use client'
import Image from "next/image";
import NavBar from "@/components/container/navbar/NavBar";
import Hero from "@/components/container/hero/Hero";
import Info from "@/components/container/info/Info";
import Category from "@/components/container/category/Category";
export default function Home() {
  return <main>
    <NavBar/>
    <Hero/>
    <Info/>
    <Category/>
    
  </main>;
}
