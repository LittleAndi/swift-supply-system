
import { Home, Truck, Ship, Train, Package, PieChart, Book } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: <Home size={18} />, path: "/" },
  { label: "Procurement", icon: <Package size={18} />, path: "/procurement" },
  { label: "Shipments", icon: <Truck size={18} />, path: "/shipments" },
  { label: "Inventory", icon: <Package size={18} />, path: "/inventory" },
  { label: "Analytics", icon: <PieChart size={18} />, path: "/analytics" },
  { label: "Wiki", icon: <Book size={18} />, path: "/wiki" },
];

export default function DashboardSidebar() {
  return (
    <aside className="h-screen w-64 bg-white border-r flex flex-col py-6 px-4 shadow-sm">
      <div className="mb-8 pr-2">
        <span className="text-2xl font-extrabold tracking-tight text-primary">SCM</span>
        <span className="ml-1 text-xs text-muted-foreground font-semibold">for Consumer Goods</span>
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md font-medium text-base transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )
                }
                end={item.path === "/"}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="mt-auto text-xs text-gray-400 pl-1 pt-4">
        &copy; {new Date().getFullYear()} SCM Platform
      </footer>
    </aside>
  );
}
