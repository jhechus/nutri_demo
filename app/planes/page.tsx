"use client";

import SectionTitle from "@/components/SectionTitle";
import PlanCard from "@/components/PlanCard";
import { plans } from "@/data/plans";
import { siteData } from "@/data/site";
import { motion } from "framer-motion";
import { CheckCircle, HelpCircle } from "lucide-react";

export default function PlansPage() {
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
              Planes y Paquetes
            </h1>
            <p className="text-xl text-sage-600">
              Elige el plan que mejor se adapte a tus necesidades y presupuesto. Todos incluyen seguimiento personalizado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Comparación de Planes"
            subtitle="Características incluidas en cada plan"
          />
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-sage-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Característica</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 text-center">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Evaluación de composición corporal",
                  "Análisis de hábitos alimentarios",
                  "Plan de alimentación personalizado",
                  "Recomendaciones de suplementación",
                  "Consultas de seguimiento",
                  "Seguimiento vía WhatsApp",
                  "Menús actualizados",
                  "Recetas exclusivas",
                  "Estrategias especiales",
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-sage-100">
                    <td className="px-6 py-4 text-sage-700 font-medium">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features.some(f => f.includes(feature.split(" ")[0])) || 
                         (index < 5 && plan.id >= 1) ||
                         (index >= 5 && plan.id >= 2) ||
                         (index >= 7 && plan.id === 3) ? (
                          <CheckCircle className="mx-auto text-sage-500" size={24} />
                        ) : (
                          <span className="text-sage-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Preguntas sobre los planes"
            subtitle="Resuelve tus dudas antes de elegir"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Puedo cambiar de plan después?",
                answer: "Sí, puedes cambiar a un plan superior en cualquier momento pagando la diferencia. Si deseas bajar de plan, se aplicará al siguiente ciclo.",
              },
              {
                question: "¿Los planes incluyen alimentos?",
                answer: "No, los planes incluyen guías de alimentación, recetas y listas de compras. Los alimentos corren por tu cuenta, lo que te permite elegir productos de tu preferencia y presupuesto.",
              },
              {
                question: "¿Qué pasa si necesito extender mi plan?",
                answer: "Puedes renovar tu plan al finalizar el ciclo. Muchos pacientes optan por continuar con un plan de mantenimiento para asegurar resultados a largo plazo.",
              },
              {
                question: "¿Hay garantía de resultados?",
                answer: "Los resultados dependen de tu compromiso y adherencia al plan. Te proporciono todas las herramientas y apoyo, pero tu participación es fundamental para el éxito.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sage-50 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-sage-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-2">{item.question}</h3>
                    <p className="text-sage-600">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              ¿Aún no decides cuál plan elegir?
            </h2>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Contáctame y te ayudaré a encontrar la mejor opción según tus objetivos y presupuesto
            </p>
            <a
              href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, necesito ayuda para elegir un plan`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-50 transition-colors text-lg"
            >
              <span>Consultar por WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
