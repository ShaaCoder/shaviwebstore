"use client";

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TEAM_MEMBERS, COMPANY_VALUES, STATS } from '@/lib/constants';
import { Shield, Lightbulb, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';

export default function AboutPage() {
  const getValueIcon = (icon: string) => {
    switch (icon) {
      case 'Star':
        return <Star className="h-8 w-8 text-blue-600 mb-2" />;
      case 'Lightbulb':
        return <Lightbulb className="h-8 w-8 text-blue-600 mb-2" />;
      case 'Users':
        return <Users className="h-8 w-8 text-blue-600 mb-2" />;
      case 'Shield':
        return <Shield className="h-8 w-8 text-blue-600 mb-2" />;
      default:
        return <Star className="h-8 w-8 text-blue-600 mb-2" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About ShaviWebStore</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              We are a team of passionate web designers and developers dedicated to creating exceptional digital experiences that help businesses grow.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2015, ShaviWebStore began with a simple mission: to help businesses achieve their goals through exceptional web design and development. What started as a small team of three has grown into a full-service digital agency with specialists across multiple disciplines.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Over the years, we've worked with clients ranging from ambitious startups to established enterprises across various industries. Our approach combines technical excellence, creative design, and strategic thinking to deliver solutions that not only look great but also perform exceptionally well.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="text-base">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
                <Button asChild variant="outline" className="text-base">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team at work"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {COMPANY_VALUES.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * index)}
              >
                <Card className="h-full text-center hover:shadow-md transition-shadow border-2 border-transparent hover:border-blue-100 dark:hover:border-blue-900">
                  <CardHeader className="pb-2">
                    <div className="mx-auto">
                      {getValueIcon(value.icon)}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The talented people behind our successful projects and happy clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="group"
              >
                <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              From our humble beginnings to where we are today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-blue-500 ml-6 pl-6 pb-10">
              <div className="mb-10">
                <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] border-4 border-white dark:border-gray-800"></div>
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-blue-600 dark:text-blue-400 font-bold">2015</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Company Founded</h3>
                  <p className="text-gray-700 dark:text-gray-300">ShaviWebStore was founded by David Shah with a mission to create beautiful, functional websites for small businesses.</p>
                </motion.div>
              </div>

              <div className="mb-10">
                <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] border-4 border-white dark:border-gray-800"></div>
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-blue-600 dark:text-blue-400 font-bold">2017</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Team Expansion</h3>
                  <p className="text-gray-700 dark:text-gray-300">Our team grew to 10 talented professionals and we moved into our first dedicated office space.</p>
                </motion.div>
              </div>

              <div className="mb-10">
                <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] border-4 border-white dark:border-gray-800"></div>
                <motion.div
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-blue-600 dark:text-blue-400 font-bold">2020</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Service Expansion</h3>
                  <p className="text-gray-700 dark:text-gray-300">We expanded our services to include UI/UX design, e-commerce solutions, and digital marketing.</p>
                </motion.div>
              </div>

              <div className="mb-10">
                <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] border-4 border-white dark:border-gray-800"></div>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-blue-600 dark:text-blue-400 font-bold">2023</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Global Reach</h3>
                  <p className="text-gray-700 dark:text-gray-300">ShaviWebStore now works with clients from over 20 countries and has a team of 25+ talented professionals.</p>
                </motion.div>
              </div>

              <div>
                <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] border-4 border-white dark:border-gray-800"></div>
                <motion.div
                  variants={fadeIn("left", 0.7)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-blue-600 dark:text-blue-400 font-bold">Today</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Continued Innovation</h3>
                  <p className="text-gray-700 dark:text-gray-300">We continue to evolve, embracing new technologies and methodologies to deliver cutting-edge digital solutions.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss your vision and create a digital solution that helps your business thrive.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}