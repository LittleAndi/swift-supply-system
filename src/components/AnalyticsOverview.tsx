
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const metrics = [
  {
    title: "On-Time Delivery",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Target,
    description: "vs last quarter",
  },
  {
    title: "Avg. Lead Time",
    value: "12.5 days",
    change: "-1.2 days",
    changeType: "positive" as const,
    icon: Clock,
    description: "vs last quarter",
  },
  {
    title: "Cost Savings",
    value: "$2.4M",
    change: "+15.8%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "this quarter",
  },
  {
    title: "Supply Chain Score",
    value: "87",
    change: "+5",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "out of 100",
  },
];

export default function AnalyticsOverview() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span
                className={`text-sm font-medium ${
                  metric.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                {metric.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
