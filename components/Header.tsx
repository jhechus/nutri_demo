"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sage-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-sage-700">{siteData.name}</h1>
              <p className="text-xs text-sage-600">{siteData.nutritionist}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sage-700 hover:text-sage-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-sage-500 text-white px-6 py-2 rounded-full hover:bg-sage-600 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">Agendar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sage-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sage-700 hover:text-sage-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-sage-500 text-white px-6 py-3 rounded-full hover:bg-sage-600 transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">Agendar Consulta</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
