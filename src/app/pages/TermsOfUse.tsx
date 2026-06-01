import { Breadcrumb } from "../components/Breadcrumb";

export function TermsOfUse() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Términos de Uso" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Términos de Uso</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Última actualización: enero de 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-border p-8 sm:p-12 space-y-10">

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">1. Aceptación de los términos</h2>
            <p className="text-foreground/75 leading-relaxed">
              Al acceder y utilizar el sitio web de la Universidad JABAKH, aceptas cumplir con los presentes
              Términos de Uso. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices este sitio.
              El uso continuado del sitio constituye la aceptación plena de estos términos.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">2. Uso permitido</h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Este sitio web está destinado exclusivamente a fines informativos, académicos e institucionales.
              Está permitido:
            </p>
            <ul className="space-y-2 text-foreground/75 mb-4">
              {[
                "Consultar información sobre programas académicos, admisiones y eventos.",
                "Descargar materiales expresamente habilitados para descarga.",
                "Usar los formularios de contacto y postulación con datos verídicos.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/75 leading-relaxed mb-4">Está prohibido:</p>
            <ul className="space-y-2 text-foreground/75">
              {[
                "Reproducir, distribuir o modificar el contenido sin autorización escrita.",
                "Usar el sitio para fines comerciales no autorizados.",
                "Intentar acceder a secciones restringidas o sistemas internos.",
                "Publicar o transmitir contenido falso, ofensivo o ilegal.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">3. Propiedad intelectual</h2>
            <p className="text-foreground/75 leading-relaxed">
              Todo el contenido de este sitio — incluyendo textos, imágenes, logotipos, gráficos y diseño —
              es propiedad de la Universidad JABAKH o de sus respectivos titulares, y está protegido por las
              leyes de propiedad intelectual de México. Queda expresamente prohibida su reproducción total o
              parcial sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">4. Limitación de responsabilidad</h2>
            <p className="text-foreground/75 leading-relaxed">
              La Universidad JABAKH no garantiza la disponibilidad continua del sitio ni la ausencia de errores
              en la información publicada. No será responsable por daños directos o indirectos derivados del uso
              o la imposibilidad de uso de este sitio, incluyendo pérdida de datos o interrupciones del servicio.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">5. Enlaces externos</h2>
            <p className="text-foreground/75 leading-relaxed">
              Este sitio puede contener enlaces a sitios web de terceros. La Universidad JABAKH no tiene control
              sobre dichos sitios y no asume responsabilidad por su contenido, políticas o prácticas. La inclusión
              de un enlace no implica respaldo ni afiliación con el sitio externo.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">6. Legislación aplicable</h2>
            <p className="text-foreground/75 leading-relaxed">
              Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia
              derivada del uso de este sitio se someterá a la jurisdicción de los tribunales competentes de
              San Luis Río Colorado, Sonora, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">7. Modificaciones</h2>
            <p className="text-foreground/75 leading-relaxed">
              La Universidad JABAKH se reserva el derecho de actualizar estos Términos de Uso en cualquier momento.
              Los cambios entrarán en vigor desde su publicación en este sitio. Te recomendamos revisarlos periódicamente.
            </p>
          </section>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Para consultas legales: <span className="text-primary font-medium">legal@jabakh.edu.mx</span>
              &nbsp;·&nbsp; Tel: +52 (653) 534 0000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
