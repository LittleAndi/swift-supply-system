
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
        <CardContent>
          <Table>
            <TableHeader>
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
