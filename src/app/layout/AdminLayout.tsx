import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import {
  LayoutDashboard, BookOpen, Newspaper, FileText,
  Bell, Menu, X, ChevronRight, LogOut
} from "lucide-react";
import logoSrc from "@/imports/image-1.png";
import { Breadcrumb } from "../components/Breadcrumb";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Carreras", href: "/admin/carreras", icon: BookOpen },
  { label: "Noticias", href: "/admin/noticias", icon: Newspaper },
  { label: "Solicitudes", href: "/admin/solicitudes", icon: FileText },
];

const breadcrumbMap: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/carreras": "Carreras",
  "/admin/noticias": "Noticias",
  "/admin/solicitudes": "Solicitudes",
};

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pageLabel = breadcrumbMap[location.pathname] ?? "Panel";

  const handleLogout = () => {
    setShowLogout(false);
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-sidebar-border">
          <Link to="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Universidad JABAKH"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          {sidebarLinks.map(({ label, href, icon: Icon }) => {
            const active = location.pathname === href;
            return (
              <Link
                key={href}
                to={href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-white/70 hover:text-white hover:bg-sidebar-accent"
                }`}
              >
                <Icon size={18} />
                {label}
                {active && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="px-3 py-4 border-t border-sidebar-border">
          <div
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Admin JABAKH</p>
              <p className="text-white/50 text-xs truncate">admin@jabakh.edu.mx</p>
            </div>
            <LogOut size={15} className="text-white/40 shrink-0" />
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Logout confirmation modal */}
      {showLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LogOut size={18} className="text-secondary" />
                <span className="font-display font-semibold text-white">Cerrar sesión</span>
              </div>
              <button onClick={() => setShowLogout(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-6">
              <p className="text-foreground/80 text-sm leading-relaxed">
                ¿Estás seguro de que deseas cerrar sesión? Tendrás que volver a iniciar sesión para acceder al panel administrativo.
              </p>
            </div>

            <div className="px-6 pb-6 flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 py-2.5 border border-border text-sm font-medium text-muted-foreground rounded-xl hover:bg-muted transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut size={15} /> Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors" onClick={() => setSidebarOpen(true)}>
              <Menu size={18} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell size={18} className="text-foreground/70" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
              A
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Admin", href: "/admin/dashboard" }, { label: pageLabel }]} />

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
