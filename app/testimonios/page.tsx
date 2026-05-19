"use client";

import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { Star, TrendingUp, Heart, Award } from "lucide-react";

export default function TestimonialsPage() {
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
              Historias de Éxito
            </h1>
            <p className="text-xl text-sage-600">
              Conoce las experiencias de pacientes que han transformado su salud y relación con la comida
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: "5.0", label: "Calificación promedio" },
              { icon: TrendingUp, value: "+500", label: "Pacientes felices" },
              { icon: Heart, value: "95%", label: "Recomendación" },
              { icon: Award, value: "8+", label: "Años de experiencia" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto text-sage-500 mb-3" size={40} />
                <div className="text-3xl md:text-4xl font-bold text-sage-800 mb-2">{stat.value}</div>
                <div className="text-sage-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Lo que dicen mis pacientes"
            subtitle="Testimonios reales de personas que han logrado sus objetivos"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Casos de Éxito"
            subtitle="Resultados reales alcanzados con compromiso y acompañamiento profesional"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Pérdida de peso saludable",
                description: "María logró perder 15 kg en 6 meses sin dietas extremas, aprendiendo a comer de forma equilibrada y sostenible.",
                result: "15 kg perdidos",
                time: "6 meses",
              },
              {
                title: "Mejora en rendimiento deportivo",
                description: "Carlos mejoró su tiempo en maratón gracias a una nutrición deportiva personalizada y estrategias de competición.",
                result: "20% más rápido",
                time: "4 meses",
              },
              {
                title: "Control de diabetes",
                description: "Roberto logró estabilizar sus niveles de glucosa mediante educación alimentaria y cambios sostenibles en su estilo de vida.",
                result: "Glucosa estable",
                time: "8 meses",
              },
              {
                title: "Transición a veganismo",
                description: "Ana aprendió a nutrirse completamente como vegana, asegurando todos los nutrientes necesarios sin comprometer su salud.",
                result: "100% vegana",
                time: "3 meses",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sage-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-sage-800 mb-3">{story.title}</h3>
                <p className="text-sage-600 mb-4">{story.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sage-500 font-semibold">{story.result}</div>
                  <div className="text-sage-400 text-sm">{story.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-beige-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold text-sage-800 mb-3">Nota importante</h3>
            <p className="text-sage-600 text-sm">
              Los resultados mencionados son casos reales de pacientes que han seguido los planes nutricionales con compromiso y constancia. 
              Cada persona es diferente y los resultados pueden variar. No prometo resultados milagrosos ni rápidos, sino un acompañamiento 
              profesional para construir hábitos saludables sostenibles a largo plazo. La nutrición es una ciencia y cada cuerpo responde de 
              manera única según sus características, condiciones y compromiso con el proceso.
            </p>
          </motion.div>
        </div>
      </section>

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
              ¿Listo para escribir tu propia historia de éxito?
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Agenda tu consulta hoy y comienza tu transformación con acompañamiento profesional
            </p>
            <a
              href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, quiero comenzar mi transformación`}
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
