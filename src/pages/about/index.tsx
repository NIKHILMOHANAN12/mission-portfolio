import Button from "@/components/Button";
import Footer from "@/components/footer";
import Reveal from "@/components/Reveal";
import ThreeDRing from "@/components/ThreeDRing";
import ToolsSection from "@/components/Toolstack";
import ToolStack from "@/components/Toolstack";
import { MagicWandIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <main className="bg-[#0E100F]">
        <section
          data-theme="dark"
          className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/About-Cover.jpg"
              alt="Background"
              fill
              className="object-cover z-0"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-b from-transparent to-[#0E100F] z-[2]" />

          <div className="hidden md:flex items-center gap-4 text-left absolute left-8 max-w-sm text-[#f7eecf] z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-[94px] leading-none font-bold"
            >
              {`{`}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
              className="text-bodymedium font-semibold leading-[1.25]"
            >
              “An Engineer turned
              <br />
              Designer from south
              <br />
              side of Kerala”
            </motion.p>
          </div>

          <div className="hidden md:flex items-center gap-4 text-right absolute right-8 max-w-sm text-[#f7eecf] z-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
              className="text-bodymedium font-semibold leading-[1.25]"
            >
              Now I’m ready, sleeves
              <br />
              rolled and mind fresh,
              <br />
              to work with you.
            </motion.p>
            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-[94px] leading-none font-bold"
            >
              {`}`}
            </motion.span>
          </div>
        </section>

        <Reveal>
          <section
            data-theme="dark"
            className="bg-[#0E100F] text-white pb-16 pt-20 px-[96px] items-center"
          >
            <div className="max-w-6xl mx-auto ">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="">
                  <Image
                    src="/images/Classmates.jpg"
                    alt="College Memories"
                    width={1200}
                    height={800}
                    className="rounded-2xl w-full h-auto "
                  />
                </div>

                <div className=" flex flex-col space-y-8 lg:space-y-0 justify-around">
                  <div className="lg:w-3/4">
                    <div className="mb-5">
                      <Image
                        src="/Icons/Left-Arrow.svg"
                        alt="Left-Arrow"
                        width={80}
                        height={80}
                      />
                    </div>
                    <p className="text-bodysmall leading-relaxed">
                      <span className="font-bold">
                        "College was my turning point.
                      </span>
                      <br />
                      While most chased code, I was designing posters, banners,
                      and event creatives. With no formal design team, I became
                      the go-to creator — self-taught, curious, and always
                      creating."
                    </p>
                  </div>
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col items-end justify-end w-full lg:w-3/4 text-right space-y-2">
                      <div className="mb-5">
                        <Image
                          src="/Icons/Right-Arrow.svg"
                          alt="Right-Arrow"
                          width={80}
                          height={80}
                        />
                      </div>
                      <p className="text-bodysmall leading-relaxed">
                        <span className="font-bold">"Yep, that’s me</span> — the
                        only engineer-turned-designer in this picture."
                      </p>
                      <div className="flex gap-1 items-center">
                        <MagicWandIcon size={20} />
                        <p className="font-semibold text-bodymedium">
                          Pixels › Pipes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" lg:pt-[200px]">
                  <Image
                    src="/images/Graduation.jpg"
                    alt="College Memories"
                    width={1200}
                    height={800}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Work Timeline */}
        <Reveal>
          <section
            data-theme="dark"
            className="bg-[#0E100F] text-white py-12 md:py-16 px-6 md:px-12 lg:px-[96px] mx-auto"
          >
            <h2 className="text-h6 md:text-h4 font-bold text-center mb-10 md:mb-12">
              My Work Timeline
            </h2>

            <div className="flex flex-col gap-6">
              {/* Ospyn */}
              <div className="flex flex-col md:flex-row sm:justify-between border-b border-slate-600 border-dashed pb-4 gap-4 md:gap-0">
                <div className="flex gap-3 md:gap-4 items-center">
                  <div className="w-10 h-10 md:w-12 sm:h-12 bg-[#1f2023] rounded-lg flex items-center justify-center">
                    <Image
                      src="/Logos/Ospyn.svg"
                      alt="Ospyn Technologies Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-bodysmall md:text-bodymedium">
                      Ospyn Technologies
                    </span>
                    <span className="text-[12px] md:text-bodysmall text-neutral-400">
                      Engineer-UX
                    </span>
                  </div>
                </div>

                <div className="flex flex-col text-left md:text-right">
                  <span className="font-semibold text-bodysmall md:text-bodymedium">
                    Since Apr’24
                  </span>
                  <span className="text-[12px] md:text-bodysmall text-neutral-400">
                    Trivandrum, Kerala
                  </span>
                </div>
              </div>

              {/* Ed-Gaadi */}
              <div className="flex flex-col md:flex-row md:justify-between border-b border-slate-600 border-dashed pb-4 gap-4 md:gap-0">
                <div className="flex gap-3 md:gap-4 items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1f2023] rounded-lg flex items-center justify-center">
                    <Image
                      src="/Logos/Ed-Gaadi.png"
                      alt="Ed-Gaadi Private Limited Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-bodysmall md:text-bodymedium">
                      Ed-Gaadi Pvt Ltd.
                    </span>
                    <span className="text-[12px] md:text-bodysmall text-neutral-400">
                      Jr. UI/UX Designer
                    </span>
                  </div>
                </div>

                <div className="flex flex-col text-left md:text-right">
                  <span className="font-semibold text-bodysmall md:text-bodymedium">
                    Aug’22 - Oct'23
                  </span>
                  <span className="text-[12px] md:text-bodysmall text-neutral-400">
                    Trivandrum, Kerala
                  </span>
                </div>
              </div>

              {/* Freelancing Section */}
              <div className="text-center">
                <p className="text-bodysmall md:text-bodymedium font-medium">
                  Did freelancing during the gap with various clients and still
                  doing
                </p>

                <div className="flex justify-center mt-3 px-4">
                  <div className="flex gap-3 md:gap-4 bg-[#1f2023] rounded-lg items-center justify-center px-4 py-2">
                    <Image
                      src="/Logos/IFI.png"
                      alt="Insight for Innovation Logo"
                      width={60}
                      height={60}
                      className="object-contain w-10 md:w-14"
                    />

                    <Image
                      src="/Logos/IgniteIndia.png"
                      alt="Ignite India Logo"
                      width={50}
                      height={50}
                      className="object-contain w-9 md:w-12"
                    />

                    <Image
                      src="/Logos/JilzAndGanze.png"
                      alt="Jilz and Ganze Logo"
                      width={54}
                      height={54}
                      className="object-contain w-10 md:w-14"
                    />

                    <span className="text-[12px] md:text-bodysmall font-medium">
                      & More...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <ToolsSection />
        </Reveal>

        <Reveal>
          <section
            data-theme="dark"
            className="bg-[#0E100F] text-white py-16 px-6 min-h-screen mx-auto text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-h6 md:text-h4 font-bold text-center mb-1 md:mb-3">
              When I’m off on Duty...
            </h2>
            <ThreeDRing />
            <p className="text-bodysmall md:text-bodymedium font-regular md:font-medium max-w-3xl py-6">
              "You’ll either find me in a dark theatre, first-day-first-show-ing
              the latest release, or out on the cricket ground swinging for
              sixes or just cruising around town with my homies."
            </p>
          </section>
        </Reveal>

        {/* Call To Action */}
        <Reveal>
          <section
            data-theme="dark"
            className="bg-[#0E100F] text-white py-16 px-6 text-center border-b"
          >
            <h2 className="text-h6 md:text-h4 font-bold md:font-bold text-center mb-2">
              So that’s the reel of who I am
            </h2>
            <p className="text-bodysmall font-regular mb-6">
              If you’ve scrolled this far — thank you. I’d love to hear your
              story next.
            </p>
            <div>
              <p className="mb-2 text-bodysmall">
                Let's connect and make something impactful together
              </p>
              <Button
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilmohan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </Button>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
