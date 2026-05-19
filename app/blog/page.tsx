"use client";

import SectionTitle from "@/components/SectionTitle";
import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-beige-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Blog de Nutrición
            </h1>
            <p className="text-xl text-sage-600">
              Artículos, consejos y recetas para mejorar tu alimentación y estilo de vida
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-sage-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sage-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-sage-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sage-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-sage-500 font-medium hover:text-sage-600 transition-colors"
                  >
                    <span>Leer más</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
