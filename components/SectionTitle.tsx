"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-sage-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`w-20 h-1 bg-sage-500 mt-4 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
