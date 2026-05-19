"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-beige-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-6 leading-tight">
              Nutrición personalizada para transformar tu salud sin dietas imposibles
            </h1>
            <p className="text-xl text-sage-600 mb-8">
              Planes flexibles, acompañamiento profesional y hábitos sostenibles adaptados a tu estilo de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, me interesa agendar una consulta`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-600 transition-colors text-center"
              >
                Agendar consulta
              </a>
              <Link
                href="/planes"
                className="border-2 border-sage-500 text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-50 transition-colors text-center"
              >
                Ver planes
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
                alt="Alimentación saludable"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
