"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/data/site";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-sage-100"
    >
      <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-4">
        <IconComponent className="text-sage-600" size={28} />
      </div>
      <h3 className="text-xl font-bold text-sage-800 mb-3">{title}</h3>
      <p className="text-sage-600 mb-4">{description}</p>
      <button className="text-sage-500 font-medium flex items-center space-x-2 hover:text-sage-600 transition-colors">
        <span>Saber más</span>
        <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
