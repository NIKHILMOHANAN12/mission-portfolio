import Head from "next/head";
import { useState } from "react";
import Button from "@/components/Button";
import Intro from "@/components/intro";
import ProjectCard from "@/components/projectcard";
import Footer from "@/components/footer";
import contactImg from "../../public/images/contact-img.jpg";
import homeImg from "../../public/images/home-banner.jpg";
import manImg from "../../public/images/Ethan-Hunt.png";
import bikeImg from "../../public/images/Bike.png";
import Image from "next/image";
import Services from "@/components/services";
import WorksShowcase from "@/components/WorksShowcase";


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio by Nikhil Mohan</title>
        <meta name="description" content="Nikhil Mohan Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
 
        <section data-theme="light" className="min-h-screen overflow-hidden relative"> 
          <div className="cloudLoop"></div>
          <div className="h-[700px]">
            <Image className="h-full" src={homeImg} alt="" />
          </div>
          <div className="absolute top-0  w-full h-full">
            <div className="max-w-6xl mx-auto h-full flex justify-center items-center px-6 py-16 space-y-10 ">
              <div className="text-center space-y-10">
                <div className="animate-bounce flex justify-center w-[225px] mx-auto">
                  <Image src={manImg} alt="" />
                </div>
                <div className="relative z-10">
                  <h1 className="font-zuume text-white text-[24px] sm:text-[44px]  md:text-[64px]  lg:text-[px] leading-tight lg:leading-none">
                    “When clean design feels incomplete, 
                    <span  className="block text-red-600">that's when I drop in"</span>
                  </h1>  
                </div>
                <div className="animate-bounce flex justify-center w-[225px] mx-auto">
                  <Image src={bikeImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Intro />

        <section data-theme="light" id="myWork" className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-col items-center gap-2 mb-20">
            <h2 className="text-h4 font-bold text-center">
              Some stories from my work
            </h2>
            <p className="text-bodymedium font-regular">
              Here are a few projects where I helped teams turn ideas into
              digital experiences.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <ProjectCard key={i} title={p.title} img={p.img} />
            ))}
          </div> */}

          <WorksShowcase />
        </section>
        
        <Services />
       
        <section data-theme="light" className="relative">
          <div>
            <Image src={contactImg} alt="Ethan Hunt running above the buildings for a mission" />
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
                  <Button><a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilmohan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                                  Get in Touch
                                  </a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
