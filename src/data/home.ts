import { Users, BookOpen, Award, TrendingUp, type LucideIcon } from "lucide-react";

export interface HomeStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface HomeProgram {
  id: string;
  area: string;
  name: string;
  duration: string;
  modality: string;
  img: string;
  color: string;
  badge: string;
}

export interface HomeTestimonial {
  name: string;
  program: string;
  text: string;
  rating: number;
  avatar: string;
}

export const homeStats: HomeStat[] = [
  { value: "12,500+", label: "Estudiantes Activos", icon: Users },
  { value: "48", label: "Programas Académicos", icon: BookOpen },
  { value: "39", label: "Años de Excelencia", icon: Award },
  { value: "94%", label: "Empleabilidad", icon: TrendingUp },
];

export const homePrograms: HomeProgram[] = [
  {
    id: "ingenieria-sistemas",
    area: "Ingeniería",
    name: "Ingeniería de Sistemas",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop&auto=format",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    id: "administracion",
    area: "Negocios",
    name: "Administración de Empresas",
    duration: "4 años",
    modality: "Híbrida",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    id: "medicina",
    area: "Salud",
    name: "Medicina Humana",
    duration: "7 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: "derecho",
    area: "Derecho",
    name: "Derecho y Ciencias Políticas",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&auto=format",
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    id: "arquitectura",
    area: "Arquitectura",
    name: "Arquitectura y Urbanismo",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop&auto=format",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    id: "psicologia",
    area: "Psicología",
    name: "Psicología Clínica",
    duration: "5 años",
    modality: "Presencial",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&auto=format",
    color: "bg-pink-50 border-pink-200",
    badge: "bg-pink-100 text-pink-700",
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  {
    name: "María González",
    program: "Ing. de Sistemas, 2022",
    text: "Estudiar en JABAKH transformó mi vida profesional. Los docentes son expertos de primer nivel y la infraestructura es de clase mundial.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Carlos Ramírez",
    program: "Administración, 2021",
    text: "La red de contactos que construí en JABAKH fue clave para emprender mi empresa. El ecosistema de innovación es único en el país.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Ana Flores",
    program: "Psicología, 2023",
    text: "La formación integral que ofrece JABAKH va más allá del aula. Los programas de extensión y las prácticas me prepararon perfectamente.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
  },
];
