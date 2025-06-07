"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    name: string;
    company: string;
    quote: string;
    avatar: string;
  };
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialProps) {
  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
    >
      <Card className="h-full hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-100 dark:hover:border-blue-900">
        <CardContent className="pt-6 pb-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1">
                <Quote className="h-4 w-4" />
              </div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center italic">"{testimonial.quote}"</p>
          <div className="text-center">
            <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}