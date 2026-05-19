"use client";

import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
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
              Servicios Nutricionales
            </h1>
            <p className="text-xl text-sage-600">
              Soluciones personalizadas para mejorar tu salud y bienestar a través de la nutrición
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                    <ArrowRight className="text-sage-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-sage-800 mb-4">{service.title}</h2>
                  <p className="text-lg text-sage-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-sage-800 mb-3">Beneficios:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="text-sage-500 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-sage-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-sage-800 mb-3">Ideal para:</h3>
                    <p className="text-sage-700">{service.idealFor}</p>
                  </div>

                  <a
                    href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, me interesa ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-sage-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sage-600 transition-colors"
                  >
                    <span>Agendar consulta</span>
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl bg-sage-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="text-sage-600" size={48} />
                      </div>
                      <p className="text-sage-600 font-medium">Imagen ilustrativa</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿No estás seguro cuál servicio elegir?
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Agenda una consulta de valoración gratuita y te ayudaré a encontrar la mejor opción para ti
            </p>
            <a
              href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, me gustaría una consulta de valoración`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-50 transition-colors text-lg"
            >
              <span>Consulta de valoración gratuita</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
