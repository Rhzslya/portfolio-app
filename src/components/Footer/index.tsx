"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { sectionsNav } from "@/utils/Sections";
import { capitalizeFirst } from "@/utils/Capitalize";
import { items } from "@/utils/ProjectList";

const Footer = () => {
  const [randomProjects, setRandomProjects] = useState<typeof items>([]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowScrollTop(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomProjects(selected);
  }, []);

  return (
    <section
      className="footer-root relative min-h-[400px] px-14 overflow-hidden"
      ref={footerRef}
    >
      <div className="footer-container my-8">
        <div className="box_image my-2">
          <div className="home-links flex items-center justify-center gap-1">
            <Link href="/" as="/" className="">
              <span className="text-5xl font-bold text-white">_Rizqi</span>
              <span className="text-5xl font-bold text-amber-600">
                Sabilla.
              </span>
            </Link>
          </div>

          <div className="flex justify-center items-center mt-2 mb-4">
            <FlipWords words={words} />
          </div>
          <div
            className="content-box w-full grid grid-cols-1 xs:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
 grid-rows-5 xs:grid-rows-3 md:grid-rows-2 xl:grid-rows-1 xl:grid-cols-[auto,auto,auto,auto,1fr] gap-3 xs:gap-4 md:gap-6 p-3 xs:p-4 md:p-6 text-sm text-gray-300"
          >
            {/* Quick Links */}
            <div className="flex flex-col gap-3 min-w-[100px] lg:min-w-[150px]">
              <h3 className="text-white text-base font-semibold mb-1">
                Quick Links
              </h3>
              {sectionsNav?.map((item, index) => {
                const linkPath = `/${item}`;
                return (
                  <Link
                    href={linkPath}
                    key={index}
                    className="hover:text-white duration-200"
                  >
                    {capitalizeFirst(item)}
                  </Link>
                );
              })}
            </div>

            {/* Dev Profiles */}
            <div className="flex flex-col row-start-4 xs:row-auto gap-3 min-w-[100px] lg:min-w-[150px]">
              <h3 className="text-white text-base font-semibold mb-1">
                Dev Profiles
              </h3>
              <Link
                href="https://github.com/rhzslya"
                target="_blank"
                className="flex items-center gap-2 hover:text-white duration-200"
              >
                <i className="fi fi-brands-github"></i> GitHub
              </Link>
            </div>

            {/* Other Projects */}
            <div className="flex flex-col gap-3 min-w-[150px] lg:min-w-[200px]">
              <h3 className="text-white text-base font-semibold mb-1">
                Other Projects
              </h3>
              {randomProjects.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="hover:text-white duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col row-start-3 xs:row-auto gap-3 min-w-[150px] lg:min-w-[200px]">
              <h3 className="text-white text-base font-semibold mb-1">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-3">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "MongoDB",
                  "Firebase",
                  "Vercel",
                ].map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[250px] xl:ml-auto  md:col-start-2 xs:col-span-2 lg:col-span-1 lg:col-start-3 row-start-5 xs:row-start-3 md:row-start-2  xl:col-start-5 xl:row-start-1">
              <h3 className="text-white text-base font-semibold mb-1">
                Subscribe
              </h3>
              <p className="text-gray-400 text-sm">
                Get updates about my latest projects & dev content.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-3 py-2 rounded-md w-full focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md text-white text-sm"
                >
                  Subscribe
                </button>
              </form>
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
              © {new Date().getFullYear()} Rizqi Sabilla. Built with &lt;3 &amp;
              Next.js.
            </p>
          </div>
        </div>
      </div>
      {showScrollTop && (
        <div className="scroll-top-button">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 backdrop-blur-sm bg-opacity-90"
            aria-label="Scroll to top"
          >
            <i className="fi fi-rr-arrow-small-up text-xl" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Footer;
