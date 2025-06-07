"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/animations';

const innerPages = [
  {
    title: "AI",
    image: "./images/aiImage.png",
    href: "/temeplates/ai",
  },
  {
    title: "Services",
    image: "./images/serviceimage.png",
    href: "/temeplates/services",
  },
  // {
  //   title: "Service Single",
  //   image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   href: "/services/single",
  // },
  {
    title: "Blog",
    image: "./images/blogimage.png",
    href: "/temeplates/BlogTemplate",
  },
];

export default function InnerPageSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight whitespace-pre-line">
            Complete Set of Ready to{"\n"}Use Inner Pages
          </h2>
          <p className="text-lg text-gray-400">
            Includes all essential inner pages such as About, Services, Service Single, and Blog, carefully designed to suit your site.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {innerPages.map((page, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * index)}
              className="group"
            >
              <Link href={page.href}>
                <Card className="bg-gray-800 border-none hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                  <div className="relative h-56 w-full">
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {page.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}