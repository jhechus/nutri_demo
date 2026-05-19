"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({ name, role, image, rating, text }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-sage-100"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-sage-800">{name}</h4>
          <p className="text-sm text-sage-600">{role}</p>
        </div>
      </div>
      <div className="flex space-x-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-cream-500 text-cream-500" />
        ))}
      </div>
      <p className="text-sage-700 italic">&ldquo;{text}&rdquo;</p>
    </motion.div>
  );
}
