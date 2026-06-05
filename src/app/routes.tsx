import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./layout/PublicLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AcademicOffer } from "./pages/AcademicOffer";
import { CareerDetail } from "./pages/CareerDetail";
import { Admissions } from "./pages/Admissions";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";
import { AdminLogin } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { AdminCareers } from "./pages/admin/AdminCareers";
import { AdminNews } from "./pages/admin/AdminNews";
import { Applications } from "./pages/admin/Applications";
import { NotFound } from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { Calendarios } from "./pages/Calendarios";
import { Biblioteca } from "./pages/Biblioteca";
import { Investigacion } from "./pages/Investigacion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: About },
      { path: "oferta-academica", Component: AcademicOffer },
      { path: "oferta-academica/:carrera", Component: CareerDetail },
      { path: "admisiones", Component: Admissions },
      { path: "noticias", Component: News },
      { path: "contacto", Component: Contact },
      { path: "privacidad", Component: PrivacyPolicy },
      { path: "terminos", Component: TermsOfUse },
      { path: "calendarios", Component: Calendarios },
      { path: "biblioteca", Component: Biblioteca },
      { path: "investigacion", Component: Investigacion },
    ],
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "carreras", Component: AdminCareers },
      { path: "noticias", Component: AdminNews },
      { path: "solicitudes", Component: Applications },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
], { basename: '/benjamin_cota/' });
