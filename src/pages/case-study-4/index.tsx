import Button from "@/components/Button";
import Card from "@/components/card";
import ImpactCard from "@/components/impacts";
import { PenNibStraightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function TradeFinance() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Image */}
      <section className="mb-8">
        <div className="relative w-full h-[450px]">
          <Image
            src="/images/Trade-Finance-Thumbnail.jpg"
            alt="Case study hero image"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="mb-16">
        <span className="inline-flex w-fit items-center gap-1 text-[14px] md:text-bodysmall py-2 px-4 bg-[#DBEAFE] rounded-full font-semibold md:font-semibold">
          <PenNibStraightIcon size={20} weight="duotone" />
          In-House Project
        </span>
        <h1 className="text-h5 md:text-h4 font-bold md:font-bold mt-3">
          Reimagining Trade Finance: A UX Journey in the Banking Sector
        </h1>
        <p className="text-bodysmall md:text-bodymedium font-regular mt-1 text-gray-600">
          A web portal that could digitize and streamline the entire
          documentation process involved in trade finance.
        </p>
      </section>

      {/* Project Details */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Role</p>
            <p className="text-[14px] md:text-bodysmall">UI/UX Designer, UI Developer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Team</p>
            <p className="text-[14px] md:text-bodysmall">
              Nikhil Mohan (Me),
              <br />
              Ayyappan G (UX Lead),
              <br />
              Vishnu Prasad (Business Analyst),
              <br />
              Praveen P (Project Manager)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Timeline</p>
            <p className="text-[14px] md:text-bodysmall">June 2024 - Present</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Project Type</p>
            <p className="text-[14px] md:text-bodysmall">
              FinTech
              <br />
              Dev Handoff
              <br />
              Web Design
              <br />
              Prototyping
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mb-24">
        <div className="relative w-full h-[200px] md:h-[378px] mb-10">
          <Image
            src="/images/Trade Finance Impact.png"
            alt="Impacts we created screen"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">The Backdrop</h2>

        <div className="flex flex-col gap-4">
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            In the world of international trade, banks serve as the backbone -
            validating documents, facilitating transactions, and ensuring smooth
            financial operations across borders. But surprisingly, in many
            banks, especially in India, these operations still depend heavily on
            manual paperwork, making the process slow, error-prone, and
            resource-intensive. That’s where our team stepped in.
          </p>

          <div className="relative w-full h-[216px] md:h-[578px]">
            <Image
              src="/images/Frustrated Employee.png"
              alt="An image of an Employee being frustrated with his office works"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium p-4 bg-slate-100 rounded-lg">
            <b>Our mission:</b> To design a Trade Finance Application for
            banks—a web portal that could digitize and streamline the entire
            documentation process involved in trade finance. The product had to
            be powerful, scalable, and intuitive for both banks and corporate
            users.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">The Problem</h2>

        <div className="flex flex-col gap-4">
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            Trade finance involves complex documentation—Letters of Credit, Bill
            of Lading, Shipping documents, etc.—that must be shared, validated,
            and approved between importers, exporters, and their respective
            banks. Previously, all this was handled through manual paperwork,
            resulting in:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 flex flex-col gap-3 border border-gray-300 rounded-lg">
              <img
                src="/images/Bank Employee Overwork.png"
                alt="Frustrated User Image"
                className="w-full h-[255px] md:h-[368px] object-cover"
              />
              <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
                Delayed transactions
              </p>
            </div>

            <div className="p-4 flex flex-col gap-3 border border-gray-300 rounded-lg">
              <img
                src="/images/Bank Employee Helpless.png"
                alt="Frustrated User Image"
                className="w-full h-[255px] md:h-[368px] object-cover"
              />
              <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">Increased manpower</p>
            </div>

            <div className="p-4 flex flex-col gap-3 border border-gray-300 rounded-lg">
              <img
                src="/images/Bank Employee Confused.png"
                alt="Frustrated User Image"
                className="w-full h-[255px] md:h-[368px] object-cover"
              />
              <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
                Lack of traceability
              </p>
            </div>

            <div className="p-4 flex flex-col gap-3 border border-gray-300 rounded-lg">
              <img
                src="/images/Bank Employee Headache.png"
                alt="Frustrated User Image"
                className="w-full h-[255px] md:h-[368px] object-cover"
              />
              <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
                Tedious document verification
              </p>
            </div>
          </div>

          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium mt-3">
            The challenge was to build <b>A Digital platform</b> that replicates
            this offline flow while making it faster, secure, and user-friendly,
            with <b>AI-powered automation to reduce manual effort</b>.
          </p>
        </div>
      </section>

      {/* My Role */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">My Role</h2>
        <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
          As the UX Designer, I led the initiative to reimagine the Trade
          Finance application. I collaborated with cross-functional teams
          (Project Manager, Business Analysts, and Developers), facilitated
          requirement discussions, created design systems, and crafted
          wireframes and prototypes for the application’s overhaul.
        </p>
      </section>

      {/* Design Approach */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-8">Design Approach</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="hidden md:block absolute top-[48px] left-[90px] right-[94px] h-[2px] bg-gray-300"></div>
          <div className="flex flex-col items-center text-center flex-1">
            <div className="relative z-10 flex items-center justify-center">
              <img src="/Icons/Empathize.svg" className="w-24" />
            </div>
            <h3 className="text-bodymedium md:text-bodylarge font-semibold md:font-semibold mt-4">Empathize</h3>
            <p className="text-[14px] md:text-bodysmall font-regular md:font-medium text-gray-600 mt-2 max-w-[220px]">
                Gathered insights through direct discussions with internal users
                and banking staff.
            </p>
          </div> 

          <div className="flex flex-col items-center text-center flex-1">
            <div className="relative z-10 flex items-center justify-center">
              <img src="/Icons/Define.svg" className="w-24" />
            </div>
            <h3 className="text-bodymedium md:text-bodylarge font-semibold md:font-semibold mt-4">Define</h3>
            <p className="text-[14px] md:text-bodysmall font-regular md:font-medium text-gray-600 mt-2 max-w-[220px]">
                Identified core problems and pain points affecting the current workflow.
            </p>
          </div> 

          <div className="flex flex-col items-center text-center flex-1">
            <div className="relative z-10 flex items-center justify-center">
              <img src="/Icons/Design.svg" className="w-24" />
            </div>
            <h3 className="text-bodymedium md:text-bodylarge font-semibold md:font-semibold mt-4">Design</h3>
            <p className="text-[14px] md:text-bodysmall font-regular md:font-medium text-gray-600 mt-2 max-w-[220px]">
                Created low to high-fidelity wireframes and interactive prototypes in Figma.
            </p>
          </div> 

          <div className="flex flex-col items-center text-center flex-1">
            <div className="relative z-10 flex items-center justify-center">
              <img src="/Icons/Refine.svg" className="w-24" />
            </div>
            <h3 className="text-bodymedium md:text-bodylarge font-semibold md:font-semibold mt-4">Refine</h3>
            <p className="text-[14px] md:text-bodysmall font-regular md:font-medium text-gray-600 mt-2 max-w-[220px]">
                Validated flows with stakeholders and made improvements based on feedback.
            </p>
          </div>  
        </div>
      </section>


      {/* User Persona */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">User Persona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 flex flex-col gap-3 border border-gray-300 rounded-lg">
            <img
              src="/images/Bank Employee Energy Low.png"
              alt="Frustrated User Image"
              className="w-full h-[270px] md:h-[421px] object-cover"
            />
            <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
              “We get so many manual requests, it’s tiring and error-prone.”
            </p>
            <div className="flex flex-col">
              <p className="text-bodysmall font-semibold">Adithyan M</p>
              <p className="text-[14px]">Support Team Member</p>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-3 border border-gray-300 rounded-lg">
            <img
              src="/images/Bank Employee Tired.png"
              alt="Frustrated User Image"
              className="w-full h-[270px] md:h-[421px] object-cover"
            />
            <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
              “Sometimes I waste hours just trying to find the right document among hundreds.”
            </p>
            <div className="flex flex-col">
              <p className="text-bodysmall font-semibold">Nazrin A</p>
              <p className="text-[14px]">Operations Staff, Trade Finance Department</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview (Abstracted Wireframes) */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">
          Solution Overview (Abstracted Wireframes)
        </h2>

        <div className="flex flex-col gap-4">
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            To protect sensitive business information, these wireframes have
            been recreated with placeholder content and anonymized data while
            retaining the overall structure and interaction flow.
            <br />
            <br />
            <b>Key Design Features:</b>
          </p>

          <div className="flex flex-col gap-2 mb-6">
            <div className="relative w-full h-[262px] md:h-[690px]">
              <Image
                src="/images/Trade Screen 1.png"
                alt="An image of an Employee being frustrated with his office works"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
              <b>Compact data presentation</b> — large datasets shown without
              overwhelming the user.
              <br /> <b>Sticky filters and sort options</b> — speed up record
              search.
              <br /> <b>Clear status indicators</b> — quick visual cues for
              open, closed, or pending items.
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <div className="relative w-full h-[374px] md:h-[971px]">
              <Image
                src="/images/Trade Screen 2.png"
                alt="An image of an Employee being frustrated with his office works"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
              <b>Hybrid input mode</b> — AI auto-fills fields from PDF
              extraction to reduce manual effort.
              <br />
              <b>Editable fields for flexibility</b> — users can adjust or
              correct fetched data.
              <br /> <b>Validation indicators</b> — ensure data accuracy before
              submission.
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <div className="relative w-full h-[263px] md:h-[678px]">
              <Image
                src="/images/Trade Screen 3.png"
                alt="An image of an Employee being frustrated with his office works"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">
              <b>Focused task environment</b> — shows only relevant bill details
              without leaving the page.
              <br />
              <b>Selectable records</b> — users can act on multiple items at
              once.
              <br /> <b>Action-oriented CTAs</b> — “Proceed to Pay” and “Cancel”
              placed for quick decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Impacts */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">Impacts We Created</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Badge"
            title="2x faster document classification and access"
            description="Redesigned dashboards and filters helped users quickly identify and act on pending tasks."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Badge"
            title="50% reduction in manual data entry tasks"
            description="Lesser reliance on support staff for verification; process now managed by fewer people."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Badge"
            title="75% improvement in design-to-development communication."
            description="Clear documentation + frontend support (HTML, CSS, Next.js) + Figma components reduced confusion and rework."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Badge"
            title="Real-time alerts and milestone tracking improved compliance"
            description="Automated reminders for LC/BG expiry and payment deadlines reduced missed actions and penalty risks."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Badge"
            title="End-to-end customer view in a single dashboard"
            description="360° customer profile consolidated all transaction, LC/BG, and compliance data — cutting navigation time between systems by over 70%."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Badge"
            title="AI-driven document processing reduced turnaround time by 85%"
            description="Document classification and data extraction that once took an hour now completes in minutes, with minimal manual corrections."
          />
        </div>
      </section>

      {/* Reflections */}
      <section className="mb-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-h5 md:text-h4 font-bold md:font-bold">Reflections & Learnings</h2>
          <ul className="list-disc pl-6 text-bodysmall md:text-bodymedium font-medium md:font-medium">
            <li>
              Banking UX demands <b>clarity, hierarchy, and minimalism</b>
            </li>
            <li>
              <b>Cross-functional collaboration</b> is key when dealing with
              high-stake industries
            </li>
          </ul>
        </div>
      </section>

      {/* What I Learned & What’s Next */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">What’s Next</h2>
        <p className="text-bodysmall md:text-bodymedium font-medium md:font-medium">We plan to:</p>
        <ul className="list-disc pl-6 text-bodysmall md:text-bodymedium font-medium md:font-medium">
          <li>
            Conduct more in-depth usability tests with diverse banking
            professionals to uncover hidden workflow pain points.
          </li>
          <li>
            Scale the redesigned experience into mobile platforms, ensuring
            accessibility for users on the go.
          </li>
          <li>
            Integrate AI-driven Assistance like Predictive Insights and
            automation to simplify repetitive trade finance tasks for users.
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
        <h2 className="text-center text-h5 md:text-h4 font-bold md:font-bold mb-6">
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

            <p className="text-bodysmall md:text-bodymedium font-semibold md:font-semibold mb-4">
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
                src="/images/Design-System-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-bodysmall md:text-bodymedium font-semibold md:font-semibold mb-4">
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

            <p className="text-bodysmall md:text-bodymedium font-semibold md:font-semibold mb-4">
              Learning from Learners: A UX Story
            </p>

            {/* <Link href="/case-study-3">
              <Button>View Case Study</Button>
            </Link> */}
            <Button href="/case-study-3">View Case Study</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
