import Button from "@/components/Button";
import Card from "@/components/card";
import ImpactCard from "@/components/impacts";
import { PenNibStraightIcon, SmileySadIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function LearningFromLearners() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Image */}
      <section className="mb-8">
        <div className="relative w-full h-[450px]">
          <Image
            src="/images/Learning-App-Thumbnail.jpg"
            alt="Case study hero"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="mb-24">
        <span className="inline-flex w-fit items-center gap-1 text-[14px] md:text-bodysmall py-2 px-4 bg-[#DBEAFE] rounded-full font-semibold">
          <PenNibStraightIcon size={20} weight="duotone" />
          In-House Project
        </span>
        <h1 className="text-h5 md:text-h4 font-bold md:font-bold mt-3">
          Learning from Learners: A UX Story
        </h1>
        <p className="text-bodysmall md:text-bodymedium font-regular mt-1 text-gray-600">
          How listening to students shaped the redesign of a video-based
          learning app.
        </p>
      </section>

      {/* Project Details */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Role</p>
            <p className="text-[14px] md:text-bodysmall">Research, UI/UX Designer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Team</p>
            <p className="text-[14px] md:text-bodysmall">
              Nikhil Mohan (Me),
              <br />
              Abhijith S Babu (Technical Lead)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Timeline</p>
            <p className="text-[14px] md:text-bodysmall">Aug 2023 - Oct 2023</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium">Project Type</p>
            <p className="text-[14px] md:text-bodysmall">
              In-house Project
              <br />
              Mobile App
              <br />
              EdTech
              <br />
              Gamified UX
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mb-24">
        <div className="relative w-full h-[200px] md:h-[378px] mb-12">
          <Image
            src="/images/Learning App Impact.png"
            alt="Impacts we created screen"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-h5 md:text-h4 font-bold md:font-bold">
            Why We Had to Rethink Our Learning App?
          </h2>
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            When we first launched the app, our goal was focused and clear:
          </p>
          <div className="relative w-full h-[200px] md:h-[450px]">
            <Image
              src="/images/Ed-Gaadi Banner.png"
              alt="Ed-Gaadi Banner"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            We curated crisp, exam-ready video lessons that helped students
            study smarter — especially during high-pressure exam seasons. And it
            worked. We crossed 500+ paying users within a short time, many of
            them returning every semester for a reliable, no-fluff way to study.
            <br />
            <br />
            But then we paused.
            <br />
            <br />
            As more students joined — from different branches, semesters, and
            even outside engineering — a different pattern began to emerge. They
            weren’t just watching videos. They were navigating stress, skipping
            between modules, losing time jotting notes, and often… dropping off
            midway.
          </p>
        </div>
      </section>

      {/* User Needs Section */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">What Users Really Needed?</h2>
        <div className="flex flex-col gap-4">
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            We spoke with some of our long-time learners to better understand
            how they use the app — and what was getting in their way.
            <br />
            <br />
            They said:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              image="/images/Persona3.jpg"
              alt="User need 1"
              text={`"I’ve a habit of revisiting topics just before entering the exam
                    hall. In the app, I’ve to play each video to find a specific topic,
                    which is difficult and time-consuming. If the app had a timestamp
                    feature, it would be easier for learners like me to quickly locate
                    the topic."`}
              author="Goutham S"
              subtitle="Govt Engineering College Barton Hill, Kerala"
            />
            <Card
              image="/images/Persona2.jpg"
              alt="User need 1"
              text={`"I mostly use the app during exams. Our teachers rush through topics, and we’re told to refer textbooks. But textbooks are hard to follow. Your app helped me learn — but I still had to pause videos and write notes every time."`}
              author="Akash V P"
              subtitle="College of Engineering Trivandrum, Kerala"
            />
            <Card
              image="/images/Persona1.jpg"
              alt="User need 1"
              text={`"I prepare questions to practise after learning a module. But sometimes after watching a topic, I felt stuck — I wanted MCQs or something to test myself, but nothing was there in the app."`}
              author="Aardra J"
              subtitle="College of Engineering Trivandrum, Kerala"
            />
          </div>
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            These weren’t edge cases. They reflected deeper friction points we
            hadn’t yet solved.
          </p>
        </div>
      </section>

      {/* What We Found in Our Audit */}
      <section className="mb-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-h5 md:text-h4 font-bold md:font-bold">What We Found in Our Audit</h2>
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            Before sketching even a single wireframe, we started with a deep
            audit of the app’s current state — layout by layout, screen by
            screen.
            <br />
            <br />
            Some of the design decisions made sense when the app was simpler,
            catering to a single audience (KTU students). But as the platform
            scaled to more learners and more content types, cracks started to
            show.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white text-[14px] md:text-bodysmall font-medium md:font-medium border border-neutral-200 rounded-full">
                <SmileySadIcon size={24} />
                No way to quickly resume learning after exiting the app
              </p>
              <p className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white text-[14px] md:text-bodysmall font-medium md:font-medium border border-neutral-200 rounded-full">
                <SmileySadIcon size={24} />
                No ready-made notes or summaries
              </p>
              <p className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white text-[14px] md:text-bodysmall font-medium md:font-medium border border-neutral-200 rounded-full">
                <SmileySadIcon size={24} />
                Topic discovery was painful, long scrolls, unclear hierarchy
              </p>
              <p className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white text-[14px] md:text-bodysmall font-medium md:font-medium border border-neutral-200 rounded-full">
                <SmileySadIcon size={24} />
                No practice content to reinforce learning
              </p>
              <p className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white text-[14px] md:text-bodysmall font-medium md:font-medium border border-neutral-200 rounded-full">
                <SmileySadIcon size={24} />
                Lack of motivation to continue after each video
              </p>
              <p className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white text-[14px] md:text-bodysmall font-medium md:font-medium border border-neutral-200 rounded-full">
                <SmileySadIcon size={24} />
                Zero personalization based on user habits or course focus
              </p>
            </div>
            <Image
              src="/images/Frustrated.svg"
              alt="Frustrated Student Illustration"
              width={400}
              height={382}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Design Objectives */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">Our Design Objectives</h2>
          <p className="text-black text-bodysmall md:text-bodymedium font-medium md:font-medium">
            "We’re not redesigning for the sake of aesthetics — we’re
            redesigning to help students learn better, faster, and with less
            friction."
          </p>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 justify-center items-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Better Content Discovery</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">With categorized modules and better visual hierarchy, users found the topics they needed without friction.</p>
            </div>
            <div className="relative w-full h-[852px] md:h-[678px]">
              <Image
                src="/images/Learning Screen 1.png"
                alt="Mockup Screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Increased Video Completion Rate</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">With resume support, structured content, and added notes, more users completed their videos without dropping off midway.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 justify-center items-center">
            <div className="relative w-full h-[852px] md:h-[678px]">
              <Image
                src="/images/Learning Screen 2.png"
                alt="Mockup Screen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Reduced Learning Time by 20%</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">Thanks to direct access to summarized notes and timestamped explanations.</p>
            </div>
            <div className="relative w-full h-[852px] md:h-[678px]">
              <Image
                src="/images/Learning Screen 3.png"
                alt="Mockup Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>  

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 justify-center items-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Increase Focus and Reduce Visual Noise</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">Apply better spacing, alignment, and contrast for more readable screens — especially for long study sessions.</p>
            </div>
            <div className="relative w-full h-[852px] md:h-[678px]">
              <Image
                src="/images/Learning Screen 4.png"
                alt="Mockup Screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Increase Focus and Reduce Visual Noise</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">Apply better spacing, alignment, and contrast for more readable screens — especially for long study sessions.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 justify-center items-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Higher Engagement in Practice Quizzes</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">Learners began exploring quiz sections immediately after videos — many requested more modules with interactive assessments.</p>
            </div>
            <div className="relative w-full h-[852px] md:h-[678px]">
              <Image
                src="/images/Learning Screen 5.png"
                alt="Mockup Screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-bodysmall md:text-bodymedium font-bold md:font-bold">Reduce Drop-Offs</h3>
              <p className="text-[14px] md:text-bodysmall text-[#737373]">Use visual progress trackers to provide learners with a clear sense of achievement, encouraging them to return and complete their learning journey.</p>
            </div>
          </div>        

        </div>
      </section>

      {/* Impacts */}
      <section className="mb-24">
        <h2 className="text-h5 md:text-h4 font-bold md:font-bold mb-4">Impacts We Created</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Case study hero"
            title="Increased Video Completion Rate"
            description="With resume support, structured content, and added notes, more users completed their videos without dropping off midway."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Case study hero"
            title="Reduced Learning Time by 20%"
            description="Thanks to direct access to summarized notes and timestamped explanations."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Case study hero"
            title="Higher Engagement in Practice Quizzes"
            description="Learners began exploring quiz sections immediately after videos — many requested more modules with interactive assessments."
          />
          <ImpactCard
            imageSrc="/images/badge.png"
            imageAlt="Case study hero"
            title="Better Content Discovery"
            description="With categorized modules and better visual hierarchy, users found the topics they needed without friction."
          />
        </div>
      </section>

      {/* Reflections */}
      <section className="mb-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-h5 md:text-h4 font-bold md:font-bold">Reflections & Learnings</h2>
          <ul className="list-disc pl-6 text-bodysmall md:text-bodymedium font-medium md:font-medium">
            <li>
              <b>User Needs</b> &gt; Feature Wishlist
            </li>
            <li>
              Micro-UX Fixes Create <b>Macro Impact</b>
            </li>
            <li>
              Small changes like showing{" "}
              <b>learning time, adding quiz feedback, or collapsing sections</b>{" "}
              can massively improve usability and confidence.
            </li>
            <li>
              Never Assume. <b>Always Listen.</b>
            </li>
            <li>
              <b>Early user interviews</b> gave us truths no analytics dashboard
              could - from exam-season behaviors to note-taking struggles.
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
            <b>Introduce Gamification elements</b> like streaks, badges, and
            peer leaderboard
          </li>
          <li>
            Improve <b>accessibility features</b> (font size controls, dark
            mode, voice notes)
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

            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium mb-4">
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

            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium mb-4">
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
                src="/images/Trade-Finance-Thumbnail.jpg"
                alt="Case Study"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="font-semibold md:font-semibold text-bodysmall md:text-bodymedium mb-4">
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
