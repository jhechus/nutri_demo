# Nutrición Web - Sitio Web para Nutriólogos

Sitio web profesional y moderno para nutriólogos/nutricionistas, creado con Next.js 14, TypeScript, Tailwind CSS y Framer Motion. Diseñado como plantilla demo que puede personalizarse fácilmente para diferentes clientes.

## 🚀 Características

- **Next.js 14 con App Router** - Última versión con routing moderno
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Diseño utility-first con colores personalizados
- **Framer Motion** - Animaciones suaves y profesionales
- **Responsive** - Diseño mobile-first que funciona en todos los dispositivos
- **SEO optimizado** - Metadatos configurados para mejor visibilidad
- **Componentes reutilizables** - Código limpio y mantenible
- **Datos editables** - Fácil personalización sin tocar el código

## 📋 Estructura del Proyecto

```
nutricion-web/
├── app/                    # Páginas de Next.js (App Router)
│   ├── blog/              # Blog
│   │   ├── [slug]/       # Páginas dinámicas de artículos
│   │   └── page.tsx      # Listado de artículos
│   ├── contacto/          # Página de contacto
│   ├── planes/            # Página de planes
│   ├── servicios/         # Página de servicios
│   ├── testimonios/       # Página de testimonios
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página principal
├── components/            # Componentes reutilizables
│   ├── CTA.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PlanCard.tsx
│   ├── SectionTitle.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   └── WhatsAppButton.tsx
├── data/                  # Datos editables
│   ├── blog.ts           # Artículos del blog
│   ├── plans.ts          # Planes y precios
│   ├── services.ts       # Servicios nutricionales
│   ├── site.ts           # Datos del sitio
│   └── testimonials.ts   # Testimonios de clientes
├── public/               # Archivos estáticos
├── next.config.js        # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias del proyecto
```

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar el servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 🎨 Personalización

### 1. Datos del Sitio (`data/site.ts`)

Modifica la información básica del sitio:

```typescript
export const siteData = {
  name: "Nutrición Integral",              // Nombre del negocio
  nutritionist: "Nutrióloga Daniela Rivera", // Nombre del nutriólogo
  tagline: "Nutrición personalizada...",    // Eslogan
  whatsapp: "+521234567890",               // Número de WhatsApp
  email: "contacto@nutricionintegral.com", // Email de contacto
  phone: "+521234567890",                  // Teléfono
  address: "Av. Principal 123...",          // Dirección
  hours: "Lunes a Viernes: 9:00 - 18:00",  // Horario
  social: {
    instagram: "https://instagram.com/...",  // Redes sociales
    facebook: "https://facebook.com/...",
    linkedin: "https://linkedin.com/...",
  },
  stats: {
    patients: "+500",      // Número de pacientes
    rating: "5.0",        // Calificación
    reviews: "+80",       // Número de reseñas
  },
};
```

### 2. Servicios (`data/services.ts`)

Personaliza los servicios nutricionales que ofreces:

```typescript
export const services = [
  {
    id: 1,
    icon: "Apple",                    // Icono de lucide-react
    title: "Consulta Nutricional...",
    description: "Descripción del servicio...",
    benefits: [                       // Beneficios del servicio
      "Beneficio 1",
      "Beneficio 2",
    ],
    idealFor: "Para quién es ideal...",
  },
  // Agrega más servicios...
];
```

**Iconos disponibles:** Apple, Utensils, Dumbbell, Scale, Leaf, Calendar, y muchos más de [lucide-react](https://lucide.dev/)

### 3. Planes y Precios (`data/plans.ts`)

Configura los planes y paquetes:

```typescript
export const plans = [
  {
    id: 1,
    name: "Consulta Inicial",
    price: "$850",                    // Precio editable
    period: "por consulta",
    description: "Descripción del plan...",
    features: [                       // Características incluidas
      "Característica 1",
      "Característica 2",
    ],
    popular: false,                   // ¿Destacar como recomendado?
  },
  // Agrega más planes...
];
```

### 4. Testimonios (`data/testimonials.ts`)

Agrega o modifica testimonios de clientes:

```typescript
export const testimonials = [
  {
    id: 1,
    name: "Nombre del cliente",
    role: "Resultado alcanzado",
    image: "URL de la imagen",         // Imagen del cliente
    rating: 5,                        // Calificación (1-5)
    text: "Texto del testimonio...",
  },
  // Agrega más testimonios...
];
```

### 5. Blog (`data/blog.ts`)

Personaliza los artículos del blog:

```typescript
export const blogPosts = [
  {
    slug: "url-del-articulo",          // URL amigable
    title: "Título del artículo",
    excerpt: "Resumen del artículo...",
    content: `HTML del contenido...`, // Contenido en HTML
    category: "Categoría",
    date: "15 de Mayo, 2024",
    image: "URL de la imagen",
  },
  // Agrega más artículos...
];
```

### 6. Colores (`tailwind.config.ts`)

Personaliza la paleta de colores:

```typescript
colors: {
  sage: {        // Verde salvia (color principal)
    50: '#f4f7f4',
    // ... más tonos
    500: '#6b966b', // Color principal
    // ... más tonos
  },
  cream: {       // Crema (acentos cálidos)
    50: '#fdfcf8',
    // ... más tonos
  },
  beige: {       // Beige (fondos neutros)
    50: '#faf9f5',
    // ... más tonos
  },
},
```

### 7. Metadatos SEO (`app/layout.tsx`)

Modifica el SEO del sitio:

```typescript
export const metadata: Metadata = {
  title: "Nutrición Integral - Nutrióloga Daniela Rivera",
  description: "Descripción del sitio para SEO...",
  openGraph: {
    title: "Título para redes sociales",
    description: "Descripción para redes sociales",
    type: "website",
  },
};
```

## 📄 Páginas Disponibles

- **`/`** - Página principal con todas las secciones
- **`/servicios`** - Detalle de servicios nutricionales
- **`/planes`** - Planes y paquetes de consulta
- **`/testimonios`** - Reseñas y casos de éxito
- **`/contacto`** - Formulario de contacto y datos de ubicación
- **`/blog`** - Listado de artículos del blog
- **`/blog/[slug]`** - Páginas individuales de artículos

## 🎯 Buenas Prácticas Implementadas

- **Componentes reutilizables** - Cada componente tiene una responsabilidad única
- **Datos separados** - Toda la información editable está en archivos `data/`
- **Animaciones sutiles** - Framer Motion para transiciones elegantes
- **SEO básico** - Metadatos configurados para mejor visibilidad
- **Responsive** - Funciona perfectamente en móvil, tablet y desktop
- **Tipografía limpia** - Jerarquía visual clara y legible
- **Accesibilidad** - Textos alt en imágenes y buen contraste

## 🚀 Despliegue

### Vercel (Recomendado)

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Haz clic en "Deploy"

### Otros proveedores

El proyecto funciona en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código con ESLint
```

## 🎨 Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Biblioteca de iconos
- **React 18** - Biblioteca UI

## 📞 Soporte

Si necesitas ayuda para personalizar el sitio o tienes preguntas, puedes contactar al desarrollador.

## 📄 Licencia

Este proyecto es una plantilla demo para nutriólogos. Puedes modificarlo y usarlo libremente para tus clientes.

---

**Hecho con ❤️ para nutriólogos profesionales**
