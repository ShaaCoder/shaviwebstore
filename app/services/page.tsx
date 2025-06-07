"use client";

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Code2, Palette, ShoppingCart, Megaphone, BarChart, Globe } from 'lucide-react';
import { metadata } from './metadata'; 

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "We create custom, high-performance websites tailored to your unique needs. Our development process focuses on clean code, responsive design, and search engine optimization to ensure your site not only looks great but also performs exceptionally well.",
      icon: <Code2 className="h-12 w-12 text-blue-600 mb-6" />,
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Custom website development",
        "Responsive design for all devices",
        "Content management system integration",
        "Performance optimization",
        "SEO-friendly architecture",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Our design team creates beautiful, intuitive interfaces that engage users and enhance their experience. We combine aesthetics with functionality to design websites that not only look stunning but are also easy to navigate and use.",
      icon: <Palette className="h-12 w-12 text-blue-600 mb-6" />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "User-centered design approach",
        "Wireframing and prototyping",
        "Interactive mockups",
        "Usability testing",
        "Accessibility compliance",
        "Brand identity integration"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "We build robust e-commerce platforms that help businesses sell products and services online. Our solutions include secure payment gateways, inventory management, and user-friendly interfaces designed to maximize conversions.",
      icon: <ShoppingCart className="h-12 w-12 text-blue-600 mb-6" />,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Custom e-commerce development",
        "Secure payment gateway integration",
        "Inventory and order management",
        "Mobile-optimized shopping experience",
        "Product catalog and filtering",
        "Customer account management"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Our digital marketing services help businesses increase their online visibility, attract more visitors, and convert them into customers. We develop comprehensive strategies tailored to your business goals and target audience.",
      icon: <Megaphone className="h-12 w-12 text-blue-600 mb-6" />,
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Search engine optimization (SEO)",
        "Social media marketing",
        "Content marketing strategies",
        "Email marketing campaigns",
        "Pay-per-click advertising",
        "Analytics and performance reporting"
      ]
    },
    {
      title: "Web Analytics",
      description: "Understand your audience better with our comprehensive web analytics services. We help you track user behavior, measure performance, and make data-driven decisions to continuously improve your digital presence.",
      icon: <BarChart className="h-12 w-12 text-blue-600 mb-6" />,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Custom analytics setup",
        "User behavior tracking",
        "Conversion rate optimization",
        "Performance monitoring",
        "Regular reporting and insights",
        "A/B testing implementation"
      ]
    },
    {
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engine results with our comprehensive SEO services. We employ proven strategies to help your site rank higher, drive more organic traffic, and increase your online presence.",
      icon: <Globe className="h-12 w-12 text-blue-600 mb-6" />,
      image: "https://images.pexels.com/photos/6668806/pexels-photo-6668806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Keyword research and strategy",
        "On-page optimization",
        "Technical SEO audits",
        "Content optimization",
        "Local SEO for businesses",
        "Backlink building strategies"
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We offer a comprehensive range of web development and digital marketing services to help your business succeed online.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex justify-center">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">{service.title}</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild>
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
                
                <div className={`relative h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-xl ${
                  index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured approach to ensure every project is delivered successfully.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Based on our discovery, we create detailed plans and design mockups for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our development team brings the designs to life with clean, efficient code and regular updates.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "After thorough testing, we launch your project and provide ongoing support to ensure success.",
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * index)}
              >
                <Card className="h-full border-2 border-transparent hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 overflow-hidden">
                  <CardHeader className="relative pb-0">
                    <span className="absolute -top-5 -left-5 text-9xl font-bold text-blue-100 dark:text-blue-900/30 z-0">
                      {process.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10 mt-4">
                      {process.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-4">
                    <p className="text-gray-700 dark:text-gray-300">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Contact us today to discuss your requirements and get a free consultation.
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