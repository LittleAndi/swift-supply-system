
import { Truck, Ship, Train, Timer, ListChecks } from "lucide-react";

const kpiData = [
  {
    label: "Shipments in Transit",
    value: 34,
    icon: <Truck className="text-primary" size={22} />,
  },
  {
    label: "On-Time Delivery (%)",
    value: "97.2%",
    icon: <Timer className="text-blue-600" size={22} />,
  },
  {
    label: "Active POs",
    value: 128,
    icon: <ListChecks className="text-green-600" size={22} />,
  },
  {
    label: "Inventory Turnover (days)",
    value: 19,
    icon: <Train className="text-orange-500" size={22} />,
  },
];

export default function KPISection() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8 mt-6">
      {kpiData.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-white rounded-xl shadow p-5 flex items-center gap-4 border border-muted"
        >
          <div className="bg-muted rounded-lg p-2">
            {kpi.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
            <div className="text-xs text-muted-foreground font-semibold uppercase mt-1 tracking-wide">
              {kpi.label}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
