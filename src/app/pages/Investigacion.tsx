import { Breadcrumb } from "../components/Breadcrumb";
import { FlaskConical, Globe, FileText, TrendingUp } from "lucide-react";

const centers = [
  {
    name: "Centro de Innovación Tecnológica",
    area: "Ingeniería y TIC",
    desc: "Desarrolla soluciones tecnológicas para la industria local y nacional, con énfasis en inteligencia artificial, ciberseguridad y transformación digital.",
    projects: 18,
  },
  {
    name: "Instituto de Ciencias de la Salud",
    area: "Salud y Biotecnología",
    desc: "Investiga enfermedades crónicas, resistencia antimicrobiana y nuevas terapias con equipos de última generación en bioseguridad nivel 2.",
    projects: 12,
  },
  {
    name: "Centro de Estudios Jurídicos y Sociales",
    area: "Derecho y Humanidades",
    desc: "Análisis de políticas públicas, derechos humanos y desarrollo social en la región fronteriza de Sonora y Baja California.",
    projects: 9,
  },
  {
    name: "Laboratorio de Sostenibilidad Ambiental",
    area: "Arquitectura y Ciencias",
    desc: "Investiga materiales de construcción sostenibles, gestión hídrica y energías renovables adaptadas al desierto de Sonora.",
    projects: 7,
  },
];

const stats = [
  { value: "46", label: "Proyectos activos", icon: FlaskConical },
  { value: "12", label: "Publicaciones en revistas indexadas (2026)", icon: FileText },
  { value: "8", label: "Convenios internacionales", icon: Globe },
  { value: "94%", label: "Tasa de financiamiento externo", icon: TrendingUp },
];

const publications = [
  { title: "Resistencia antibiótica en zonas desérticas del norte de México", journal: "Nature Microbiology", year: "2026", authors: "Torres M., Ríos A., García L." },
  { title: "Algoritmos de IA aplicados a diagnóstico temprano de diabetes", journal: "IEEE Transactions on Medical Imaging", year: "2026", authors: "Aldana R., Soto K." },
  { title: "Impacto de políticas migratorias en la frontera Sonora-Arizona", journal: "Latin American Policy", year: "2025", authors: "Vega C., Herrera D." },
  { title: "Materiales de construcción bioclimáticos para zonas áridas", journal: "Energy and Buildings", year: "2025", authors: "Flores S., Mendoza P." },
];

export function Investigacion() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Investigación" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Investigación e Innovación</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Generamos conocimiento con impacto real en la sociedad, la industria y el medio ambiente.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-white rounded-2xl border border-border p-6 text-center">
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-primary" />
              </div>
              <div className="font-display font-bold text-3xl text-primary mb-1">{value}</div>
              <div className="text-muted-foreground text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Centers */}
        <div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">Centros e Institutos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {centers.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-lg">{c.area}</span>
                    <h3 className="font-display font-bold text-base text-foreground mt-2">{c.name}</h3>
                  </div>
                  <div className="text-center shrink-0 ml-4">
                    <div className="font-display font-bold text-2xl text-primary">{c.projects}</div>
                    <div className="text-xs text-muted-foreground">proyectos</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">Publicaciones Recientes</h2>
          <div className="space-y-3">
            {publications.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-border p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-foreground leading-snug mb-1">{p.title}</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="text-primary font-medium">{p.journal}</span>
                    <span>{p.year}</span>
                    <span>{p.authors}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
          <p className="text-foreground/80 text-sm">
            ¿Interesado en colaborar o financiar investigación?&nbsp;
            Contáctanos en <span className="text-primary font-medium">investigacion@jabakh.edu.mx</span>
          </p>
        </div>
      </div>
    </div>
  );
}
