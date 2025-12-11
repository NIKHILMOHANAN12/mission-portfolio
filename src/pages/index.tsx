import Head from "next/head";
import { useState } from "react";
import Button from "@/components/Button";
import Intro from "@/components/intro";
import Footer from "@/components/footer";
import contactImg from "../../public/images/contact-img.jpg";
import homeImg from "../../public/images/home-banner.jpg";
import manImg from "../../public/images/Ethan-Hunt.png";
import bikeImg from "../../public/images/Bike.png";
import Image from "next/image";
import Services from "@/components/services";
import WorksShowcase from "@/components/WorksShowcase";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio by Nikhil Mohan</title>
        <meta name="description" content="Nikhil Mohan Portfolio" />
      </Head>

        <section
          data-theme="light"
          className="min-h-screen overflow-hidden relative"
        >

          <div className="cloudLoop"></div>

          <div className="absolute inset-0">
            <Image
              src={homeImg}
              alt="Ethan Hunt Mission Impossible"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white z-[5]" />
          
          {/* <div className="cloudLoop"></div>
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              className="object-cover cloud-fade"
              src={homeImg}
              priority
              sizes="100vw"
              fill
              alt="An Image of a character named Ethan Hunt from the film named Mission Impossible, diving from the mountains"
            />
          </div> */}
          {/* <div className="absolute top-0  w-full h-full">
            <div className="max-w-6xl mx-auto h-full flex justify-center items-center px-6 py-16 space-y-10 ">
              <div className="text-center space-y-10">
                <div className="animate-bounce flex justify-center w-[225px] mx-auto">
                  <Image src={manImg} alt="Ethan Hunt" />
                </div>
                <div className="relative z-10">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-zuume text-white text-[32px] sm:text-[44px] md:text-[64px] leading-tight lg:leading-none"
                  >
                    “When clean design feels incomplete,
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                      className="block text-red-600"
                    >
                      {"that's when I drop in"}
                    </motion.span>
                  </motion.h1>
                </div>
                <div className="animate-bounce flex justify-center w-[225px] mx-auto">
                  <Image src={bikeImg} alt="Bike" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative z-10 h-screen flex items-center justify-center">
            <div className="text-center space-y-10">
              {/* Ethan Hunt */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="w-[180px] mx-auto"
              >
                <Image src={manImg} alt="Ethan Hunt" />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-zuume text-white text-[32px] sm:text-[44px] md:text-[64px] leading-tight"
              >
                “When clean design feels incomplete,
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                  className="block text-red-600"
                >
                  that's when I drop in
                </motion.span>
              </motion.h1>

              {/* Bike */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="w-[180px] mx-auto"
              >
                <Image src={bikeImg} alt="Bike" />
              </motion.div>
            </div>
          </div>
        </section>

      <Reveal>
        <Intro />
      </Reveal>

      <Reveal>
        <section
          data-theme="light"
          id="myWork"
          className="max-w-6xl mx-auto px-6 md:px-8 py-16"
        >
          <div className="flex flex-col items-center gap-2 mb-16">
            <h2 className="text-h5 md:text-h4 font-bold md:font-bold text-center">
              Some stories from my work
            </h2>
            <p className="text-bodysmall md:text-bodymedium font-medium text-center">
              Here are a few projects where I helped teams turn ideas into
              digital experiences.
            </p>
          </div>

          <WorksShowcase />
        </section>
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <section data-theme="light" className="relative">
          <div>
            <Image
              src={contactImg}
              alt="Ethan Hunt running above the buildings for a mission"
            />
          </div>
          <div className="absolute top-0 lg:top-[170px] w-full">
            <div className="max-w-6xl mx-auto px-4  text-center">
              <div className="sm:mt-4 md:mt-[50px]">
                <h2 className="font-zuume text-[24px] sm:text-[44px]  md:text-[43px]  lg:text-[64px] leading-tight lg:leading-none">
                  Ideas don’t wait. Neither do I.
                  <span className="block text-red-600">
                    Let’s run towards something great together.
                  </span>
                </h2>
                <div className="mt-4">
                  <Button
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilmohan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}
