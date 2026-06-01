import { useState } from "react";
import { Search, Filter, X, Eye, CheckCircle, XCircle, Clock, FileText } from "lucide-react";

type Application = {
  id: string; name: string; email: string; career: string; date: string;
  status: "Pendiente" | "Aceptado" | "Rechazado" | "En revisión";
  score: number; modality: string; phone: string; district: string;
};

const applications: Application[] = [
  { id: "ADM-2026-1042", name: "Lucía Martínez Torres", email: "lucia.martinez@gmail.com", career: "Ingeniería de Sistemas", date: "15 Nov 2026", status: "Pendiente", score: 78, modality: "Presencial", phone: "+52 653 100 0001", district: "San Luis Río Colorado" },
  { id: "ADM-2026-1041", name: "Andrés Soto Vega", email: "andres.soto@hotmail.com", career: "Medicina Humana", date: "14 Nov 2026", status: "En revisión", score: 85, modality: "Presencial", phone: "+52 653 100 0002", district: "San Luis Río Colorado" },
  { id: "ADM-2026-1040", name: "Valentina Cruz López", email: "v.cruz@yahoo.com", career: "Derecho", date: "14 Nov 2026", status: "Aceptado", score: 92, modality: "Presencial", phone: "+52 653 100 0003", district: "Colonia Centro" },
  { id: "ADM-2026-1039", name: "Diego Herrera Ramos", email: "dherrera@gmail.com", career: "Administración de Empresas", date: "13 Nov 2026", status: "Pendiente", score: 71, modality: "Híbrida", phone: "+52 653 100 0004", district: "Col. Las Misiones" },
  { id: "ADM-2026-1038", name: "Camila Ríos Mendez", email: "c.rios@gmail.com", career: "Psicología", date: "12 Nov 2026", status: "Rechazado", score: 52, modality: "Presencial", phone: "+52 653 100 0005", district: "Col. Benito Juárez" },
  { id: "ADM-2026-1037", name: "Sebastián Flores García", email: "sflores@outlook.com", career: "Arquitectura", date: "11 Nov 2026", status: "Aceptado", score: 88, modality: "Presencial", phone: "+52 653 100 0006", district: "Ejido El Mezquital" },
  { id: "ADM-2026-1036", name: "Isabella Rojas Quispe", email: "i.rojas@gmail.com", career: "Contabilidad y Finanzas", date: "10 Nov 2026", status: "En revisión", score: 76, modality: "Presencial", phone: "+52 653 100 0007", district: "Col. Guadalupe" },
  { id: "ADM-2026-1035", name: "Mateo Silva Chávez", email: "msilva@hotmail.com", career: "Biología Molecular", date: "09 Nov 2026", status: "Pendiente", score: 83, modality: "Presencial", phone: "+52 653 100 0008", district: "Col. Rosarito" },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  Pendiente: { label: "Pendiente", color: "bg-amber-100 text-amber-700", icon: <Clock size={13} /> },
  "En revisión": { label: "En revisión", color: "bg-blue-100 text-blue-700", icon: <Eye size={13} /> },
  Aceptado: { label: "Aceptado", color: "bg-green-100 text-green-700", icon: <CheckCircle size={13} /> },
  Rechazado: { label: "Rechazado", color: "bg-red-100 text-red-700", icon: <XCircle size={13} /> },
};

const stats = [
  { label: "Total", value: applications.length, color: "text-foreground" },
  { label: "Pendientes", value: applications.filter(a => a.status === "Pendiente").length, color: "text-amber-600" },
  { label: "En revisión", value: applications.filter(a => a.status === "En revisión").length, color: "text-blue-600" },
  { label: "Aceptados", value: applications.filter(a => a.status === "Aceptado").length, color: "text-green-600" },
  { label: "Rechazados", value: applications.filter(a => a.status === "Rechazado").length, color: "text-red-600" },
];

export function Applications() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [selected, setSelected] = useState<Application | null>(null);

  const filtered = applications.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.career.toLowerCase().includes(search.toLowerCase()) || a.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "Todos" || a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">Solicitudes de Admisión</h1>
          <p className="text-muted-foreground text-sm mt-0.5">{applications.length} solicitudes en el sistema</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-border text-sm font-medium rounded-xl hover:bg-muted transition-colors">
          <Filter size={15} /> Exportar
        </button>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-5 gap-3">
        {stats.map(({ label, value, color }) => (
          <div key={label} className="bg-card rounded-xl border border-border p-4 text-center">
            <div className={`font-display font-bold text-2xl ${color}`}>{value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nombre, ID o carrera..." className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Todos", "Pendiente", "En revisión", "Aceptado", "Rechazado"].map((s) => (
              <button key={s} onClick={() => setFilterStatus(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filterStatus === s ? "bg-primary text-white" : "bg-background border border-border text-muted-foreground hover:border-primary"}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40 border-b border-border">
                {["ID", "Postulante", "Carrera", "Fecha", "Puntaje", "Estado", "Acciones"].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((app, i) => {
                const sc = statusConfig[app.status];
                return (
                  <tr key={app.id} className={`border-t border-border hover:bg-muted/20 transition-colors ${i % 2 === 0 ? "" : "bg-muted/10"}`}>
                    <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{app.id}</td>
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-foreground text-sm">{app.name}</div>
                      <div className="text-xs text-muted-foreground">{app.email}</div>
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground text-xs max-w-32">{app.career}</td>
                    <td className="px-5 py-3.5 text-muted-foreground text-xs">{app.date}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className={`h-full rounded-full ${app.score >= 80 ? "bg-green-500" : app.score >= 60 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${app.score}%` }} />
                        </div>
                        <span className="text-xs font-semibold text-foreground">{app.score}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`flex items-center gap-1 w-fit px-2.5 py-0.5 rounded-full text-xs font-medium ${sc.color}`}>
                        {sc.icon} {sc.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button onClick={() => setSelected(app)} className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/8 rounded-lg transition-colors">
                        <FileText size={13} /> Ver detalle
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <div className="py-12 text-center text-muted-foreground text-sm">No se encontraron solicitudes.</div>}
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-display font-semibold text-lg text-foreground">Detalle de Solicitud</h2>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">{selected.id}</p>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 rounded-lg hover:bg-muted transition-colors"><X size={18} /></button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {selected.name[0]}
                </div>
                <div>
                  <div className="font-display font-semibold text-lg text-foreground">{selected.name}</div>
                  <div className="text-sm text-muted-foreground">{selected.email}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-muted/40 rounded-xl p-4">
                {[
                  { label: "Carrera", value: selected.career },
                  { label: "Modalidad", value: selected.modality },
                  { label: "Fecha de solicitud", value: selected.date },
                  { label: "Puntaje", value: `${selected.score}/100` },
                  { label: "Teléfono", value: selected.phone },
                  { label: "Distrito", value: selected.district },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium text-foreground mt-0.5">{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Estado actual</span>
                <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[selected.status].color}`}>
                  {statusConfig[selected.status].icon} {selected.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3 px-6 pb-6">
              <button className="flex-1 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <CheckCircle size={15} /> Aceptar
              </button>
              <button className="flex-1 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <XCircle size={15} /> Rechazar
              </button>
              <button onClick={() => setSelected(null)} className="px-4 py-2.5 border border-border text-sm font-medium rounded-xl hover:bg-muted transition-colors text-muted-foreground">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
