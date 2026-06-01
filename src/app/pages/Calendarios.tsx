import { Breadcrumb } from "../components/Breadcrumb";
import { CalendarDays, Download, Clock } from "lucide-react";

const periods = [
  {
    name: "Ciclo 2026-I",
    status: "En curso",
    statusColor: "bg-green-100 text-green-700",
    events: [
      { label: "Inicio de clases", date: "3 de febrero, 2026" },
      { label: "Exámenes parciales", date: "23 – 27 de marzo, 2026" },
      { label: "Semana de receso", date: "6 – 10 de abril, 2026" },
      { label: "Exámenes finales", date: "18 – 29 de mayo, 2026" },
      { label: "Publicación de notas", date: "5 de junio, 2026" },
    ],
  },
  {
    name: "Ciclo 2026-II",
    status: "Próximo",
    statusColor: "bg-blue-100 text-blue-700",
    events: [
      { label: "Inicio de clases", date: "3 de agosto, 2026" },
      { label: "Exámenes parciales", date: "21 – 25 de septiembre, 2026" },
      { label: "Semana de receso", date: "2 – 6 de noviembre, 2026" },
      { label: "Exámenes finales", date: "23 nov – 4 de diciembre, 2026" },
      { label: "Publicación de notas", date: "11 de diciembre, 2026" },
    ],
  },
];

const admissionDates = [
  { label: "Apertura de postulaciones 2026-II", date: "1 de junio, 2026" },
  { label: "Cierre de postulaciones", date: "30 de junio, 2026" },
  { label: "Examen de admisión", date: "11 de julio, 2026" },
  { label: "Publicación de resultados", date: "18 de julio, 2026" },
  { label: "Matrícula de ingresantes", date: "21 – 25 de julio, 2026" },
];

export function Calendarios() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Calendarios Académicos" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Calendarios Académicos</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Consulta las fechas importantes de cada ciclo académico y los procesos de admisión.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

        {/* Ciclos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {periods.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                    <CalendarDays size={20} className="text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-lg text-foreground">{p.name}</h2>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.statusColor}`}>{p.status}</span>
              </div>
              <div className="divide-y divide-border">
                {p.events.map(({ label, date }) => (
                  <div key={label} className="flex items-center justify-between px-6 py-3.5">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Clock size={14} className="text-secondary shrink-0" />
                      {label}
                    </div>
                    <span className="text-sm font-medium text-primary">{date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Admisiones */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display font-bold text-lg text-foreground">Calendario de Admisiones 2026-II</h2>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-xl hover:bg-primary/5 transition-colors">
              <Download size={15} /> Descargar PDF
            </button>
          </div>
          <div className="divide-y divide-border">
            {admissionDates.map(({ label, date }) => (
              <div key={label} className="flex items-center justify-between px-6 py-3.5">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Clock size={14} className="text-secondary shrink-0" />
                  {label}
                </div>
                <span className="text-sm font-medium text-primary">{date}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Las fechas pueden estar sujetas a cambios. Consulta la Secretaría Académica para información actualizada:&nbsp;
          <span className="text-primary font-medium">academica@jabakh.edu.mx</span>
        </p>
      </div>
    </div>
  );
}
