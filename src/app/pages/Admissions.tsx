import { Breadcrumb } from "../components/Breadcrumb";
import { CheckCircle, Calendar, FileText, Users, CreditCard, GraduationCap, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router";

const steps = [
  { n: 1, icon: FileText, title: "Registro en línea", desc: "Crea tu cuenta en el portal de admisiones y completa el formulario de inscripción con tus datos personales y académicos." },
  { n: 2, icon: Download, title: "Entrega de documentos", desc: "Sube los documentos requeridos: DNI, certificado de estudios, foto reciente y constancias adicionales." },
  { n: 3, icon: CreditCard, title: "Pago de inscripción", desc: "Realiza el pago del derecho de inscripción a través de los medios habilitados: tarjeta, transferencia o agente bancario." },
  { n: 4, icon: GraduationCap, title: "Examen de admisión", desc: "Rinde el examen de admisión presencial o virtual según la modalidad elegida. Incluye aptitud verbal, numérica y conocimientos." },
  { n: 5, icon: Users, title: "Entrevista personal", desc: "Los postulantes preseleccionados participan en una entrevista con el comité de admisiones de la facultad." },
  { n: 6, icon: CheckCircle, title: "Resultados y matrícula", desc: "Consulta los resultados en el portal. Los admitidos tienen 5 días hábiles para completar su matrícula." },
];

const requirements = [
  "DNI o documento de identidad vigente (original y copia)",
  "Certificado de estudios secundarios completos",
  "Foto tamaño carné a color (fondo blanco)",
  "Declaración jurada de datos",
  "Constancia de salud emitida por médico colegiado",
  "Para traslado externo: certificado de estudios universitarios",
  "Para egresados técnicos: diploma y certificado de notas",
];

const dates = [
  { event: "Inicio de inscripciones", date: "01 Enero 2025", status: "open" },
  { event: "Cierre de inscripciones", date: "28 Febrero 2025", status: "upcoming" },
  { event: "Examen de admisión - Fase I", date: "08 Marzo 2025", status: "upcoming" },
  { event: "Publicación de resultados - Fase I", date: "15 Marzo 2025", status: "upcoming" },
  { event: "Entrevistas personales", date: "22-25 Marzo 2025", status: "upcoming" },
  { event: "Publicación de admitidos", date: "01 Abril 2025", status: "upcoming" },
  { event: "Período de matrícula", date: "02-10 Abril 2025", status: "upcoming" },
  { event: "Inicio de clases", date: "14 Abril 2025", status: "upcoming" },
];

export function Admissions() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Admisiones" }]} />

      {/* Header */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Proceso de Admisión</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Sigue estos sencillos pasos para unirte a la familia JABAKH en el ciclo 2025-I.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-12 text-center">Pasos del Proceso</h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border" style={{ marginLeft: "10%", marginRight: "10%" }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.n} className="relative">
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                          <step.icon size={20} className="text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                          {step.n}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Requisitos de Admisión</h2>
            <div className="bg-white rounded-2xl border border-border p-6">
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important dates */}
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
              <Calendar size={22} className="text-primary" /> Fechas Importantes
            </h2>
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              {dates.map((d, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-5 py-4 text-sm border-b border-border last:border-0 ${
                    d.status === "open" ? "bg-secondary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {d.status === "open" && (
                      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                    )}
                    {d.status === "upcoming" && (
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/30 shrink-0" />
                    )}
                    <span className="text-foreground/80">{d.event}</span>
                    {d.status === "open" && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Activo</span>
                    )}
                  </div>
                  <span className="text-primary font-semibold text-xs shrink-0 ml-3">{d.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-3xl p-10 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-3">¿Listo para postular?</h2>
          <p className="text-white/70 mb-8">Completa tu solicitud en línea en menos de 20 minutos.</p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-all text-lg"
          >
            Iniciar postulación <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
