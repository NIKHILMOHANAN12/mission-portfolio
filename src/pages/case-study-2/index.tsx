import Button from "@/components/Button";
import Card from "@/components/card";
import ImpactCard from "@/components/impacts";
import { ArrowElbowDownRightIcon, ArrowElbowRightIcon, PenNibStraightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animation from "@/lottie/PhoneMockup.json";


export default function VolunteerApp() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Image */}
      <section className="mb-8">
        <div className="relative w-full h-[450px]">
          <Image
            src="/images/Volunteer-App-Thumbnail.jpg"
            alt="Case study hero"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="mb-16">
        <span className="inline-flex w-fit items-center gap-1 text-bodysmall py-2 px-4 bg-[#DBEAFE] rounded-full font-semibold">
          <PenNibStraightIcon size={20} weight="duotone" />
          Freelancing
        </span>
        <h1 className="text-h4 font-bold mt-3">
          Rise of a Volunteer Management App
        </h1>
        <p className="text-bodymedium font-regular mt-1 text-gray-600">
          A Mobile-First Solution for Smarter Volunteer Coordination
        </p>
      </section>

      {/* Project Details */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-bodymedium">Role</p>
            <p className="text-bodysmall">Research, UI/UX Designer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-bodymedium">Team</p>
            <p className="text-bodysmall">
              Nikhil Mohan (Me - UI/UX Designer),
              <br />
              Hanan Binth Basheer (UX Research),
              <br />
              Jinso Raj (Backend Developer)
              <br />
              Jithu (Flutter Developer)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-bodymedium">Timeline</p>
            <p className="text-bodysmall">Sep 2024 - Mar 2024</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-bodymedium">Project Type</p>
            <p className="text-bodysmall">
              Mobile App
              <br />
              0 → 1
              <br />
              Gamified UX
              <br />
              User Research
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mb-24">
        <div className="relative w-full h-[378px] mb-10">
          <Image
            src="/images/Volunteer App Impact.png"
            alt="Impacts we created screen"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="text-h5 font-bold mb-4">How we reached to this idea?</h2>

        <div className="flex flex-col gap-4">
          
          <p className="text-black text-bodymedium font-medium">
            When I first met the team at Insight for Innovation, they were doing
            something incredible — managing over 9,000 volunteers, guiding
            62,000+ students, and coordinating across 100+ schools in Kerala and
            Karnataka. But behind this inspiring mission was a messy reality:
            Excel sheets, endless WhatsApp messages, and piles of paperwork.
            <br />
            <br />
            Volunteers had to manually log attendance.
            <br />
            <br />
            Coordinators juggled dozens of schools without a clear system.
            <br />
            <br />
            Quality Analysts struggled to evaluate sessions in real-time.
            <br />
            <br />
            And as the NGO grew, these inefficiencies grew with it. It was
            becoming impossible to scale without burning out their people.
          </p>
          
          <div className="relative w-full h-[500px]">
            <Lottie animationData={animation} loop={true} className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="mb-24">
        <h2 className="text-h5 font-bold mb-4">The Challenge</h2>
        <div className="flex flex-col gap-3">
          <p className="text-black text-bodymedium font-medium">
            The organization needed more than a digital version of their
            spreadsheets — they needed a scalable, mobile-first solution that:
          </p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
            <div className="flex gap-4 px-2 py-2 rounded-lg border border-gray-300 justify-center items-center">
              <Image
                src="/images/Honesty.svg"
                alt="Honesty Illustration"
                width={154}
                height={162}
              />
              <div className="flex flex-col gap-0">
                <p className="text-bodysmall text-[#B8B8B8]">#Challenge</p>
                <p className="text-bodymedium font-semibold leading-1">
                  Simplified the lives of volunteers and coordinators
                </p>
              </div>
            </div>

            <div className="flex gap-4 px-2 py-2 rounded-lg border border-gray-300 justify-center items-center">
              <Image
                src="/images/grammar correction.svg"
                alt="Grammar correction illustration"
                width={154}
                height={162}
              />
              <div className="flex flex-col gap-0">
                <p className="text-bodysmall text-[#B8B8B8]">#Challenge</p>
                <p className="text-bodymedium font-semibold leading-1">
                  Enabled real-time evaluation and feedback
                </p>
              </div>
            </div>

            <div className="flex gap-4 px-2 py-2 rounded-lg border border-gray-300 justify-center items-center">
              <Image
                src="/images/oversight.svg"
                alt="Analysing Illustration"
                width={154}
                height={162}
              />
              <div className="flex flex-col gap-0">
                <p className="text-bodysmall text-[#B8B8B8]">#Challenge</p>
                <p className="text-bodymedium font-semibold leading-1">
                  Brought transparency to student performance tracking
                </p>
              </div>
            </div>

            <div className="flex gap-4 px-2 py-2 rounded-lg border border-gray-300 justify-center items-center">
              <Image
                src="/images/Security.svg"
                alt="Secure Illustration"
                width={154}
                height={162}
              />
              <div className="flex flex-col gap-0">
                <p className="text-bodysmall text-[#B8B8B8]">#Challenge</p>
                <p className="text-bodymedium font-semibold leading-1">
                  Protected Sensitive Data with secure role-based access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="mb-24">
        <h2 className="text-h5 font-bold mb-4">The Mission</h2>
        <div className="flex flex-col gap-4">
          <p className="text-black text-bodymedium font-medium">
            I took on the role of Lead UI/UX Designer, steering the entire
            design journey from research to handoff.
          </p>
          <p className="text-bodymedium font-semibold">
            Our mission was to <br />
            <span className="text-h3 font-bold inline-block w-3/4">
              “Build an intuitive, role-based mobile app that fits seamlessly
              into the daily lives of the people using it.”
            </span>
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="mb-24">
        <h2 className="text-h5 font-bold mb-4">The Journey</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <ArrowElbowDownRightIcon size={24}/>
              <h3 className="text-h6 font-semibold">
                Understanding the Humans Behind the Numbers
              </h3>
            </div>
            
            <p className="text-black text-bodymedium font-medium">
              We began with stakeholder interviews — sitting down with
              volunteers, district coordinators, and quality analysts. We
              shadowed their daily work, listened to frustrations, and mapped
              their workflows. From this, three core personas emerged:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
              <Card
                image="/images/dummy.png"
                alt="User need 1"
                text={`"I really love teaching kids, but honestly, it gets overwhelming. Sometimes I don’t know which school I have to go to until the last minute. I try to prepare lessons, but without knowing the exact schedule, it feels rushed. Also, I don’t get feedback on whether I’m doing well or not — I just go, teach, and leave, hoping I made an impact."`}
                author="Gokul Raj"
                subtitle="Insight for Innovation Volunteer"
              />
              <Card
                image="/images/dummy.png"
                alt="User need 1"
                text={`"My job is to make sure the teaching quality is maintained, but it’s really tough. There’s no structured way to review or track how volunteers are performing. Sometimes I only get feedback weeks later, and it’s inconsistent. Without proper data, it feels like I’m just guessing rather than actually improving the teaching experience."`}
                author="Andrea J"
                subtitle="Insight for Innovation Volunteer"
              />
              <Card
                image="/images/dummy.png"
                alt="User need 1"
                text={`"Managing volunteers and schools is like juggling without a proper system. I have to track availability through scattered emails, WhatsApp groups, and phone calls. If someone cancels, I’m stuck finding a replacement last minute, which creates stress for both the school and me. I often feel like I’m firefighting instead of coordinating smoothly."`}
                author="Karthika R"
                subtitle="Insight for Innovation Volunteer"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <div className="flex items-center gap-2">
              <ArrowElbowDownRightIcon size={24}/>
              <h3 className="text-h6 font-semibold">
                Designing for Clarity and Flow
              </h3>
            </div>
        
            <p className="text-black text-bodymedium font-medium">
              With insights in hand, we crafted user flows and information
              architecture, ensuring that each role saw only what they needed —
              nothing more, nothing less. We moved from mid-fidelity wireframes
              to polished high-fidelity UIs, testing with real users at every
              stage.
            </p>
            <div className="relative w-full h-[535px] mt-3">
              <Image
                src="/images/Mid-High-Fi.png"
                alt="Wireframe to High Fidelity Design"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <div className="flex items-center gap-2">
              <ArrowElbowDownRightIcon size={24}/>
              <h3 className="text-h6 font-semibold">
                Building Together
              </h3>
            </div>
            <p className="text-black text-bodymedium font-medium">
              Once designs were validated, I delivered:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
              <div className="flex gap-4 px-1 py-1 rounded-lg border border-gray-300 justify-center items-center">
                <Image
                  src="/images/Design Process.svg"
                  alt="Design Process Illustration"
                  width={154}
                  height={162}
                />
                <div className="flex flex-col gap-0">
                  <p className="text-bodysmall text-[#B8B8B8]">
                    #Final Deliveries
                  </p>
                  <p className="text-bodymedium font-semibold leading-1">
                    A complete design system for consistency
                  </p>
                </div>
              </div>

              <div className="flex gap-4 px-1 py-1 rounded-lg border border-gray-300 justify-center items-center">
                <Image
                  src="/images/Mobile UX.svg"
                  alt="Mobile UX Illustration"
                  width={154}
                  height={162}
                />
                <div className="flex flex-col gap-0">
                  <p className="text-bodysmall text-[#B8B8B8]">
                    #Final Deliveries
                  </p>
                  <p className="text-bodymedium font-semibold leading-1">
                    Interactive prototypes for seamless handoff
                  </p>
                </div>
              </div>

              <div className="flex gap-4 px-1 py-1 rounded-lg border border-gray-300 justify-center items-center">
                <Image
                  src="/images/Online document.svg"
                  alt="Documentation Illustration"
                  width={154}
                  height={162}
                />
                <div className="flex flex-col gap-0">
                  <p className="text-bodysmall text-[#B8B8B8]">
                    #Final Deliveries
                  </p>
                  <p className="text-bodymedium font-semibold leading-1">
                    Clear documentation for development and QA
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-24">
        <h2 className="text-h5 font-bold mb-8">
            Key Features That Changed the Game
        </h2>
        <div className="flex flex-col gap-8">
          
          <div className="relative w-full h-[616px]">
            <Image
              src="/images/Screen1.png"
              alt="Mockup Screen"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="relative w-full h-[616px]">
            <Image
              src="/images/Screen2.png"
              alt="Mockup Screen"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="relative w-full h-[616px]">
            <Image
              src="/images/Screen3.png"
              alt="Mockup Screen"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="relative w-full h-[616px]">
            <Image
              src="/images/Screen4.png"
              alt="Mockup Screen"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="relative w-full h-[616px]">
            <Image
              src="/images/Screen5.png"
              alt="Mockup Screen"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impacts we created */}
      <section className="mb-24">
        <h2 className="text-h5 font-bold mb-4">Impacts we created</h2>
        <p className="text-bodymedium font-medium mb-4">
          The launch was a success — the app went live on both Play Store and
          App Store. Within weeks:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-2 font-medium text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              60% faster volunteer scheduling and school mapping compared to the
              old manual process.
            </p>
          </div>
          <div className="flex gap-2 font-medium text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              50+ schools now managed in one platform instead of scattered
              tools.
            </p>
          </div>
          <div className="flex gap-2 font-medium text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              3+ hours saved weekly for coordinators who no longer juggle Excel
              sheets and WhatsApp groups.
            </p>
          </div>
          <div className="flex gap-2 font-medium text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              Volunteers felt more valued and motivated through rewards and
              badges.
            </p>
          </div>
          <div className="flex gap-2 font-medium text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              Provided a single source of truth for student performance and
              volunteer activity.
            </p>
          </div>
          <div className="flex gap-2 font-medium text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              Quality Analysts could now give instant feedback after sessions,
              instead of waiting weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="mb-24">
        <h2 className="text-h4 font-bold mb-4">Reflections & Learnings</h2>
        <ul className="list-disc pl-6 space-y-2 text-bodymedium font-medium">
          <li>
            Learned to design for
            <b>diverse users with different needs.</b>
          </li>
          <li>
            Understood the
            <b>importance of offline-first solutions.</b>
          </li>
          <li>
            <b>Collaboration with stakeholders </b>shaped better decisions.
          </li>
          <li>
            Practiced prioritizing <b>core features over extras.</b>
          </li>
          <li>
            <b>Iterative feedback</b> improved flows and usability.
          </li>
        </ul>
      </section>

      {/* What I Learned & What’s Next */}
      <section className="mb-24">
        <h2 className="text-h4 font-bold mb-4">
          What’s Next
          </h2>
        <p className="text-bodymedium font-medium">We plan to:</p>
        <ul className="list-disc pl-6 space-y-2 text-bodymedium font-medium">
          <li>
            Including Location/Map feature for Volunteers to easily locate
            schools and plan travel routes.
          </li>
          <li>
            Introduce a leaderboard feature to motivate the volunteers to
            perform well on the teaching sessions.
          </li>
          <li>
            Multi-language Support to make the app inclusive for volunteers and
            schools from different regions.
          </li>
          <li>
            Make the app completely run as an offline platform, allowing
            volunteers in remote areas with poor connectivity to still manage
            tasks and sync data once online.
          </li>
        </ul>
      </section>

      {/* Outro */}
            <section className="text-center mb-24">
              <Image
                src="/images/Thankyou.svg"
                alt="Outro Illustration"
                width={414}
                height={428}
                className="mx-auto object-cover"
              />
              <h3 className="text-bodymedium font-semibold mt-6">
                Thank you for Reading!
              </h3>
            </section>

      {/* Explore Other */}
      <section className="mb-24">
        <h2 className="text-center text-h5 font-semibold mb-8">
          Explore My Other Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
          <div className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src="/images/Design-System-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-bodymedium font-semibold mb-4">
              Crafting Ospyn’s First Design System
            </p>

            {/* <Link href="/case-study-1">
              <Button>View Case Study</Button>
            </Link> */}
            <Button href="/case-study-1">View Case Study</Button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src="/images/Learning-App-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-bodymedium font-semibold mb-4">
              Learning from Learners: A UX Story
            </p>

            {/* <Link href="/case-study-3">
              <Button>View Case Study</Button>
            </Link> */}
            <Button href="/case-study-3">View Case Study</Button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src="/images/Trade-Finance-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-bodymedium font-semibold mb-4">
              A UX Journey in the Banking Sector
            </p>

            {/* <Link href="/case-study-4">
              <Button>View Case Study</Button>
            </Link> */}
            <Button href="/case-study-4">View Case Study</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
