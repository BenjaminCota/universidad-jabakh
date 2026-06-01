import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <Breadcrumb items={[{ label: "Contacto" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Contáctanos</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Estamos aquí para responder todas tus consultas.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="font-display font-bold text-xl text-foreground mb-6">Envíanos un mensaje</h2>

              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">Nos pondremos en contacto contigo en un plazo de 24-48 horas hábiles.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Nombre completo *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="juan@email.com"
                        className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Asunto *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors text-foreground"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option>Información de admisiones</option>
                      <option>Consulta académica</option>
                      <option>Becas y financiamiento</option>
                      <option>Convenios e internacionalización</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Escribe tu consulta aquí..."
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <Send size={16} /> Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border h-64 bg-muted relative">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=400&fit=crop&auto=format"
                alt="Ubicación Universidad JABAKH"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Universidad JABAKH</div>
                    <div className="text-xs text-muted-foreground">Av. Universidad 1200, San Luis Río Colorado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-display font-semibold text-base text-foreground mb-5">Información de Contacto</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Dirección", value: "Av. Universidad 1200, San Luis Río Colorado, Sonora, México" },
                  { icon: Phone, label: "Teléfono Central", value: "+52 (653) 534 0000\n+52 (653) 534 0001" },
                  { icon: Mail, label: "Correo", value: "info@jabakh.edu.mx\nadmisiones@jabakh.edu.mx" },
                  { icon: Clock, label: "Horario de Atención", value: "Lun – Vie: 8:00 am – 7:00 pm\nSáb: 9:00 am – 1:00 pm" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
                      <div className="text-sm text-foreground whitespace-pre-line">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-display font-semibold text-base mb-3">Admisiones Directas</h3>
              <p className="text-white/70 text-sm mb-4">¿Quieres hablar con un asesor de admisiones ahora mismo?</p>
              <a href="tel:+526535340000" className="block w-full py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl text-center text-sm hover:bg-secondary/90 transition-colors">
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
