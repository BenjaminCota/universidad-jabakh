import { Breadcrumb } from "../components/Breadcrumb";
import { BookOpen, Search, Clock, Wifi, Users, Monitor } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Colección Física", desc: "Más de 85,000 títulos en libros, revistas científicas y tesis disponibles en sala." },
  { icon: Monitor, title: "Biblioteca Digital", desc: "Acceso a bases de datos como JSTOR, Springer, Scopus y más de 500,000 publicaciones en línea." },
  { icon: Search, title: "Préstamo Interbibliotecario", desc: "Solicita material de otras bibliotecas universitarias afiliadas a nivel nacional." },
  { icon: Users, title: "Salas de Estudio", desc: "24 cubículos individuales y 8 salas grupales con capacidad de hasta 12 personas cada una." },
  { icon: Wifi, title: "Acceso Remoto", desc: "Consulta los recursos digitales desde cualquier lugar con tu cuenta institucional." },
  { icon: Clock, title: "Horario Extendido", desc: "Lunes a viernes de 7:00 a 22:00 hrs. Sábados de 8:00 a 18:00 hrs." },
];

const databases = [
  { name: "JSTOR", area: "Humanidades y Ciencias Sociales" },
  { name: "Springer Link", area: "Ciencias e Ingeniería" },
  { name: "Scopus", area: "Multidisciplinaria" },
  { name: "PubMed", area: "Ciencias de la Salud" },
  { name: "IEEE Xplore", area: "Tecnología e Ingeniería" },
  { name: "LexisNexis", area: "Derecho y Negocios" },
  { name: "APA PsycNET", area: "Psicología" },
  { name: "EBSCOhost", area: "Multidisciplinaria" },
];

export function Biblioteca() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Biblioteca" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Biblioteca Universitaria</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Centro de recursos académicos con acceso a colecciones físicas y digitales de primer nivel.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "85,000+", label: "Títulos físicos" },
            { value: "500,000+", label: "Publicaciones digitales" },
            { value: "8", label: "Bases de datos" },
            { value: "32", label: "Salas de estudio" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl border border-border p-6 text-center">
              <div className="font-display font-bold text-3xl text-primary mb-1">{value}</div>
              <div className="text-muted-foreground text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-border p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">Bases de Datos Suscritas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {databases.map(({ name, area }) => (
              <div key={name} className="bg-white rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all">
                <div className="font-display font-bold text-base text-primary mb-1">{name}</div>
                <div className="text-xs text-muted-foreground">{area}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
          <p className="text-foreground/80 text-sm">
            Para acceder a los recursos digitales usa tu correo institucional.&nbsp;
            Soporte: <span className="text-primary font-medium">biblioteca@jabakh.edu.mx</span>
            &nbsp;·&nbsp; Ext. 210
          </p>
        </div>
      </div>
    </div>
  );
}
