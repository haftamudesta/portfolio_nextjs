"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Users,
  Target,
  Code2,
  Rocket,
  Eye,
  Layout,
  Lightbulb,
} from "lucide-react";
import { useIsDarkMode } from "@/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function About() {
  const isDarkMode = useIsDarkMode();

  const theme = {
    bg: {
      primary: isDarkMode ? "var(--color-gray-800)" : "white",
      secondary: isDarkMode ? "var(--color-gray-700)" : "var(--color-gray-50)",
      card: isDarkMode ? "var(--color-gray-800)" : "white",
      hover: isDarkMode ? "var(--color-gray-700)" : "var(--color-gray-100)",
    },
    text: {
      primary: isDarkMode ? "white" : "var(--color-gray-900)",
      secondary: isDarkMode ? "var(--color-gray-400)" : "var(--color-gray-600)",
      muted: isDarkMode ? "var(--color-gray-500)" : "var(--color-gray-400)",
    },
    border: {
      default: isDarkMode ? "var(--color-gray-700)" : "var(--color-gray-200)",
    },
  };

  const values = [
    {
      icon: Users,
      title: "User-Centered Approach",
      description:
        "I put users at the heart of every decision, creating intuitive and meaningful experiences.",
    },
    {
      icon: Code2,
      title: "Code Quality & Security",
      description:
        "I prioritize clean, secure, and maintainable code with best practices and testing.",
    },
    {
      icon: Rocket,
      title: "Fast & Efficient",
      description:
        "I deliver optimized, high-performance solutions with quick turnaround times.",
    },
    {
      icon: Eye,
      title: "Pixel Perfect",
      description:
        "I guarantee attention to detail and high-quality, responsive designs.",
    },
    {
      icon: Layout,
      title: "Modern Tech Stack",
      description:
        "I work with cutting-edge technologies to build scalable web applications.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "I tackle complex challenges with creative and reliable solutions.",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Bachelor's Degree - Electrical Engineering",
      description:
        "Graduated from Mekele Institute of Technology (MIT) with a BSc in Electrical and Electronics Engineering, honored with a full scholarship for academic excellence.",
    },
    {
      year: "2013",
      title: "Master's Program - Railway Systems",
      description:
        "Joined Addis Ababa Institute of Technology (AAiT) to pursue an MSc in Electrical Engineering for Railway Systems, selected as one of 30 scholars by Ethiopian Railway Corporation.",
    },
    {
      year: "2015",
      title: "Master's Degree & Engineering Career",
      description:
        "Graduated with an MSc in Electrical Engineering while working as an Electrical Engineer at Ethiopian Electric Power.",
    },
    {
      year: "2022",
      title: "Full-Stack Development - Microverse",
      description:
        "Embarked on intensive remote learning at Microverse, mastering Ruby on Rails, JavaScript, and full-stack development while collaborating with international peers.",
    },
    {
      year: "2023",
      title: "Microverse Alumni & Global Network",
      description:
        "Successfully graduated from Microverse, joining a global community of 1000+ developers and gaining access to continued learning opportunities.",
    },
    {
      year: "2024",
      title: "Advanced Full-Stack - FreeCodeCamp",
      description:
        "Expanding expertise with Node.js, Express, Python, and FastAPI through FreeCodeCamp's comprehensive curriculum.",
    },
    {
      year: "2026",
      title: "Resident Engineer - EEP",
      description:
        "Promoted to Resident Engineer at Ethiopian Electric Power, leading critical infrastructure projects and technical teams.",
    },
  ];
  return (
    <div
      className="container-custom py-12 px-2"
      style={{
        background:
          "linear-gradient(145deg, #0a4b6e 0%, #1e6f9f 50%, #3b9bd7 100%)",
        color: "#fff",
      }}
    >
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="p-2 rounded-lg transition-colors"
          style={{
            color: theme.text.secondary,
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.bg.secondary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <ArrowLeft className="w-5 h-5 bg-white" />
        </Link>
        <h1
          className="text-3xl md:text-4xl font-bold"
          style={{ color: theme.text.primary }}
        >
          About Me
        </h1>
      </div>
      <div
        className="relative rounded-2xl overflow-hidden mb-12 p-12 md:p-16 text-center"
        style={{
          background: "#1e6f9f",
        }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Turning Ideas into Impact
        </h2>
        <p className="text-white/90 text-lg max-w-3xl mx-auto">
          I'm a passionate Full Stack Developer and Electrical Engineer
          dedicated to building beautiful, performant, and user-centric web
          applications while leveraging engineering principles to solve
          real-world problems.
        </p>
      </div>

      <Separator className="w-full mb-4 h-4 bg-linear-to-r from-transparent via-gray-400 to-transparent rounded-full" />
      <div
        className="grid lg:grid-cols-2 gap-12 mb-16 items-center"
        style={{
          background: "#0a4b6e",
          color: "#edf7ed",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <div className="space-y-4">
            <p className="leading-relaxed">
              My story began at{" "}
              <span className="font-semibold">
                Mekele Institute of Technology
              </span>{" "}
              (2012), where I earned my BSc in Electrical and Electronics
              Engineering. Being among the region's top scorers, I was honored
              with a full scholarship that set the foundation for my career.
            </p>
            <p className="leading-relaxed dark:text-gray-300">
              In 2015, I pursued my passion for specialized systems at{" "}
              <span className="font-semibold">
                Addis Ababa Institute of Technology
              </span>
              , earning an MSc in Electrical Engineering for Railway Systems.
              Selected as one of 30 scholars by the Ethiopian Railway
              Corporation, I deepened my expertise in complex engineering
              applications.
            </p>
            <p className="leading-relaxed dark:text-gray-300">
              While working as an Electrical Engineer at{" "}
              <span className="font-semibold">Ethiopian Electric Power</span>, I
              discovered my passion for software development. In 2022, I joined{" "}
              <span className="font-semibold">Microverse </span>
              to study full-stack web development, mastering Ruby on Rails and
              modern web technologies.
            </p>
            <p className="leading-relaxed dark:text-gray-300">
              Today, I'm expanding my horizons through{" "}
              <span className="font-semibold">FreeCodeCamp</span>, diving deep
              into Node.js and Python while continuing my role as Resident
              Engineer. I'm currently developing a full-featured application
              that demonstrates my ability to bridge hardware engineering
              principles with cutting-edge web technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="#main-works">
              <Button className="bg-emerald-500 text-white cursor-pointer transition-all duration-300 font-bold hover:bg-primary-700 hover:scale-105 hover:shadow-lg">
                View My Work
              </Button>
            </Link>
            <Link href="#main_contact">
              <Button className="bg-sky-400 text-white cursor-pointer transition-all duration-300 font-bold hover:bg-primary-700 hover:scale-105 hover:shadow-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div
          className="relative rounded-xl overflow-hidden aspect-square"
          style={{
            backgroundColor: theme.bg.secondary,
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={"/images/haftamu_d.jpg"}
              alt="haftamu"
              width={340}
              height={340}
              style={{ color: "var(--color-primary-600)" }}
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-tr from-primary-600/20 to-transparent rounded-xl pointer-events-none">
            <div className="absolute bottom-12 left-4 right-4 text-sky-400 pointer-events-none text-center">
              <p className="text-lg font-bold">
                ⚡ Electrical Engineer and Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full mb-4 h-4 bg-linear-to-r from-transparent via-gray-400 to-transparent rounded-full" />

      <div className="mb-24">
        <div className="text-center mb-12">
          <p className="text-2xl font-bold text-sky-400 max-w-2xl mx-auto relative inline-block capitalize">
            The principles that drive my work and define my approach
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-sky-500 via-primary-600 to-sky-900 rounded-full"></span>
            <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-linear-to-r from-sky-500 via-primary-600 to-sky-900 rounded-full opacity-40"></span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-sky-300 via-primary-200 to-primary-100 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-primary-500/10 transition-all duration-500" />

                <CardContent className="p-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-bold text-lg dark:text-white">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary-500 to-primary-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card
          className="border"
          style={{
            backgroundColor: "#2a3155",
            borderColor: theme.border.default,
          }}
        >
          <CardContent className="p-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Target
                className="w-6 h-6"
                style={{ color: "var(--color-primary-600)" }}
              />
            </div>
            <div className="mt-0.5">
              <p className="text-2xl font-bold text-sky-400 relative inline-block capitalize">
                My Mission
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-sky-500 via-primary-600 to-sky-900 rounded-full"></span>
                <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-linear-to-r from-sky-500 via-primary-600 to-sky-900 rounded-full opacity-50"></span>
              </p>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                To bridge the gap between hardware engineering and modern web
                development, creating innovative solutions that make a
                meaningful impact on users' lives.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="border"
          style={{
            backgroundColor: "#2a3155",
            borderColor: theme.border.default,
          }}
        >
          <CardContent className="p-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Eye
                className="w-6 h-6"
                style={{ color: "var(--color-primary-600)" }}
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-400 relative inline-block capitalize">
                My Vision
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-sky-500 via-primary-600 to-sky-900 rounded-full"></span>
                <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-linear-to-r from-sky-500 via-primary-600 to-sky-900 rounded-full opacity-50"></span>
              </p>
              <p className="text-base text-muted-foreground mt-4">
                To shape the future of technology through the lens of a System
                Engineer, creating seamless integration between hardware and
                software that makes advanced solutions accessible, reliable, and
                intuitive for everyone.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="w-full mb-4 h-4 bg-linear-to-r from-transparent via-gray-400 to-transparent rounded-full" />

      <div className="mb-16">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: theme.text.primary }}
        >
          My Journey
        </h2>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
            style={{ backgroundColor: theme.border.default }}
          />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card
                    className="border hover:shadow-lg transition-all"
                    style={{
                      backgroundColor: "#1c3b4f",
                    }}
                  >
                    <CardContent className="p-6">
                      <span
                        className="text-sm font-bold mb-2 inline-block"
                        style={{ color: "var(--color-primary-600)" }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p>{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: "var(--color-primary-600)",
                    border: `2px solid ${theme.bg.primary}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="w-full mb-4 h-4 bg-linear-to-r from-transparent via-gray-400 to-transparent rounded-full" />

      <Card
        className="border overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #1b4d1b 0%, #2d6a2d 50%, #4f8a4f 100%)",
        }}
      >
        <CardContent className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Something Great?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-sky-600 font-bold">
            Let's turn your vision into reality. I'm currently available for
            freelance projects, collaborations, contract work, and am ready for
            full-time employment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#main_contact">
              <Button
                size="lg"
                className="bg-amber-800 hover:bg-primary-700 text-white min-w-40 cursor-pointer"
              >
                Work With Me
              </Button>
            </Link>
            <Link
              href="/pdf/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-sky-600 hover:bg-primary-700 text-white min-w-40 cursor-pointer"
              >
                View Resume
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
