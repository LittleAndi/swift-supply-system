
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Package, DollarSign } from "lucide-react";

interface PurchaseOrderLine {
  id: string;
  itemName: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  requestedDate: string;
  expectedDeliveryDate: string;
}

interface PurchaseOrder {
  id: string;
  supplier: string;
  amount: string;
  status: string;
  category: string;
  deliveryDate: string;
  orderLines: PurchaseOrderLine[];
  orderDate: string;
  approvedBy: string;
}

interface PurchaseOrderDetailsDialogProps {
  purchaseOrder: PurchaseOrder | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

export default function PurchaseOrderDetailsDialog({
  purchaseOrder,
  open,
  onOpenChange,
}: PurchaseOrderDetailsDialogProps) {
  if (!purchaseOrder) return null;

  const totalAmount = purchaseOrder.orderLines.reduce((sum, line) => sum + line.totalPrice, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Purchase Order Details - {purchaseOrder.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-1">Supplier</h4>
              <p className="font-medium">{purchaseOrder.supplier}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-1">Status</h4>
              <Badge className={getStatusColor(purchaseOrder.status)} variant="secondary">
                {purchaseOrder.status}
              </Badge>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-1">Category</h4>
              <p className="font-medium">{purchaseOrder.category}</p>
            </div>
          </div>

          {/* Order Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-medium">{purchaseOrder.orderDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Package size={16} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Expected Delivery</p>
                <p className="font-medium">{purchaseOrder.deliveryDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-medium text-lg">${totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Order Lines Table */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Lines</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Unit Price</TableHead>
                  <TableHead className="text-right">Total Price</TableHead>
                  <TableHead>Requested Date</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseOrder.orderLines.map((line) => (
                  <TableRow key={line.id}>
                    <TableCell className="font-medium">{line.itemName}</TableCell>
                    <TableCell className="max-w-xs truncate">{line.description}</TableCell>
                    <TableCell className="text-right">{line.quantity}</TableCell>
                    <TableCell className="text-right">${line.unitPrice.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-semibold">
                      ${line.totalPrice.toLocaleString()}
                    </TableCell>
                    <TableCell>{line.requestedDate}</TableCell>
                    <TableCell>{line.expectedDeliveryDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Approved by: <span className="font-medium">{purchaseOrder.approvedBy}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${totalAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
