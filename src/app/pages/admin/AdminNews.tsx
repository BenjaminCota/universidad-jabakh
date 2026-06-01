import { useState } from "react";
import { Plus, Search, Edit2, Trash2, X, Save, Image, Bold, Italic, List, AlignLeft } from "lucide-react";

type NewsItem = {
  id: number; title: string; category: string; status: "Publicado" | "Borrador" | "Archivado";
  date: string; author: string; img: string;
};

const initialNews: NewsItem[] = [
  { id: 1, title: "JABAKH lidera ranking nacional 2026", category: "Académico", status: "Publicado", date: "15 Nov 2026", author: "Comunicaciones", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=80&fit=crop" },
  { id: 2, title: "Investigadores publican en Nature", category: "Investigación", status: "Publicado", date: "10 Nov 2026", author: "Prensa", img: "https://images.unsplash.com/photo-1532094349884-543cdee609e0?w=120&h=80&fit=crop" },
  { id: 3, title: "III Congreso Internacional de Innovación", category: "Eventos", status: "Publicado", date: "05 Nov 2026", author: "Eventos", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=120&h=80&fit=crop" },
  { id: 4, title: "Nueva especialidad de IA para 2025", category: "Académico", status: "Borrador", date: "01 Nov 2026", author: "Prensa", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=80&fit=crop" },
  { id: 5, title: "Feria Laboral 2026: 80 empresas", category: "Eventos", status: "Archivado", date: "01 Oct 2026", author: "Comunicaciones", img: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=120&h=80&fit=crop" },
];

const statusColors: Record<string, string> = {
  Publicado: "bg-green-100 text-green-700",
  Borrador: "bg-amber-100 text-amber-700",
  Archivado: "bg-gray-100 text-gray-500",
};

export function AdminNews() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [modal, setModal] = useState<{ open: boolean; editing: NewsItem | null }>({ open: false, editing: null });
  const [form, setForm] = useState({ title: "", category: "Académico", status: "Borrador" as NewsItem["status"], content: "" });
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const openCreate = () => {
    setForm({ title: "", category: "Académico", status: "Borrador", content: "" });
    setModal({ open: true, editing: null });
  };

  const openEdit = (n: NewsItem) => {
    setForm({ title: n.title, category: n.category, status: n.status, content: "Contenido de ejemplo para edición..." });
    setModal({ open: true, editing: n });
  };

  const handleSave = () => {
    if (!form.title.trim()) return;
    if (modal.editing) {
      setNews((prev) => prev.map((n) => n.id === modal.editing!.id ? { ...n, title: form.title, category: form.category, status: form.status } : n));
    } else {
      setNews((prev) => [{ id: Date.now(), title: form.title, category: form.category, status: form.status, date: new Date().toLocaleDateString("es-PE"), author: "Admin", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=80&fit=crop" }, ...prev]);
    }
    setModal({ open: false, editing: null });
  };

  const handleDelete = (id: number) => { setNews((prev) => prev.filter((n) => n.id !== id)); setDeleteId(null); };

  const filtered = news.filter((n) => {
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "Todos" || n.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">Gestión de Noticias</h1>
          <p className="text-muted-foreground text-sm mt-0.5">{news.length} artículos registrados</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors">
          <Plus size={16} /> Nueva noticia
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-5 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar noticias..." className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors" />
        </div>
        <div className="flex gap-2">
          {["Todos", "Publicado", "Borrador", "Archivado"].map((s) => (
            <button key={s} onClick={() => setFilterStatus(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filterStatus === s ? "bg-primary text-white" : "bg-background border border-border text-muted-foreground hover:border-primary"}`}>{s}</button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((n) => (
          <div key={n.id} className="bg-card rounded-2xl border border-border p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
            <div className="w-20 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
              <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-lg">{n.category}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[n.status]}`}>{n.status}</span>
              </div>
              <h3 className="font-medium text-sm text-foreground truncate">{n.title}</h3>
              <div className="text-xs text-muted-foreground mt-0.5">{n.date} · {n.author}</div>
            </div>
            <div className="flex gap-1.5 shrink-0">
              <button onClick={() => openEdit(n)} className="p-2 rounded-lg hover:bg-primary/8 text-primary transition-colors"><Edit2 size={14} /></button>
              {deleteId === n.id ? (
                <span className="flex items-center gap-1">
                  <button onClick={() => handleDelete(n.id)} className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-lg font-medium">Sí</button>
                  <button onClick={() => setDeleteId(null)} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-lg">No</button>
                </span>
              ) : (
                <button onClick={() => setDeleteId(n.id)} className="p-2 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="py-12 text-center text-muted-foreground text-sm">No se encontraron noticias.</div>}
      </div>

      {/* Modal with rich editor mockup */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-white z-10">
              <h2 className="font-display font-semibold text-lg text-foreground">
                {modal.editing ? "Editar Noticia" : "Nueva Noticia"}
              </h2>
              <button onClick={() => setModal({ open: false, editing: null })} className="p-2 rounded-lg hover:bg-muted transition-colors"><X size={18} /></button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Título *</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors" placeholder="Título de la noticia..." />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Categoría</label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors">
                    {["Académico", "Investigación", "Eventos", "Deportes", "Cultura", "Institucional"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estado</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as NewsItem["status"] })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors">
                    {["Publicado", "Borrador", "Archivado"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Image upload mockup */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Imagen principal</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/8 transition-colors">
                    <Image size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">Arrastra una imagen o <span className="text-primary font-medium">haz clic para cargar</span></p>
                  <p className="text-xs text-muted-foreground/60 mt-1">PNG, JPG, WEBP — máx. 5MB</p>
                </div>
              </div>

              {/* Rich text editor mockup */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Contenido</label>
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="flex gap-1 p-2 bg-muted/50 border-b border-border">
                    {[Bold, Italic, List, AlignLeft].map((Icon, i) => (
                      <button key={i} className="p-2 rounded-lg hover:bg-white text-muted-foreground hover:text-foreground transition-colors">
                        <Icon size={14} />
                      </button>
                    ))}
                    <div className="w-px bg-border mx-1" />
                    {["H1", "H2", "H3"].map((h) => (
                      <button key={h} className="px-2 py-1.5 rounded-lg hover:bg-white text-muted-foreground hover:text-foreground text-xs font-mono transition-colors">{h}</button>
                    ))}
                  </div>
                  <textarea
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    rows={6}
                    placeholder="Escribe el contenido de la noticia..."
                    className="w-full px-4 py-3 text-sm outline-none resize-none bg-white text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={() => setModal({ open: false, editing: null })} className="px-5 py-2.5 text-sm font-medium text-muted-foreground border border-border rounded-xl hover:bg-muted transition-colors">Cancelar</button>
              <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                <Save size={15} /> Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
