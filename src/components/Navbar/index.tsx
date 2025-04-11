"use client";

import { capitalizeFirst } from "@/utils/Capitalize";
import { sectionsNav } from "@/utils/Sections";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RandomRunningDot from "../RandomRunningDot";
import HamburgerMenu from "../HamburgerMenu";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@/utils/Icon";
import { socialMedia } from "@/utils/SocialMedia";

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isBurgerOpen]);

  const handleBurgerClick = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, duration: 0.8 }}
      className="header fixed top-0 w-full flex justify-center px-6 max-[350px]:px-2 bg-transparent backdrop-blur-sm z-50"
    >
      <RandomRunningDot pos="bottom-0" />
      <nav className="w-[1400px]">
        <div className="container_navlink flex items-center justify-center">
          <div className="box_image mr-4 sm:mr-9 my-2">
            <Link
              href="/"
              as="/"
              className="flex items-center justify-center gap-1"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                _Rizqi
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-600">
                Sabilla.
              </span>
            </Link>
          </div>

          <div className="sections_link ml-auto">
            <div className="hidden lg:flex gap-8">
              {sectionsNav.map((item, index) => {
                const handleScroll = (e: React.MouseEvent) => {
                  e.preventDefault();
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                };

                return (
                  <button
                    key={index}
                    onClick={handleScroll}
                    className="relative group hover:text-white duration-300 text-base font-medium"
                  >
                    {capitalizeFirst(item)}
                  </button>
                );
              })}
            </div>
          </div>
          <div
            className={`navbar-mobile lg:hidden fixed top-0 mt-[48px] md:mt-[52px] lg:mt-[56px] pb-12 background-main left-0 w-full h-screen flex flex-col transform transition-transform duration-300 overflow-hidden ${
              isBurgerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-4 p-6">
              {sectionsNav.map((item, index) => {
                const handleScroll = (e: React.MouseEvent) => {
                  e.preventDefault();
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                };
                return (
                  <button
                    onClick={handleScroll}
                    key={index}
                    className="relative group hover:text-white duration-300 text-base font-medium ml-auto"
                  >
                    {capitalizeFirst(item)}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-between items-center mt-auto mb-14 mx-8">
              <div className="box-resume relative flex sm:hidden justify-center items-center text-center mx-3">
                <button className="group relative flex items-center justify-center">
                  <ArrowDownIcon
                    size={28}
                    className="text-white group-hover:text-gray-400 duration-300"
                  />{" "}
                  <span
                    className="absolute text-nowrap left-1/2 -translate-x-1/2 -top-full -translate-y-full mt-4 text-white text-sm font-semibold px-2 py-1 rounded-md 
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300"
                  >
                    Download CV
                  </span>
                </button>
              </div>

              <div className="social_media_box flex sm:hidden items-center justify-center gap-4 text-white text-[26px]">
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
            </div>
          </div>

          <div className="social_media_box hidden  sm:flex items-center justify-center gap-x-4 text-white text-[24px] mx-8">
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
          <div className="box-resume relative hidden sm:flex justify-center items-center text-center mx-3">
            <a
              href="resume/rizqisabilla.pdf"
              download
              className="group relative flex items-center justify-center"
            >
              <ArrowDownIcon
                size={28}
                className="text-white group-hover:text-gray-400 duration-300"
              />
              <span
                className="absolute text-nowrap left-1/2 -translate-x-1/2 top-full mt-4 text-white text-sm font-semibold px-2 py-1 rounded-md 
           opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300"
              >
                Download CV
              </span>
            </a>
          </div>

          {
            <HamburgerMenu
              handleBurgerClick={handleBurgerClick}
              isBurgerOpen={isBurgerOpen}
            />
          }
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
