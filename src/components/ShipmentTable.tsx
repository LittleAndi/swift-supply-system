
import { useState } from "react";
import { ModeIcon } from "./ModeIcon";
import { BadgeCheck, Clock12 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShipmentDetailsDialog from "./ShipmentDetailsDialog";

const sampleShipments = [
  {
    id: "SH100234",
    supplier: "Unilever (VN)",
    mode: "Ship" as const,
    origin: "Ho Chi Minh, Vietnam",
    destination: "Hamburg, Germany",
    status: "In Transit",
    eta: "2025-06-29",
  },
  {
    id: "TR534202",
    supplier: "Nestlé (BR)",
    mode: "Truck" as const,
    origin: "Santos, Brazil",
    destination: "São Paulo, Brazil",
    status: "Delivered",
    eta: "2025-06-12",
  },
  {
    id: "RA782193",
    supplier: "Procter & Gamble",
    mode: "Train" as const,
    origin: "Toulouse, France",
    destination: "Marseille, France",
    status: "At Port",
    eta: "2025-06-18",
  },
  {
    id: "SH998272",
    supplier: "Reckitt (CN)",
    mode: "Ship" as const,
    origin: "Shanghai, China",
    destination: "Los Angeles, USA",
    status: "In Transit",
    eta: "2025-07-11",
  },
  {
    id: "TR445671",
    supplier: "Johnson & Johnson",
    mode: "Truck" as const,
    origin: "New Brunswick, USA",
    destination: "Chicago, USA",
    status: "In Transit",
    eta: "2025-06-20",
  },
  {
    id: "SH778923",
    supplier: "Colgate-Palmolive",
    mode: "Ship" as const,
    origin: "Mumbai, India",
    destination: "Rotterdam, Netherlands",
    status: "At Port",
    eta: "2025-07-05",
  },
  {
    id: "RA334556",
    supplier: "Henkel AG",
    mode: "Train" as const,
    origin: "Düsseldorf, Germany",
    destination: "Milan, Italy",
    status: "Delivered",
    eta: "2025-06-10",
  },
  {
    id: "TR889012",
    supplier: "Kimberly-Clark",
    mode: "Truck" as const,
    origin: "Dallas, USA",
    destination: "Phoenix, USA",
    status: "In Transit",
    eta: "2025-06-16",
  },
];

function statusColor(status: string) {
  if (status === "Delivered") return "bg-green-100 text-green-700";
  if (status === "At Port") return "bg-orange-100 text-orange-700";
  return "bg-blue-100 text-blue-700";
}

export default function ShipmentTable() {
  const [selectedShipment, setSelectedShipment] = useState<typeof sampleShipments[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (shipment: typeof sampleShipments[0]) => {
    setSelectedShipment(shipment);
    setDialogOpen(true);
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
                  <th className="px-4 py-3 font-semibold">Mode</th>
                  <th className="px-4 py-3 font-semibold">Shipment ID</th>
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
                  <tr
                    key={shipment.id}
                    className="border-t hover:bg-muted transition group"
                  >
                    <td className="px-4 py-2">
                      <ModeIcon mode={shipment.mode} />
                    </td>
                    <td className="px-4 py-2 font-mono">{shipment.id}</td>
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
