"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/animations';

// Dynamically import Framer Motion with SSR disabled and fallbacks
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false, loading: () => <div /> });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false, loading: () => <h1 /> });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false, loading: () => <p /> });
const MotionSvg = dynamic(() => import('framer-motion').then((mod) => mod.motion.svg), { ssr: false, loading: () => <svg /> });
const MotionPath = dynamic(() => import('framer-motion').then((mod) => mod.motion.path), { ssr: false, loading: () => <path /> });

// Define interfaces for TypeScript
interface NavLink {
  name: string;
  href: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

// AI-themed SVG icons
const aiIcons = {
  strategy: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
    </MotionSvg>
  ),
  deployment: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 15V9a5 5 0 0110 0v6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="12" cy="9" r="2" />
    </MotionSvg>
  ),
  customAI: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M5 12h14M5 12l4-4m-4 4l4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </MotionSvg>
  ),
  data: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M4 6h16M4 12h16M4 18h16"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </MotionSvg>
  ),
  analytics: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M3 18v-6a9 9 0 0118 0v6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="12" cy="12" r="2" />
    </MotionSvg>
  ),
  intelligent: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M12 4v16M4 12h16"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="12" cy="12" r="2" />
    </MotionSvg>
  ),
  expertise: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="12" cy="12" r="2" />
    </MotionSvg>
  ),
  innovation: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M5 12h14M5 12l4-4m-4 4l4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </MotionSvg>
  ),
  scalability: (
    <MotionSvg
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 15V9a5 5 0 0110 0v6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <circle cx="12" cy="9" r="2" />
    </MotionSvg>
  ),
};

// Navigation links
const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services políticas de cancelación y devolución"},
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/pages" },
  { name: "Contact Us", href: "/contact" },
];

// Services data
const services: Service[] = [
  {
    title: "AI Strategy & Consulting",
    description: "We assess your business, identify high-impact AI opportunities, and guide you with a clear roadmap for implementation.",
    icon: aiIcons.strategy,
  },
  {
    title: "AI Integration & Deployment",
    description: "We seamlessly integrate AI into your systems, ensuring efficient deployment and optimal performance.",
    icon: aiIcons.deployment,
  },
  {
    title: "Custom AI Solutions",
    description: "We develop tailored AI solutions to address your unique business challenges and drive innovation.",
    icon: aiIcons.customAI,
  },
  {
    title: "Data-Driven Insights",
    description: "We leverage AI to extract actionable insights from your data, empowering smarter decision-making.",
    icon: aiIcons.data,
  },
  {
    title: "Analytics-Powered Decisions",
    description: "Our AI-driven analytics provide deep insights to guide strategic decisions and optimize outcomes.",
    icon: aiIcons.analytics,
  },
  {
    title: "Intelligent Data Solutions",
    description: "We design intelligent data systems that enhance efficiency and unlock the full potential of your data.",
    icon: aiIcons.intelligent,
  },
];

// Process steps data
const processSteps: ProcessStep[] = [
  {
    step: "STEP 01",
    title: "Discovery & Strategy",
    description: "We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear roadmap.",
    icon: aiIcons.strategy,
  },
  {
    step: "STEP 02",
    title: "Data & Infrastructure Assessment",
    description: "We evaluate your data and infrastructure to ensure a solid foundation for AI integration and scalability.",
    icon: aiIcons.data,
  },
  {
    step: "STEP 03",
    title: "Custom AI Development",
    description: "We design, build, and deploy tailored AI solutions to address your specific business needs and drive results.",
    icon: aiIcons.customAI,
  },
];

