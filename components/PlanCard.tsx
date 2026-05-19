"use client";

import { motion } from "framer-motion";
import { Check, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/data/site";

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function PlanCard({ name, price, period, description, features, popular }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-2 ${
        popular ? "border-sage-500 scale-105" : "border-sage-100"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-sage-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Más recomendado
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-sage-800 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-sage-600">{price}</span>
        <span className="text-sage-500">{period}</span>
      </div>
      <p className="text-sage-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="text-sage-500 flex-shrink-0 mt-0.5" size={20} />
            <span className="text-sage-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, me interesa el plan ${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3 rounded-full font-medium transition-colors ${
          popular
            ? "bg-sage-500 text-white hover:bg-sage-600"
            : "bg-sage-100 text-sage-700 hover:bg-sage-200"
        }`}
      >
        Agendar consulta
      </a>
    </motion.div>
  );
}
