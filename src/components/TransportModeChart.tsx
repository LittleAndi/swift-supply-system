
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const transportData = [
  { name: "Truck", value: 48, color: "#6B7280" },
  { name: "Ship", value: 39, color: "#1D4ED8" },
  { name: "Train", value: 13, color: "#F59E0B" },
];

export default function TransportModeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transport Mode Distribution</CardTitle>
        <CardDescription>
          Current shipments by transportation method
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={transportData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {transportData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="mt-4 space-y-2">
          {transportData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
