
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Mail, Calendar, Package, TrendingUp } from "lucide-react";

interface Supplier {
  name: string;
  location: string;
  rating: number;
  totalOrders: number;
  status: string;
  phone: string;
}

interface SupplierDetailsDialogProps {
  supplier: Supplier | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SupplierDetailsDialog({ supplier, open, onOpenChange }: SupplierDetailsDialogProps) {
  if (!supplier) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{supplier.name}</span>
            <Badge 
              variant={supplier.status === "Active" ? "default" : "secondary"}
              className="text-sm"
            >
              {supplier.status}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Complete supplier information and relationship details
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Location</span>
              </div>
              <div className="font-semibold">{supplier.location}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Phone</span>
              </div>
              <div className="font-semibold">{supplier.phone}</div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Rating</span>
              </div>
              <div className="text-2xl font-bold text-blue-700">{supplier.rating}</div>
              <div className="text-xs text-blue-600">out of 5.0</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package size={16} className="text-green-600" />
                <span className="text-sm font-medium text-green-600">Total Orders</span>
              </div>
              <div className="text-2xl font-bold text-green-700">{supplier.totalOrders}</div>
              <div className="text-xs text-green-600">completed orders</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-purple-600">On-Time Rate</span>
              </div>
              <div className="text-2xl font-bold text-purple-700">94%</div>
              <div className="text-xs text-purple-600">delivery performance</div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Mail size={16} className="text-gray-600" />
              Contact Details
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Email:</span>
                <div className="font-medium">contact@{supplier.name.toLowerCase().replace(/\s+/g, '')}.com</div>
              </div>
              <div>
                <span className="text-gray-600">Primary Contact:</span>
                <div className="font-medium">Sales Manager</div>
              </div>
              <div>
                <span className="text-gray-600">Payment Terms:</span>
                <div className="font-medium">Net 30 days</div>
              </div>
              <div>
                <span className="text-gray-600">Lead Time:</span>
                <div className="font-medium">7-14 days</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Calendar size={16} className="text-blue-600" />
              Recent Activity
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium">Order #PO-2024-156 Delivered</div>
                  <div className="text-gray-600">June 10, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium">Order #PO-2024-155 In Transit</div>
                  <div className="text-gray-600">June 8, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium">Order #PO-2024-154 Delivered</div>
                  <div className="text-gray-600">June 5, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
