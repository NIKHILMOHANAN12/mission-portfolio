import Button from "@/components/Button";
import Card from "@/components/card";
import ImpactCard from "@/components/impacts";
import {
  BinocularsIcon,
  CalendarHeartIcon,
  EyeIcon,
  File,
  FileIcon,
  HandFistIcon,
  PenNibIcon,
  PenNibStraightIcon,
  RulerIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function DesignSystem() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Image */}
      <section className="mb-8">
        <div className="relative w-full h-[450px]">
          <Image
            src="/images/Design-System-Thumbnail.jpg"
            alt="Case study hero"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="mb-16">
        <span className="inline-flex w-fit items-center gap-1 text-[14px] md:text-bodysmall py-2 px-4 bg-[#DBEAFE] rounded-full font-semibold">
          <PenNibStraightIcon size={20} weight="duotone" />
          In-House Project
        </span>
        <h1 className="text-h5 md:text-h4 font-bold mt-3">
          Designing Consistency: Crafting Ospyn’s First Design System
        </h1>
        <p className="text-bodysmall md:text-bodymedium font-regular mt-1 text-gray-600">
          Creating a scalable, documented, and developer-friendly design system
          for our Organisation.
        </p>
      </section>

      {/* Project Details */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-semibold text-bodysmall md:text-bodymedium">Role</p>
            <p className="text-[14px] md:text-bodysmall">UI/UX Designer, UI Developer</p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-semibold text-bodysmall md:text-bodymedium">Team</p>
            <p className="text-[14px] md:text-bodysmall">
              Nikhil Mohan (Me), <br />
              Ospyn UX Team, <br />
              Ospyn Front-End Developers, <br />
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-semibold text-bodysmall md:text-bodymedium">Timeline</p>
            <p className="text-[14px] md:text-bodysmall">July 2025 - Present</p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-semibold text-bodysmall md:text-bodymedium">Project Type</p>
            <p className="text-[14px] md:text-bodysmall">
              In-house Project
              <br />
              Design System
              <br />
              Design Audit
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mb-24">
        <div className="relative w-full h-[378px] mb-10">
          <Image
            src="/images/Design System Impact.png"
            alt="Impacts we created screen"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-h6 md:text-h5 font-bold">The Problem I Walked Into</h2>
          <p className="text-black text-bodysmall md:text-bodymedium font-medium">
            When I joined Ospyn, I noticed something repeating on project after
            project: every designer was reinventing the wheel. Buttons, inputs,
            spacing, colors — they all varied. Developers were using random hex
            codes and mismatched spacings. There was no shared “language.” It
            started costing us time and introducing inconsistencies across our
            7+ live banking‐sector client projects (and more incoming). One year
            of watching this unfold, and I finally proposed: “Let’s build a
            design system.” My manager green-lit it. The rest of the team?
            Mostly puzzled. 70% of them didn’t know what “design system” really
            meant.
          </p>
        </div>
      </section>

      {/* My One‐Month Mission */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold mb-4">My One‐Month Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-bodymedium md:text-bodylarge font-semibold px-3 py-[6px] rounded-md bg-[#DBEAFE] w-fit">
              <CalendarHeartIcon size={28} weight="duotone" />
              <p>I had 30 days</p>
            </div>
            <div>
              <p className="text-bodysmall md:text-bodymedium font-medium">In that time I was tasked with:</p>
              <ul className="list-disc pl-6 mt-2 mb-2 text-bodysmall md:text-bodymedium font-medium">
                <li>Creating a style guide (typography, spacing, palettes)</li>
                <li>Conduction UI Audits to find the pattern we use.</li>
                <li>Building UI components in Figma</li>
                <li>
                  Writing the documentation and guidelines Coding the components
                  (React + MUI) so design and dev matched perfectly
                </li>
              </ul>
              <p className="text-bodysmall md:text-bodymedium font-medium">It felt ambitious — especially as I was still at “intermediate”
              level in system building. But the urgency of multi-client projects
              meant we needed to act.</p>
            </div>
          </div>

          <Image
            src="/images/Aim Illustration.png"
            alt="Aim Illustration"
            width={366}
            height={312}
          />
        </div>
      </section>

      {/* Building the Foundation */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold mb-4">Building the Foundation</h2>
        <div className="flex flex-col gap-4">
          <p className="text-bodysmall md:text-bodymedium font-medium">
            Before jumping into components, I did a UI audit of our existing
            screens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="px-4 py-4 border border-gray-200 rounded-lg">
              <p className=" flex items-center justify-center text-bodysmall md:text-bodymedium gap-1 w-full px-2 py-2 bg-black text-white rounded mb-2">
                <BinocularsIcon size={24} weight="duotone" />I Discovered
              </p>
              <ul className="list-disc list-inside text-bodysmall md:text-bodymedium">
                <li>
                  Base font size was often 14px, designers used small fonts
                  rather than large display styles.
                </li>
                <li>White space was minimal — we needed tighter spacing.</li>
                <li>Color palettes varied wildly per project.</li>
              </ul>
            </div>

            <div className="px-4 py-4 border border-gray-200 rounded-lg">
              <p className=" flex items-center justify-center gap-1 text-bodysmall md:text-bodymedium w-full px-2 py-2 bg-black text-white rounded mb-2">
                <RulerIcon size={24} weight="duotone" />I set the rules to
              </p>
              <ul className="list-disc list-inside text-bodysmall md:text-bodymedium">
                <li>Typography: base 14px, simple fonts, no fancy displays.</li>
                <li>
                  Spacing: 4px baseline grid — so everything aligned neatly.
                </li>
                <li>
                  Colors: Semantic & neutral colors fixed; primary & secondary
                  would vary by client brand.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-[628px] mt-4">
            <Image
              src="/images/Variants.jpg"
              alt="Figma Variant Component Feature"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <p className="text-bodysmall md:text-bodymedium font-medium mt-4">
            Then in Figma I used Variables, Tokens, and Properties so any
            designer joining Ospyn could plug into these guidelines and start
            working.
            <br />
            <br />
            The foundation was now solid.
          </p>
        </div>
      </section>

      {/* Creating Components */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold mb-4">Creating Components</h2>
        <div className="flex flex-col gap-4">
          <p className="text-bodysmall md:text-bodymedium font-medium">
            With that foundation set, I moved into components.
            <br />
            In Figma I built: <b>Buttons, Input Fields, Section Headers</b> —
            then entire organisms and patterns like forms and sections.
          </p>

          <div className="relative w-full h-[628px]">
            <Image
              src="/images/UI-Sheet.png"
              alt="UI Component Sheet"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <p className="text-bodysmall md:text-bodymedium font-medium mt-6 mb-6">
            Each component had:
          </p>
          <ul className="list-disc list-inside pl-3 py-1 text-bodysmall md:text-bodymedium">
              <li>Usage explanation (“when to use”)</li>
              <li>Anatomy (what parts make up the component)</li>
              <li>Best practices & do’s and don’ts</li>
          </ul>
          <p className="text-bodysmall md:text-bodymedium font-medium">
            Then I stored them in organized pages in Figma.
          </p>

          <div className="relative w-full h-[628px]">
            <video
              src="/Video/Component Guideline.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <p
            className="text-bodysmall md:text-bodymedium font-medium mt-6
        "
          >
            Parallel to this, our dev team started converting components into
            code. Since we work in React + MUI, we prioritized that stack. I
            even jumped in and coded a few components using the same to match
            the specs exactly.
          </p>
        </div>
      </section>

      {/* Storybook: The Living Source */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold">Storybook: The Living Source</h2>
        <div className="flex flex-col gap-4">
          <p className="text-bodysmall md:text-bodymedium font-medium">
            The final piece? Storybook.
          </p>

          <div className="relative w-full h-[628px] mt-6">
            <Image
              src="/images/new.png"
              alt="Figma Variant Component Feature"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col gap-3 text-bodysmall md:text-bodymedium font-medium mt-4">
            <p>
              We took all the coded components + documentation and published
              them in our Storybook-repository. Now:
            </p>
            <div className="flex flex-col gap-2 px-3">
              <p className="flex items-center gap-2">
                <EyeIcon size={24} /> Designers see live behavior of components
              </p>
              <p className="flex items-center gap-2">
                <HandFistIcon size={24} /> Developers grab ready-to-use code
                snippets
              </p>
              <p className="flex items-center gap-2">
                <FileIcon size={24} /> All documentation, usage guidelines,
                variants are in one place
              </p>
            </div>
            <p>
              It transformed our workflow. What once took days of chasing specs
              now took minutes of selecting the right component.
            </p>
          </div>
        </div>
      </section>

      {/* Impacts we created */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold mb-4">Impacts we created</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-2 font-medium text-bodysmall md:text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>Delivered 70% faster on new screens (because reuse = speed).</p>
          </div>
          <div className="flex gap-2 font-medium text-bodysmall md:text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>Dramatic drop in inconsistent UI between modules.</p>
          </div>
          <div className="flex gap-2 font-medium text-bodysmall md:text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>Designers and devs now share a single language.</p>
          </div>
          <div className="flex gap-2 font-medium text-bodysmall md:text-bodymedium items-start">
            <Image
              src="/images/badge.png"
              alt="Icon"
              width={48}
              height={48}
              className="object-cover"
            />
            <p>
              Onboarding a new designer or developer now means “here’s the
              system — plug in.”
            </p>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold mb-4">Reflections & Learnings</h2>
        <ul className="list-disc pl-6 space-y-2 text-bodysmall md:text-bodymedium font-medium">
          <li>
            A design system isn’t just about components—
            <b>it’s about process, people, and evolution.</b>
          </li>
          <li>
            Understood the importance of{" "}
            <b>Documentation and Naming standards.</b>
          </li>
          <li>
            <b>Consistency</b> improves UX and also saves time and cost.
          </li>
          <li>
            Gained confidence in <b>Scalable design and Systems thinking.</b>
          </li>
        </ul>
      </section>

      {/* What I Learned & What’s Next */}
      <section className="mb-24">
        <h2 className="text-h6 md:text-h5 font-bold mb-4">What I Learned & What’s Next</h2>
        <p className="text-bodysmall md:text-bodymedium font-medium">
          I learned that building a design system isn’t just about components —
          it’s about culture change: aligning designers, developers, product
          owners around one system.
          <br />
          <br />
          Next step? Open-sourcing parts of the system for internal teams and
          possibly external contributors.
          <br />
          <br />
          And iterating constantly — the system grows with the company.
        </p>
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
        <h3 className="text-bodysmall md:text-bodymedium font-semibold mt-6">
          Thank you for Reading!
        </h3>
      </section>

      {/* Explore Other */}
      <section className="mb-16">
        <h2 className="text-center text-h6 md:text-h5 font-semibold md:font-semibold mb-6">
          Explore My Other Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src="/images/Volunteer-App-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-bodysmall md:text-bodymedium font-semibold mb-4">
              Rise of a Volunteer Management App
            </p>

            {/* <Link href="/case-study-2">
              <Button>View Case Study</Button>
            </Link> */}
            <Button href="/case-study-2">View Case Study</Button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src="/images/Learning-App-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-bodysmall md:text-bodymedium font-semibold mb-4">
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

            <p className="text-bodysmall md:text-bodymedium font-semibold mb-4">
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
