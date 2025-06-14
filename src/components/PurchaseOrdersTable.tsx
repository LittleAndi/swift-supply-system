
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Edit, MoreHorizontal } from "lucide-react";
import PurchaseOrderDetailsDialog from "./PurchaseOrderDetailsDialog";

const purchaseOrders = [
  {
    id: "PO-2024-001",
    supplier: "Global Textiles Ltd",
    amount: "$45,200",
    status: "Approved",
    category: "Raw Materials",
    deliveryDate: "2024-01-15",
    orderDate: "2023-12-28",
    approvedBy: "Sarah Johnson",
    orderLines: [
      {
        id: "1",
        itemName: "Cotton Fabric",
        description: "Premium cotton fabric for clothing production",
        quantity: 500,
        unitPrice: 45,
        totalPrice: 22500,
        requestedDate: "2023-12-28",
        expectedDeliveryDate: "2024-01-15",
      },
      {
        id: "2",
        itemName: "Polyester Blend",
        description: "Polyester cotton blend for casual wear",
        quantity: 300,
        unitPrice: 38,
        totalPrice: 11400,
        requestedDate: "2023-12-28",
        expectedDeliveryDate: "2024-01-15",
      },
      {
        id: "3",
        itemName: "Denim Fabric",
        description: "Heavy-duty denim for jeans production",
        quantity: 200,
        unitPrice: 55,
        totalPrice: 11000,
        requestedDate: "2023-12-28",
        expectedDeliveryDate: "2024-01-15",
      },
    ],
  },
  {
    id: "PO-2024-002",
    supplier: "Pacific Electronics",
    amount: "$78,500",
    status: "Pending",
    category: "Components",
    deliveryDate: "2024-01-20",
    orderDate: "2024-01-02",
    approvedBy: "Michael Chen",
    orderLines: [
      {
        id: "4",
        itemName: "Circuit Boards",
        description: "High-quality PCB boards for electronic devices",
        quantity: 1000,
        unitPrice: 25,
        totalPrice: 25000,
        requestedDate: "2024-01-02",
        expectedDeliveryDate: "2024-01-20",
      },
      {
        id: "5",
        itemName: "LED Components",
        description: "Energy-efficient LED components",
        quantity: 2000,
        unitPrice: 15,
        totalPrice: 30000,
        requestedDate: "2024-01-02",
        expectedDeliveryDate: "2024-01-20",
      },
      {
        id: "6",
        itemName: "Resistors",
        description: "Various resistor values for circuit protection",
        quantity: 5000,
        unitPrice: 2.5,
        totalPrice: 12500,
        requestedDate: "2024-01-02",
        expectedDeliveryDate: "2024-01-20",
      },
    ],
  },
  {
    id: "PO-2024-003",
    supplier: "Metro Packaging Co",
    amount: "$12,300",
    status: "Delivered",
    category: "Packaging",
    deliveryDate: "2024-01-10",
    orderDate: "2023-12-20",
    approvedBy: "Lisa Rodriguez",
    orderLines: [
      {
        id: "7",
        itemName: "Cardboard Boxes",
        description: "Corrugated cardboard boxes for shipping",
        quantity: 2000,
        unitPrice: 3.5,
        totalPrice: 7000,
        requestedDate: "2023-12-20",
        expectedDeliveryDate: "2024-01-10",
      },
      {
        id: "8",
        itemName: "Bubble Wrap",
        description: "Protective bubble wrap for fragile items",
        quantity: 100,
        unitPrice: 25,
        totalPrice: 2500,
        requestedDate: "2023-12-20",
        expectedDeliveryDate: "2024-01-10",
      },
      {
        id: "9",
        itemName: "Packing Tape",
        description: "Heavy-duty packing tape for secure packaging",
        quantity: 200,
        unitPrice: 12,
        totalPrice: 2400,
        requestedDate: "2023-12-20",
        expectedDeliveryDate: "2024-01-10",
      },
    ],
  },
  {
    id: "PO-2024-004",
    supplier: "Quality Ingredients Inc",
    amount: "$92,800",
    status: "In Transit",
    category: "Ingredients",
    deliveryDate: "2024-01-25",
    orderDate: "2024-01-05",
    approvedBy: "David Thompson",
    orderLines: [
      {
        id: "10",
        itemName: "Organic Flour",
        description: "Premium organic flour for baking",
        quantity: 1000,
        unitPrice: 45,
        totalPrice: 45000,
        requestedDate: "2024-01-05",
        expectedDeliveryDate: "2024-01-25",
      },
      {
        id: "11",
        itemName: "Natural Sweeteners",
        description: "Organic natural sweeteners",
        quantity: 500,
        unitPrice: 65,
        totalPrice: 32500,
        requestedDate: "2024-01-05",
        expectedDeliveryDate: "2024-01-25",
      },
      {
        id: "12",
        itemName: "Vanilla Extract",
        description: "Pure vanilla extract for flavoring",
        quantity: 200,
        unitPrice: 76,
        totalPrice: 15200,
        requestedDate: "2024-01-05",
        expectedDeliveryDate: "2024-01-25",
      },
    ],
  },
  {
    id: "PO-2024-005",
    supplier: "Reliable Logistics",
    amount: "$34,600",
    status: "Approved",
    category: "Services",
    deliveryDate: "2024-01-18",
    orderDate: "2024-01-01",
    approvedBy: "Jennifer Wilson",
    orderLines: [
      {
        id: "13",
        itemName: "Warehouse Storage",
        description: "Monthly warehouse storage service",
        quantity: 12,
        unitPrice: 1200,
        totalPrice: 14400,
        requestedDate: "2024-01-01",
        expectedDeliveryDate: "2024-01-18",
      },
      {
        id: "14",
        itemName: "Transportation Service",
        description: "Freight transportation service",
        quantity: 8,
        unitPrice: 1500,
        totalPrice: 12000,
        requestedDate: "2024-01-01",
        expectedDeliveryDate: "2024-01-18",
      },
      {
        id: "15",
        itemName: "Handling Fees",
        description: "Material handling and processing fees",
        quantity: 1,
        unitPrice: 8200,
        totalPrice: 8200,
        requestedDate: "2024-01-01",
        expectedDeliveryDate: "2024-01-18",
      },
    ],
  },
  {
    id: "PO-2024-006",
    supplier: "Advanced Materials Corp",
    amount: "$156,750",
    status: "Pending",
    category: "Raw Materials",
    deliveryDate: "2024-02-01",
    orderDate: "2024-01-10",
    approvedBy: "Robert Kim",
    orderLines: [
      {
        id: "16",
        itemName: "Steel Sheets",
        description: "High-grade steel sheets for manufacturing",
        quantity: 500,
        unitPrice: 125,
        totalPrice: 62500,
        requestedDate: "2024-01-10",
        expectedDeliveryDate: "2024-02-01",
      },
      {
        id: "17",
        itemName: "Aluminum Rods",
        description: "Premium aluminum rods for construction",
        quantity: 300,
        unitPrice: 85,
        totalPrice: 25500,
        requestedDate: "2024-01-10",
        expectedDeliveryDate: "2024-02-01",
      },
      {
        id: "18",
        itemName: "Copper Wire",
        description: "Pure copper wire for electrical applications",
        quantity: 1000,
        unitPrice: 68.75,
        totalPrice: 68750,
        requestedDate: "2024-01-10",
        expectedDeliveryDate: "2024-02-01",
      },
    ],
  },
  {
    id: "PO-2024-007",
    supplier: "Tech Components Ltd",
    amount: "$89,200",
    status: "Approved",
    category: "Components",
    deliveryDate: "2024-01-30",
    orderDate: "2024-01-12",
    approvedBy: "Emily Zhang",
    orderLines: [
      {
        id: "19",
        itemName: "Microprocessors",
        description: "High-performance microprocessors",
        quantity: 200,
        unitPrice: 250,
        totalPrice: 50000,
        requestedDate: "2024-01-12",
        expectedDeliveryDate: "2024-01-30",
      },
      {
        id: "20",
        itemName: "Memory Chips",
        description: "DDR4 memory chips for computers",
        quantity: 500,
        unitPrice: 45,
        totalPrice: 22500,
        requestedDate: "2024-01-12",
        expectedDeliveryDate: "2024-01-30",
      },
      {
        id: "21",
        itemName: "Capacitors",
        description: "Electrolytic capacitors for power supplies",
        quantity: 1000,
        unitPrice: 16.7,
        totalPrice: 16700,
        requestedDate: "2024-01-12",
        expectedDeliveryDate: "2024-01-30",
      },
    ],
  },
  {
    id: "PO-2024-008",
    supplier: "Premium Plastics Inc",
    amount: "$67,400",
    status: "Delivered",
    category: "Raw Materials",
    deliveryDate: "2024-01-22",
    orderDate: "2024-01-08",
    approvedBy: "Mark Anderson",
    orderLines: [
      {
        id: "22",
        itemName: "ABS Plastic Pellets",
        description: "High-quality ABS plastic for injection molding",
        quantity: 2000,
        unitPrice: 22.5,
        totalPrice: 45000,
        requestedDate: "2024-01-08",
        expectedDeliveryDate: "2024-01-22",
      },
      {
        id: "23",
        itemName: "Polypropylene Sheets",
        description: "Flexible polypropylene sheets",
        quantity: 800,
        unitPrice: 28,
        totalPrice: 22400,
        requestedDate: "2024-01-08",
        expectedDeliveryDate: "2024-01-22",
      },
    ],
  },
  {
    id: "PO-2024-009",
    supplier: "Eco Packaging Solutions",
    amount: "$23,800",
    status: "In Transit",
    category: "Packaging",
    deliveryDate: "2024-02-05",
    orderDate: "2024-01-15",
    approvedBy: "Sarah Mitchell",
    orderLines: [
      {
        id: "24",
        itemName: "Biodegradable Boxes",
        description: "Eco-friendly biodegradable packaging boxes",
        quantity: 3000,
        unitPrice: 5.5,
        totalPrice: 16500,
        requestedDate: "2024-01-15",
        expectedDeliveryDate: "2024-02-05",
      },
      {
        id: "25",
        itemName: "Recycled Padding",
        description: "Recycled material padding for protection",
        quantity: 500,
        unitPrice: 14.6,
        totalPrice: 7300,
        requestedDate: "2024-01-15",
        expectedDeliveryDate: "2024-02-05",
      },
    ],
  },
  {
    id: "PO-2024-010",
    supplier: "Industrial Tools Corp",
    amount: "$134,500",
    status: "Approved",
    category: "Equipment",
    deliveryDate: "2024-02-10",
    orderDate: "2024-01-18",
    approvedBy: "James Wilson",
    orderLines: [
      {
        id: "26",
        itemName: "Hydraulic Press",
        description: "Heavy-duty hydraulic press machine",
        quantity: 2,
        unitPrice: 45000,
        totalPrice: 90000,
        requestedDate: "2024-01-18",
        expectedDeliveryDate: "2024-02-10",
      },
      {
        id: "27",
        itemName: "Precision Drill Set",
        description: "High-precision drilling equipment set",
        quantity: 5,
        unitPrice: 8900,
        totalPrice: 44500,
        requestedDate: "2024-01-18",
        expectedDeliveryDate: "2024-02-10",
      },
    ],
  },
  {
    id: "PO-2024-011",
    supplier: "Chemical Solutions Ltd",
    amount: "$76,300",
    status: "Pending",
    category: "Chemicals",
    deliveryDate: "2024-02-08",
    orderDate: "2024-01-20",
    approvedBy: "Dr. Lisa Chen",
    orderLines: [
      {
        id: "28",
        itemName: "Industrial Solvents",
        description: "High-purity industrial cleaning solvents",
        quantity: 1000,
        unitPrice: 45.5,
        totalPrice: 45500,
        requestedDate: "2024-01-20",
        expectedDeliveryDate: "2024-02-08",
      },
      {
        id: "29",
        itemName: "Catalysts",
        description: "Chemical catalysts for production processes",
        quantity: 200,
        unitPrice: 154,
        totalPrice: 30800,
        requestedDate: "2024-01-20",
        expectedDeliveryDate: "2024-02-08",
      },
    ],
  },
  {
    id: "PO-2024-012",
    supplier: "Global Shipping Services",
    amount: "$45,900",
    status: "Delivered",
    category: "Services",
    deliveryDate: "2024-01-28",
    orderDate: "2024-01-14",
    approvedBy: "Michael Torres",
    orderLines: [
      {
        id: "30",
        itemName: "International Freight",
        description: "International shipping services",
        quantity: 15,
        unitPrice: 2200,
        totalPrice: 33000,
        requestedDate: "2024-01-14",
        expectedDeliveryDate: "2024-01-28",
      },
      {
        id: "31",
        itemName: "Customs Clearance",
        description: "Customs clearance and documentation",
        quantity: 15,
        unitPrice: 860,
        totalPrice: 12900,
        requestedDate: "2024-01-14",
        expectedDeliveryDate: "2024-01-28",
      },
    ],
  },
  {
    id: "PO-2024-013",
    supplier: "Precision Instruments Co",
    amount: "$198,750",
    status: "In Transit",
    category: "Equipment",
    deliveryDate: "2024-02-15",
    orderDate: "2024-01-25",
    approvedBy: "Dr. Angela Rodriguez",
    orderLines: [
      {
        id: "32",
        itemName: "Spectrophotometer",
        description: "High-precision analytical spectrophotometer",
        quantity: 3,
        unitPrice: 55000,
        totalPrice: 165000,
        requestedDate: "2024-01-25",
        expectedDeliveryDate: "2024-02-15",
      },
      {
        id: "33",
        itemName: "Calibration Standards",
        description: "Reference standards for instrument calibration",
        quantity: 25,
        unitPrice: 1350,
        totalPrice: 33750,
        requestedDate: "2024-01-25",
        expectedDeliveryDate: "2024-02-15",
      },
    ],
  },
  {
    id: "PO-2024-014",
    supplier: "Smart Energy Solutions",
    amount: "$87,650",
    status: "Approved",
    category: "Equipment",
    deliveryDate: "2024-02-20",
    orderDate: "2024-01-28",
    approvedBy: "Thomas Green",
    orderLines: [
      {
        id: "34",
        itemName: "Solar Panels",
        description: "High-efficiency photovoltaic solar panels",
        quantity: 50,
        unitPrice: 1200,
        totalPrice: 60000,
        requestedDate: "2024-01-28",
        expectedDeliveryDate: "2024-02-20",
      },
      {
        id: "35",
        itemName: "Inverters",
        description: "Grid-tie solar inverters",
        quantity: 10,
        unitPrice: 2765,
        totalPrice: 27650,
        requestedDate: "2024-01-28",
        expectedDeliveryDate: "2024-02-20",
      },
    ],
  },
  {
    id: "PO-2024-015",
    supplier: "Biotech Supplies Inc",
    amount: "$156,400",
    status: "Pending",
    category: "Laboratory",
    deliveryDate: "2024-02-25",
    orderDate: "2024-02-01",
    approvedBy: "Dr. Maria Santos",
    orderLines: [
      {
        id: "36",
        itemName: "PCR Reagents",
        description: "High-fidelity PCR reagent kits",
        quantity: 200,
        unitPrice: 450,
        totalPrice: 90000,
        requestedDate: "2024-02-01",
        expectedDeliveryDate: "2024-02-25",
      },
      {
        id: "37",
        itemName: "Cell Culture Media",
        description: "Specialized cell culture growth media",
        quantity: 100,
        unitPrice: 664,
        totalPrice: 66400,
        requestedDate: "2024-02-01",
        expectedDeliveryDate: "2024-02-25",
      },
    ],
  },
  {
    id: "PO-2024-016",
    supplier: "Construction Materials Plus",
    amount: "$234,800",
    status: "Approved",
    category: "Construction",
    deliveryDate: "2024-03-01",
    orderDate: "2024-02-05",
    approvedBy: "David Miller",
    orderLines: [
      {
        id: "38",
        itemName: "Concrete Blocks",
        description: "Reinforced concrete building blocks",
        quantity: 2000,
        unitPrice: 85,
        totalPrice: 170000,
        requestedDate: "2024-02-05",
        expectedDeliveryDate: "2024-03-01",
      },
      {
        id: "39",
        itemName: "Steel Rebar",
        description: "High-strength steel reinforcement bars",
        quantity: 800,
        unitPrice: 81,
        totalPrice: 64800,
        requestedDate: "2024-02-05",
        expectedDeliveryDate: "2024-03-01",
      },
    ],
  },
  {
    id: "PO-2024-017",
    supplier: "Office Supplies Direct",
    amount: "$18,950",
    status: "Delivered",
    category: "Office Supplies",
    deliveryDate: "2024-02-12",
    orderDate: "2024-02-03",
    approvedBy: "Jennifer Lee",
    orderLines: [
      {
        id: "40",
        itemName: "Printer Paper",
        description: "High-quality A4 printer paper",
        quantity: 500,
        unitPrice: 12.5,
        totalPrice: 6250,
        requestedDate: "2024-02-03",
        expectedDeliveryDate: "2024-02-12",
      },
      {
        id: "41",
        itemName: "Toner Cartridges",
        description: "Compatible laser printer toner cartridges",
        quantity: 50,
        unitPrice: 125,
        totalPrice: 6250,
        requestedDate: "2024-02-03",
        expectedDeliveryDate: "2024-02-12",
      },
      {
        id: "42",
        itemName: "Office Furniture",
        description: "Ergonomic office chairs and desks",
        quantity: 20,
        unitPrice: 322.5,
        totalPrice: 6450,
        requestedDate: "2024-02-03",
        expectedDeliveryDate: "2024-02-12",
      },
    ],
  },
  {
    id: "PO-2024-018",
    supplier: "Food Grade Ingredients",
    amount: "$94,300",
    status: "In Transit",
    category: "Ingredients",
    deliveryDate: "2024-02-28",
    orderDate: "2024-02-08",
    approvedBy: "Chef Roberto Garcia",
    orderLines: [
      {
        id: "43",
        itemName: "Organic Spices",
        description: "Premium organic spice collection",
        quantity: 300,
        unitPrice: 125,
        totalPrice: 37500,
        requestedDate: "2024-02-08",
        expectedDeliveryDate: "2024-02-28",
      },
      {
        id: "44",
        itemName: "Natural Preservatives",
        description: "Natural food preservation compounds",
        quantity: 200,
        unitPrice: 184,
        totalPrice: 36800,
        requestedDate: "2024-02-08",
        expectedDeliveryDate: "2024-02-28",
      },
      {
        id: "45",
        itemName: "Food Coloring",
        description: "Natural food coloring agents",
        quantity: 100,
        unitPrice: 200,
        totalPrice: 20000,
        requestedDate: "2024-02-08",
        expectedDeliveryDate: "2024-02-28",
      },
    ],
  },
  {
    id: "PO-2024-019",
    supplier: "Automotive Parts Express",
    amount: "$127,500",
    status: "Approved",
    category: "Automotive",
    deliveryDate: "2024-03-05",
    orderDate: "2024-02-10",
    approvedBy: "Frank Johnson",
    orderLines: [
      {
        id: "46",
        itemName: "Engine Components",
        description: "High-performance engine parts",
        quantity: 100,
        unitPrice: 850,
        totalPrice: 85000,
        requestedDate: "2024-02-10",
        expectedDeliveryDate: "2024-03-05",
      },
      {
        id: "47",
        itemName: "Brake Systems",
        description: "Advanced automotive brake systems",
        quantity: 50,
        unitPrice: 850,
        totalPrice: 42500,
        requestedDate: "2024-02-10",
        expectedDeliveryDate: "2024-03-05",
      },
    ],
  },
  {
    id: "PO-2024-020",
    supplier: "Medical Equipment Corp",
    amount: "$315,600",
    status: "Pending",
    category: "Medical",
    deliveryDate: "2024-03-10",
    orderDate: "2024-02-15",
    approvedBy: "Dr. Patricia Williams",
    orderLines: [
      {
        id: "48",
        itemName: "Ultrasound Machine",
        description: "Portable diagnostic ultrasound system",
        quantity: 2,
        unitPrice: 125000,
        totalPrice: 250000,
        requestedDate: "2024-02-15",
        expectedDeliveryDate: "2024-03-10",
      },
      {
        id: "49",
        itemName: "X-Ray Film",
        description: "Digital X-ray imaging film",
        quantity: 1000,
        unitPrice: 65.6,
        totalPrice: 65600,
        requestedDate: "2024-02-15",
        expectedDeliveryDate: "2024-03-10",
      },
    ],
  },
  {
    id: "PO-2024-021",
    supplier: "Textile Manufacturing Co",
    amount: "$68,750",
    status: "Delivered",
    category: "Textiles",
    deliveryDate: "2024-02-18",
    orderDate: "2024-02-12",
    approvedBy: "Amanda Thompson",
    orderLines: [
      {
        id: "50",
        itemName: "Wool Yarn",
        description: "Premium quality wool yarn for knitting",
        quantity: 500,
        unitPrice: 75,
        totalPrice: 37500,
        requestedDate: "2024-02-12",
        expectedDeliveryDate: "2024-02-18",
      },
      {
        id: "51",
        itemName: "Silk Fabric",
        description: "Pure silk fabric for luxury garments",
        quantity: 250,
        unitPrice: 125,
        totalPrice: 31250,
        requestedDate: "2024-02-12",
        expectedDeliveryDate: "2024-02-18",
      },
    ],
  },
  {
    id: "PO-2024-022",
    supplier: "Green Energy Technologies",
    amount: "$189,400",
    status: "In Transit",
    category: "Renewable Energy",
    deliveryDate: "2024-03-15",
    orderDate: "2024-02-20",
    approvedBy: "Environmental Team",
    orderLines: [
      {
        id: "52",
        itemName: "Wind Turbine Parts",
        description: "Components for wind energy generation",
        quantity: 20,
        unitPrice: 7500,
        totalPrice: 150000,
        requestedDate: "2024-02-20",
        expectedDeliveryDate: "2024-03-15",
      },
      {
        id: "53",
        itemName: "Battery Storage",
        description: "Lithium-ion battery storage systems",
        quantity: 10,
        unitPrice: 3940,
        totalPrice: 39400,
        requestedDate: "2024-02-20",
        expectedDeliveryDate: "2024-03-15",
      },
    ],
  },
  {
    id: "PO-2024-023",
    supplier: "Security Systems Ltd",
    amount: "$54,200",
    status: "Approved",
    category: "Security",
    deliveryDate: "2024-03-20",
    orderDate: "2024-02-25",
    approvedBy: "Security Manager",
    orderLines: [
      {
        id: "54",
        itemName: "CCTV Cameras",
        description: "High-definition security cameras",
        quantity: 25,
        unitPrice: 1600,
        totalPrice: 40000,
        requestedDate: "2024-02-25",
        expectedDeliveryDate: "2024-03-20",
      },
      {
        id: "55",
        itemName: "Access Control",
        description: "Electronic access control systems",
        quantity: 10,
        unitPrice: 1420,
        totalPrice: 14200,
        requestedDate: "2024-02-25",
        expectedDeliveryDate: "2024-03-20",
      },
    ],
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return "bg-blue-100 text-blue-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In Transit":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function PurchaseOrdersTable() {
  const [selectedPO, setSelectedPO] = useState<typeof purchaseOrders[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (po: typeof purchaseOrders[0]) => {
    setSelectedPO(po);
    setDialogOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Purchase Orders</CardTitle>
          <CardDescription>
            Manage and track all purchase orders
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[600px]">
            <div className="p-6">
              <Table>
                <TableHeader className="sticky top-0 bg-white z-10">
                  <TableRow>
                    <TableHead>PO Number</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Delivery Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchaseOrders.map((po) => (
                    <TableRow key={po.id}>
                      <TableCell className="font-medium">{po.id}</TableCell>
                      <TableCell>{po.supplier}</TableCell>
                      <TableCell>{po.category}</TableCell>
                      <TableCell className="font-semibold">{po.amount}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(po.status)} variant="secondary">
                          {po.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{po.deliveryDate}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleViewDetails(po)}
                          >
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <PurchaseOrderDetailsDialog
        purchaseOrder={selectedPO}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
