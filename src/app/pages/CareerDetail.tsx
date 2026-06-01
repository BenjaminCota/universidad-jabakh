import { useState } from "react";
import { useParams, Link } from "react-router";
import { Clock, Monitor, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { findCareer } from "@/data/careers";

const tabs = [
  { id: "plan", label: "Plan de Estudios" },
  { id: "perfil", label: "Perfil de Egreso" },
  { id: "campo", label: "Campo Laboral" },
];

export function CareerDetail() {
  const { carrera } = useParams<{ carrera: string }>();
  const [activeTab, setActiveTab] = useState("plan");
  const data = findCareer(carrera ?? "");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Oferta Académica", href: "/oferta-academica" },
          { label: data.name },
        ]}
      />

      {/* Hero */}
      <div className="relative h-72 sm:h-80 bg-primary overflow-hidden">
        <img
          src={`${data.img}?w=1200&h=400&fit=crop&auto=format`}
          alt={data.name}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold mb-3 border border-secondary/30">
              {data.area}
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">{data.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-foreground/80 text-base leading-relaxed mb-8">{data.description}</p>

            {/* Tabs */}
            <div className="border-b border-border mb-8">
              <div className="flex gap-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "plan" && (
              <div className="space-y-5">
                {data.curriculum.map((cycle) => (
                  <div key={cycle.cycle} className="bg-white rounded-xl border border-border p-5">
                    <h3 className="font-display font-semibold text-sm text-primary uppercase tracking-wide mb-4">{cycle.cycle}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cycle.courses.map((course) => (
                        <div key={course} className="flex items-center gap-2 text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "perfil" && (
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm mb-5">El egresado de {data.name} estará en capacidad de:</p>
                {data.profile.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "campo" && (
              <div>
                <p className="text-muted-foreground text-sm mb-6">Nuestros egresados se desempeñan exitosamente en los siguientes roles:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.jobs.map((job) => (
                    <div key={job} className="bg-white rounded-xl border border-border p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                        <Award size={18} className="text-primary" />
                      </div>
                      <span className="font-medium text-sm text-foreground">{job}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-display font-semibold text-base mb-5">Información del Programa</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, label: "Duración", value: data.duration },
                  { icon: Monitor, label: "Modalidad", value: data.modality },
                  { icon: Award, label: "Créditos", value: `${data.credits} créditos` },
                  { icon: Users, label: "Egresados", value: `+${data.graduates.toLocaleString()}` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/admisiones"
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Postular ahora <ArrowRight size={18} />
            </Link>
            <Link
              to="/contacto"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-primary font-semibold rounded-xl border border-primary hover:bg-primary/5 transition-colors text-sm"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
