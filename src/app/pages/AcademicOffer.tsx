import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { careers } from "@/data/careers";

const areas = ["Todos", "Ingeniería", "Negocios", "Salud", "Derecho", "Humanidades", "Arquitectura", "Ciencias"];

const modalityColors: Record<string, string> = {
  Presencial: "bg-blue-50 text-blue-700",
  Híbrida: "bg-purple-50 text-purple-700",
  Virtual: "bg-green-50 text-green-700",
};

export function AcademicOffer() {
  const [activeArea, setActiveArea] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = careers.filter((c) => {
    const matchArea = activeArea === "Todos" || c.area === activeArea;
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.area.toLowerCase().includes(search.toLowerCase());
    return matchArea && matchSearch;
  });

  return (
    <div>
      <Breadcrumb items={[{ label: "Oferta Académica" }]} />

      {/* Header */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Oferta Académica</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Descubre nuestros {careers.length} programas de pregrado diseñados para tu éxito profesional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar carrera..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Filter size={15} />
            <span>{filtered.length} programas</span>
          </div>
        </div>

        {/* Area filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeArea === area
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
            No se encontraron programas.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <Link
                key={c.id}
                to={`/oferta-academica/${c.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden bg-muted relative">
                  <img
                    src={`${c.img}?w=400&h=220&fit=crop&auto=format`}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-white/90 text-xs font-semibold text-foreground">
                    {c.area}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} /> {c.duration}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${modalityColors[c.modality]}`}>
                        {c.modality}
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
