// import Image from 'next/image';
// import { useRef, useState } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
// import DropDown, { VibeType } from '../components/DropDown';
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";

// import { useChat } from 'ai/react';
// import Github from '../components/GitHub';

export default function Page() {
  return (
    <section className="min-h-screen px-10">
      <Header />
      <SectionOne />
      <Footer />
    </section>
  );
}
