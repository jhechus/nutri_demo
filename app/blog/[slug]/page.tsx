"use client";

import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-24">
      <article className="bg-beige-50 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-500 mb-8"
            >
              <ArrowLeft size={20} />
              <span>Volver al blog</span>
            </Link>

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-block bg-sage-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-sage-600">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-sage-600 mb-8">{post.excerpt}</p>
          </motion.div>
        </div>
      </article>

      <article className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-sage-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-500"
                >
                  <ArrowLeft size={20} />
                  <span>Volver al blog</span>
                </Link>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-500"
                >
                  <Share2 size={20} />
                  <span>Compartir</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 mb-8 text-center">Artículos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-sage-800 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-sage-500 font-medium hover:text-sage-600 transition-colors"
                    >
                      Leer más
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-sage-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para mejorar tu alimentación?
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Agenda una consulta y recibe un plan personalizado adaptado a tus necesidades
            </p>
            <a
              href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, me interesa agendar una consulta después de leer el blog`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-50 transition-colors text-lg"
            >
              <span>Agendar consulta</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
