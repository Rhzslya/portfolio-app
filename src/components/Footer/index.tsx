"use client";

import Link from "next/link";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { sectionsNav } from "@/utils/Sections";
import { capitalizeFirst } from "@/utils/Capitalize";

const Footer = () => {
  const words = [
    "Beyond Reality",
    "Building the Future, One Line at a Time.",
    "Code. Create. Conquer.",
    "Innovate & Elevate",
    "Code Beyond Limits",
    "Dream. Code. Achieve.",
  ];

  const socialMedia = [
    {
      name: "facebook",
      url: "https://www.facebook.com/profile.php?id=100077692014108&locale=id_ID",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/your_username",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/your_username",
    },
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
          <div className="right-content">
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-white font-semibold">Quick Links</h3>
              {sectionsNav?.map((item, index) => {
                const linkPath = `/${item}`;
                return (
                  <Link
                    href={linkPath}
                    key={index}
                    className="relative group hover:text-white duration-300 text-base font-medium"
                  >
                    {capitalizeFirst(item)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-500">
          <div className="social_media_box hidden mt-8 sm:flex items-center justify-center gap-x-4 text-white text-[28px] mx-8">
            {socialMedia.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="relative group hover:text-gray-400 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`fi fi-brands-${social.name} flex items-center justify-center`}
                ></i>
              </Link>
            ))}
          </div>
          <div className="copy-right-mark text-center mt-6 text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Rizqi Sabilla. Built with ❤️ &
              Next.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
