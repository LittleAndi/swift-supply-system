
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Edit, MoreHorizontal } from "lucide-react";

const purchaseOrders = [
  {
    id: "PO-2024-001",
    supplier: "Global Textiles Ltd",
    amount: "$45,200",
    status: "Approved",
    category: "Raw Materials",
    deliveryDate: "2024-01-15",
  },
  {
    id: "PO-2024-002",
    supplier: "Pacific Electronics",
    amount: "$78,500",
    status: "Pending",
    category: "Components",
    deliveryDate: "2024-01-20",
  },
  {
    id: "PO-2024-003",
    supplier: "Metro Packaging Co",
    amount: "$12,300",
    status: "Delivered",
    category: "Packaging",
    deliveryDate: "2024-01-10",
  },
  {
    id: "PO-2024-004",
    supplier: "Quality Ingredients Inc",
    amount: "$92,800",
    status: "In Transit",
    category: "Ingredients",
    deliveryDate: "2024-01-25",
  },
  {
    id: "PO-2024-005",
    supplier: "Reliable Logistics",
    amount: "$34,600",
    status: "Approved",
    category: "Services",
    deliveryDate: "2024-01-18",
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
  return (
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
                    <Button variant="ghost" size="sm">
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
  );
}
