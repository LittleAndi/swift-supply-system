
import { useState } from "react";
import { AlertTriangle, Package, TrendingDown, TrendingUp } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  {
    id: "SKU006",
    name: "Johnson & Johnson Baby Oil 200ml",
    category: "Personal Care",
    warehouse: "Hamburg DC",
    currentStock: 3200,
    reorderLevel: 400,
    unitCost: "$3.75",
    totalValue: "$12,000.00",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU007",
    name: "Coca-Cola 2L Bottles",
    category: "Food & Beverage",
    warehouse: "Los Angeles DC",
    currentStock: 85,
    reorderLevel: 100,
    unitCost: "$2.50",
    totalValue: "$212.50",
    lastMovement: "2025-06-12",
    status: "Low Stock",
  },
  {
    id: "SKU008",
    name: "Tide Laundry Pods 32ct",
    category: "Household",
    warehouse: "São Paulo DC",
    currentStock: 560,
    reorderLevel: 200,
    unitCost: "$15.99",
    totalValue: "$8,954.40",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU009",
    name: "Colgate Toothpaste 100ml",
    category: "Personal Care",
    warehouse: "Shanghai DC",
    currentStock: 0,
    reorderLevel: 250,
    unitCost: "$2.25",
    totalValue: "$0.00",
    lastMovement: "2025-06-09",
    status: "Out of Stock",
  },
  {
    id: "SKU010",
    name: "Pepsi 12pk Cans",
    category: "Food & Beverage",
    warehouse: "Ho Chi Minh DC",
    currentStock: 1850,
    reorderLevel: 300,
    unitCost: "$5.99",
    totalValue: "$11,081.50",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU011",
    name: "Kleenex Tissues 200ct",
    category: "Household",
    warehouse: "Hamburg DC",
    currentStock: 45,
    reorderLevel: 80,
    unitCost: "$3.50",
    totalValue: "$157.50",
    lastMovement: "2025-06-11",
    status: "Low Stock",
  },
  {
    id: "SKU012",
    name: "Head & Shoulders 400ml",
    category: "Personal Care",
    warehouse: "Los Angeles DC",
    currentStock: 920,
    reorderLevel: 150,
    unitCost: "$7.25",
    totalValue: "$6,670.00",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU013",
    name: "Red Bull Energy 4pk",
    category: "Food & Beverage",
    warehouse: "São Paulo DC",
    currentStock: 180,
    reorderLevel: 100,
    unitCost: "$8.99",
    totalValue: "$1,618.20",
    lastMovement: "2025-06-12",
    status: "In Stock",
  },
  {
    id: "SKU014",
    name: "Lysol Spray 400ml",
    category: "Household",
    warehouse: "Shanghai DC",
    currentStock: 65,
    reorderLevel: 120,
    unitCost: "$4.75",
    totalValue: "$308.75",
    lastMovement: "2025-06-10",
    status: "Low Stock",
  },
  {
    id: "SKU015",
    name: "Pantene Conditioner 300ml",
    category: "Personal Care",
    warehouse: "Ho Chi Minh DC",
    currentStock: 0,
    reorderLevel: 200,
    unitCost: "$5.50",
    totalValue: "$0.00",
    lastMovement: "2025-06-08",
    status: "Out of Stock",
  },
  {
    id: "SKU016",
    name: "Monster Energy 16oz",
    category: "Food & Beverage",
    warehouse: "Hamburg DC",
    currentStock: 2400,
    reorderLevel: 500,
    unitCost: "$2.99",
    totalValue: "$7,176.00",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU017",
    name: "Downy Fabric Softener 1.5L",
    category: "Household",
    warehouse: "Los Angeles DC",
    currentStock: 340,
    reorderLevel: 100,
    unitCost: "$8.25",
    totalValue: "$2,805.00",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU018",
    name: "Olay Moisturizer 50ml",
    category: "Personal Care",
    warehouse: "São Paulo DC",
    currentStock: 125,
    reorderLevel: 200,
    unitCost: "$12.99",
    totalValue: "$1,623.75",
    lastMovement: "2025-06-11",
    status: "Low Stock",
  },
  {
    id: "SKU019",
    name: "Gatorade 32oz Bottles",
    category: "Food & Beverage",
    warehouse: "Shanghai DC",
    currentStock: 800,
    reorderLevel: 200,
    unitCost: "$3.25",
    totalValue: "$2,600.00",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU020",
    name: "Pine-Sol Cleaner 1.4L",
    category: "Household",
    warehouse: "Ho Chi Minh DC",
    currentStock: 0,
    reorderLevel: 150,
    unitCost: "$6.50",
    totalValue: "$0.00",
    lastMovement: "2025-06-07",
    status: "Out of Stock",
  },
  {
    id: "SKU021",
    name: "Nivea Body Lotion 400ml",
    category: "Personal Care",
    warehouse: "Hamburg DC",
    currentStock: 1650,
    reorderLevel: 300,
    unitCost: "$6.75",
    totalValue: "$11,137.50",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU022",
    name: "Sprite 2L Bottles",
    category: "Food & Beverage",
    warehouse: "Los Angeles DC",
    currentStock: 95,
    reorderLevel: 150,
    unitCost: "$2.75",
    totalValue: "$261.25",
    lastMovement: "2025-06-12",
    status: "Low Stock",
  },
  {
    id: "SKU023",
    name: "Febreze Air Freshener 250ml",
    category: "Household",
    warehouse: "São Paulo DC",
    currentStock: 450,
    reorderLevel: 100,
    unitCost: "$4.99",
    totalValue: "$2,245.50",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU024",
    name: "L'Oréal Hair Mask 300ml",
    category: "Personal Care",
    warehouse: "Shanghai DC",
    currentStock: 280,
    reorderLevel: 150,
    unitCost: "$9.99",
    totalValue: "$2,797.20",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU025",
    name: "Vitamin Water 20oz",
    category: "Food & Beverage",
    warehouse: "Ho Chi Minh DC",
    currentStock: 35,
    reorderLevel: 100,
    unitCost: "$1.99",
    totalValue: "$69.65",
    lastMovement: "2025-06-10",
    status: "Low Stock",
  },
  {
    id: "SKU026",
    name: "Windex Glass Cleaner 946ml",
    category: "Household",
    warehouse: "Hamburg DC",
    currentStock: 720,
    reorderLevel: 200,
    unitCost: "$3.99",
    totalValue: "$2,872.80",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU027",
    name: "Garnier Face Wash 150ml",
    category: "Personal Care",
    warehouse: "Los Angeles DC",
    currentStock: 0,
    reorderLevel: 180,
    unitCost: "$4.50",
    totalValue: "$0.00",
    lastMovement: "2025-06-06",
    status: "Out of Stock",
  },
  {
    id: "SKU028",
    name: "Dr Pepper 12pk Cans",
    category: "Food & Beverage",
    warehouse: "São Paulo DC",
    currentStock: 1200,
    reorderLevel: 250,
    unitCost: "$6.49",
    totalValue: "$7,788.00",
    lastMovement: "2025-06-12",
    status: "In Stock",
  },
  {
    id: "SKU029",
    name: "Clorox Bleach 1.89L",
    category: "Household",
    warehouse: "Shanghai DC",
    currentStock: 160,
    reorderLevel: 100,
    unitCost: "$5.25",
    totalValue: "$840.00",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU030",
    name: "Maybelline Mascara 10ml",
    category: "Personal Care",
    warehouse: "Ho Chi Minh DC",
    currentStock: 85,
    reorderLevel: 120,
    unitCost: "$8.99",
    totalValue: "$764.15",
    lastMovement: "2025-06-11",
    status: "Low Stock",
  },
  {
    id: "SKU031",
    name: "Mountain Dew 2L",
    category: "Food & Beverage",
    warehouse: "Hamburg DC",
    currentStock: 650,
    reorderLevel: 200,
    unitCost: "$2.89",
    totalValue: "$1,878.50",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU032",
    name: "Mr. Clean Multi-Surface 1.3L",
    category: "Household",
    warehouse: "Los Angeles DC",
    currentStock: 0,
    reorderLevel: 80,
    unitCost: "$7.50",
    totalValue: "$0.00",
    lastMovement: "2025-06-05",
    status: "Out of Stock",
  },
  {
    id: "SKU033",
    name: "Revlon Lipstick 4g",
    category: "Personal Care",
    warehouse: "São Paulo DC",
    currentStock: 240,
    reorderLevel: 100,
    unitCost: "$11.99",
    totalValue: "$2,877.60",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU034",
    name: "Arizona Iced Tea 680ml",
    category: "Food & Beverage",
    warehouse: "Shanghai DC",
    currentStock: 420,
    reorderLevel: 150,
    unitCost: "$1.49",
    totalValue: "$625.80",
    lastMovement: "2025-06-12",
    status: "In Stock",
  },
  {
    id: "SKU035",
    name: "Swiffer Wet Cloths 24ct",
    category: "Household",
    warehouse: "Ho Chi Minh DC",
    currentStock: 75,
    reorderLevel: 100,
    unitCost: "$9.99",
    totalValue: "$749.25",
    lastMovement: "2025-06-10",
    status: "Low Stock",
  },
  {
    id: "SKU036",
    name: "CoverGirl Foundation 30ml",
    category: "Personal Care",
    warehouse: "Hamburg DC",
    currentStock: 180,
    reorderLevel: 80,
    unitCost: "$13.95",
    totalValue: "$2,511.00",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU037",
    name: "Snapple 473ml Bottles",
    category: "Food & Beverage",
    warehouse: "Los Angeles DC",
    currentStock: 320,
    reorderLevel: 200,
    unitCost: "$2.19",
    totalValue: "$700.80",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU038",
    name: "Bounty Paper Towels 12 Roll",
    category: "Household",
    warehouse: "São Paulo DC",
    currentStock: 0,
    reorderLevel: 50,
    unitCost: "$18.99",
    totalValue: "$0.00",
    lastMovement: "2025-06-04",
    status: "Out of Stock",
  },
  {
    id: "SKU039",
    name: "Neutrogena Cleanser 200ml",
    category: "Personal Care",
    warehouse: "Shanghai DC",
    currentStock: 145,
    reorderLevel: 120,
    unitCost: "$7.49",
    totalValue: "$1,086.05",
    lastMovement: "2025-06-11",
    status: "In Stock",
  },
  {
    id: "SKU040",
    name: "Powerade 946ml",
    category: "Food & Beverage",
    warehouse: "Ho Chi Minh DC",
    currentStock: 55,
    reorderLevel: 80,
    unitCost: "$2.99",
    totalValue: "$164.45",
    lastMovement: "2025-06-09",
    status: "Low Stock",
  },
  {
    id: "SKU041",
    name: "Glad Trash Bags 80ct",
    category: "Household",
    warehouse: "Hamburg DC",
    currentStock: 680,
    reorderLevel: 150,
    unitCost: "$12.49",
    totalValue: "$8,493.20",
    lastMovement: "2025-06-12",
    status: "In Stock",
  },
  {
    id: "SKU042",
    name: "Estée Lauder Serum 30ml",
    category: "Personal Care",
    warehouse: "Los Angeles DC",
    currentStock: 90,
    reorderLevel: 60,
    unitCost: "$42.00",
    totalValue: "$3,780.00",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU043",
    name: "Tropicana Orange Juice 1.75L",
    category: "Food & Beverage",
    warehouse: "São Paulo DC",
    currentStock: 0,
    reorderLevel: 120,
    unitCost: "$4.99",
    totalValue: "$0.00",
    lastMovement: "2025-06-03",
    status: "Out of Stock",
  },
  {
    id: "SKU044",
    name: "Cascade Dishwasher Pods 50ct",
    category: "Household",
    warehouse: "Shanghai DC",
    currentStock: 280,
    reorderLevel: 100,
    unitCost: "$16.99",
    totalValue: "$4,757.20",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU045",
    name: "MAC Lipstick 3g",
    category: "Personal Care",
    warehouse: "Ho Chi Minh DC",
    currentStock: 65,
    reorderLevel: 80,
    unitCost: "$19.00",
    totalValue: "$1,235.00",
    lastMovement: "2025-06-10",
    status: "Low Stock",
  },
  {
    id: "SKU046",
    name: "Minute Maid Lemonade 2L",
    category: "Food & Beverage",
    warehouse: "Hamburg DC",
    currentStock: 390,
    reorderLevel: 150,
    unitCost: "$3.49",
    totalValue: "$1,361.10",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU047",
    name: "Arm & Hammer Laundry 2.03kg",
    category: "Household",
    warehouse: "Los Angeles DC",
    currentStock: 120,
    reorderLevel: 80,
    unitCost: "$11.99",
    totalValue: "$1,438.80",
    lastMovement: "2025-06-12",
    status: "In Stock",
  },
  {
    id: "SKU048",
    name: "Clinique Moisturizer 125ml",
    category: "Personal Care",
    warehouse: "São Paulo DC",
    currentStock: 0,
    reorderLevel: 40,
    unitCost: "$38.50",
    totalValue: "$0.00",
    lastMovement: "2025-06-02",
    status: "Out of Stock",
  },
  {
    id: "SKU049",
    name: "Fiji Water 500ml 24pk",
    category: "Food & Beverage",
    warehouse: "Shanghai DC",
    currentStock: 180,
    reorderLevel: 100,
    unitCost: "$24.99",
    totalValue: "$4,498.20",
    lastMovement: "2025-06-14",
    status: "In Stock",
  },
  {
    id: "SKU050",
    name: "Scotch-Brite Sponges 6pk",
    category: "Household",
    warehouse: "Ho Chi Minh DC",
    currentStock: 45,
    reorderLevel: 60,
    unitCost: "$5.99",
    totalValue: "$269.55",
    lastMovement: "2025-06-08",
    status: "Low Stock",
  },
  {
    id: "SKU051",
    name: "Aveeno Body Wash 532ml",
    category: "Personal Care",
    warehouse: "Hamburg DC",
    currentStock: 520,
    reorderLevel: 200,
    unitCost: "$8.49",
    totalValue: "$4,414.80",
    lastMovement: "2025-06-13",
    status: "In Stock",
  },
  {
    id: "SKU052",
    name: "Simply Orange Juice 1.75L",
    category: "Food & Beverage",
    warehouse: "Los Angeles DC",
    currentStock: 85,
    reorderLevel: 120,
    unitCost: "$5.49",
    totalValue: "$466.65",
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
      <div className="rounded-xl shadow ring-1 ring-muted/30 bg-white">
        <ScrollArea className="h-[600px]">
          <table className="min-w-full bg-white text-left text-sm">
            <thead className="sticky top-0 bg-white z-10 border-b">
              <tr>
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
        </ScrollArea>
      </div>
    </section>
  );
}
