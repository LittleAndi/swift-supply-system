
import { Package, AlertTriangle, TrendingUp, Warehouse } from "lucide-react";

const stats = [
  {
    title: "Total SKUs",
    value: "2,847",
    change: "+12",
    changeType: "positive" as const,
    icon: Package,
  },
  {
    title: "Low Stock Items",
    value: "23",
    change: "-5",
    changeType: "positive" as const,
    icon: AlertTriangle,
  },
  {
    title: "Total Value",
    value: "$1.2M",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Warehouses",
    value: "8",
    change: "+1",
    changeType: "positive" as const,
    icon: Warehouse,
  },
];

export default function InventoryStats() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
