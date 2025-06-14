
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts";

const operationalEfficiencyData = [
  { month: "Jan", efficiency: 78, throughput: 1200, utilization: 82 },
  { month: "Feb", efficiency: 81, throughput: 1350, utilization: 85 },
  { month: "Mar", efficiency: 85, throughput: 1450, utilization: 88 },
  { month: "Apr", efficiency: 83, throughput: 1380, utilization: 86 },
  { month: "May", efficiency: 87, throughput: 1520, utilization: 91 },
  { month: "Jun", efficiency: 89, throughput: 1600, utilization: 93 },
];

const processEfficiencyData = [
  { process: "Order Processing", current: 92, target: 95, improvement: 3 },
  { process: "Inventory Management", current: 88, target: 90, improvement: 2 },
  { process: "Shipping & Fulfillment", current: 94, target: 96, improvement: 2 },
  { process: "Supplier Relations", current: 86, target: 92, improvement: 6 },
  { process: "Quality Control", current: 97, target: 98, improvement: 1 },
];

const resourceUtilizationData = [
  { resource: "Warehouse Space", utilization: 87, color: "#0088FE" },
  { resource: "Transportation Fleet", utilization: 91, color: "#00C49F" },
  { resource: "Human Resources", utilization: 78, color: "#FFBB28" },
  { resource: "Technology Systems", utilization: 95, color: "#FF8042" },
];

const efficiencyKPIs = [
  { label: "Overall Efficiency Score", value: "89%", change: "+4%", trend: "up" },
  { label: "Process Automation", value: "76%", change: "+8%", trend: "up" },
  { label: "Resource Utilization", value: "88%", change: "+2%", trend: "up" },
  { label: "Cost per Unit", value: "$12.45", change: "-$1.20", trend: "down" },
];

const chartConfig: ChartConfig = {
  efficiency: {
    label: "Efficiency %",
    color: "#0088FE",
  },
  throughput: {
    label: "Throughput",
    color: "#00C49F",
  },
  utilization: {
    label: "Utilization %",
    color: "#FFBB28",
  },
  current: {
    label: "Current",
    color: "#0088FE",
  },
  target: {
    label: "Target",
    color: "#00C49F",
  },
};

export default function EfficiencyMetrics() {
  return (
    <div className="space-y-6">
      {/* Efficiency KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {efficiencyKPIs.map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {kpi.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Operational Efficiency Trend */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
        <h3 className="text-lg font-semibold mb-4">Operational Efficiency Trends</h3>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={operationalEfficiencyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="efficiency" 
              stroke="var(--color-efficiency)" 
              strokeWidth={3}
              dot={{ fill: "var(--color-efficiency)", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="utilization" 
              stroke="var(--color-utilization)" 
              strokeWidth={2}
              dot={{ fill: "var(--color-utilization)", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Process Efficiency Analysis */}
        <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
          <h3 className="text-lg font-semibold mb-4">Process Efficiency vs Targets</h3>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={processEfficiencyData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[70, 100]} />
              <YAxis dataKey="process" type="category" width={140} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="current" fill="var(--color-current)" radius={[0, 4, 4, 0]} />
              <Bar dataKey="target" fill="var(--color-target)" radius={[0, 4, 4, 0]} opacity={0.6} />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Resource Utilization */}
        <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
          <h3 className="text-lg font-semibold mb-4">Resource Utilization</h3>
          <div className="space-y-4">
            {resourceUtilizationData.map((resource) => (
              <div key={resource.resource} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{resource.resource}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${resource.utilization}%`, 
                        backgroundColor: resource.color 
                      }}
                    />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-lg font-semibold" style={{ color: resource.color }}>
                    {resource.utilization}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Efficiency Improvement Opportunities */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
        <h3 className="text-lg font-semibold mb-4">Efficiency Improvement Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Process Automation</h4>
            <p className="text-sm text-blue-700 mb-2">Automate repetitive manual tasks</p>
            <p className="text-xs text-blue-600">Potential improvement: +12% efficiency</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-2">Workflow Optimization</h4>
            <p className="text-sm text-green-700 mb-2">Streamline approval processes</p>
            <p className="text-xs text-green-600">Potential improvement: +8% efficiency</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-medium text-orange-900 mb-2">Resource Allocation</h4>
            <p className="text-sm text-orange-700 mb-2">Better distribute workload</p>
            <p className="text-xs text-orange-600">Potential improvement: +6% efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
