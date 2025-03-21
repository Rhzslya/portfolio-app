import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/FramerMotionStyle";
import { LocationIcon, MailIcon, PhoneIcon } from "@/utils/Icon";
import { BackgroundGradient } from "../ui/background-gradient";
import dynamic from "next/dynamic";

// Import Map dengan SSR dinonaktifkan
const Map = dynamic(() => import("@/components/LeafletMaps"), { ssr: false });
const Contact = () => {
  return (
    <section className="contact-root">
      <div className="contact-container">
        <motion.h1
          className="text-gray-300 font-bold text-center relative z-10 text-nowrap"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.6)}
        >
          Get In Touch
        </motion.h1>

        <div className="contact-content p-2 grid grid-cols-3 gap-4">
          <div className="w-full flex flex-col items-center gap-4">
            <BackgroundGradient className="">
              <LocationIcon
                color="#fff"
                size={60}
                className="background-main p-2 rounded-full"
              />
            </BackgroundGradient>

            <div className="address max-w-[70%]">
              <p className="text-center text-base font-medium">
                Jl. Guru Kojar, Kampung Pondok Belimbing, Kelurahan Jurang Mangu
                Barat, Kecamatan Pondok Aren, Kota Tangerang Selatan, Banten
                15224
              </p>
            </div>
            {/* <Map /> */}
          </div>
          <div className=" w-full flex flex-col items-center gap-4">
            <BackgroundGradient>
              <PhoneIcon
                color="#fff"
                size={60}
                className="background-main p-2 rounded-full"
              />
            </BackgroundGradient>

            <div className="w-full h-full p-2 rounded-md flex flex-col justify-center items-center">
              <div className="bg-amber-500 text-white px-2 py-1 rounded-md">
                <p className="text-base mt-1">Available 24/7</p>
              </div>
              <p className="text-xl font-bold text-center text-nowrap text-amber-500">
                +62 851 8339 2058
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <BackgroundGradient>
              <MailIcon
                color="#fff"
                size={60}
                className="background-main p-2 rounded-full"
              />
            </BackgroundGradient>
            <div className="address max-w-[70%]">
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, vero!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
