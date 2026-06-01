import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import logoSrc from "@/imports/image-1.png";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <img
            src={logoSrc}
            alt="Universidad JABAKH"
            className="h-20 w-auto object-contain opacity-40"
          />
        </div>
        <h1 className="font-display font-bold text-7xl text-primary mb-4">404</h1>
        <h2 className="font-display font-semibold text-2xl text-foreground mb-3">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          La página que buscas no existe o ha sido movida. Vuelve al inicio para continuar navegando.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors">
          <ArrowLeft size={18} /> Volver al inicio
        </Link>
      </div>
    </div>
  );
}
