
import { FaClipboardCheck, FaLaptopMedical, FaListCheck, FaOilCan } from "react-icons/fa6";
import { MdCarRepair } from "react-icons/md";

export const SERVICES = [
  {
    id: "pre-itv",
    name: "Pre-ITV",
    shortDescription:
      "Inspección preventiva de los elementos esenciales del vehículo para detectar y corregir fallos antes de la ITV.",
    detailedDescription:
      "Nuestro servicio de Pre-ITV es una inspección exhaustiva diseñada para garantizar que tu vehículo pase la Inspección Técnica de Vehículos sin contratiempos. Realizamos una revisión completa de todos los sistemas críticos que se evalúan en la ITV oficial, identificando y corrigiendo cualquier deficiencia antes de la inspección. Este servicio preventivo te ahorra tiempo, dinero y el estrés de tener que volver a presentar tu vehículo por fallos evitables.",
    duration: "40 min",
    estimatedHours: 0.67,
    priceType: "variable",
    image: "pre_itv_service_1764864313395.png",
    icon: FaClipboardCheck,
    color: "#10b981",
    benefits: [
      "Evita rechazos en la ITV oficial",
      "Ahorra tiempo y desplazamientos innecesarios",
      "Identifica problemas antes de que sean graves",
      "Mayor seguridad en la conducción",
      "Tranquilidad al presentarte a la ITV"
    ],
    includes: [
      "Revisión completa del sistema de frenado",
      "Comprobación de luces y señalización",
      "Inspección de neumáticos y profundidad de dibujo",
      "Verificación de niveles de fluidos",
      "Comprobación de emisiones contaminantes",
      "Revisión de dirección y suspensión",
      "Informe detallado de deficiencias encontradas"
    ]
  },
  {
    id: "diagnosis",
    name: "Diagnosis",
    shortDescription:
      "Lectura y análisis de unidades de control mediante equipo OBD para localizar errores electrónicos y fallos intermitentes.",
    detailedDescription:
      "Utilizamos tecnología de diagnóstico avanzada OBD (On-Board Diagnostics) para conectarnos directamente con las unidades de control electrónico de tu vehículo. Este servicio permite identificar con precisión códigos de error, fallos intermitentes y problemas electrónicos que no son visibles a simple vista. Nuestro equipo especializado interpreta los datos del sistema para ofrecerte un diagnóstico preciso y recomendaciones de reparación específicas, evitando reparaciones innecesarias y costosas.",
    duration: "30-60 min",
    estimatedHours: 0.75,
    priceType: "variable",
    image: "diagnosis_service_1764864327571.png",
    icon: FaLaptopMedical,
    color: "#3b82f6",
    benefits: [
      "Diagnóstico preciso de fallos electrónicos",
      "Ahorro en reparaciones innecesarias",
      "Detección de problemas antes de que empeoren",
      "Lectura de códigos de error en tiempo real",
      "Identificación de fallos intermitentes difíciles de detectar"
    ],
    includes: [
      "Conexión mediante equipo OBD profesional",
      "Lectura completa de códigos de error",
      "Análisis de datos en tiempo real",
      "Borrado de códigos de error (si procede)",
      "Informe técnico detallado",
      "Recomendaciones de reparación",
      "Verificación post-reparación"
    ]
  },
  {
    id: "revision-15-puntos",
    name: "Revisión 15 puntos",
    shortDescription:
      "Comprobación rápida de niveles, frenado, dirección, suspensión, iluminación, neumáticos y seguridad general.",
    detailedDescription:
      "Nuestra Revisión de 15 Puntos es un chequeo completo y sistemático de los elementos más importantes de tu vehículo. Este servicio de mantenimiento preventivo está diseñado para detectar problemas potenciales antes de que se conviertan en averías costosas. Revisamos meticulosamente cada sistema crítico, desde los niveles de fluidos hasta el estado de los frenos, garantizando que tu vehículo funcione de manera segura y eficiente. Es el servicio ideal para mantener tu coche en óptimas condiciones entre revisiones mayores.",
    duration: "45-60 min",
    estimatedHours: 0.875,
    priceType: "variable",
    image: "revision_service_1764864342124.png",
    icon: FaListCheck,
    color: "#f59e0b",
    benefits: [
      "Prevención de averías costosas",
      "Mayor seguridad en la conducción",
      "Mantenimiento óptimo del vehículo",
      "Detección temprana de desgastes",
      "Prolongación de la vida útil del coche"
    ],
    includes: [
      "Comprobación de niveles (aceite, refrigerante, frenos, dirección)",
      "Inspección del sistema de frenado completo",
      "Revisión de dirección y geometría",
      "Estado de la suspensión y amortiguadores",
      "Verificación de iluminación completa",
      "Inspección de neumáticos y presiones",
      "Comprobación de batería y sistema eléctrico",
      "Revisión de escobillas y limpiaparabrisas",
      "Estado de correas y tensores",
      "Inspección visual de fugas",
      "Verificación de escape y emisiones",
      "Comprobación de filtros",
      "Estado de pastillas y discos de freno",
      "Revisión de elementos de seguridad",
      "Informe completo con recomendaciones"
    ]
  },
  {
    id: "aceite-filtros",
    name: "Cambio de aceite y filtros",
    shortDescription:
      "Sustitución del aceite según fabricante y cambio de filtros para mantener el rendimiento óptimo del motor.",
    detailedDescription:
      "El cambio regular de aceite y filtros es fundamental para mantener la salud de tu motor. Utilizamos aceites de alta calidad que cumplen con las especificaciones del fabricante de tu vehículo, garantizando una lubricación óptima y protección contra el desgaste. Nuestro servicio incluye el cambio del filtro de aceite y la verificación de otros filtros importantes. Un mantenimiento adecuado del aceite no solo prolonga la vida del motor, sino que también mejora el rendimiento, reduce el consumo de combustible y minimiza las emisiones contaminantes.",
    duration: "30-45 min",
    estimatedHours: 0.625,
    priceType: "variable",
    image: "oil_filter_service_1764864369431.png",
    icon: FaOilCan,
    color: "#ef4444",
    benefits: [
      "Prolonga la vida útil del motor",
      "Mejora el rendimiento y la eficiencia",
      "Reduce el consumo de combustible",
      "Minimiza el desgaste de componentes internos",
      "Mantiene la garantía del fabricante"
    ],
    includes: [
      "Drenaje completo del aceite usado",
      "Aceite de calidad según especificaciones del fabricante",
      "Cambio de filtro de aceite nuevo",
      "Verificación de filtro de aire",
      "Comprobación de filtro de habitáculo",
      "Revisión de niveles de otros fluidos",
      "Inspección visual de fugas",
      "Reset de indicador de mantenimiento",
      "Eliminación ecológica del aceite usado"
    ]
  },
  {
    id: "suspension",
    name: "Sistema de suspensión",
    shortDescription:
      "Revisión de amortiguadores, muelles, copelas y elementos de suspensión para asegurar estabilidad y confort.",
    detailedDescription:
      "El sistema de suspensión es crucial para la seguridad, el confort y el control de tu vehículo. Nuestro servicio especializado incluye una inspección detallada de todos los componentes de la suspensión: amortiguadores, muelles, copelas, silent blocks, rótulas y brazos de suspensión. Detectamos desgastes, holguras y componentes deteriorados que pueden afectar la estabilidad del vehículo, el desgaste irregular de neumáticos y la comodidad de marcha. Realizamos reparaciones y sustituciones con piezas de calidad, devolviendo a tu coche el comportamiento y confort originales.",
    duration: "1-3 horas",
    estimatedHours: 2,
    priceType: "variable",
    image: "suspension_service_1764864384129.png",
    icon: MdCarRepair,
    color: "#8b5cf6",
    benefits: [
      "Mejora la estabilidad y el control del vehículo",
      "Aumenta el confort de conducción",
      "Reduce el desgaste irregular de neumáticos",
      "Mayor seguridad en curvas y frenadas",
      "Previene daños en otros componentes"
    ],
    includes: [
      "Inspección completa de amortiguadores",
      "Revisión de muelles y copelas",
      "Comprobación de silent blocks y casquillos",
      "Verificación de rótulas y trapecios",
      "Inspección de brazos de suspensión",
      "Comprobación de barras estabilizadoras",
      "Verificación de anclajes y fijaciones",
      "Prueba de carretera para evaluar comportamiento",
      "Informe detallado con fotografías",
      "Recomendaciones de reparación priorizadas"
    ]
  },
];
