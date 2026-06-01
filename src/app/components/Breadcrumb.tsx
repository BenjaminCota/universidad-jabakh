import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-1.5 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Home size={14} />
            <span>Inicio</span>
          </Link>
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={14} className="text-muted-foreground/50" />
              {item.href && i < items.length - 1 ? (
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
