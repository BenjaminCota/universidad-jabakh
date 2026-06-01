import { Breadcrumb } from "../components/Breadcrumb";

export function PrivacyPolicy() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Política de Privacidad" }]} />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Política de Privacidad</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Última actualización: enero de 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-border p-8 sm:p-12 space-y-10">

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">1. Responsable del tratamiento</h2>
            <p className="text-foreground/75 leading-relaxed">
              La Universidad JABAKH, con domicilio en Av. Universidad 1200, San Luis Río Colorado, Sonora, México,
              es la entidad responsable del tratamiento de los datos personales recabados a través de este sitio web,
              de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">2. Datos que recopilamos</h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Recopilamos la siguiente información cuando interactúas con nuestros servicios:
            </p>
            <ul className="space-y-2 text-foreground/75">
              {[
                "Nombre completo y datos de identificación oficial.",
                "Correo electrónico, número de teléfono y domicilio.",
                "Información académica y documentos de postulación.",
                "Datos de navegación: dirección IP, tipo de navegador y páginas visitadas.",
                "Información proporcionada en formularios de contacto y admisión.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">3. Finalidad del tratamiento</h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Los datos personales recabados se utilizan para los siguientes fines:
            </p>
            <ul className="space-y-2 text-foreground/75">
              {[
                "Gestionar el proceso de admisión y matrícula.",
                "Enviar información académica, institucional y de eventos.",
                "Atender solicitudes de información y contacto.",
                "Cumplir con obligaciones legales y normativas vigentes.",
                "Mejorar los servicios y la experiencia en el sitio web.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">4. Derechos ARCO</h2>
            <p className="text-foreground/75 leading-relaxed">
              Tienes derecho de Acceso, Rectificación, Cancelación y Oposición (ARCO) sobre tus datos personales.
              Para ejercer estos derechos, envía una solicitud a <span className="text-primary font-medium">privacidad@jabakh.edu.mx</span>,
              indicando tu nombre completo, el derecho que deseas ejercer y los datos sobre los que solicitas la acción.
              Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">5. Cookies</h2>
            <p className="text-foreground/75 leading-relaxed">
              Este sitio utiliza cookies propias para garantizar su correcto funcionamiento y mejorar la experiencia
              de navegación. No utilizamos cookies de rastreo de terceros con fines publicitarios. Puedes configurar
              tu navegador para rechazar cookies, aunque esto podría afectar el funcionamiento de algunas funciones del sitio.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">6. Cambios a esta política</h2>
            <p className="text-foreground/75 leading-relaxed">
              La Universidad JABAKH se reserva el derecho de modificar esta política en cualquier momento.
              Cualquier cambio relevante será comunicado a través de este sitio web. Te recomendamos revisarla periódicamente.
            </p>
          </section>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Para consultas sobre privacidad: <span className="text-primary font-medium">privacidad@jabakh.edu.mx</span>
              &nbsp;·&nbsp; Tel: +52 (653) 534 0000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
