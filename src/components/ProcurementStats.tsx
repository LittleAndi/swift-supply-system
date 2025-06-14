
import { Package, FileText, Users, TrendingUp } from "lucide-react";

const procurementStats = [
  {
    label: "Active POs",
    value: 128,
    icon: <FileText className="text-blue-600" size={22} />,
    change: "+12%",
    changeType: "positive" as const,
  },
  {
    label: "Total Suppliers",
    value: 45,
    icon: <Users className="text-green-600" size={22} />,
    change: "+3",
    changeType: "positive" as const,
  },
  {
    label: "Pending Orders",
    value: 23,
    icon: <Package className="text-orange-500" size={22} />,
    change: "-5%",
    changeType: "positive" as const,
  },
  {
    label: "Monthly Spend",
    value: "$2.4M",
    icon: <TrendingUp className="text-purple-600" size={22} />,
    change: "+8%",
    changeType: "positive" as const,
  },
];

export default function ProcurementStats() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {procurementStats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl shadow p-5 flex items-center gap-4 border border-muted"
        >
          <div className="bg-muted rounded-lg p-2">
            {stat.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-muted-foreground font-semibold uppercase mt-1 tracking-wide">
              {stat.label}
            </div>
            <div className="text-xs text-green-600 font-medium mt-1">
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
