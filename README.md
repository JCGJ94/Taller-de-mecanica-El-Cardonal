<!-- prettier-ignore -->
# Taller Cardonal — Sitio web

![deploy](https://img.shields.io/badge/deploy-Vercel-000000?style=for-the-badge&logo=vercel) ![license](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
Sitio web corporativo para el Taller Cardonal, implementado con React y Vite. La aplicación está desplegada y accesible en:

[https://www.tallercardonal.es/](https://www.tallercardonal.es/)

**Estado:** Producción (desplegado en Vercel)

---

## 🔎 Resumen rápido

- **Frontend:** React + Vite
- **Envío de formularios:** EmailJS (`@emailjs/browser`)
- **Despliegue:** Vercel (ver `vercel.json`)

---

## 📚 Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y desarrollo](#instalación-y-desarrollo)
- [Variables de entorno](#variables-de-entorno)
- [Scripts útiles](#scripts-útiles)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Descripción

> Sitio web de presentación y contacto para Taller Cardonal. Incluye secciones de servicios, proceso, ubicación y un formulario de presupuesto que envía mensajes mediante EmailJS.

![preview](./public/screenshot.png "Captura de la web (reemplaza ./public/screenshot.png)")

> Nota: añade `public/screenshot.png` para mostrar una previsualización en este README.

## Características

- Página responsive con secciones informativas.
- Formulario de contacto/envío de presupuesto con EmailJS.
- SEO básico (meta tags y Structured Data).
- Optimización de assets y caching (configuración en `vercel.json`).

## Tecnologías

| Categoría | Herramientas |
|---|---|
| Frontend | React, Vite |
| Envío de emails | EmailJS (`@emailjs/browser`) |
| HTTP | Axios |
| Rutas | React Router |
| Calidad | ESLint, Prettier |

## Estructura del proyecto (resumen)

- `src/` — código fuente.
	- `components/`, `layouts/`, `pages/`, `config/`.
- `public/` — activos estáticos (favicon, imágenes, etc.).
- `taller/vite.config.js` — alias y plugins.
- `taller/eslint.config.js` — reglas y presets de ESLint.
- `prettier.config.cjs` — reglas de Prettier.
- `taller/vercel.json` — headers y caching para Vercel.

## Instalación y desarrollo

Requisitos: Node.js (recomendado 18+)

```bash
# desde la carpeta del proyecto (donde está package.json)
npm install
npm run dev
```

Build y preview local:

```bash
npm run build
npm run preview
```

## Variables de entorno

Las claves de EmailJS se almacenan en variables de entorno de Vite. Crea un fichero `.env` (NO comitear):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Se usan en `src/config/emailjsConfig.js` mediante `import.meta.env`.

## Scripts útiles (en `package.json`)

- `npm run dev` — servidor de desarrollo.
- `npm run build` — build de producción.
- `npm run preview` — preview local del build.
- `npm run lint` — ejecutar ESLint.

## Despliegue

Desplegado en Vercel. Ajustes de caching y headers en `taller/vercel.json`. Sitio en producción:

[https://www.tallercardonal.es/](https://www.tallercardonal.es/)

## Contribución

1. Fork del repositorio.
2. Crear rama: `git checkout -b feature/mi-cambio`.
3. Hacer cambios, ejecutar `npm run dev` y `npm run lint`.
4. Abrir PR describiendo los cambios.

Por favor mantener commits claros y atómicos.

## Licencia

Indica la licencia del proyecto (ej. MIT). Añade un archivo `LICENSE` si procede.

## Contacto

Si necesitas acceso, detalles o colaboración, contacta con el responsable del repositorio o del Taller.

