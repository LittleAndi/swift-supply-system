
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
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from "recharts";

const costTrendData = [
  { month: "Jan", transportation: 450000, warehousing: 320000, procurement: 192000, total: 962000 },
  { month: "Feb", transportation: 420000, warehousing: 315000, procurement: 185000, total: 920000 },
  { month: "Mar", transportation: 480000, warehousing: 340000, procurement: 210000, total: 1030000 },
  { month: "Apr", transportation: 460000, warehousing: 330000, procurement: 195000, total: 985000 },
  { month: "May", transportation: 440000, warehousing: 325000, procurement: 188000, total: 953000 },
  { month: "Jun", transportation: 450000, warehousing: 320000, procurement: 192000, total: 962000 },
];

const costBreakdownData = [
  { category: "Transportation", amount: 450000, percentage: 46.8, color: "#0088FE" },
  { category: "Warehousing", amount: 320000, percentage: 33.3, color: "#00C49F" },
  { category: "Procurement", amount: 192000, percentage: 20.0, color: "#FFBB28" },
];

const supplierCostData = [
  { supplier: "Global Logistics Inc", cost: 285000, savings: 15000, efficiency: 94 },
  { supplier: "FastShip Express", cost: 220000, savings: 8000, efficiency: 91 },
  { supplier: "Regional Transport Co", cost: 180000, savings: 12000, efficiency: 96 },
  { supplier: "Premium Cargo Ltd", cost: 165000, savings: 5000, efficiency: 89 },
  { supplier: "EcoFreight Solutions", cost: 112000, savings: 18000, efficiency: 98 },
];

const savingsOpportunityData = [
  { category: "Route Optimization", potential: 45000, difficulty: "Low", timeline: "1-2 months" },
  { category: "Carrier Negotiation", potential: 32000, difficulty: "Medium", timeline: "3-4 months" },
  { category: "Consolidation", potential: 28000, difficulty: "Low", timeline: "1 month" },
  { category: "Modal Shift", potential: 25000, difficulty: "High", timeline: "6+ months" },
  { category: "Technology Upgrade", potential: 22000, difficulty: "Medium", timeline: "4-5 months" },
];

const chartConfig: ChartConfig = {
  transportation: {
    label: "Transportation",
    color: "#0088FE",
  },
  warehousing: {
    label: "Warehousing",
    color: "#00C49F",
  },
  procurement: {
    label: "Procurement",
    color: "#FFBB28",
  },
  total: {
    label: "Total Cost",
    color: "#8884D8",
  },
  cost: {
    label: "Cost",
    color: "hsl(var(--primary))",
  },
  potential: {
    label: "Savings Potential",
    color: "#82CA9D",
  },
};

export default function CostAnalysisCharts() {
  return (
    <div className="space-y-6">
      {/* Cost Trend Over Time */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
        <h3 className="text-lg font-semibold mb-4">Cost Trends Over Time</h3>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <AreaChart data={costTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Area 
              type="monotone" 
              dataKey="transportation" 
              stackId="1"
              stroke="var(--color-transportation)" 
              fill="var(--color-transportation)"
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="warehousing" 
              stackId="1"
              stroke="var(--color-warehousing)" 
              fill="var(--color-warehousing)"
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="procurement" 
              stackId="1"
              stroke="var(--color-procurement)" 
              fill="var(--color-procurement)"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Cost Breakdown */}
        <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
          <h3 className="text-lg font-semibold mb-4">Current Cost Breakdown</h3>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <PieChart>
              <Pie
                data={costBreakdownData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, percentage }) => `${category}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="amount"
              >
                {costBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip 
                content={<ChartTooltipContent />}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
            </PieChart>
          </ChartContainer>
        </div>

        {/* Supplier Cost Analysis */}
        <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
          <h3 className="text-lg font-semibold mb-4">Supplier Cost Analysis</h3>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={supplierCostData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              <YAxis dataKey="supplier" type="category" width={120} />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
              <Bar 
                dataKey="cost" 
                fill="var(--color-cost)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      {/* Savings Opportunities */}
      <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
        <h3 className="text-lg font-semibold mb-4">Cost Savings Opportunities</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <BarChart data={savingsOpportunityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                />
                <Bar 
                  dataKey="potential" 
                  fill="var(--color-potential)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Opportunity Details</h4>
            {savingsOpportunityData.map((opportunity, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{opportunity.category}</p>
                  <p className="text-xs text-gray-600">{opportunity.timeline} • {opportunity.difficulty} difficulty</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">${opportunity.potential.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">potential savings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
