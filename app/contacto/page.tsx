"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, mi nombre es ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

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
              Contacto
            </h1>
            <p className="text-xl text-sage-600">
              Estoy aquí para ayudarte. Contáctame y comienza tu transformación hacia una vida más saludable
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-sage-800 mb-6">Envíame un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sage-700 font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sage-700 font-medium mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sage-700 font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-colors"
                    placeholder="+52 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="objective" className="block text-sage-700 font-medium mb-2">
                    Objetivo *
                  </label>
                  <select
                    id="objective"
                    required
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-colors"
                  >
                    <option value="">Selecciona tu objetivo</option>
                    <option value="perder-peso">Perder peso</option>
                    <option value="ganar-peso">Ganar peso</option>
                    <option value="mejorar-salud">Mejorar salud general</option>
                    <option value="nutricion-deportiva">Nutrición deportiva</option>
                    <option value="nutricion-vegana">Nutrición vegana/vegetariana</option>
                    <option value="control-enfermedad">Control de enfermedad</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sage-700 font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-colors resize-none"
                    placeholder="Cuéntame más sobre ti y tus objetivos..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-sage-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-sage-600 transition-colors"
                >
                  <Send size={20} />
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-sage-800 mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-sage-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-sage-800">Teléfono</h3>
                      <a href={`tel:${siteData.phone}`} className="text-sage-600 hover:text-sage-500">
                        {siteData.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-sage-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-sage-800">Email</h3>
                      <a href={`mailto:${siteData.email}`} className="text-sage-600 hover:text-sage-500">
                        {siteData.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-sage-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-sage-800">Dirección</h3>
                      <p className="text-sage-600">{siteData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="text-sage-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-sage-800">Horario</h3>
                      <p className="text-sage-600">{siteData.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-sage-50 p-6 rounded-xl">
                <h3 className="font-bold text-sage-800 mb-3">¿Prefieres WhatsApp?</h3>
                <p className="text-sage-600 mb-4">
                  Contáctame directamente por WhatsApp para una respuesta más rápida
                </p>
                <a
                  href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Chat en WhatsApp</span>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-sage-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-sage-400 mb-2" size={48} />
                  <p className="text-sage-600">Mapa de ubicación</p>
                  <p className="text-sage-500 text-sm">{siteData.address}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
