
import { useState } from "react";
import { AlertTriangle, Package, TrendingDown, TrendingUp } from "lucide-react";

const inventoryItems = [
  {
    id: "SKU001",
    name: "Dove Soap Bar 100g",
    category: "Personal Care",
    warehouse: "Hamburg DC",
    currentStock: 2850,
    reorderLevel: 500,
    unitCost: "$1.25",
    totalValue: "$3,562.50",
    lastMovement: "2025-06-12",
    status: "In Stock",
  },
  {
    id: "SKU002",
    name: "Nestlé Coffee Pods 12pk",
    category: "Food & Beverage",
    warehouse: "São Paulo DC",
    currentStock: 150,
    reorderLevel: 200,
    unitCost: "$8.50",
    totalValue: "$1,275.00",
    lastMovement: "2025-06-13",
    status: "Low Stock",
  },
  {
    id: "SKU003",
    name: "P&G Detergent 2L",
    category: "Household",
    warehouse: "Los Angeles DC",
    currentStock: 0,
    reorderLevel: 100,
    unitCost: "$12.00",
    totalValue: "$0.00",
    lastMovement: "2025-06-10",
    status: "Out of Stock",
  },
  {
    id: "SKU004",
    name: "Reckitt Disinfectant 500ml",
    category: "Household",
    warehouse: "Shanghai DC",
    currentStock: 1200,
    reorderLevel: 300,
    unitCost: "$6.75",
    totalValue: "$8,100.00",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU005",
    name: "Unilever Shampoo 250ml",
    category: "Personal Care",
    warehouse: "Ho Chi Minh DC",
    currentStock: 75,
    reorderLevel: 150,
    unitCost: "$4.20",
    totalValue: "$315.00",
    lastMovement: "2025-06-11",
    status: "Low Stock",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "In Stock":
      return "bg-green-100 text-green-700";
    case "Low Stock":
      return "bg-orange-100 text-orange-700";
    case "Out of Stock":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "In Stock":
      return <Package size={14} className="text-green-500" />;
    case "Low Stock":
      return <AlertTriangle size={14} className="text-orange-500" />;
    case "Out of Stock":
      return <TrendingDown size={14} className="text-red-500" />;
    default:
      return <Package size={14} className="text-gray-500" />;
  }
}

export default function InventoryTable() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Current Inventory
        </h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Export
          </button>
          <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Add Item
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl shadow ring-1 ring-muted/30">
        <table className="min-w-full bg-white text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 font-semibold">SKU</th>
              <th className="px-4 py-3 font-semibold">Product Name</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Warehouse</th>
              <th className="px-4 py-3 font-semibold">Current Stock</th>
              <th className="px-4 py-3 font-semibold">Reorder Level</th>
              <th className="px-4 py-3 font-semibold">Unit Cost</th>
              <th className="px-4 py-3 font-semibold">Total Value</th>
              <th className="px-4 py-3 font-semibold">Last Movement</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-muted transition group"
              >
                <td className="px-4 py-3 font-mono text-sm">{item.id}</td>
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.warehouse}</td>
                <td className="px-4 py-3">
                  <span className={item.currentStock <= item.reorderLevel ? "text-orange-600 font-medium" : ""}>
                    {item.currentStock.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-3">{item.reorderLevel.toLocaleString()}</td>
                <td className="px-4 py-3">{item.unitCost}</td>
                <td className="px-4 py-3">{item.totalValue}</td>
                <td className="px-4 py-3">{item.lastMovement}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
