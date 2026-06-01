import { useState } from "react";
import { Plus, Search, Edit2, Trash2, X, Save, ChevronUp, ChevronDown } from "lucide-react";

type Career = {
  id: number; name: string; area: string; modality: string; status: "Activo" | "Inactivo" | "En revisión";
  duration: string; students: number;
};

const initialCareers: Career[] = [
  { id: 1, name: "Ingeniería de Sistemas", area: "Ingeniería", modality: "Presencial", status: "Activo", duration: "5 años", students: 3200 },
  { id: 2, name: "Administración de Empresas", area: "Negocios", modality: "Híbrida", status: "Activo", duration: "4 años", students: 2800 },
  { id: 3, name: "Medicina Humana", area: "Salud", modality: "Presencial", status: "Activo", duration: "7 años", students: 1500 },
  { id: 4, name: "Derecho y Ciencias Políticas", area: "Derecho", modality: "Presencial", status: "Activo", duration: "5 años", students: 1600 },
  { id: 5, name: "Arquitectura y Urbanismo", area: "Arquitectura", modality: "Presencial", status: "En revisión", duration: "5 años", students: 900 },
  { id: 6, name: "Biología Molecular", area: "Ciencias", modality: "Presencial", status: "Activo", duration: "5 años", students: 700 },
  { id: 7, name: "Marketing Digital", area: "Negocios", modality: "Virtual", status: "Inactivo", duration: "4 años", students: 0 },
  { id: 8, name: "Psicología Clínica", area: "Humanidades", modality: "Presencial", status: "Activo", duration: "5 años", students: 1100 },
];

const statusColors: Record<string, string> = {
  Activo: "bg-green-100 text-green-700",
  Inactivo: "bg-gray-100 text-gray-500",
  "En revisión": "bg-amber-100 text-amber-700",
};

const emptyCareer: Omit<Career, "id"> = { name: "", area: "Ingeniería", modality: "Presencial", status: "Activo", duration: "4 años", students: 0 };

export function AdminCareers() {
  const [careers, setCareers] = useState<Career[]>(initialCareers);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [modal, setModal] = useState<{ open: boolean; editing: Career | null }>({ open: false, editing: null });
  const [form, setForm] = useState<Omit<Career, "id">>(emptyCareer);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [sortField, setSortField] = useState<keyof Career>("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const openCreate = () => { setForm(emptyCareer); setModal({ open: true, editing: null }); };
  const openEdit = (c: Career) => { setForm({ name: c.name, area: c.area, modality: c.modality, status: c.status, duration: c.duration, students: c.students }); setModal({ open: true, editing: c }); };
  const closeModal = () => setModal({ open: false, editing: null });

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (modal.editing) {
      setCareers((prev) => prev.map((c) => c.id === modal.editing!.id ? { ...c, ...form } : c));
    } else {
      setCareers((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => { setCareers((prev) => prev.filter((c) => c.id !== id)); setDeleteConfirm(null); };

  const toggleSort = (field: keyof Career) => {
    if (sortField === field) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const filtered = careers
    .filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.area.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "Todos" || c.status === filterStatus;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      const v1 = a[sortField], v2 = b[sortField];
      return sortDir === "asc" ? (v1 < v2 ? -1 : 1) : (v1 > v2 ? -1 : 1);
    });

  const SortIcon = ({ field }: { field: keyof Career }) =>
    sortField === field
      ? (sortDir === "asc" ? <ChevronUp size={13} /> : <ChevronDown size={13} />)
      : <ChevronUp size={13} className="opacity-20" />;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">Gestión de Carreras</h1>
          <p className="text-muted-foreground text-sm mt-0.5">{careers.length} programas registrados</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          <Plus size={16} /> Crear nueva
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre o área..."
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
          >
            {["Todos", "Activo", "Inactivo", "En revisión"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40 border-b border-border">
                {[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Nombre" },
                  { key: "area", label: "Área" },
                  { key: "modality", label: "Modalidad" },
                  { key: "duration", label: "Duración" },
                  { key: "students", label: "Estudiantes" },
                  { key: "status", label: "Estado" },
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    onClick={() => toggleSort(key as keyof Career)}
                    className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide cursor-pointer hover:text-foreground transition-colors"
                  >
                    <span className="flex items-center gap-1">
                      {label} <SortIcon field={key as keyof Career} />
                    </span>
                  </th>
                ))}
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={c.id} className={`border-t border-border hover:bg-muted/20 transition-colors ${i % 2 === 0 ? "" : "bg-muted/10"}`}>
                  <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">#{c.id}</td>
                  <td className="px-5 py-3.5 font-medium text-foreground">{c.name}</td>
                  <td className="px-5 py-3.5 text-muted-foreground text-xs">{c.area}</td>
                  <td className="px-5 py-3.5 text-muted-foreground text-xs">{c.modality}</td>
                  <td className="px-5 py-3.5 text-muted-foreground text-xs">{c.duration}</td>
                  <td className="px-5 py-3.5 text-muted-foreground text-xs">{c.students.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex gap-1">
                      <button
                        onClick={() => openEdit(c)}
                        className="p-1.5 rounded-lg hover:bg-primary/10 text-primary transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={14} />
                      </button>
                      {deleteConfirm === c.id ? (
                        <span className="flex items-center gap-1">
                          <button onClick={() => handleDelete(c.id)} className="px-2 py-0.5 text-xs bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-colors">Confirmar</button>
                          <button onClick={() => setDeleteConfirm(null)} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/70 transition-colors">Cancelar</button>
                        </span>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(c.id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-600 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground text-sm">No se encontraron carreras.</div>
        )}
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display font-semibold text-lg text-foreground">
                {modal.editing ? "Editar Carrera" : "Nueva Carrera"}
              </h2>
              <button onClick={closeModal} className="p-2 rounded-lg hover:bg-muted transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nombre de la carrera *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
                  placeholder="Ej: Ingeniería de Software"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Área</label>
                  <select value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors">
                    {["Ingeniería", "Negocios", "Salud", "Derecho", "Humanidades", "Arquitectura", "Ciencias"].map(a => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Modalidad</label>
                  <select value={form.modality} onChange={(e) => setForm({ ...form, modality: e.target.value })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors">
                    {["Presencial", "Virtual", "Híbrida"].map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Duración</label>
                  <select value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors">
                    {["3 años", "4 años", "5 años", "6 años", "7 años"].map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estado</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Career["status"] })} className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors">
                    {["Activo", "Inactivo", "En revisión"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={closeModal} className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-xl hover:bg-muted transition-colors">Cancelar</button>
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
