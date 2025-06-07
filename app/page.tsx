"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/animations";
import {
  SERVICES,
  PORTFOLIO_ITEMS,
  TESTIMONIALS,
  STATS,
} from "@/lib/constants";
import ServiceCard from "@/components/home/service-card";
import PortfolioCard from "@/components/home/portfolio-card";
import TestimonialCard from "@/components/home/testimonial-card";
import InnerPageSection from "@/components/home/InnerPageSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Transforming Ideas Into{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Digital Realities
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Shavi Web Store builds modern, SEO-optimized, and
                mobile-friendly websites using cutting-edge technologies like
                Next.js and Tailwind CSS. Whether you're launching a startup or
                scaling an enterprise, we turn your digital vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-base">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={zoomIn(0.4, 0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Web development team working on a project"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              From responsive website design to powerful custom apps and
              eCommerce platforms — our full-stack development services ensure
              your online presence is fast, scalable, and results-driven.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our latest work in web design, app development, and
              branding. Each project showcases our commitment to quality,
              performance, and client satisfaction.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {PORTFOLIO_ITEMS.map((item, index) => (
              <PortfolioCard key={index} item={item} index={index} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="group">
              <Link href="/portfolio" className="inline-flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We’re trusted by clients worldwide for delivering exceptional
              websites and digital solutions that create lasting impact.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inner CTA or About Section */}
      <InnerPageSection />

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss your project and create a solution tailored to your
              business needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
