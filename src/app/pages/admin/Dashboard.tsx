import { Users, BookOpen, FileText, TrendingUp, MoreHorizontal, Eye, ArrowUpRight } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts";

const kpis = [
  { label: "Total Estudiantes", value: "12,548", change: "+8.2%", icon: Users, color: "bg-blue-50 text-blue-600", trend: "up" },
  { label: "Programas Activos", value: "48", change: "+2", icon: BookOpen, color: "bg-amber-50 text-amber-600", trend: "up" },
  { label: "Solicitudes Pendientes", value: "234", change: "+12%", icon: FileText, color: "bg-purple-50 text-purple-600", trend: "up" },
  { label: "Tasa de Graduación", value: "91.4%", change: "+1.2%", icon: TrendingUp, color: "bg-green-50 text-green-600", trend: "up" },
];

const chartData = [
  { month: "Ene", inscripciones: 320, solicitudes: 180 },
  { month: "Feb", inscripciones: 420, solicitudes: 260 },
  { month: "Mar", inscripciones: 580, solicitudes: 340 },
  { month: "Abr", inscripciones: 490, solicitudes: 290 },
  { month: "May", inscripciones: 650, solicitudes: 410 },
  { month: "Jun", inscripciones: 720, solicitudes: 480 },
  { month: "Jul", inscripciones: 610, solicitudes: 390 },
  { month: "Ago", inscripciones: 780, solicitudes: 520 },
  { month: "Sep", inscripciones: 840, solicitudes: 570 },
  { month: "Oct", inscripciones: 920, solicitudes: 620 },
  { month: "Nov", inscripciones: 1050, solicitudes: 680 },
  { month: "Dic", inscripciones: 980, solicitudes: 640 },
];

const barData = [
  { faculty: "Ingeniería", value: 3200 },
  { faculty: "Negocios", value: 2800 },
  { faculty: "Salud", value: 2100 },
  { faculty: "Derecho", value: 1600 },
  { faculty: "Humanidades", value: 1400 },
  { faculty: "Arquitectura", value: 900 },
];

const recentApplications = [
  { id: "ADM-2026-1042", name: "Lucía Martínez", career: "Ingeniería de Sistemas", date: "15 Nov 2026", status: "Pendiente" },
  { id: "ADM-2026-1041", name: "Andrés Soto", career: "Medicina Humana", date: "14 Nov 2026", status: "Revisión" },
  { id: "ADM-2026-1040", name: "Valentina Cruz", career: "Derecho", date: "14 Nov 2026", status: "Aceptado" },
  { id: "ADM-2026-1039", name: "Diego Herrera", career: "Administración", date: "13 Nov 2026", status: "Pendiente" },
  { id: "ADM-2026-1038", name: "Camila Ríos", career: "Psicología", date: "12 Nov 2026", status: "Rechazado" },
];

const statusColors: Record<string, string> = {
  Pendiente: "bg-amber-100 text-amber-700",
  Revisión: "bg-blue-100 text-blue-700",
  Aceptado: "bg-green-100 text-green-700",
  Rechazado: "bg-red-100 text-red-700",
};

const recentActivity = [
  { action: "Nueva solicitud de admisión recibida", time: "hace 5 min", type: "info" },
  { action: "Carrera 'IA y Machine Learning' actualizada", time: "hace 23 min", type: "update" },
  { action: "Noticia publicada: 'Congreso Internacional'", time: "hace 1h", type: "publish" },
  { action: "3 solicitudes aprobadas por el comité", time: "hace 2h", type: "success" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Bienvenido de vuelta, Administrador — Viernes, 15 Nov 2026</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpis.map(({ label, value, change, icon: Icon, color }) => (
          <div key={label} className="bg-card rounded-2xl border border-border p-5">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={20} />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                <ArrowUpRight size={12} /> {change}
              </span>
            </div>
            <div className="font-display font-bold text-2xl text-foreground">{value}</div>
            <div className="text-muted-foreground text-xs mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Area chart */}
        <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-semibold text-base text-foreground">Inscripciones vs Solicitudes</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Evolución anual 2026</p>
            </div>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <MoreHorizontal size={16} className="text-muted-foreground" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="inscGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="solGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "white", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, fontSize: 12 }}
              />
              <Area type="monotone" dataKey="inscripciones" name="Inscripciones" stroke="#1E3A8A" strokeWidth={2} fill="url(#inscGrad)" />
              <Area type="monotone" dataKey="solicitudes" name="Solicitudes" stroke="#F59E0B" strokeWidth={2} fill="url(#solGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bar chart */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-display font-semibold text-base text-foreground mb-1">Estudiantes por Facultad</h3>
          <p className="text-xs text-muted-foreground mb-6">Distribución actual</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
              <XAxis type="number" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis dataKey="faculty" type="category" tick={{ fontSize: 10, fill: "#6b7280" }} axisLine={false} tickLine={false} width={72} />
              <Tooltip contentStyle={{ background: "white", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="value" name="Estudiantes" fill="#1E3A8A" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Applications table */}
        <div className="lg:col-span-2 bg-card rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="font-display font-semibold text-base text-foreground">Últimas Solicitudes</h3>
            <a href="/admin/solicitudes" className="text-xs text-primary font-semibold hover:underline flex items-center gap-1">
              Ver todas <Eye size={13} />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">ID</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Postulante</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden sm:table-cell">Carrera</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Fecha</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Estado</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app, i) => (
                  <tr key={app.id} className={`border-t border-border hover:bg-muted/30 transition-colors ${i % 2 === 0 ? "" : "bg-muted/10"}`}>
                    <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{app.id}</td>
                    <td className="px-5 py-3.5 font-medium text-foreground text-sm">{app.name}</td>
                    <td className="px-5 py-3.5 text-muted-foreground text-xs hidden sm:table-cell">{app.career}</td>
                    <td className="px-5 py-3.5 text-muted-foreground text-xs hidden md:table-cell">{app.date}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[app.status]}`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-display font-semibold text-base text-foreground mb-5">Actividad Reciente</h3>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                  item.type === "success" ? "bg-green-500" :
                  item.type === "update" ? "bg-blue-500" :
                  item.type === "publish" ? "bg-purple-500" : "bg-amber-500"
                }`} />
                <div>
                  <p className="text-sm text-foreground/80 leading-snug">{item.action}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
