export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  featured: boolean;
}

export const allNews: NewsItem[] = [
  {
    id: 1,
    category: "Académico",
    date: "15 Nov 2026",
    title: "JABAKH lidera ranking nacional de universidades privadas de México 2026",
    excerpt: "Por tercer año consecutivo, nuestra institución ocupa el primer lugar en el ranking de calidad educativa de México.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585",
    featured: true,
  },
  {
    id: 2,
    category: "Investigación",
    date: "10 Nov 2026",
    title: "Investigadores de JABAKH publican en revista Nature sobre resistencia antibiótica",
    excerpt: "El equipo de biotecnología publicó resultados que podrían revolucionar el tratamiento de infecciones bacterianas.",
    img: "https://images.unsplash.com/photo-1532094349884-543cdee609e0",
    featured: false,
  },
  {
    id: 3,
    category: "Eventos",
    date: "05 Nov 2026",
    title: "III Congreso Internacional de Innovación Tecnológica cierra con éxito",
    excerpt: "Más de 500 participantes de 12 países debatieron sobre el futuro de la inteligencia artificial y sus aplicaciones.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    featured: false,
  },
  {
    id: 4,
    category: "Deportes",
    date: "01 Nov 2026",
    title: "Selección de fútbol de JABAKH gana campeonato universitario nacional",
    excerpt: "Nuestro equipo se coronó campeón nacional universitario por décima vez en la historia de la institución.",
    img: "https://images.unsplash.com/photo-1551958219-acbc54e41e84",
    featured: false,
  },
  {
    id: 5,
    category: "Cultura",
    date: "28 Oct 2026",
    title: "Festival de Arte Universitario reúne más de 200 obras estudiantiles",
    excerpt: "La muestra anual exhibió pinturas, esculturas y fotografía de estudiantes de todas las facultades.",
    img: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e",
    featured: false,
  },
  {
    id: 6,
    category: "Institucional",
    date: "20 Oct 2026",
    title: "JABAKH firma convenio con 15 universidades internacionales",
    excerpt: "Los acuerdos permitirán programas de doble titulación e intercambio estudiantil con instituciones de Europa y Asia.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    featured: false,
  },
  {
    id: 7,
    category: "Investigación",
    date: "15 Oct 2026",
    title: "Centro de Innovación JABAKH recibe financiamiento de S/ 5 millones",
    excerpt: "El fondo permitirá equipar laboratorios de última generación en áreas de biotecnología y nanotecnología.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    featured: false,
  },
  {
    id: 8,
    category: "Académico",
    date: "10 Oct 2026",
    title: "Nueva especialidad de Inteligencia Artificial se abre para el 2025",
    excerpt: "La maestría en IA, primera en el país, contará con docentes de MIT y Stanford como profesores invitados.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    featured: false,
  },
  {
    id: 9,
    category: "Eventos",
    date: "01 Oct 2026",
    title: "Feria Laboral 2026: 80 empresas buscan talento JABAKH",
    excerpt: "La feria anual de empleo conectó a más de 2,000 estudiantes con reclutadores de las principales empresas de México.",
    img: "https://images.unsplash.com/photo-1560439514-4e9645039924",
    featured: false,
  },
];
