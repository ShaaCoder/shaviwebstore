"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Monitor, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, COMPANY_NAME } from '@/lib/constants';
import { motion } from 'framer-motion';
import { navVariants } from '@/lib/animations';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-primary flex items-center gap-2">
              <Code size={28} className="text-blue-600" />
              <span className="font-bold text-xl md:text-2xl">{COMPANY_NAME}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get in touch
                </Link>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}