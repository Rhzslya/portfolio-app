"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { sectionsNav } from "@/utils/Sections";
import { capitalizeFirst } from "@/utils/Capitalize";
import { items } from "@/utils/ProjectList";
import { AnimatePresence, motion } from "framer-motion";
import { socialMedia } from "@/utils/SocialMedia";

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
          <motion.div className="home-links flex items-center justify-center gap-1">
            <Link href="/" as="/">
              <div className="flex items-center justify-center gap-1">
                <motion.span
                  className="text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  _Rizqi
                </motion.span>
                <motion.span
                  className="text-5xl font-bold text-amber-600"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Sabilla.
                </motion.span>
              </div>
            </Link>
          </motion.div>

          <div className="flex justify-center items-center mt-2 mb-4">
            <FlipWords words={words} />
          </div>
          <div
            className="content-box w-full grid grid-cols-1 xs:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
 grid-rows-5 xs:grid-rows-3 md:grid-rows-2 xl:grid-rows-1 xl:grid-cols-[auto,auto,auto,auto,1fr] gap-3 xs:gap-4 md:gap-6 p-3 xs:p-4 md:p-6 text-sm text-gray-300"
          >
            {/* Quick Links */}
            <motion.div
              className="flex flex-col gap-3 min-w-[100px] lg:min-w-[150px]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.h3
                className="text-white text-base font-semibold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Quick Links
              </motion.h3>

              {sectionsNav.map((item, index) => {
                const handleScroll = (e: React.MouseEvent) => {
                  e.preventDefault();
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                };
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <button
                      onClick={handleScroll}
                      className="hover:text-white duration-200"
                    >
                      {capitalizeFirst(item)}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Dev Profiles */}
            <motion.div
              className="flex flex-col row-start-4 xs:row-auto gap-3 min-w-[100px] lg:min-w-[150px]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.h3
                className="text-white text-base font-semibold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Dev Profiles
              </motion.h3>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href="https://github.com/rhzslya"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white duration-200"
                >
                  <i className="fi fi-brands-github"></i> GitHub
                </Link>
              </motion.div>
            </motion.div>

            {/* Other Projects */}
            <motion.div
              className="flex flex-col gap-3 min-w-[150px] lg:min-w-[200px]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.h3
                className="text-white text-base font-semibold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Other Projects
              </motion.h3>

              {randomProjects.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="hover:text-white duration-200"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-col row-start-3 xs:row-auto xs:col-span-2 md:col-span-1 gap-3 min-w-[150px] lg:min-w-[200px]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.h3
                className="text-white text-base font-semibold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Tech Stack
              </motion.h3>

              <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-3">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "MongoDB",
                  "Firebase",
                  "Vercel",
                ].map((tech, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 min-w-[250px] xl:ml-auto md:col-start-2 xs:col-span-2 lg:col-span-1 lg:col-start-3 row-start-5 xs:row-start-3 md:row-start-2 xl:col-start-5 xl:row-start-1"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.h3
                className="text-white text-base font-semibold mb-1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                Subscribe
              </motion.h3>

              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Get updates about my latest projects & dev content.
              </motion.p>

              <motion.form
                className="flex gap-2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
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
              </motion.form>
            </motion.div>
          </div>
        </div>

        <div className="border-t-[1px] border-gray-700 pt-6 mt-10">
          {/* Social Media Icons */}
          <motion.div
            className="flex items-center justify-center gap-x-4 text-white text-[24px] mx-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {socialMedia.map((social, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:text-amber-500 duration-300"
                >
                  <i
                    className={`fi fi-brands-${social.name} flex items-center justify-center`}
                  ></i>
                  {/* Underline Hover Effect */}
                  <span className="absolute bottom-[-6px] left-0 transform -translate-x-1 w-0 h-[2px] bg-amber-500 group-hover:w-4 transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center mt-6 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p>
              © {new Date().getFullYear()} Rizqi Sabilla. Built with &lt;3 &amp;
              Next.js.
            </p>
          </motion.div>
        </div>
      </div>
      {showScrollTop && (
        <AnimatePresence>
          <motion.div
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-br from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white p-3 rounded-full shadow-lg backdrop-blur-md bg-opacity-90 transition-transform duration-300 hover:scale-110 hover:rotate-[8deg]"
              aria-label="Scroll to top"
            >
              <i className="fi fi-rr-arrow-small-up text-xl" />
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Footer;
