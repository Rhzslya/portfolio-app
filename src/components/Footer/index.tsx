"use client";

import Link from "next/link";
import React from "react";
import { FlipWords } from "../ui/flip-words";

const Footer = () => {
  const words = [
    "Beyond Reality",
    "Building the Future, One Line at a Time.",
    "Code. Create. Conquer.",
    "Innovate & Elevate",
    "Code Beyond Limits",
    "Dream. Code. Achieve.",
  ];

  return (
    <section className="footer-root relative min-h-[400px] px-14 overflow-hidden">
      <div className="footer-container my-8">
        <div className="box_image mr-4 sm:mr-9 my-2">
          <Link
            href="/"
            as="/"
            className="flex items-center justify-center gap-1"
          >
            <span className="text-5xl font-bold text-white">_Rizqi</span>
            <span className="text-5xl font-bold text-amber-600">Sabilla.</span>
          </Link>
          <div className="flex justify-center items-center mt-2">
            <FlipWords words={words} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
