"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PaperAirplaneIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    date: 'May 28, 2025',
    title: 'Ethical AI: Balancing Innovation and Responsibility',
    excerpt: 'As AI continues to evolve, ensuring responsible use is more important than ever. This article explores how businesses can innovate',
  },
  {
    date: 'April 22, 2025',
    title: "Machine Learning Demystified: A Beginner's Guide",
    excerpt: 'As AI continues to evolve, ensuring responsible use is more important than ever. This article explores how businesses can innovate',
  },
  {
    date: 'April 17, 2025',
    title: 'How AI is Transforming Modern Businesses',
    excerpt: 'As AI continues to evolve, ensuring responsible use is more important than ever. This article explores how businesses can innovate',
  },
  {
    date: 'May 13, 2025',
    title: 'Responsible AI: Shaping a Better Future',
    excerpt: 'As AI continues to evolve, ensuring responsible use is more important than ever. This article explores how businesses can innovate',
  },
  {
    date: 'April 08, 2025',
    title: 'Ethical Intelligence: Driving Trust and Progress',
    excerpt: 'As AI continues to evolve, ensuring responsible use is more important than ever. This article explores how businesses can innovate',
  },
  {
    date: 'April 02, 2025',
    title: 'AI with Integrity: Innovation You Can Trust',
    excerpt: 'As AI continues to evolve, ensuring responsible use is more important than ever. This article explores how businesses can innovate',
  },
];

const BlogTemplate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white font-sans relative overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA1BMVEWZmZmZmZmZAAAAGUlEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAASAAH6AABTAAAAAElFTkSuQmCC')" }}></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-orange-600 to-purple-600 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            whileHover={{ boxShadow: "0 0 15px rgba(255, 165, 0, 0.5)" }}
          />
          <span className="text-2xl font-bold tracking-tight font-['Inter',sans-serif]">ShaviWebStore.</span>
        </div>
        <div className="flex space-x-8">
          <Link href="/" className="text-gray-200 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">Home</Link>
          <Link href="/about" className="text-gray-200 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">About Us</Link>
          <Link href="/services" className="text-gray-200 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">Services</Link>
          <Link href="/blog" className="text-gray-200 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">Blog</Link>
          <div className="relative group">
            <button className="text-gray-200 hover:text-orange-400 transition duration-300 flex items-center font-['Inter',sans-serif] font-medium">
              Pages
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            <motion.div
              className="absolute hidden group-hover:block bg-gray-800 p-3 rounded-lg shadow-lg mt-2"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href="/page1" className="block text-gray-200 hover:text-orange-400 py-1 font-['Inter',sans-serif]">Page 1</Link>
              <Link href="/page2" className="block text-gray-200 hover:text-orange-400 py-1 font-['Inter',sans-serif]">Page 2</Link>
            </motion.div>
          </div>
          <Link href="/contact" className="text-gray-200 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">Contact Us</Link>
        </div>
        <motion.button
          className="bg-gradient-to-r from-orange-600 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-['Inter',sans-serif] font-medium"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 165, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </nav>

      {/* Blog Header */}
      <motion.header
        className="text-center py-16 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-6xl font-extrabold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent font-['Inter',sans-serif]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          Our Blog
        </motion.h1>
        <div className="flex justify-center space-x-4 mt-6 text-lg">
          <Link href="/" className="text-gray-300 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">Home</Link>
          <span className="text-gray-300">/</span>
          <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition duration-300 font-['Inter',sans-serif] font-medium">Blog</Link>
        </div>
      </motion.header>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-60 rounded-xl p-8 shadow-lg border border-gray-700 relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
            <p className="text-orange-400 text-sm font-medium font-['Inter',sans-serif]">{post.date}</p>
            <h2 className="text-2xl font-semibold mt-4 text-white line-clamp-2 font-['Inter',sans-serif]">{post.title}</h2>
            <p className="text-gray-300 mt-4 line-clamp-3 font-['Inter',sans-serif] leading-relaxed">{post.excerpt}</p>
            <Link href={`/blog/${index}`} className="text-orange-400 mt-6 inline-block hover:text-orange-300 transition duration-300 font-['Inter',sans-serif] font-medium">
              Read More →
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center space-x-3 py-8">
        <motion.button
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-600 transition relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <motion.div
            className="absolute inset-0 bg-orange-400 opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
        <motion.button
          className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          1
          <motion.div
            className="absolute inset-0 bg-orange-400 opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
        <motion.button
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-600 transition relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          2
          <motion.div
            className="absolute inset-0 bg-orange-400 opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
        <motion.button
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-600 transition relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          3
          <motion.div
            className="absolute inset-0 bg-orange-400 opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
        <motion.button
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-600 transition relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRightIcon className="w-5 h-5" />
          <motion.div
            className="absolute inset-0 bg-orange-400 opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
      </div>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-5xl font-bold tracking-tight font-['Inter',sans-serif]">Let's Start Work Together!</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-['Inter',sans-serif] leading-relaxed">
          Partner with us to create intelligent, impactful, and future-ready AI solutions together.
        </p>
        <motion.button
          className="bg-gradient-to-r from-orange-600 to-blue-600 text-white px-8 py-3 rounded-full mt-6 shadow-xl font-['Inter',sans-serif] font-medium"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 165, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-70 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-purple-600 rounded-full"></div>
              <span className="text-2xl font-bold tracking-tight font-['Inter',sans-serif]">Nextmind.</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white font-['Inter',sans-serif] flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" /> Get in Touch
            </h3>
            <p className="text-gray-300 mt-2 font-['Inter',sans-serif] leading-relaxed">+00 - 152 865 253</p>
            <p className="text-gray-300 font-['Inter',sans-serif] leading-relaxed">info@domainname.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white font-['Inter',sans-serif] flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" /> Our Location
            </h3>
            <p className="text-gray-300 mt-2 font-['Inter',sans-serif] leading-relaxed">123 Lorem Street Suite 5B, IPs</p>
            <p className="text-gray-300 font-['Inter',sans-serif] leading-relaxed">Park London, UK SW1A 1AA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white font-['Inter',sans-serif]">Subscribe Newsletter</h3>
            <div className="flex mt-2">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-400 font-['Inter',sans-serif]"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button
                className="bg-orange-600 text-white px-4 py-2 rounded-r-full hover:bg-orange-500 transition flex items-center font-['Inter',sans-serif] font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 165, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <PaperAirplaneIcon className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6 text-sm font-['Inter',sans-serif]">Copyright © 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BlogTemplate;