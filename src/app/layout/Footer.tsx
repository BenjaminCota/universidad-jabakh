import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logoSrc from "@/imports/image-1.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={logoSrc}
                alt="Universidad JABAKH"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Formando líderes del mañana con excelencia académica y compromiso social desde 1985.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/UniversidadJABAKH", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/UniversidadJABAKH", label: "Twitter" },
                { Icon: Instagram, href: "https://instagram.com/UniversidadJABAKH", label: "Instagram" },
                { Icon: Youtube, href: "https://youtube.com/@UniversidadJABAKH", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-secondary/80 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-secondary mb-5">Institución</h4>
            <ul className="space-y-2.5">
              {[
                ["Sobre Nosotros", "/nosotros"],
                ["Misión y Visión", "/nosotros"],
                ["Autoridades", "/nosotros"],
                ["Historia", "/nosotros"],
                ["Acreditaciones", "/nosotros"],
              ].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-white/60 hover:text-white text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-secondary mb-5">Académico</h4>
            <ul className="space-y-2.5">
              {[
                ["Oferta Académica", "/oferta-academica"],
                ["Admisiones", "/admisiones"],
                ["Calendarios", "/calendarios"],
                ["Biblioteca", "/biblioteca"],
                ["Investigación", "/investigacion"],
              ].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-white/60 hover:text-white text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-secondary mb-5">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm text-white/60">
                <MapPin size={15} className="shrink-0 mt-0.5 text-secondary" />
                <a
                  href="https://maps.google.com/?q=Av.+Universidad+1200,+San+Luis+Río+Colorado,+Sonora,+México"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Av. Universidad 1200, San Luis Río Colorado, Sonora
                </a>
              </li>
              <li className="flex gap-2.5 text-sm text-white/60">
                <Phone size={15} className="shrink-0 mt-0.5 text-secondary" />
                <a href="tel:+526535340000" className="hover:text-white transition-colors">
                  +52 (653) 534 0000
                </a>
              </li>
              <li className="flex gap-2.5 text-sm text-white/60">
                <Mail size={15} className="shrink-0 mt-0.5 text-secondary" />
                <a href="mailto:info@jabakh.edu.mx" className="hover:text-white transition-colors">
                  info@jabakh.edu.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2026 Universidad JABAKH · San Luis Río Colorado, Sonora, México. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link to="/privacidad" className="hover:text-white/70 transition-colors">Política de Privacidad</Link>
            <Link to="/terminos" className="hover:text-white/70 transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