// Why Choose Us data
const valueProps: ValueProp[] = [
  {
    title: "AI Expertise & Experience",
    description: "With over 20 years in AI innovation, we deliver proven solutions backed by deep industry knowledge.",
    icon: aiIcons.expertise,
  },
  {
    title: "Cutting-Edge AI Innovation",
    description: "We stay ahead with the latest AI technologies to provide innovative solutions for your business.",
    icon: aiIcons.innovation,
  },
  {
    title: "Scalable & Secure AI",
    description: "Our AI solutions are designed to grow with your business while ensuring top-tier security.",
    icon: aiIcons.scalability,
  },
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    quote: "Nextmind transformed our business with their AI solutions. Their expertise is unmatched!",
    author: "Jane Doe",
    role: "CEO, Tech Innovate",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "The custom AI solutions provided by Nextmind have significantly improved our operational efficiency.",
    author: "John Smith",
    role: "CTO, Data Dynamics",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "Working with Nextmind was a game-changer. Their team delivered beyond our expectations.",
    author: "Emily Johnson",
    role: "Founder, AI Ventures",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Hero Section with Navigation Bar */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between sticky top-0 z-50 bg-gray-900/50 backdrop-blur-lg rounded-b-xl shadow-lg">
          <MotionDiv
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">Shaviwebstore</span>
          </MotionDiv>
          <MotionDiv
            className="hidden md:flex space-x-8"
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <MotionDiv
                key={link.name}
                variants={fadeIn("down", 0.1 * index)}
              >
                <Link
                  href={link.href}
                  className="text-gray-300 text-base font-medium hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                  {link.name === "Pages" && (
                    <span className="ml-1 text-gray-300">▼</span>
                  )}
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </MotionDiv>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 flex-1 flex items-center justify-center py-20">
          <MotionDiv
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <MotionDiv
              variants={fadeIn("up", 0.2)}
              className="flex justify-center items-center space-x-3 mb-8"
            >
              <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Home</span>
              <span className="text-gray-400 text-sm font-medium">/</span>
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Services</span>
            </MotionDiv>
            <MotionH1
              variants={fadeIn("up", 0.3)}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Explore Our AI-Powered Services
              </span>
            </MotionH1>
            <MotionP
              variants={fadeIn("up", 0.4)}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            >
              Unlock the potential of AI with our cutting-edge solutions tailored to your business needs.
            </MotionP>
            <MotionDiv variants={fadeIn("up", 0.5)}>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Discover More</Link>
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Decorative Elements */}
        <MotionDiv
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <MotionDiv
          className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <MotionSvg
          className="absolute top-1/3 left-20 w-16 h-16 text-orange-500 opacity-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
        
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <MotionPath
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </MotionSvg>
        <MotionSvg
          className="absolute top-1/2 right-20 w-16 h-16 text-blue-500 opacity-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <MotionPath
            d="M5 12h14M5 12l4-4m-4 4l4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </MotionSvg>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionH1
              variants={fadeIn("up", 0.2)}
              className="text- 4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </MotionH1>
            <MotionP
              variants={fadeIn("up", 0.3)}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Discover how our AI solutions can transform your business with innovation and efficiency.
            </MotionP>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <MotionDiv
                key={service.title}
                variants={fadeIn("up", 0.1 * index)}
                className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 flex flex-col items-start shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                style={{
                  borderImage: "linear-gradient(to right, #f97316, #3b82f6) 1",
                }}
              >
                <MotionDiv className="mb-6">{service.icon}</MotionDiv>
                <h4 className="text-white text-xl font-semibold mb-4">{service.title}</h4>
                <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-6 py-2 rounded-full bg-gray-800 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              HOW IT WORKS
            </MotionDiv>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Process for{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                Smarter AI Solutions
              </span>
            </h2>
          </MotionDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionDiv
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative space-y-8"
            >
              {processSteps.map((step, index) => (
                <MotionDiv
                  key={step.step}
                  variants={fadeIn("up", 0.1 * index)}
                  className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 flex items-start space-x-6"
                >
                  {/* Timeline Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-20 h-20 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500" />
                  )}
                  <MotionDiv className="mt-1">{step.icon}</MotionDiv>
                  <div>
                    <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">{step.step}</p>
                    <h4 className="text-white text-xl font-semibold mb-3">{step.title}</h4>
                    <p className="text-gray-400 text-base leading-relaxed">{step.description}</p>
                  </div>
                </MotionDiv>
              ))}
              <MotionDiv
                variants={fadeIn("up", 0.3)}
                className="text-gray-300 text-base mt-8"
              >
                Ready to transform your business with AI?{' '}
                <Link href="/contact" className="text-orange-500 hover:underline font-semibold">
                  Contact Us Now
                </Link>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl h-[500px] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI development process"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <MotionP
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-lg font-semibold"
                >
                  Building the future of AI, one solution at a time.
                </MotionP>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-6 py-2 rounded-full bg-gray-800 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              WHY CHOOSE US
            </MotionDiv>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose Us for{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                Your AI Journey
              </span>
            </h2>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {valueProps.map((prop, index) => (
              <MotionDiv
                key={prop.title}
                variants={fadeIn("up", 0.1 * index)}
                className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 flex flex-col items-start shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                style={{
                  borderImage: "linear-gradient(to right, #f97316, #3b82f6) 1",
                }}
              >
                <MotionDiv className="mb-6">{prop.icon}</MotionDiv>
                <h4 className="text-white text-xl font-semibold mb-4">{prop.title}</h4>
                <p className="text-gray-400 text-base leading-relaxed">{prop.description}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-6 py-2 rounded-full bg-gray-800 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              TESTIMONIALS
            </MotionDiv>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Our Clients Say About{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                Our AI Solutions
              </span>
            </h2>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={testimonial.author}
                variants={fadeIn("up", 0.1 * index)}
                className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                style={{
                  borderImage: "linear-gradient(to right, #f97316, #3b82f6) 1",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-300 text-base italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                <h4 className="text-white text-lg font-semibold">{testimonial.author}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;