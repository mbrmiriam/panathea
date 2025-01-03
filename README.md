# Panathea Health Concierge

Una plataforma web elegante para servicios de salud de élite, diseñada para familias exclusivas que buscan el más alto nivel de atención médica personalizada.

## Características

- Diseño elegante y moderno con una paleta de colores sofisticada
- Interfaz responsive y mobile-first
- Formulario de contacto integrado con EmailJS
- Secciones informativas sobre servicios y testimonios
- Optimización de imágenes con Next.js

## Tecnologías Utilizadas

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- EmailJS
- Lucide Icons

## Configuración del Proyecto

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
Crear un archivo `.env.local` con las siguientes variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
src/
  ├── app/
  │   ├── page.tsx
  │   └── layout.tsx
  ├── components/
  │   ├── Navbar.tsx
  │   ├── Hero.tsx
  │   ├── Services.tsx
  │   ├── About.tsx
  │   ├── Testimonials.tsx
  │   ├── ContactForm.tsx
  │   └── Footer.tsx
  └── lib/
      └── utils.ts
```

## Autora

Miriam Bárcenas
- Email: miriambarcenasrincon@gmail.com# panathea
