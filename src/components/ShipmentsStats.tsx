
import { Truck, Ship, Train, Package } from "lucide-react";

const shipmentsStats = [
  {
    label: "In Transit",
    value: 87,
    icon: <Package className="text-blue-600" size={22} />,
    change: "+5%",
    changeType: "positive" as const,
  },
  {
    label: "By Ship",
    value: 34,
    icon: <Ship className="text-blue-700" size={22} />,
    change: "+2",
    changeType: "positive" as const,
  },
  {
    label: "By Truck",
    value: 42,
    icon: <Truck className="text-gray-700" size={22} />,
    change: "+8",
    changeType: "positive" as const,
  },
  {
    label: "By Train",
    value: 11,
    icon: <Train className="text-orange-500" size={22} />,
    change: "-1",
    changeType: "negative" as const,
  },
];

export default function ShipmentsStats() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {shipmentsStats.map((stat) => (
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
            <div className={`text-xs font-medium mt-1 ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
