import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/FramerMotionStyle";
import { LocationIcon, MailIcon, PhoneIcon } from "@/utils/Icon";
import { BackgroundGradient } from "../ui/background-gradient";
import Map from "../LeafletMaps";

const Contact = () => {
  return (
    <section id="contact" className="contact-root mx-auto max-w-7xl">
      <div className="contact-container">
        <motion.h1
          className="text-gray-300 font-bold text-center relative z-10 text-nowrap mb-4 md:mb-6 lg:mb-8"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // animasi jalan saat 50% masuk layar
          variants={fadeIn(0.6)}
        >
          Get In Touch
        </motion.h1>

        <div className="contact-content grid grid-cols-auto lg:grid-cols-2 grid-rows-1 gap-4">
          <div className="flex flex-col gap-8 lg:gap-16 py-2 px-0 sm:px-4 my-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
            >
              <BackgroundGradient>
                <PhoneIcon
                  color="#fff"
                  className="background-main p-2 rounded-full w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14"
                />
              </BackgroundGradient>

              <div className="phone">
                <motion.p
                  className="text-center lg:text-left text-sm sm:text-base font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  +62 851 8339 2058
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="w-full flex flex-col lg:flex-row  items-center gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient>
                <MailIcon
                  color="#fff"
                  className="background-main p-2 rounded-full w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14"
                />
              </BackgroundGradient>
              <div className="email">
                <motion.p
                  className="text-center lg:text-left text-sm sm:text-base font-semibold "
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  rizqisabilla1@gmail.com
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="w-full flex flex-col lg:flex-row  items-center gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="">
                <LocationIcon
                  color="#fff"
                  className="background-main p-2 rounded-full w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14"
                />
              </BackgroundGradient>

              <div className="address w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[100%] ">
                <motion.p
                  className="text-center lg:text-left text-sm sm:text-base font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Jl. Guru Kojar, Kampung Pondok Belimbing, Kelurahan Jurang
                  Mangu Barat, Kecamatan Pondok Aren, Kota Tangerang Selatan,
                  Banten 15224
                </motion.p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center items-center rounded-md min-h-[300px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[350px] p-0 sm:p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Map />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
