
import { Package, User } from "lucide-react";

interface ConsolidatedShipment {
  supplierId: string;
  supplierName: string;
  orderIds: string[];
  weight: string;
  volume: string;
}

interface ContainerInfoProps {
  containerId: string;
  consolidatedShipments: ConsolidatedShipment[];
  totalWeight: string;
  totalVolume: string;
  containerType: string;
}

export default function ContainerInfo({ 
  containerId, 
  consolidatedShipments, 
  totalWeight, 
  totalVolume,
  containerType 
}: ContainerInfoProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <Package size={16} className="text-blue-600" />
        <h4 className="font-semibold text-sm">Container {containerId}</h4>
        <span className="text-xs text-gray-500">({containerType})</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <span className="text-xs text-gray-600">Total Weight:</span>
          <div className="font-medium text-sm">{totalWeight}</div>
        </div>
        <div>
          <span className="text-xs text-gray-600">Total Volume:</span>
          <div className="font-medium text-sm">{totalVolume}</div>
        </div>
      </div>

      <div>
        <h5 className="text-xs font-semibold text-gray-700 mb-2">Consolidated Shipments:</h5>
        <div className="space-y-2">
          {consolidatedShipments.map((shipment) => (
            <div key={shipment.supplierId} className="flex items-center justify-between text-xs bg-white p-2 rounded border">
              <div className="flex items-center gap-2">
                <User size={12} className="text-gray-500" />
                <span className="font-medium">{shipment.supplierName}</span>
              </div>
              <div className="text-right text-gray-600">
                <div>Orders: {shipment.orderIds.join(', ')}</div>
                <div>{shipment.weight} • {shipment.volume}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
