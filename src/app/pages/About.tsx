import { Breadcrumb } from "../components/Breadcrumb";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

export function About() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Nosotros" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Sobre Nosotros</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Conoce la historia y los valores que definen a Universidad JABAKH.</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nuestra Historia</span>
              <h2 className="font-display font-bold text-3xl text-foreground mt-2 mb-5">39 años formando líderes</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Fundada en 1985 por un grupo de académicos visionarios, la Universidad JABAKH nació con el propósito de democratizar la educación superior de calidad en México. Con sede en San Luis Río Colorado, Sonora, desde nuestros primeros 200 estudiantes en un solo campus, hemos crecido hasta convertirnos en una de las instituciones más reconocidas del país.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Hoy, con más de 12,500 estudiantes activos, 48 programas académicos y alianzas con universidades de todo el mundo, seguimos fieles a nuestra misión fundacional: formar profesionales íntegros que contribuyan al desarrollo sostenible de la sociedad.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-80 bg-muted">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&h=500&fit=crop&auto=format"
                alt="Campus JABAKH"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Misión", text: "Formar profesionales con sólidos conocimientos científicos, habilidades técnicas y valores éticos, capaces de contribuir al desarrollo sostenible de la sociedad mexicana y global.", color: "bg-blue-50 border-blue-200 text-blue-700" },
              { icon: Eye, title: "Visión", text: "Ser la universidad privada líder de Sonora y referente nacional de México, reconocida internacionalmente por la excelencia académica, la investigación de impacto y el compromiso con la innovación social y tecnológica.", color: "bg-amber-50 border-amber-200 text-amber-700" },
              { icon: Heart, title: "Valores", text: "Excelencia académica, integridad ética, innovación permanente, responsabilidad social, respeto a la diversidad e inclusión como pilares de nuestra cultura institucional.", color: "bg-green-50 border-green-200 text-green-700" },
            ].map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="bg-white rounded-2xl border border-border p-7">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl text-white mb-10">Acreditaciones y Reconocimientos</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["SUNEDU Licenciada", "ISO 9001:2015", "ABET Acreditada", "AACSB Member", "QS Stars ★★★★", "Times HE Top 100"].map((acc) => (
              <div key={acc} className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-semibold">
                {acc}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
