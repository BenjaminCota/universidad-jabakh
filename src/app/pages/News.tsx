import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { allNews } from "@/data/news";

const categories = ["Todas", "Académico", "Investigación", "Eventos", "Deportes", "Cultura", "Institucional"];
const PAGE_SIZE = 6;

export function News() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = allNews.filter((n) => {
    const matchCat = activeCategory === "Todas" || n.category === activeCategory;
    const matchSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const featured = allNews.find((n) => n.featured);

  return (
    <div>
      <Breadcrumb items={[{ label: "Noticias" }]} />

      {/* Header */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Noticias y Actualidad</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Mantente informado sobre la vida universitaria en JABAKH.</p>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-muted">
                <img
                  src={`${featured.img}?w=600&h=360&fit=crop&auto=format`}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full border border-secondary/20">DESTACADO</span>
                  <span className="text-xs text-muted-foreground">{featured.date}</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4 leading-tight">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                  Leer más <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Buscar noticias..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {paged.map((n) => (
            <article key={n.id} className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={`${n.img}?w=600&h=360&fit=crop&auto=format`}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-lg">{n.category}</span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{n.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">{n.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all">
                  Leer más <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center disabled:opacity-40 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  page === i + 1 ? "bg-primary text-white" : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center disabled:opacity-40 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
