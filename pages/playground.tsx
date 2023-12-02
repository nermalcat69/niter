"use client";

import PlaygroundHeader from "./parts/PlaygroundHeader";
import PlaygroundMain from "../components/PlaygroundMain";
import PlaygroundSidebar from "./parts/PlaygroundSidebar";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

export default function Playground() {
  return (
    <section className="antialiased flex flex-col lg:block w-full overflow-hidden max-h-screen">
      <div className="flex-1 min-h-[calc(100svh-54px)] h-full flex flex-col">
        <NextSeo
          title="Playground - Niter"
          description="Playground for Niter."
        />
        <PlaygroundHeader />
        <div className="flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-y-hidden">
          <div className="flex-none">
            <PlaygroundSidebar />
          </div>
          <div className="flex-1">
            <PlaygroundMain />
          </div>
        </div>
      </div>
    </section>
  );
}