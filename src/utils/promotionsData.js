
export const PROMOTIONS = [
  {
    slug: "cambio-aceite",
    // SEO
    seoTitle: "Cambio de aceite y filtro desde 39,90€ | Taller",
    seoDescription:
      "Cambio de aceite y filtro rápido y profesional desde 39,90€. Aceite + filtro + mano de obra + revisión básica GRATIS. Reserva por WhatsApp.",
    // HERO
    hero: {
      headline: "Cambio de aceite y filtro rápido y profesional",
      price: "Desde 39,90 €",
      subheadline: "Cuida el motor de tu coche y evita averías costosas",
      bullets: [
        "🛢 Aceite + filtro + mano de obra",
        "🎁 Revisión básica GRATIS",
        "⏱ En solo 30 minutos",
      ],
      primaryCta: { label: "RESERVAR POR WHATSAPP", action: "whatsapp" },
    },

    // SECCIÓN 2 - Incluye
    includes: {
      title: "¿Qué incluye el servicio?",
      intro: "✔ Nuestro cambio de aceite y filtro incluye:",
      items: [
        "✅ Aceite de primeras marcas (según especificación del fabricante)",
        "✅ Filtro de aceite nuevo",
        "✅ Mano de obra profesional",
        "✅ Revisión de niveles (anticongelante, frenos, limpiaparabrisas)",
        "✅ Comprobación de presión de neumáticos",
      ],
      note: "💡 Sin sorpresas · Precio claro · Servicio garantizado",
    },

    // SECCIÓN 3 - Importancia
    importance: {
      title: "¿Por qué es tan importante cambiar el aceite y filtro?",
      badTitle: "Un aceite y filtro viejos:",
      badPoints: [
        "❌ Reduce la vida del motor",
        "❌ Aumenta el consumo",
        "❌ Provoca averías graves",
      ],
      goodTitle: "Con un cambio a tiempo:",
      goodPoints: ["✔ Motor más limpio", "✔ Mejor rendimiento", "✔ Más seguridad y ahorro"],
    },

    // SECCIÓN 4 - Por qué elegir
    whyUs: {
      title: "¿Por qué elegir nuestro taller?",
      points: [
        "🔧 Mecánicos cualificados",
        "⏱ Servicio rápido y sin esperas",
        "🛠 Taller equipado con tecnología profesional",
        "💬 Atención cercana y honesta",
        "📍 Taller de confianza en tu zona",
      ],
      trustLine: "👉 Miles de conductores ya confían en nosotros",
    },

    // SECCIÓN 5 - Oferta especial (urgencia)
    offer: {
      title: "Oferta especial",
      badge: "🔥 Promoción por tiempo limitado",
      lines: ["🛢 Cambio de aceite y filtro desde 39,90 €", "🎁 Revisión básica GRATIS incluida"],
      urgency: "⚠️ Plazas limitadas cada semana. Reserva ahora y asegura tu precio",
      cta: { label: "QUIERO MI CAMBIO DE ACEITE Y FILTRO", action: "whatsapp" },
    },

    // SECCIÓN 6 - Reserva rápida
    booking: {
      title: "Reserva rápida",
      subtitle: "Reserva en menos de 1 minuto",
      channels: ["📲 Escríbenos por WhatsApp", "📞 Llámanos directamente", "📅 Agenda tu cita hoy mismo"],
      cta: { label: "RESERVAR AHORA", action: "whatsapp" },
      microcopy: "(Respuesta rápida – sin compromiso)",
    },

    // SECCIÓN 7 - Testimonios
    testimonials: {
      title: "Opiniones",
      items: [
        { stars: 5, text: "“Rápidos y muy profesionales. En media hora tenía el coche listo.”" },
        { stars: 5, text: "“Buen precio y trato excelente. Volveré sin duda.”" },
        { stars: 5, text: "“Taller de confianza, claros y honestos.”" },
      ],
    },

    // SECCIÓN 8 - FAQ
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Qué aceite utilizan?", a: "Aceites de primeras marcas según especificaciones del fabricante." },
        { q: "¿Cuánto tarda el servicio?", a: "Entre 30 y 45 minutos." },
        { q: "¿Necesito cita previa?", a: "Recomendamos reservar para garantizar rapidez." },
        { q: "¿Sirve para cualquier coche?", a: "Válido para la mayoría de turismos (consúltanos)." },
      ],
    },

    // SECCIÓN 9 - Ubicación y contacto (rellenar por vosotros)
    location: {
      title: "Ubicación y contacto",
      addressLine1: "Calle Virgen de las Nieves 6, 38108 La Laguna, Tenerife ",
      hours: [
        "Lunes a Viernes: 9:00 – 18:00",
        "Sábados: 9:00 – 13:00",
      ],
    },

    // SECCIÓN 10 - Confianza final
    trustFinal: {
      title: "Confianza final",
      points: ["✔ Precio transparente", "✔ Garantía en el servicio", "✔ Atención personalizada"],
      cta: { label: "RESERVAR CAMBIO DE ACEITE Y FILTRO AHORA", action: "whatsapp" },
    },

    // Datos de contacto (en un solo sitio)
    contact: {
      phone: "685 562 049",
      whatsapp: "34685562049", // sin +, solo dígitos para wa.me
      whatsappPrefill: "Hola, quiero reservar la promo de cambio de aceite y filtro desde 39,90€.",
    },

    // Recomendaciones técnicas (para UI)
    ui: {
      hideNav: true,          // sin menú
      stickyWhatsApp: false,   // botón fijo abajo
      shortForm: true,        // si luego añadimos form
    },
  },
];
