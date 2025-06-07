"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  item: {
    title: string;
    category: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioItemProps) {
  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button asChild size="sm" variant="secondary" className="rounded-full">
              <Link href={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <ExternalLink className="h-4 w-4 mr-1" />
                View Project
              </Link>
            </Button>
          </div>
        </div>
        <CardContent className="pt-5">
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
            {item.category}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}