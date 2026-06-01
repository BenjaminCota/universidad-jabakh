import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import { homeStats, homePrograms, homeTestimonials } from "@/data/home";
import { allNews } from "@/data/news";

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const featuredNews = allNews.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-primary"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 border border-secondary/30">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Admisiones 2025 — I Ciclo Abierto
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Forja tu
              <br />
              <span className="text-secondary">futuro</span>
              <br />
              con nosotros
            </h1>
            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Universidad JABAKH: 39 años formando profesionales líderes con excelencia académica, innovación y valores en San Luis Río Colorado, Sonora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/oferta-academica"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/90 transition-all hover:translate-y-[-1px] shadow-lg"
              >
                Conoce más
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/admisiones"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Play size={16} fill="currentColor" />
                Admisiones
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats card */}
        <div className="absolute bottom-8 right-4 sm:right-8 hidden lg:flex gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-5">
          {[
            { n: "12K+", l: "Estudiantes" },
            { n: "#1", l: "Ranking" },
            { n: "98%", l: "Satisfacción" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="font-display font-bold text-2xl text-secondary">{n}</div>
              <div className="text-white/70 text-xs mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border divide-y lg:divide-y-0">
            {homeStats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center py-10 px-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-3">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="font-display font-bold text-3xl text-primary">{value}</div>
                <div className="text-muted-foreground text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Oferta Académica</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">
                Programas Destacados
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg">
                Carreras diseñadas para los desafíos del mundo actual, con docentes expertos y metodologías innovadoras.
              </p>
            </div>
            <Link
              to="/oferta-academica"
              className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
            >
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homePrograms.map((p) => (
              <Link
                key={p.id}
                to={`/oferta-academica/${p.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${p.badge}`}>
                    {p.area}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-foreground mb-3 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex gap-3">
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-lg">{p.duration}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-lg">{p.modality}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                    Ver programa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            ¿Listo para comenzar tu carrera?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Las inscripciones para el ciclo 2025-I están abiertas. No pierdas tu lugar.
          </p>
          <Link
            to="/admisiones"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-all hover:shadow-xl text-lg"
          >
            Iniciar mi postulación <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Actualidad</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">Últimas Noticias</h2>
            </div>
            <Link to="/noticias" className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((n) => (
              <article key={n.id} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={`${n.img}?w=500&h=300&fit=crop&auto=format`}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-lg">{n.category}</span>
                    <span className="text-xs text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">{n.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Testimonios</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">Lo que dicen nuestros egresados</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm relative">
              <div className="text-secondary text-6xl font-serif leading-none mb-4">"</div>
              <p className="text-foreground text-lg sm:text-xl leading-relaxed font-medium mb-8">
                {homeTestimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={homeTestimonials[activeTestimonial].avatar}
                    alt={homeTestimonials[activeTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-display font-semibold text-foreground">{homeTestimonials[activeTestimonial].name}</div>
                    <div className="text-muted-foreground text-sm">{homeTestimonials[activeTestimonial].program}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: homeTestimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" className="text-secondary" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial((p) => (p - 1 + homeTestimonials.length) % homeTestimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white hover:border-primary transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {homeTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? "bg-primary w-6" : "bg-border"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((p) => (p + 1) % homeTestimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white hover:border-primary transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
