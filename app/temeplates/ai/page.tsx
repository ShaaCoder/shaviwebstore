"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/animations';

// Dynamically import Framer Motion with SSR disabled
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionSvg = dynamic(() => import('framer-motion').then((mod) => mod.motion.svg), { ssr: false });
const MotionPath = dynamic(() => import('framer-motion').then((mod) => mod.motion.path), { ssr: false });

// Define interfaces for TypeScript
interface NavLink {
  name: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface Fact {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

interface MissionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

// AI-themed SVG icons
const aiIcons = {
  neuralNetwork: (
    <MotionSvg
      className="w-10 h-10 text-indigo-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
    </MotionSvg>
  ),
  dataFlow: (
    <MotionSvg
      className="w-10 h-10 text-indigo-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M5 12h14M5 12l4-4m-4 4l4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </MotionSvg>
  ),
  cloudAI: (
    <MotionSvg
      className="w-10 h-10 text-indigo-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 15V9a5 5 0 0110 0v6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
      <circle cx="12" cy="9" r="2" />
    </MotionSvg>
  ),
  automation: (
    <MotionSvg
      className="w-10 h-10 text-indigo-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M4 12h16M12 4v16"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
      <circle cx="12" cy="12" r="2" />
    </MotionSvg>
  ),
  insights: (
    <MotionSvg
      className="w-10 h-10 text-indigo-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <MotionPath
        d="M3 18v-6a9 9 0 0118 0v6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
      <circle cx="12" cy="12" r="2" />
    </MotionSvg>
  ),
};

// Navigation links
const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Stats data with AI icons
const stats: Stat[] = [
  { value: "400+", label: "AI Integrations", icon: aiIcons.neuralNetwork },
  { value: "1500+", label: "Projects Delivered", icon: aiIcons.dataFlow },
  { value: "90%", label: "Automation Rate", icon: aiIcons.automation },
  { value: "120X", label: "Speed to Market", icon: aiIcons.cloudAI },
];

// Facts data with AI icons
const facts: Fact[] = [
  {
    title: "AI Innovation Expertise",
    value: "25+",
    description: "Years leading AI advancements\nOur experts specialize in machine learning, neural networks, and scalable AI systems.",
    icon: aiIcons.neuralNetwork,
  },
  {
    title: "Custom AI Solutions",
    value: "300+",
    description: "Bespoke projects delivered\nWe design AI solutions tailored to your business challenges and goals.",
    icon: aiIcons.dataFlow,
  },
  {
    title: "Trusted AI Delivery",
    value: "99%",
    description: "Client satisfaction score\nOur secure, ethical AI solutions drive impactful results.",
    icon: aiIcons.insights,
  },
];

// Mission data with AI icons
const missionItems: MissionItem[] = [
  {
    title: "Our Mission",
    description: "To empower businesses with AI that streamlines operations and delivers actionable insights.",
    icon: aiIcons.neuralNetwork,
  },
  {
    title: "Our Vision",
    description: "To pioneer ethical, scalable AI that transforms industries and redefines possibilities.",
    icon: aiIcons.cloudAI,
  },
  {
    title: "Our Goal",
    description: "To deliver AI solutions that enhance efficiency and drive measurable business success.",
    icon: aiIcons.automation,
  },
];

// Services data with AI icons
const services: Service[] = [
  {
    title: "Custom AI Development",
    description: "We craft tailored AI solutions to address your unique business needs and drive innovation.",
    icon: aiIcons.neuralNetwork,
  },
  {
    title: "AI-Powered Automation",
    description: "Automate complex workflows with intelligent AI systems for maximum efficiency.",
    icon: aiIcons.automation,
  },
  {
    title: "Data-Driven Insights",
    description: "Unlock actionable insights from your data with advanced AI analytics.",
    icon: aiIcons.insights,
  },
  {
    title: "Scalable AI Infrastructure",
    description: "Build robust AI systems to support your business growth and scalability.",
    icon: aiIcons.cloudAI,
  },
];

// Testimonial data
const testimonials: Testimonial[] = [
  {
    name: "Jason M.",
    role: "Chief Technology Officer",
    quote: "Their AI solutions revolutionized our operations, increasing efficiency by 50% and driving unprecedented growth.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sarah L.",
    role: "Product Manager",
    quote: "The custom AI tools they built streamlined our processes and delivered measurable results.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily R.",
    role: "Data Scientist",
    quote: "Their expertise in AI analytics transformed our data into actionable insights, boosting performance.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section with Navigation Bar */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between sticky top-0 z-50 bg-white/10 backdrop-blur-lg rounded-b-2xl shadow-sm">
          <MotionDiv
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">ShaviWebStore</span>
          </MotionDiv>
          <MotionDiv
            className="hidden md:flex space-x-8"
            variants={staggerContainer()}
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
                  className="text-white text-sm font-medium hover:text-indigo-200 transition-colors duration-300"
                >
                  {link.name}
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
              className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </MotionDiv>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 flex-1 flex items-center justify-center py-24">
          <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <MotionDiv variants={fadeIn("up", 0.2)} className="flex justify-center items-center space-x-2 mb-6">
              <span className="text-indigo-200 text-sm font-medium">Home</span>
              <span className="text-indigo-200 text-sm font-medium">/</span>
              <span className="text-white font-semibold text-sm">AI</span>
            </MotionDiv>
            <MotionH1
              variants={fadeIn("up", 0.3)}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
            >
              Unleash Your Potential with <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">AI Innovation</span>
            </MotionH1>
            <MotionP
              variants={fadeIn("up", 0.4)}
              className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed"
            >
              Our team of AI experts delivers transformative solutions, combining cutting-edge technology with strategic vision to drive your business forward.
            </MotionP>
            <MotionDiv variants={fadeIn("up", 0.5)} className="mt-10 flex justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Explore Solutions</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-indigo-700 hover:bg-indigo-200 hover:text-indigo-700 px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Decorative AI Elements */}
        <MotionDiv
          className="absolute top-20 left-20 w-24 h-24 bg-indigo-400 rounded-full filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <MotionDiv
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <MotionSvg
          className="absolute top-1/3 right-10 w-16 h-16 text-indigo-300 opacity-30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <MotionPath
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </MotionSvg>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              OUR IMPACT
            </MotionDiv>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transforming Businesses with <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">AI Excellence</span>
            </h2>
            <MotionP
              variants={fadeIn("up", 0.3)}
              className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Our AI solutions deliver measurable results, from seamless integrations to accelerated market delivery.
            </MotionP>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <MotionDiv
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ boxShadow: "0 6px 24px rgba(0, 0, 0, 0.1)" }}
              >
                <MotionDiv className="mb-4">{stat.icon}</MotionDiv>
                <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm font-medium text-center">{stat.label}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-24 bg-gray-100 relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              WHY CHOOSE US
            </MotionDiv>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Industry-Leading <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <MotionP
              variants={fadeIn("up", 0.3)}
              className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              We deliver innovative, secure, and scalable AI solutions trusted by global brands.
            </MotionP>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {facts.map((fact, index) => (
              <MotionDiv
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ boxShadow: "0 6px 24px rgba(0, 0, 0, 0.1)" }}
              >
                <MotionDiv className="mb-4">{fact.icon}</MotionDiv>
                <h4 className="text-indigo-600 text-sm font-semibold uppercase mb-2">{fact.title}</h4>
                <MotionH1
                  className="text-3xl font-extrabold text-gray-900 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {fact.value}
                </MotionH1>
                <p className="text-gray-600 whitespace-pre-line">{fact.description}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              OUR PURPOSE
            </MotionDiv>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pioneering <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">AI-Driven Innovation</span>
            </h2>
            <MotionP
              variants={fadeIn("up", 0.3)}
              className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              We are committed to harnessing AI to solve complex challenges and create lasting impact.
            </MotionP>
          </MotionDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MotionDiv
              variants={staggerContainer()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {missionItems.map((item, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeIn("up", 0.1 * index)}
                  className="flex items-start space-x-4"
                >
                  <MotionDiv className="mt-1">{item.icon}</MotionDiv>
                  <div>
                    <h4 className="text-gray-900 text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </MotionDiv>
              ))}
              <MotionDiv
                variants={fadeIn("up", 0.3)}
                className="flex space-x-8 mt-8"
              >
                <div>
                  <MotionH1
                    className="text-3xl font-extrabold text-indigo-600 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    25+
                  </MotionH1>
                  <p className="text-gray-600">Industries Served</p>
                </div>
                <div>
                  <MotionH1
                    className="text-3xl font-extrabold text-indigo-600 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    4K+
                  </MotionH1>
                  <p className="text-gray-600">Solutions Deployed</p>
                </div>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-gray-100 rounded-2xl h-96 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI technology interface"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <MotionSvg
                className="absolute bottom-10 right-10 w-16 h-16 text-white opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <MotionPath
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </MotionSvg>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-100 relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              OUR SERVICES
            </MotionDiv>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <MotionP
              variants={fadeIn("up", 0.3)}
              className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Our AI-driven services empower businesses with innovative tools for automation, analytics, and scalability.
            </MotionP>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <MotionDiv
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="bg-white rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ boxShadow: "0 6px 24px rgba(0, 0, 0, 0.1)" }}
              >
                <MotionDiv className="mb-4">{service.icon}</MotionDiv>
                <h4 className="text-gray-900 text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MotionDiv
              className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              OUR CLIENTS
            </MotionDiv>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real Stories, <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Real Impact</span>
            </h2>
            <MotionP
              variants={fadeIn("up", 0.3)}
              className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Discover how our AI solutions have transformed businesses across industries.
            </MotionP>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ boxShadow: "0 6px 24px rgba(0, 0, 0, 0.1)" }}
              >
                <CardContent className="flex items-start space-x-4">
                  <MotionDiv
                    className="relative w-14 h-14"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </MotionDiv>
                  <div>
                    <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white text-center relative">
        <div className="container mx-auto px-6">
          <MotionDiv
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">ShaviAIStore</span>
          </MotionDiv>
          <MotionP
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-6"
          >
            © 2025 ShaviAIStore. All rights reserved.
          </MotionP>
          <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center space-x-8"
          >
            {["About", "Services", "Blog", "Contact"].map((item, index) => (
              <MotionDiv key={item} variants={fadeIn("up", 0.1 * index)}>
                <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {item}
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;