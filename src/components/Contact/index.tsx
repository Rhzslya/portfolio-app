import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/FramerMotionStyle";
import { LocationIcon, MailIcon, PhoneIcon } from "@/utils/Icon";
import { BackgroundGradient } from "../ui/background-gradient";
import Map from "../LeafletMaps";

const Contact = () => {
  return (
    <section className="contact-root mx-auto max-w-7xl">
      <div className="contact-container">
        <motion.h1
          className="text-gray-300 font-bold text-center relative z-10 text-nowrap mb-8"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.6)}
        >
          Get In Touch
        </motion.h1>

        <div className="contact-content grid grid-cols-auto lg:grid-cols-2 grid-rows-1 gap-4">
          <div className="flex flex-col gap-8 lg:gap-16 py-2 px-0 sm:px-4 my-auto">
            <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              <BackgroundGradient>
                <PhoneIcon
                  color="#fff"
                  size={60}
                  className="background-main p-2 rounded-full"
                />
              </BackgroundGradient>

              <div className="phone">
                <p className="text-center lg:text-left text-sm sm:text-base font-semibold">
                  +62 851 8339 2058
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row  items-center gap-4 lg:gap-6">
              <BackgroundGradient>
                <MailIcon
                  color="#fff"
                  size={60}
                  className="background-main p-2 rounded-full"
                />
              </BackgroundGradient>
              <div className="email">
                <p className="text-center lg:text-left text-sm sm:text-base font-semibold ">
                  rizqisabilla1@gmail.com
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row  items-center gap-4 lg:gap-6">
              <BackgroundGradient className="">
                <LocationIcon
                  color="#fff"
                  size={60}
                  className="background-main p-2 rounded-full"
                />
              </BackgroundGradient>

              <div className="address w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[100%] ">
                <p className="text-center lg:text-left text-sm sm:text-base font-semibold">
                  Jl. Guru Kojar, Kampung Pondok Belimbing, Kelurahan Jurang
                  Mangu Barat, Kecamatan Pondok Aren, Kota Tangerang Selatan,
                  Banten 15224
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-md min-h-[300px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[350px] p-0 sm:p-4">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
