import React from "react";
import { Header } from "@/components/Header";
import { About } from "@/components/About/About";
import "../globals.css";

export default function Home() {
  return (
    <main className="app">
      <Header />
      <About />
    </main>
  );
}
