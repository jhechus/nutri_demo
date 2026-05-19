import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteData.name}</h3>
            <p className="text-sage-200 mb-4">{siteData.tagline}</p>
            <p className="text-sage-200">{siteData.nutritionist}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sage-200 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sage-200 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/planes" className="text-sage-200 hover:text-white transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/testimonios" className="text-sage-200 hover:text-white transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sage-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sage-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <a
                  href={`tel:${siteData.phone}`}
                  className="text-sage-200 hover:text-white transition-colors"
                >
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${siteData.email}`}
                  className="text-sage-200 hover:text-white transition-colors"
                >
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-sage-200">{siteData.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <span className="text-sage-200">{siteData.hours}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex space-x-4">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-700 p-3 rounded-full hover:bg-sage-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-700 p-3 rounded-full hover:bg-sage-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-700 p-3 rounded-full hover:bg-sage-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-300">
          <p>&copy; {new Date().getFullYear()} {siteData.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
