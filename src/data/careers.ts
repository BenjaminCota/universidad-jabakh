export interface Career {
  id: string;
  name: string;
  area: string;
  duration: string;
  modality: "Presencial" | "Híbrida" | "Virtual";
  img: string;
  shortDesc: string;
  description: string;
  credits: number;
  graduates: number;
  curriculum: { cycle: string; courses: string[] }[];
  profile: string[];
  jobs: string[];
}

export const careers: Career[] = [
  {
    id: "ingenieria-sistemas",
    name: "Ingeniería de Sistemas",
    area: "Ingeniería",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    shortDesc: "Forma ingenieros capaces de diseñar y gestionar sistemas de información complejos.",
    description:
      "El programa de Ingeniería de Sistemas de la Universidad JABAKH forma profesionales altamente capacitados en el diseño, desarrollo e implementación de sistemas de información. Con un enfoque en las últimas tecnologías, nuestros egresados están preparados para liderar la transformación digital de las organizaciones.",
    credits: 220,
    graduates: 3500,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Cálculo I", "Álgebra Lineal", "Fundamentos de Programación", "Comunicación Efectiva", "Metodología de la Investigación"] },
      { cycle: "II Ciclo", courses: ["Cálculo II", "Estructuras de Datos", "Bases de Datos I", "Física General", "Estadística Descriptiva"] },
      { cycle: "III Ciclo", courses: ["Programación Orientada a Objetos", "Sistemas Operativos", "Redes de Computadoras", "Ingeniería de Software I", "Matemática Discreta"] },
      { cycle: "IV Ciclo", courses: ["Bases de Datos II", "Ingeniería de Software II", "Seguridad Informática", "Arquitectura de Computadoras", "Inteligencia Artificial"] },
    ],
    profile: [
      "Diseñar e implementar soluciones tecnológicas innovadoras",
      "Gestionar proyectos de software con metodologías ágiles",
      "Analizar y optimizar sistemas de información empresariales",
      "Liderar equipos multidisciplinarios de tecnología",
      "Aplicar inteligencia artificial y machine learning",
      "Garantizar la seguridad de sistemas e infraestructura digital",
    ],
    jobs: ["Desarrollador Full Stack", "Arquitecto de Software", "Data Scientist", "DevOps Engineer", "CTO / Director TI", "Consultor de Tecnología"],
  },
  {
    id: "ingenieria-civil",
    name: "Ingeniería Civil",
    area: "Ingeniería",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    shortDesc: "Diseño, construcción y mantenimiento de infraestructura urbana y rural.",
    description:
      "El programa de Ingeniería Civil de la Universidad JABAKH forma profesionales capaces de planificar, diseñar, construir y mantener infraestructura urbana y rural. Nuestros egresados lideran proyectos de gran escala con criterios de sostenibilidad, seguridad estructural y responsabilidad social.",
    credits: 230,
    graduates: 2800,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Cálculo I", "Física I", "Dibujo Técnico", "Química General", "Introducción a la Ingeniería Civil"] },
      { cycle: "II Ciclo", courses: ["Cálculo II", "Física II", "Mecánica de Materiales", "Topografía", "Estadística Aplicada"] },
      { cycle: "III Ciclo", courses: ["Mecánica de Suelos", "Hidráulica", "Resistencia de Materiales", "Diseño Estructural I", "Administración de Obras"] },
      { cycle: "IV Ciclo", courses: ["Diseño Estructural II", "Ingeniería de Tránsito", "Saneamiento Ambiental", "Gestión de Proyectos", "Cimentaciones"] },
    ],
    profile: [
      "Diseñar estructuras civiles seguras y eficientes",
      "Planificar y supervisar obras de infraestructura",
      "Aplicar criterios de sostenibilidad en proyectos de construcción",
      "Gestionar recursos, costos y tiempos en obras civiles",
      "Evaluar el impacto ambiental de proyectos de ingeniería",
      "Liderar equipos multidisciplinarios en entornos de obra",
    ],
    jobs: ["Ingeniero Estructural", "Director de Obras", "Consultor de Infraestructura", "Inspector de Proyectos", "Gerente de Construcción", "Docente Universitario"],
  },
  {
    id: "administracion",
    name: "Administración de Empresas",
    area: "Negocios",
    duration: "4 años",
    modality: "Híbrida",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    shortDesc: "Gestión estratégica de organizaciones en entornos competitivos globales.",
    description:
      "Forma líderes empresariales capaces de gestionar organizaciones en entornos complejos y globalizados, con sólidos conocimientos en estrategia, finanzas, marketing y gestión de personas.",
    credits: 200,
    graduates: 5200,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Fundamentos de Administración", "Matemática Empresarial", "Economía General", "Comunicación Corporativa", "Contabilidad Básica"] },
      { cycle: "II Ciclo", courses: ["Microeconomía", "Gestión de Marketing", "Estadística Empresarial", "Derecho Comercial", "Comportamiento Organizacional"] },
    ],
    profile: [
      "Planificar y ejecutar estrategias de negocio",
      "Gestionar recursos humanos y financieros",
      "Analizar mercados y tendencias globales",
      "Emprender e innovar en contextos cambiantes",
    ],
    jobs: ["Gerente General", "Director de Marketing", "Consultor Empresarial", "Emprendedor", "Analista de Negocios"],
  },
  {
    id: "contabilidad",
    name: "Contabilidad y Finanzas",
    area: "Negocios",
    duration: "4 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    shortDesc: "Dominio de finanzas corporativas, auditoría y sistemas contables modernos.",
    description:
      "El programa de Contabilidad y Finanzas forma profesionales con dominio en sistemas contables, finanzas corporativas y auditoría. Con un enfoque práctico y actualizado en normativa internacional (NIIF), nuestros egresados son clave en la toma de decisiones financieras de las organizaciones.",
    credits: 195,
    graduates: 4100,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Contabilidad Básica", "Matemática Financiera", "Fundamentos de Economía", "Derecho Empresarial", "Comunicación Profesional"] },
      { cycle: "II Ciclo", courses: ["Contabilidad Intermedia", "Microeconomía", "Estadística Financiera", "Costos y Presupuestos", "Tributación I"] },
      { cycle: "III Ciclo", courses: ["Contabilidad Avanzada", "Finanzas Corporativas", "Auditoría I", "Tributación II", "Sistemas de Información Contable"] },
      { cycle: "IV Ciclo", courses: ["NIIF y Normas Internacionales", "Auditoría II", "Mercado de Capitales", "Gerencia Financiera", "Proyecto de Investigación"] },
    ],
    profile: [
      "Elaborar y analizar estados financieros según normas internacionales",
      "Planificar y ejecutar procesos de auditoría interna y externa",
      "Asesorar en materia tributaria y cumplimiento fiscal",
      "Gestionar presupuestos y flujos de caja organizacionales",
      "Evaluar proyectos de inversión con criterios financieros sólidos",
      "Implementar sistemas de control interno y gestión de riesgos",
    ],
    jobs: ["Contador Público", "Auditor Financiero", "Analista de Finanzas", "Consultor Tributario", "Controller Financiero", "CFO / Director Financiero"],
  },
  {
    id: "medicina",
    name: "Medicina Humana",
    area: "Salud",
    duration: "7 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    shortDesc: "Formación médica integral con práctica clínica desde los primeros ciclos.",
    description:
      "El programa de Medicina Humana de la Universidad JABAKH forma médicos con sólida base científica, habilidades clínicas y profundo compromiso ético. Con convenios en hospitales de alta complejidad, los estudiantes realizan prácticas clínicas desde los primeros ciclos bajo supervisión de especialistas.",
    credits: 280,
    graduates: 2100,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Anatomía Humana I", "Bioquímica Médica", "Histología y Embriología", "Biofísica Médica", "Introducción a la Medicina"] },
      { cycle: "II Ciclo", courses: ["Anatomía Humana II", "Fisiología Humana I", "Microbiología e Inmunología", "Genética Médica", "Semiología"] },
      { cycle: "III Ciclo", courses: ["Fisiología Humana II", "Patología General", "Farmacología I", "Medicina Interna I", "Salud Pública I"] },
      { cycle: "IV Ciclo", courses: ["Medicina Interna II", "Cirugía General I", "Farmacología II", "Pediatría I", "Obstetricia y Ginecología I"] },
    ],
    profile: [
      "Diagnosticar y tratar enfermedades con criterio clínico y científico",
      "Aplicar procedimientos médicos con habilidad técnica y ética",
      "Promover la salud y prevenir enfermedades en la comunidad",
      "Interpretar exámenes auxiliares e imágenes diagnósticas",
      "Gestionar emergencias médicas y situaciones de alto riesgo",
      "Investigar y contribuir al avance de las ciencias médicas",
    ],
    jobs: ["Médico General", "Médico Especialista", "Médico Internista", "Cirujano", "Médico de Emergencias", "Investigador en Ciencias de la Salud"],
  },
  {
    id: "enfermeria",
    name: "Enfermería",
    area: "Salud",
    duration: "4 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    shortDesc: "Atención integral del paciente con enfoque humanístico y científico.",
    description:
      "El programa de Enfermería forma profesionales con vocación de servicio, competencias clínicas avanzadas y visión humanística. Nuestros egresados brindan atención integral al paciente en todos los niveles de cuidado, desde la prevención hasta la rehabilitación, en entornos hospitalarios y comunitarios.",
    credits: 200,
    graduates: 3200,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Anatomía y Fisiología", "Fundamentos de Enfermería", "Microbiología Clínica", "Comunicación Terapéutica", "Ética y Bioética"] },
      { cycle: "II Ciclo", courses: ["Enfermería Médico-Quirúrgica I", "Farmacología para Enfermería", "Nutrición y Dietética", "Salud Comunitaria", "Proceso de Atención de Enfermería"] },
      { cycle: "III Ciclo", courses: ["Enfermería Médico-Quirúrgica II", "Enfermería Pediátrica", "Enfermería Obstétrica", "Salud Mental en Enfermería", "Investigación en Enfermería"] },
      { cycle: "IV Ciclo", courses: ["Enfermería en Emergencias y Desastres", "Cuidados Intensivos", "Gerencia en Servicios de Salud", "Enfermería Geriátrica", "Internado Hospitalario"] },
    ],
    profile: [
      "Brindar cuidado integral al paciente con fundamento científico",
      "Administrar medicamentos y procedimientos clínicos con seguridad",
      "Coordinarse con el equipo médico en la atención multidisciplinaria",
      "Educar al paciente y su familia en el proceso de salud-enfermedad",
      "Gestionar unidades de enfermería con eficiencia y liderazgo",
      "Investigar para mejorar la calidad del cuidado de enfermería",
    ],
    jobs: ["Enfermero/a Hospitalario/a", "Enfermero/a de UCI", "Enfermero/a Comunitario/a", "Docente de Enfermería", "Coordinador/a de Enfermería", "Enfermero/a de Emergencias"],
  },
  {
    id: "derecho",
    name: "Derecho y Ciencias Políticas",
    area: "Derecho",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    shortDesc: "Formación jurídica con énfasis en derechos humanos y justicia constitucional.",
    description:
      "El programa de Derecho y Ciencias Políticas de la Universidad JABAKH forma juristas con sólida formación teórica y práctica en las distintas ramas del derecho. Con énfasis en derechos humanos, justicia constitucional y derecho empresarial, nuestros egresados actúan con rigor técnico y compromiso ético.",
    credits: 215,
    graduates: 3700,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Introducción al Derecho", "Historia del Derecho", "Derecho Romano", "Teoría del Estado", "Redacción Jurídica"] },
      { cycle: "II Ciclo", courses: ["Derecho Civil I", "Derecho Constitucional", "Derecho Penal General", "Derecho Procesal Civil I", "Sociología Jurídica"] },
      { cycle: "III Ciclo", courses: ["Derecho Civil II", "Derecho Penal Especial", "Derecho Laboral", "Derecho Procesal Penal", "Derechos Humanos"] },
      { cycle: "IV Ciclo", courses: ["Derecho Mercantil", "Derecho Tributario", "Derecho Internacional Público", "Derecho Administrativo", "Clínica Jurídica"] },
    ],
    profile: [
      "Interpretar y aplicar normas jurídicas con criterio técnico",
      "Litigar y defender derechos ante instancias judiciales",
      "Asesorar a personas y organizaciones en materia legal",
      "Redactar contratos, demandas y documentos jurídicos con precisión",
      "Analizar el impacto de políticas públicas en el ordenamiento legal",
      "Defender los derechos humanos y la justicia constitucional",
    ],
    jobs: ["Abogado Litigante", "Asesor Jurídico Corporativo", "Juez o Magistrado", "Fiscal", "Notario Público", "Consultor en Derecho Internacional"],
  },
  {
    id: "psicologia",
    name: "Psicología",
    area: "Humanidades",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    shortDesc: "Comprensión del comportamiento humano con aplicación clínica y organizacional.",
    description:
      "El programa de Psicología de la Universidad JABAKH forma profesionales con profundo conocimiento del comportamiento humano y sus bases biológicas, cognitivas y sociales. Con énfasis en la práctica clínica y organizacional, nuestros egresados intervienen en contextos de salud, educación y empresa.",
    credits: 210,
    graduates: 2600,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Introducción a la Psicología", "Neurociencias Básicas", "Historia de la Psicología", "Metodología de la Investigación", "Comunicación Interpersonal"] },
      { cycle: "II Ciclo", courses: ["Psicología del Desarrollo", "Estadística Aplicada a la Psicología", "Psicología Cognitiva", "Psicofisiología", "Psicología Social"] },
      { cycle: "III Ciclo", courses: ["Psicopatología", "Evaluación Psicológica", "Terapia Cognitivo-Conductual", "Psicología Educativa", "Psicología Organizacional"] },
      { cycle: "IV Ciclo", courses: ["Psicología Clínica Avanzada", "Neuropsicología", "Intervención en Crisis", "Psicología Forense", "Práctica Clínica Supervisada"] },
    ],
    profile: [
      "Evaluar, diagnosticar e intervenir en problemas de salud mental",
      "Aplicar técnicas terapéuticas basadas en evidencia científica",
      "Diseñar programas de bienestar psicológico en organizaciones",
      "Realizar psicodiagnósticos con instrumentos estandarizados",
      "Intervenir en situaciones de crisis y emergencias psicológicas",
      "Investigar fenómenos psicológicos con metodología rigurosa",
    ],
    jobs: ["Psicólogo Clínico", "Psicólogo Organizacional", "Neuropsicólogo", "Psicólogo Educativo", "Psicoterapeuta", "Investigador en Salud Mental"],
  },
  {
    id: "arquitectura",
    name: "Arquitectura y Urbanismo",
    area: "Arquitectura",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    shortDesc: "Diseño de espacios habitables sostenibles con identidad cultural.",
    description:
      "El programa de Arquitectura y Urbanismo de la Universidad JABAKH forma arquitectos creativos con sólida formación técnica y sensibilidad estética. Nuestros egresados diseñan espacios habitables sostenibles que integran identidad cultural, funcionalidad y respeto por el entorno.",
    credits: 220,
    graduates: 1900,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Taller de Diseño Arquitectónico I", "Dibujo Técnico y Perspectiva", "Historia de la Arquitectura I", "Geometría Descriptiva", "Introducción al Urbanismo"] },
      { cycle: "II Ciclo", courses: ["Taller de Diseño Arquitectónico II", "Materiales y Sistemas Constructivos", "Historia de la Arquitectura II", "Topografía Aplicada", "Expresión Gráfica Digital"] },
      { cycle: "III Ciclo", courses: ["Taller de Diseño Urbano", "Estructuras Arquitectónicas", "Instalaciones Eléctricas y Sanitarias", "Arquitectura Bioclimática", "Legislación Urbanística"] },
      { cycle: "IV Ciclo", courses: ["Taller de Proyecto Integral", "Gestión y Presupuesto de Obras", "Diseño Interior", "Planificación Urbana y Regional", "Proyecto de Fin de Carrera"] },
    ],
    profile: [
      "Diseñar edificaciones funcionales, estéticas y sostenibles",
      "Elaborar proyectos arquitectónicos con software BIM",
      "Planificar espacios urbanos con enfoque social y ambiental",
      "Gestionar y supervisar la ejecución de obras de construcción",
      "Desarrollar propuestas de diseño interior con criterio profesional",
      "Aplicar normativas de construcción, accesibilidad y seguridad",
    ],
    jobs: ["Arquitecto Proyectista", "Urbanista", "Diseñador de Interiores", "BIM Manager", "Supervisor de Obras", "Gestor de Proyectos Inmobiliarios"],
  },
  {
    id: "biologia",
    name: "Biología Molecular",
    area: "Ciencias",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe",
    shortDesc: "Investigación en ciencias de la vida con laboratorios de última generación.",
    description:
      "El programa de Biología Molecular de la Universidad JABAKH forma científicos con dominio de las técnicas más avanzadas en genómica, biotecnología y bioinformática. Con laboratorios de última generación, nuestros egresados contribuyen al desarrollo de soluciones para la salud, el agro y el medio ambiente.",
    credits: 225,
    graduates: 980,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Biología Celular y Molecular", "Química General", "Cálculo I", "Estadística Biológica", "Introducción a la Bioinformática"] },
      { cycle: "II Ciclo", courses: ["Bioquímica I", "Genética Molecular", "Microbiología General", "Fisicoquímica", "Técnicas de Laboratorio"] },
      { cycle: "III Ciclo", courses: ["Bioquímica II", "Biología Molecular Avanzada", "Inmunología Molecular", "Biotecnología I", "Metodología de la Investigación Científica"] },
      { cycle: "IV Ciclo", courses: ["Genómica y Proteómica", "Biotecnología II", "Biología Sintética", "Bioinformática Aplicada", "Proyecto de Investigación"] },
    ],
    profile: [
      "Aplicar técnicas de biología molecular como PCR, secuenciación y CRISPR",
      "Diseñar y ejecutar proyectos de investigación científica",
      "Analizar datos genómicos con herramientas bioinformáticas",
      "Desarrollar productos biotecnológicos para salud y agro",
      "Gestionar laboratorios con estándares de bioseguridad internacional",
      "Publicar resultados científicos en revistas de alto impacto",
    ],
    jobs: ["Investigador Científico", "Biotecnólogo", "Analista de Laboratorio Clínico", "Bioinformático", "Especialista en Control de Calidad", "Docente e Investigador Universitario"],
  },
  {
    id: "marketing",
    name: "Marketing Digital",
    area: "Negocios",
    duration: "4 años",
    modality: "Híbrida",
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    shortDesc: "Estrategias de comunicación y marketing en entornos digitales.",
    description:
      "El programa de Marketing Digital de la Universidad JABAKH forma especialistas capaces de diseñar y ejecutar estrategias de comunicación en entornos digitales. Dominarás SEO, redes sociales, analítica web y publicidad programática para conectar marcas con sus audiencias de manera efectiva.",
    credits: 190,
    graduates: 1800,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Fundamentos de Marketing", "Comunicación Corporativa", "Estadística Básica", "Introducción al Diseño Gráfico", "Psicología del Consumidor"] },
      { cycle: "II Ciclo", courses: ["Marketing Digital I", "Redes Sociales y Community Management", "SEO y SEM", "Analítica Web", "Producción de Contenidos"] },
      { cycle: "III Ciclo", courses: ["Publicidad Programática", "E-Commerce", "Inbound Marketing", "Branding y Posicionamiento", "Marketing de Influencers"] },
      { cycle: "IV Ciclo", courses: ["Estrategia Digital Integrada", "CRM y Automatización", "Marketing B2B", "Proyecto de Campaña Digital", "Investigación de Mercados"] },
    ],
    profile: [
      "Diseñar estrategias de marketing digital orientadas a resultados",
      "Gestionar campañas en plataformas como Google Ads y Meta Ads",
      "Analizar métricas y KPIs para optimizar el rendimiento",
      "Crear contenido atractivo para diferentes canales digitales",
      "Posicionar marcas en buscadores mediante SEO técnico y de contenido",
      "Implementar estrategias de fidelización y CRM",
    ],
    jobs: ["Social Media Manager", "SEO Specialist", "Digital Marketing Manager", "Growth Hacker", "Content Strategist", "E-Commerce Manager"],
  },
  {
    id: "comunicaciones",
    name: "Ciencias de la Comunicación",
    area: "Humanidades",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    shortDesc: "Periodismo, producción audiovisual y comunicación estratégica.",
    description:
      "El programa de Ciencias de la Comunicación de la Universidad JABAKH forma comunicadores versátiles con dominio en periodismo, producción audiovisual y comunicación estratégica. Nuestros egresados gestionan la información y la narrativa en medios tradicionales y digitales con responsabilidad y creatividad.",
    credits: 205,
    graduates: 2400,
    curriculum: [
      { cycle: "I Ciclo", courses: ["Teoría de la Comunicación", "Redacción Periodística", "Historia de los Medios", "Fotografía y Composición Visual", "Introducción a la Publicidad"] },
      { cycle: "II Ciclo", courses: ["Periodismo Digital", "Producción Audiovisual I", "Comunicación Política", "Locución y Oratoria", "Sociología de los Medios"] },
      { cycle: "III Ciclo", courses: ["Producción Audiovisual II", "Comunicación Organizacional", "Periodismo de Investigación", "Relaciones Públicas", "Comunicación Intercultural"] },
      { cycle: "IV Ciclo", courses: ["Estrategia de Comunicación Digital", "Gestión de Crisis Comunicacional", "Documental y Reportaje", "Ética Periodística", "Proyecto de Comunicación Integral"] },
    ],
    profile: [
      "Producir contenidos periodísticos y audiovisuales de calidad",
      "Diseñar estrategias de comunicación para organizaciones",
      "Gestionar la comunicación en redes sociales y medios digitales",
      "Investigar y reportar hechos con rigor, veracidad y ética",
      "Dirigir y editar producciones de radio, televisión y cine",
      "Asesorar a instituciones en imagen pública y relaciones con medios",
    ],
    jobs: ["Periodista", "Productor Audiovisual", "Director de Comunicaciones", "Community Manager", "Relacionista Público", "Director de Cine o TV"],
  },
];

export function findCareer(id: string): Career {
  return careers.find((c) => c.id === id) ?? careers[0];
}
