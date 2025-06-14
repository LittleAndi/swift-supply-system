
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ModeIcon } from "./ModeIcon";
import { BadgeCheck, Clock12, MapPin, Calendar, Package, User } from "lucide-react";

interface Shipment {
  id: string;
  supplier: string;
  mode: "Ship" | "Truck" | "Train";
  origin: string;
  destination: string;
  status: string;
  eta: string;
}

interface ShipmentDetailsDialogProps {
  shipment: Shipment | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function statusColor(status: string) {
  if (status === "Delivered") return "bg-green-100 text-green-700";
  if (status === "At Port") return "bg-orange-100 text-orange-700";
  return "bg-blue-100 text-blue-700";
}

export default function ShipmentDetailsDialog({ shipment, open, onOpenChange }: ShipmentDetailsDialogProps) {
  if (!shipment) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <ModeIcon mode={shipment.mode} />
            Shipment Details - {shipment.id}
          </DialogTitle>
          <DialogDescription>
            Complete information for this shipment
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {/* Status Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Status:</span>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${statusColor(shipment.status)}`}>
                {shipment.status === "Delivered" && <BadgeCheck size={16} className="text-green-500" />}
                {shipment.status === "At Port" && <Clock12 size={16} className="text-orange-500" />}
                {shipment.status === "In Transit" && <Clock12 size={16} className="text-blue-500 animate-pulse" />}
                {shipment.status}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">ETA</div>
              <div className="font-semibold">{shipment.eta}</div>
            </div>
          </div>

          {/* Route Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Origin</span>
              </div>
              <div className="font-semibold">{shipment.origin}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Destination</span>
              </div>
              <div className="font-semibold">{shipment.destination}</div>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <User size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Supplier</span>
              </div>
              <div className="font-semibold">{shipment.supplier}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Transport Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <ModeIcon mode={shipment.mode} />
                <span className="font-semibold">{shipment.mode}</span>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Package size={16} className="text-blue-600" />
              Shipment Information
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Container ID:</span>
                <div className="font-mono font-medium">CONT{shipment.id.slice(-6)}</div>
              </div>
              <div>
                <span className="text-gray-600">Weight:</span>
                <div className="font-medium">12,450 kg</div>
              </div>
              <div>
                <span className="text-gray-600">Volume:</span>
                <div className="font-medium">85.3 m³</div>
              </div>
              <div>
                <span className="text-gray-600">Estimated Transit Time:</span>
                <div className="font-medium">14 days</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Calendar size={16} className="text-gray-600" />
              Shipment Timeline
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium">Order Placed</div>
                  <div className="text-gray-600">June 1, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium">Picked Up</div>
                  <div className="text-gray-600">June 5, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="text-sm">
                  <div className="font-medium">In Transit</div>
                  <div className="text-gray-600">Current Status</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-500">Expected Delivery</div>
                  <div className="text-gray-500">{shipment.eta}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
