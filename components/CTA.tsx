import { motion } from "framer-motion";
import { siteData } from "@/data/site";

export default function CTA() {
  return (
    <section className="py-20 bg-sage-500">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Da el primer paso hacia una alimentación más saludable
          </h2>
          <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
            Agenda tu consulta hoy y comienza tu transformación con acompañamiento profesional
          </p>
          <a
            href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}?text=Hola, me interesa agendar una consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-50 transition-colors text-lg"
          >
            <span>Agendar por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
