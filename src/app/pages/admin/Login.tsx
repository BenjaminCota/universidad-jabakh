import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Eye, EyeOff, Lock, User, XCircle, X } from "lucide-react";
import logoSrc from "@/imports/Logo.png";

const VALID_USER = "admin";
const VALID_PASS = "1234";

export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (username === VALID_USER && password === VALID_PASS) {
        navigate("/admin/dashboard");
      } else {
        setLoading(false);
        if (username !== VALID_USER && password !== VALID_PASS) {
          setError("Usuario y contraseña incorrectos. Verifica tus credenciales e intenta de nuevo.");
        } else if (username !== VALID_USER) {
          setError("El usuario ingresado no existe. Verifica e intenta de nuevo.");
        } else {
          setError("Contraseña incorrecta. Por favor intenta de nuevo.");
        }
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
          {/* Header strip */}
          <div className="bg-primary px-8 pt-10 pb-8 text-center">
            <div className="flex justify-center mb-4 overflow-hidden h-36 items-center">
              <img
                src={logoSrc}
                alt="Universidad JABAKH"
                className="h-52 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm mt-1">Universidad JABAKH</p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <h2 className="font-display font-semibold text-lg text-foreground mb-6 text-center">Iniciar sesión</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Usuario</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    placeholder="admin"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Contraseña</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-11 py-3 bg-background border border-border rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    placeholder="••••••••"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground">Recordar sesión</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline font-medium">¿Olvidaste tu contraseña?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Verificando...
                  </span>
                ) : "Iniciar Sesión"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ← Volver al sitio público
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2026 Universidad JABAKH · Sistema Administrativo v2.4
        </p>
      </div>

      {/* Error modal */}
      {error && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-border overflow-hidden">
            {/* Modal header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <XCircle size={20} className="text-secondary" />
                <span className="font-display font-semibold text-white">Acceso denegado</span>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-6">
              <p className="text-foreground/80 text-sm leading-relaxed">{error}</p>
            </div>

            {/* Modal footer */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setError(null)}
                className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
              >
                Intentar de nuevo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
