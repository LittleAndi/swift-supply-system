
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
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const deliveryData = [
  { month: "Jan", onTime: 92, delayed: 8 },
  { month: "Feb", onTime: 89, delayed: 11 },
  { month: "Mar", onTime: 94, delayed: 6 },
  { month: "Apr", onTime: 91, delayed: 9 },
  { month: "May", onTime: 96, delayed: 4 },
  { month: "Jun", onTime: 94, delayed: 6 },
];

const costData = [
  { category: "Transportation", amount: 450000, percentage: 35 },
  { category: "Warehousing", amount: 320000, percentage: 25 },
  { category: "Inventory", amount: 256000, percentage: 20 },
  { category: "Procurement", amount: 192000, percentage: 15 },
  { category: "Other", amount: 64000, percentage: 5 },
];

const regionData = [
  { region: "North America", volume: 2800 },
  { region: "Europe", volume: 2200 },
  { region: "Asia Pacific", volume: 3100 },
  { region: "Latin America", volume: 1400 },
  { region: "Middle East", volume: 900 },
];

const chartConfig: ChartConfig = {
  onTime: {
    label: "On Time",
    color: "hsl(var(--primary))",
  },
  delayed: {
    label: "Delayed",
    color: "hsl(var(--destructive))",
  },
  amount: {
    label: "Amount",
    color: "hsl(var(--primary))",
  },
  volume: {
    label: "Volume",
    color: "hsl(var(--primary))",
  },
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function PerformanceCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Delivery Performance Chart */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
        <h3 className="text-lg font-semibold mb-4">Delivery Performance Trend</h3>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={deliveryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="onTime" 
              stroke="var(--color-onTime)" 
              strokeWidth={2}
              dot={{ fill: "var(--color-onTime)" }}
            />
            <Line 
              type="monotone" 
              dataKey="delayed" 
              stroke="var(--color-delayed)" 
              strokeWidth={2}
              dot={{ fill: "var(--color-delayed)" }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
        <h3 className="text-lg font-semibold mb-4">Cost Breakdown</h3>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <PieChart>
            <Pie
              data={costData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ category, percentage }) => `${category}: ${percentage}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="amount"
            >
              {costData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </div>

      {/* Regional Volume */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30 lg:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Shipment Volume by Region</h3>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={regionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar 
              dataKey="volume" 
              fill="var(--color-volume)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
