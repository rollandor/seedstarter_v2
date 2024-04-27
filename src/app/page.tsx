import React from "react";
import { Header } from "@/components/Header";
import { About } from "@/components/About/About";
import { FirstSection } from "@/components/FirstSection";
import "../globals.scss";

export default function Home() {
  return (
    <main className="app">
      <Header />
      <FirstSection />
      <About />
    </main>
  );
}
