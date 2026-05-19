"use client";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PlanCard from "@/components/PlanCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { services } from "@/data/services";
import { plans } from "@/data/plans";
import { testimonials } from "@/data/testimonials";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, FileText, Users, Star, TrendingUp } from "lucide-react";

const faqItems = [
  {
    question: "¿La consulta puede ser en línea?",
    answer: "Sí, ofrecemos consultas tanto presenciales como en línea por videollamada. Las consultas en línea son igual de efectivas y te permiten recibir atención desde la comodidad de tu hogar.",
  },
  {
    question: "¿El plan se adapta a mis gustos?",
    answer: "Absolutamente. Los planes se personalizan completamente según tus gustos, preferencias, presupuesto y estilo de vida. Tu satisfacción y adherencia al plan son nuestra prioridad.",
  },
  {
    question: "¿Atienden personas veganas o vegetarianas?",
    answer: "Sí, tenemos experiencia especializada en nutrición vegana y vegetariana. Podemos ayudarte a asegurar que recibas todos los nutrientes necesarios de forma segura y saludable.",
  },
  {
    question: "¿Cada cuánto se hace seguimiento?",
    answer: "La frecuencia del seguimiento depende del plan que elijas. En el plan mensual tenemos consultas quincenales, y en el plan premium ofrecemos seguimiento más frecuente para asegurar tus resultados.",
  },
  {
    question: "¿El plan incluye recetas?",
    answer: "Sí, todos los planes incluyen recetas detalladas, fáciles de preparar y adaptadas a tu nivel de experiencia en cocina. También incluimos lista de compras y tips de preparación.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: siteData.stats.patients, label: "Pacientes atendidos" },
              { icon: Star, value: siteData.stats.rating, label: "Calificación" },
              { icon: CheckCircle, value: siteData.stats.reviews, label: "Reseñas positivas" },
              { icon: TrendingUp, value: "100%", label: "Planes personalizados" },
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

      {/* About Section */}
      <section className="py-20 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=800&fit=crop"
                  alt="Alimentación saludable"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-sage-700 mb-4">
                Contamos con un equipo de nutriólogos certificados con años de experiencia ayudando a personas a transformar su relación con la comida y alcanzar sus objetivos de salud de forma sostenible.
              </p>
              <p className="text-sage-600 mb-4">
                Nuestro enfoque se basa en la educación alimentaria, la empatía y la creación de planes realistas que se adaptan a tu vida. No creemos en dietas restrictivas ni soluciones rápidas, sino en construir hábitos saludables que duren toda la vida.
              </p>
              <p className="text-sage-600 mb-6">
                Cada persona es única, por eso dedicamos tiempo a entender tus necesidades, gustos y circunstancias para diseñar un plan que realmente funcione para ti.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Consulta Online", "Planes Personalizados", "Seguimiento Mensual", "Educación Alimentaria"].map((badge) => (
                  <span key={badge} className="bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Mis Servicios"
            subtitle="Soluciones nutricionales adaptadas a tus necesidades y objetivos"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="¿Por qué elegirme?"
            subtitle="Beneficios de trabajar conmigo para alcanzar tus objetivos de salud"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Menús variados y fáciles de seguir",
              "Seguimiento personalizado y constante",
              "Planes adaptados a tus gustos y necesidades",
              "Educación para aprender a comer mejor",
              "Resultados sostenibles a largo plazo",
              "Atención profesional, empática y cercana",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4"
              >
                <CheckCircle className="text-sage-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-sage-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Planes y Paquetes"
            subtitle="Elige el plan que mejor se adapte a tus necesidades y presupuesto"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-beige-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Lo que dicen mis pacientes"
            subtitle="Historias reales de transformación y resultados"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Mi Proceso de Atención"
            subtitle="Un camino claro hacia tus objetivos de salud"
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: "Agenda tu consulta", description: "Reserva tu cita inicial en línea o por WhatsApp. Es rápido y sencillo." },
                { step: 2, title: "Evaluación inicial", description: "Realizamos una evaluación completa de tu estado nutricional, hábitos y objetivos." },
                { step: 3, title: "Recibe tu plan personalizado", description: "Obtén tu plan de alimentación diseñado específicamente para ti." },
                { step: 4, title: "Seguimiento y ajustes", description: "Te acompaño en el proceso con seguimiento regular y ajustes según tus resultados." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sage-800 mb-2">{item.title}</h3>
                    <p className="text-sage-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Historias de Éxito"
            subtitle="Resultados reales de personas que han transformado su salud"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pérdida de peso saludable",
                description: "Logró perder 15 kg en 6 meses sin dietas extremas, aprendiendo a comer de forma equilibrada y sostenible.",
                result: "15 kg perdidos",
                time: "6 meses",
              },
              {
                title: "Mejora en rendimiento deportivo",
                description: "Mejoró su tiempo en maratón gracias a una nutrición deportiva personalizada y estrategias de competición.",
                result: "20% más rápido",
                time: "4 meses",
              },
              {
                title: "Control de diabetes",
                description: "Logró estabilizar sus niveles de glucosa mediante educación alimentaria y cambios sostenibles en su estilo de vida.",
                result: "Glucosa estable",
                time: "8 meses",
              },
              {
                title: "Transición a veganismo",
                description: "Aprendió a nutrirse completamente como vegana, asegurando todos los nutrientes necesarios sin comprometer su salud.",
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
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start space-y-4"
              >
                <h3 className="text-lg font-bold text-sage-800">{story.title}</h3>
                <p className="text-sage-600">{story.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="text-sage-500 font-medium">{story.result}</div>
                  <div className="text-sage-600">{story.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Preguntas Frecuentes"
            subtitle="Resuelve tus dudas sobre nuestros servicios y proceso de trabajo"
          />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTA />
    </>
  );
}
