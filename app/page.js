import React from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Socials } from "./components/Socials";
import { Contacts } from "./components/Contacts";

export default function Home() {
  return (
    <>
      <main className="bg-slate-50 h-fit w-screen relative flex justify-center flex-col items-center ">
        {/* TODO: Header + Navigation */}
        {/* the header component */}
      <Header/>
        {/* HERO Section */}
        <Hero/>
        {/* About Section */}
        <About/>
        {/* Experience Section */}
        <Experience/>
        {/* Socials Section */}
        <Socials/>
        {/* Contact Section */}
        <Contacts/>
      </main>
    </>
  );
}

