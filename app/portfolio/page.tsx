"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  services: string[];
  year: number;
}

const portfolioProjects: PortfolioProject[] = [
  {
    title: "TechVision Rebrand",
    category: "Web Design & Development",
    description: "Complete website redesign for a leading tech company, resulting in a 40% increase in user engagement.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "TechVision Inc.",
    services: ["Web Design", "Web Development", "SEO"],
    year: 2023
  },
  {
    title: "GreenLife E-commerce",
    category: "E-commerce Development",
    description: "Built a scalable e-commerce platform for an eco-friendly product line, increasing sales by 65%.",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "GreenLife Products",
    services: ["E-commerce Development", "Payment Integration", "Product Management"],
    year: 2023
  },
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Designed an intuitive financial dashboard that simplified complex data for end users.",
    image: "https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "FinTech Solutions",
    services: ["Web Application", "UI/UX Design", "Data Visualization"],
    year: 2022
  },
  {
    title: "FreshFoods Mobile App",
    category: "Mobile App Development",
    description: "Developed a mobile app for a grocery delivery service with real-time tracking and secure payments.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "FreshFoods Inc.",
    services: ["Mobile App Development", "UX Design", "API Integration"],
    year: 2022
  },
  {
    title: "Creative Agency Website",
    category: "Web Design",
    description: "Created a visually stunning portfolio website for a creative agency that showcases their work effectively.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Artisan Creative",
    services: ["Web Design", "Animation", "CMS Implementation"],
    year: 2021
  },
  {
    title: "Healthcare Portal",
    category: "Web Application",
    description: "Developed a secure patient portal for a healthcare provider, improving patient engagement and satisfaction.",
    image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "MediCare Health",
    services: ["Web Application", "Security Implementation", "User Experience"],
    year: 2021
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(portfolioProjects.map(project => project.category)))];
  
  const filteredProjects = filter === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === filter);

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our showcase of successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      </section>

      {/* Portfolio Filter and Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className="text-base"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                className="h-full"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" } as React.CSSProperties}
                      className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex} 
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
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
              Let's create something amazing together. Contact us to discuss your project and get a free consultation.
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