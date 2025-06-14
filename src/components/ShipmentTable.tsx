import { useState } from "react";
import { ModeIcon } from "./ModeIcon";
import { BadgeCheck, Clock12, ChevronDown, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShipmentDetailsDialog from "./ShipmentDetailsDialog";
import JourneyTimeline from "./JourneyTimeline";
import ContainerInfo from "./ContainerInfo";

// Enhanced shipment data with journey segments and container info
const sampleShipments = [
  {
    id: "SH100234",
    supplier: "Unilever (VN)",
    mode: "Ship" as const,
    origin: "Ho Chi Minh, Vietnam",
    destination: "Hamburg, Germany",
    status: "In Transit",
    eta: "2025-06-29",
    containerId: "CONT100234",
    containerType: "40ft Standard",
    currentSegment: 1,
    journeySegments: [
      {
        id: "seg1",
        mode: "Truck" as const,
        origin: "Ho Chi Minh Factory",
        destination: "Ho Chi Minh Port",
        status: "Completed" as const,
        estimatedDuration: "4 hours",
        actualDuration: "3.5 hours"
      },
      {
        id: "seg2",
        mode: "Ship" as const,
        origin: "Ho Chi Minh Port",
        destination: "Hamburg Port",
        status: "In Progress" as const,
        estimatedDuration: "18 days",
      },
      {
        id: "seg3",
        mode: "Train" as const,
        origin: "Hamburg Port",
        destination: "Frankfurt DC",
        status: "Pending" as const,
        estimatedDuration: "8 hours",
      },
      {
        id: "seg4",
        mode: "Truck" as const,
        origin: "Frankfurt DC",
        destination: "Final Destination",
        status: "Pending" as const,
        estimatedDuration: "6 hours",
      }
    ],
    consolidatedShipments: [
      {
        supplierId: "UNI001",
        supplierName: "Unilever (VN)",
        orderIds: ["PO123", "PO124"],
        weight: "8,200 kg",
        volume: "45 m³"
      },
      {
        supplierId: "PRO001",
        supplierName: "Procter & Gamble",
        orderIds: ["PO128"],
        weight: "4,250 kg",
        volume: "25 m³"
      }
    ],
    totalWeight: "12,450 kg",
    totalVolume: "70 m³"
  },
  {
    id: "TR534202",
    supplier: "Nestlé (BR)",
    mode: "Truck" as const,
    origin: "Santos, Brazil",
    destination: "São Paulo, Brazil",
    status: "Delivered",
    eta: "2025-06-12",
    containerId: "CONT534202",
    containerType: "20ft Refrigerated",
    currentSegment: 2,
    journeySegments: [
      {
        id: "seg1",
        mode: "Truck" as const,
        origin: "Santos Port",
        destination: "São Paulo DC",
        status: "Completed" as const,
        estimatedDuration: "6 hours",
        actualDuration: "5.5 hours"
      },
      {
        id: "seg2",
        mode: "Truck" as const,
        origin: "São Paulo DC",
        destination: "Final Destination",
        status: "Completed" as const,
        estimatedDuration: "2 hours",
        actualDuration: "2 hours"
      }
    ],
    consolidatedShipments: [
      {
        supplierId: "NES001",
        supplierName: "Nestlé (BR)",
        orderIds: ["PO125", "PO126"],
        weight: "6,800 kg",
        volume: "38 m³"
      }
    ],
    totalWeight: "6,800 kg",
    totalVolume: "38 m³"
  },
  {
    id: "RA782193",
    supplier: "Procter & Gamble",
    mode: "Train" as const,
    origin: "Toulouse, France",
    destination: "Marseille, France",
    status: "At Port",
    eta: "2025-06-18",
    containerId: "CONT782193",
    containerType: "20ft Standard",
    currentSegment: 0,
    journeySegments: [
      {
        id: "seg1",
        mode: "Train" as const,
        origin: "Toulouse, France",
        destination: "Marseille, France",
        status: "In Progress" as const,
        estimatedDuration: "5 hours",
      }
    ],
    consolidatedShipments: [
      {
        supplierId: "PRO001",
        supplierName: "Procter & Gamble",
        orderIds: ["PO129"],
        weight: "5,200 kg",
        volume: "28 m³"
      }
    ],
    totalWeight: "5,200 kg",
    totalVolume: "28 m³"
  },
  {
    id: "SH998272",
    supplier: "Reckitt (CN)",
    mode: "Ship" as const,
    origin: "Shanghai, China",
    destination: "Los Angeles, USA",
    status: "In Transit",
    eta: "2025-07-11",
    containerId: "CONT998272",
    containerType: "40ft Standard",
    currentSegment: 1,
    journeySegments: [
      {
        id: "seg1",
        mode: "Truck" as const,
        origin: "Shanghai Factory",
        destination: "Shanghai Port",
        status: "Completed" as const,
        estimatedDuration: "3 hours",
        actualDuration: "2.5 hours"
      },
      {
        id: "seg2",
        mode: "Ship" as const,
        origin: "Shanghai Port",
        destination: "Los Angeles Port",
        status: "In Progress" as const,
        estimatedDuration: "16 days",
      },
      {
        id: "seg3",
        mode: "Truck" as const,
        origin: "Los Angeles Port",
        destination: "Final Destination",
        status: "Pending" as const,
        estimatedDuration: "4 hours",
      }
    ],
    consolidatedShipments: [
      {
        supplierId: "REC001",
        supplierName: "Reckitt (CN)",
        orderIds: ["PO130"],
        weight: "7,100 kg",
        volume: "42 m³"
      }
    ],
    totalWeight: "7,100 kg",
    totalVolume: "42 m³"
  },
  {
    id: "TR445671",
    supplier: "Johnson & Johnson",
    mode: "Truck" as const,
    origin: "New Brunswick, USA",
    destination: "Chicago, USA",
    status: "In Transit",
    eta: "2025-06-20",
    containerId: "CONT445671",
    containerType: "20ft Standard",
    currentSegment: 0,
    journeySegments: [
      {
        id: "seg1",
        mode: "Truck" as const,
        origin: "New Brunswick, USA",
        destination: "Chicago, USA",
        status: "In Progress" as const,
        estimatedDuration: "12 hours",
      }
    ],
    consolidatedShipments: [
      {
        supplierId: "JNJ001",
        supplierName: "Johnson & Johnson",
        orderIds: ["PO131"],
        weight: "4,800 kg",
        volume: "26 m³"
      }
    ],
    totalWeight: "4,800 kg",
    totalVolume: "26 m³"
  },
  {
    id: "SH778923",
    supplier: "Colgate-Palmolive",
    mode: "Ship" as const,
    origin: "Mumbai, India",
    destination: "Rotterdam, Netherlands",
    status: "At Port",
    eta: "2025-07-05",
    containerId: "CONT778923",
    containerType: "40ft Standard",
    currentSegment: 0,
    journeySegments: [
      {
        id: "seg1",
        mode: "Ship" as const,
        origin: "Mumbai, India",
        destination: "Rotterdam, Netherlands",
        status: "In Progress" as const,
        estimatedDuration: "20 days",
      }
    ],
    consolidatedShipments: [
      {
        supplierId: "COL001",
        supplierName: "Colgate-Palmolive",
        orderIds: ["PO132"],
        weight: "6,300 kg",
        volume: "35 m³"
      }
    ],
    totalWeight: "6,300 kg",
    totalVolume: "35 m³"
  }
].map(shipment => ({
  ...shipment,
  // Ensure all shipments have the required properties with defaults
  containerId: shipment.containerId || `CONT${shipment.id.slice(-6)}`,
  containerType: shipment.containerType || "20ft Standard",
  currentSegment: shipment.currentSegment ?? 0,
  journeySegments: shipment.journeySegments || [
    {
      id: "seg1",
      mode: shipment.mode,
      origin: shipment.origin,
      destination: shipment.destination,
      status: shipment.status === "Delivered" ? "Completed" as const : 
              shipment.status === "In Transit" ? "In Progress" as const :
              "Pending" as const,
      estimatedDuration: "8 hours",
    }
  ],
  consolidatedShipments: shipment.consolidatedShipments || [
    {
      supplierId: shipment.id.slice(0, 3) + "001",
      supplierName: shipment.supplier,
      orderIds: ["PO" + shipment.id.slice(-3)],
      weight: "5,000 kg",
      volume: "30 m³"
    }
  ],
  totalWeight: shipment.totalWeight || "5,000 kg",
  totalVolume: shipment.totalVolume || "30 m³"
}));

function statusColor(status: string) {
  if (status === "Delivered") return "bg-green-100 text-green-700";
  if (status === "At Port") return "bg-orange-100 text-orange-700";
  return "bg-blue-100 text-blue-700";
}

export default function ShipmentTable() {
  const [selectedShipment, setSelectedShipment] = useState<typeof sampleShipments[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const handleViewDetails = (shipment: typeof sampleShipments[0]) => {
    setSelectedShipment(shipment);
    setDialogOpen(true);
  };

  const toggleRowExpansion = (shipmentId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(shipmentId)) {
      newExpanded.delete(shipmentId);
    } else {
      newExpanded.add(shipmentId);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <>
      <section className="mt-1 mb-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Current Shipments
          </h3>
        </div>
        <div className="rounded-xl shadow ring-1 ring-muted/30 bg-white">
          <ScrollArea className="h-[600px]">
            <table className="min-w-full bg-white text-left text-sm">
              <thead className="sticky top-0 bg-white z-10 border-b">
                <tr>
                  <th className="px-4 py-3 font-semibold w-8"></th>
                  <th className="px-4 py-3 font-semibold">Mode</th>
                  <th className="px-4 py-3 font-semibold">Shipment ID</th>
                  <th className="px-4 py-3 font-semibold">Container</th>
                  <th className="px-4 py-3 font-semibold">Supplier</th>
                  <th className="px-4 py-3 font-semibold">Origin</th>
                  <th className="px-4 py-3 font-semibold">Destination</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">ETA</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {sampleShipments.map((shipment) => (
                  <React.Fragment key={shipment.id}>
                    <tr
                      className="border-t hover:bg-muted transition group"
                    >
                      <td className="px-4 py-2">
                        <button
                          onClick={() => toggleRowExpansion(shipment.id)}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {expandedRows.has(shipment.id) ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-2">
                        <ModeIcon mode={shipment.mode} />
                      </td>
                      <td className="px-4 py-2 font-mono">{shipment.id}</td>
                      <td className="px-4 py-2 font-mono text-xs">{shipment.containerId}</td>
                      <td className="px-4 py-2">{shipment.supplier}</td>
                      <td className="px-4 py-2">{shipment.origin}</td>
                      <td className="px-4 py-2">{shipment.destination}</td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${statusColor(shipment.status)}`}>
                          {shipment.status === "Delivered" && <BadgeCheck size={14} className="text-green-500" />}
                          {shipment.status === "At Port" && <Clock12 size={14} className="text-orange-500" />}
                          {shipment.status === "In Transit" && <Clock12 size={14} className="text-blue-500 animate-pulse" />}
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">{shipment.eta}</td>
                      <td className="px-3 py-2 text-right">
                        <button
                          onClick={() => handleViewDetails(shipment)}
                          title="View details"
                          className="text-primary hover:bg-muted px-2 py-1 rounded-md text-xs"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                    
                    {/* Expanded row content */}
                    {expandedRows.has(shipment.id) && (
                      <tr key={`${shipment.id}-expanded`}>
                        <td colSpan={10} className="px-4 py-0 border-t-0">
                          <div className="bg-gray-50 rounded-lg p-4 my-2">
                            <div className="grid lg:grid-cols-2 gap-6">
                              {/* Journey Timeline */}
                              <div>
                                <h4 className="font-semibold mb-3 text-sm">Multi-Modal Journey</h4>
                                <JourneyTimeline 
                                  segments={shipment.journeySegments} 
                                  currentSegment={shipment.currentSegment}
                                />
                              </div>
                              
                              {/* Container Information */}
                              <div>
                                <h4 className="font-semibold mb-3 text-sm">Container Details</h4>
                                <ContainerInfo
                                  containerId={shipment.containerId}
                                  consolidatedShipments={shipment.consolidatedShipments}
                                  totalWeight={shipment.totalWeight}
                                  totalVolume={shipment.totalVolume}
                                  containerType={shipment.containerType}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </div>
      </section>

      <ShipmentDetailsDialog
        shipment={selectedShipment}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
