import Button from "@/components/Button";
import Footer from "@/components/footer";
import Reveal from "@/components/Reveal";
import ThreeDRing from "@/components/ThreeDRing";
import ToolsSection from "@/components/Toolstack";
import ToolStack from "@/components/Toolstack";
import { MagicWandIcon } from "@phosphor-icons/react";
import Image from "next/image";

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
              src="/images/Nikhil Hero.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>

          
        </section>

        <Reveal>
          <section data-theme="dark"
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
          className="bg-[#0E100F] text-white py-16 px-[96px] mx-auto"
        >
          <h2 className="text-h4 font-bold text-center mb-12">
            My Work Timeline
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between border-b border-slate-600 border-dashed pb-3">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-[#1f2023] rounded-lg flex items-center justify-center">
                  <Image
                    src="/Logos/Ospyn.svg"
                    alt="Ospyn Technologies Logo"
                    width={32}
                    height={32}
                    className=""
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-bodymedium">
                    Ospyn Technologies
                  </span>
                  <span className="text-bodysmall text-neutral-400">
                    Engineer-UX
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-semibold text-bodymedium">
                  Since Apr’24
                </span>
                <span className="text-bodysmall text-neutral-400">
                  Trivandrum, Kerala
                </span>
              </div>
            </div>
            <div className="flex justify-between border-b border-slate-600 border-dashed pb-3">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-[#1f2023] rounded-lg flex items-center justify-center">
                  <Image
                    src="/Logos/Ed-Gaadi.png"
                    alt="Ed-Gaadi Private Limited Logo"
                    width={32}
                    height={32}
                    className=""
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-bodymedium">
                    Ed-Gaadi Pvt Ltd.
                  </span>
                  <span className="text-bodysmall text-neutral-400">
                    Jr. UI/UX Designer
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-semibold text-bodymedium">
                  Aug’22 - Oct'23
                </span>
                <span className="text-bodysmall text-neutral-400">
                  Trivandrum, Kerala
                </span>
              </div>
            </div>
            <div>
              <p className="text-bodymedium font-medium text-center">
                Did freelancing during the gap with various clients and still
                doing
              </p>
              {/* <div className="flex justify-center gap-4 px-10">
                <p className="flex gap-2 items-center text-bodysmall font-medium">
                  <Image
                    src="/Logos/IFI.png"
                    alt="Insight forr Innovation Logo"
                    width={40}
                    height={40}
                    className=""
                  />
                  Insight for Innovations
                </p>
                <p className="flex gap-2 items-center text-bodysmall font-medium">
                  <Image
                    src="/Logos/IgniteIndia.svg"
                    alt="Ignite India Logo"
                    width={48}
                    height={48}
                    className=""
                  />
                  Ignite India
                </p>
                <p className="flex gap-2 items-center text-bodysmall font-medium">
                  <Image
                    src="/Logos/JilzAndGanze.png"
                    alt="Jilz and Ganze Logo"
                    width={64}
                    height={64}
                    className=""
                  />
                  Jilz and Ganze
                </p>
              </div> */}
              
              <div className="flex justify-center px-10">
              <p className="flex gap-4 bg-[#1f2023] rounded-lg items-center justify-center text-bodysmall font-medium px-6 mt-2">
                  <Image
                    src="/Logos/IFI.png"
                    alt="Insight forr Innovation Logo"
                    width={80}
                    height={80}
                    className=""
                  />
                  <Image
                    src="/Logos/IgniteIndia.png"
                    alt="Ignite India Logo"
                    width={56}
                    height={56}
                    className=""
                  />
                  <Image
                    src="/Logos/JilzAndGanze.png"
                    alt="Jilz and Ganze Logo"
                    width={64}
                    height={64}
                    className=""
                  />
                  & More...
                </p>
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
          <h2 className="text-h4 font-bold mb-3">When I’m off on Duty...</h2>
          <ThreeDRing />
          <p className="text-bodymedium font-semibold text-white max-w-3xl py-6">
            "You’ll either find me in a dark theatre, first-day-first-show-ing
            the latest release, or out on the cricket ground swinging for sixes
            or just cruising around town with my homies."
          </p>
        </section>
        </Reveal>
        

        {/* Call To Action */}
        <Reveal bg="#0E100F">
          <section
          data-theme="dark"
          className="bg-[#0E100F] text-white py-16 px-6 text-center border-b"
        >
          <h2 className="text-h4 font-bold mb-2">
            So that’s the reel of who I am
          </h2>
          <p className="text-bodymedium font-medium text-white mb-6">
            If you’ve scrolled this far — thank you. I’d love to hear your story
            next.
          </p>
          <div>
            <p className="mb-2 text-bodysmall">
              Let's connect and make something impactful together
            </p>
            <Button href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilmohan@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
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
