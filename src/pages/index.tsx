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
        <div className="h-screen w-full overflow-hidden">
          <Image className="h-full w-full object-cover" src={homeImg} alt="An Image of a character named Ethan Hunt from the film named Mission Impossible, diving from the mountains" />
        </div>
        <div className="absolute top-0  w-full h-full">
          <div className="max-w-6xl mx-auto h-full flex justify-center items-center px-6 py-16 space-y-10 ">
            <div className="text-center space-y-10">
              <div className="animate-bounce flex justify-center w-[225px] mx-auto">
                <Image src={manImg} alt="Ethan Hunt" />
              </div>
              <div className="relative z-10">
                <h1 className="font-zuume text-white text-[24px] sm:text-[44px]  md:text-[64px]  lg:text-[px] leading-tight lg:leading-none">
                  “When clean design feels incomplete,
                  <span className="block text-red-600">
                    that's when I drop in"
                  </span>
                </h1>
              </div>
              <div className="animate-bounce flex justify-center w-[225px] mx-auto">
                <Image src={bikeImg} alt="Bike" />
              </div>
            </div>
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

// "use client";

// import Head from "next/head";
// import Image from "next/image";
// import Button from "@/components/Button";
// import Intro from "@/components/intro";
// import Services from "@/components/services";
// import WorksShowcase from "@/components/WorksShowcase";
// import Footer from "@/components/footer";

// import homeImg from "../../public/images/home-banner.jpg";
// import manImg from "../../public/images/Ethan-Hunt.png";
// import bikeImg from "../../public/images/Bike.png";
// import contactImg from "../../public/images/contact-img.jpg";

// import ParallaxSection from "@/components/ParallaxSection";
// import ParallaxImage from "@/components/ParallaxImage";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Portfolio by Nikhil Mohan</title>
//         <meta name="description" content="Nikhil Mohan Portfolio" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.svg" />
//       </Head>

//       {/* HERO SECTION (with parallax BG) */}
//       <section className="min-h-screen overflow-hidden relative">

//         <div className="h-[700px]">
//           <ParallaxImage src={homeImg} alt="banner" speed={0.3} />
//         </div>

//         <div className="absolute top-0 w-full h-full">
//           <div className="max-w-6xl mx-auto h-full flex justify-center items-center px-6 py-16">
//             <div className="text-center space-y-10">

//               <div className="animate-bounce w-[225px] mx-auto">
//                 <Image src={manImg} alt="" />
//               </div>

//               <h1 className="font-zuume text-white text-[24px] sm:text-[44px] md:text-[64px] leading-tight">
//                 “When clean design feels incomplete,
//                 <span className="block text-red-600">that's when I drop in"</span>
//               </h1>

//               <div className="animate-bounce w-[225px] mx-auto">
//                 <Image src={bikeImg} alt="" />
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <ParallaxSection className="min-h-screen flex items-center">
//         <Intro />
//       </ParallaxSection>

//       {/* MY WORK */}
//       <ParallaxSection className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-8">
//           <div className="flex flex-col items-center gap-2 mb-20">
//             <h2 className="text-h4 font-bold text-center">Some stories from my work</h2>
//             <p className="text-bodymedium">
//               Here are a few projects where I helped teams turn ideas into digital experiences.
//             </p>
//           </div>
//           <WorksShowcase />
//         </div>
//       </ParallaxSection>

//       {/* SERVICES */}
//       <ParallaxSection className="min-h-screen flex items-center">
//         <Services />
//       </ParallaxSection>

//       {/* CONTACT */}
//       <ParallaxSection className="relative min-h-screen">
//         <ParallaxImage src={contactImg} alt="contact" speed={0.25} />

//         <div className="absolute top-0 lg:top-[170px] w-full">
//           <div className="max-w-6xl mx-auto px-4 text-center">
//             <h2 className="font-zuume text-[24px] sm:text-[44px] md:text-[43px] lg:text-[64px] leading-tight">
//               Ideas don’t wait. Neither do I.
//               <span className="block text-red-600">
//                 Let’s run towards something great together.
//               </span>
//             </h2>

//             <div className="mt-4">
//               <Button>
//                 <a href="mailto:nikhilmohan@gmail.com" target="_blank">Get in Touch</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </ParallaxSection>

//       {/* FOOTER */}
//       <ParallaxSection className="py-10">
//         <Footer />
//       </ParallaxSection>
//     </>
//   );
// }
