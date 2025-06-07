"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Code2, Palette, ShoppingCart, Megaphone, Lightbulb } from 'lucide-react';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceProps) {
  const getIcon = () => {
    switch (service.icon) {
      case 'Code2':
        return <Code2 className="h-10 w-10 text-blue-600 mb-4" />;
      case 'Palette':
        return <Palette className="h-10 w-10 text-blue-600 mb-4" />;
      case 'ShoppingCart':
        return <ShoppingCart className="h-10 w-10 text-blue-600 mb-4" />;
      case 'Megaphone':
        return <Megaphone className="h-10 w-10 text-blue-600 mb-4" />;
      case 'Lightbulb':
        return <Lightbulb className="h-10 w-10 text-blue-600 mb-4" />;
      default:
        return <Code2 className="h-10 w-10 text-blue-600 mb-4" />;
    }
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      className="h-full"
    >
      <Card className="h-full hover:shadow-lg transition-shadow group border-2 border-transparent hover:border-blue-100 dark:hover:border-blue-900">
        <CardHeader className="flex flex-col items-center pt-8">
          <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-700">
            {getIcon()}
          </div>
          <h3 className="text-xl font-bold text-center">{service.title}</h3>
        </CardHeader>
        <CardContent className="text-center text-gray-600 dark:text-gray-300">
          <p>{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}