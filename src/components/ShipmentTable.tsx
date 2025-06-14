
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
  {
    id: "SH445892",
    supplier: "L'Oréal International",
    mode: "Ship" as const,
    origin: "Le Havre, France",
    destination: "New York, USA",
    status: "In Transit",
    eta: "2025-06-25",
  },
  {
    id: "TR667334",
    supplier: "Beiersdorf AG",
    mode: "Truck" as const,
    origin: "Hamburg, Germany",
    destination: "Berlin, Germany",
    status: "Delivered",
    eta: "2025-06-13",
  },
  {
    id: "RA892441",
    supplier: "Kao Corporation",
    mode: "Train" as const,
    origin: "Tokyo, Japan",
    destination: "Osaka, Japan",
    status: "At Port",
    eta: "2025-06-17",
  },
  {
    id: "SH223456",
    supplier: "Mondelez International",
    mode: "Ship" as const,
    origin: "Cadbury, UK",
    destination: "Sydney, Australia",
    status: "In Transit",
    eta: "2025-07-08",
  },
  {
    id: "TR778990",
    supplier: "General Mills",
    mode: "Truck" as const,
    origin: "Minneapolis, USA",
    destination: "Denver, USA",
    status: "Delivered",
    eta: "2025-06-14",
  },
  {
    id: "RA556781",
    supplier: "Danone Group",
    mode: "Train" as const,
    origin: "Paris, France",
    destination: "Lyon, France",
    status: "In Transit",
    eta: "2025-06-19",
  },
  {
    id: "SH990123",
    supplier: "Mars Incorporated",
    mode: "Ship" as const,
    origin: "Virginia, USA",
    destination: "Liverpool, UK",
    status: "At Port",
    eta: "2025-06-28",
  },
  {
    id: "TR334567",
    supplier: "PepsiCo International",
    mode: "Truck" as const,
    origin: "Purchase, USA",
    destination: "Atlanta, USA",
    status: "Delivered",
    eta: "2025-06-11",
  },
  {
    id: "RA445678",
    supplier: "Ferrero Group",
    mode: "Train" as const,
    origin: "Alba, Italy",
    destination: "Rome, Italy",
    status: "In Transit",
    eta: "2025-06-21",
  },
  {
    id: "SH667890",
    supplier: "Church & Dwight",
    mode: "Ship" as const,
    origin: "New Jersey, USA",
    destination: "Vancouver, Canada",
    status: "At Port",
    eta: "2025-07-02",
  },
  {
    id: "TR123789",
    supplier: "SC Johnson",
    mode: "Truck" as const,
    origin: "Racine, USA",
    destination: "Milwaukee, USA",
    status: "Delivered",
    eta: "2025-06-15",
  },
  {
    id: "RA890234",
    supplier: "Clorox Company",
    mode: "Train" as const,
    origin: "Oakland, USA",
    destination: "Sacramento, USA",
    status: "In Transit",
    eta: "2025-06-22",
  },
  {
    id: "SH345678",
    supplier: "Estée Lauder Companies",
    mode: "Ship" as const,
    origin: "New York, USA",
    destination: "London, UK",
    status: "In Transit",
    eta: "2025-06-30",
  },
  {
    id: "TR901234",
    supplier: "Revlon Inc",
    mode: "Truck" as const,
    origin: "New York, USA",
    destination: "Boston, USA",
    status: "Delivered",
    eta: "2025-06-16",
  },
  {
    id: "RA567890",
    supplier: "Shiseido Company",
    mode: "Train" as const,
    origin: "Tokyo, Japan",
    destination: "Kyoto, Japan",
    status: "At Port",
    eta: "2025-06-23",
  },
  {
    id: "SH789012",
    supplier: "Avon Products",
    mode: "Ship" as const,
    origin: "London, UK",
    destination: "Dublin, Ireland",
    status: "In Transit",
    eta: "2025-06-26",
  },
  {
    id: "TR234567",
    supplier: "Maybelline New York",
    mode: "Truck" as const,
    origin: "New York, USA",
    destination: "Philadelphia, USA",
    status: "Delivered",
    eta: "2025-06-17",
  },
  {
    id: "RA678901",
    supplier: "CoverGirl Cosmetics",
    mode: "Train" as const,
    origin: "Cincinnati, USA",
    destination: "Columbus, USA",
    status: "In Transit",
    eta: "2025-06-24",
  },
  {
    id: "SH012345",
    supplier: "MAC Cosmetics",
    mode: "Ship" as const,
    origin: "Toronto, Canada",
    destination: "Montreal, Canada",
    status: "At Port",
    eta: "2025-07-01",
  },
  {
    id: "TR456789",
    supplier: "NYX Professional Makeup",
    mode: "Truck" as const,
    origin: "Los Angeles, USA",
    destination: "San Francisco, USA",
    status: "Delivered",
    eta: "2025-06-18",
  },
  {
    id: "RA123456",
    supplier: "Urban Decay",
    mode: "Train" as const,
    origin: "Newport Beach, USA",
    destination: "San Diego, USA",
    status: "In Transit",
    eta: "2025-06-25",
  },
  {
    id: "SH567890",
    supplier: "Too Faced Cosmetics",
    mode: "Ship" as const,
    origin: "Irvine, USA",
    destination: "Seattle, USA",
    status: "At Port",
    eta: "2025-07-03",
  },
  {
    id: "TR890123",
    supplier: "Benefit Cosmetics",
    mode: "Truck" as const,
    origin: "San Francisco, USA",
    destination: "Portland, USA",
    status: "Delivered",
    eta: "2025-06-19",
  },
  {
    id: "RA345678",
    supplier: "Tarte Cosmetics",
    mode: "Train" as const,
    origin: "New York, USA",
    destination: "Washington DC, USA",
    status: "In Transit",
    eta: "2025-06-26",
  },
  {
    id: "SH789123",
    supplier: "Fenty Beauty",
    mode: "Ship" as const,
    origin: "New York, USA",
    destination: "Miami, USA",
    status: "At Port",
    eta: "2025-07-04",
  },
  {
    id: "TR012456",
    supplier: "Rare Beauty",
    mode: "Truck" as const,
    origin: "Los Angeles, USA",
    destination: "Las Vegas, USA",
    status: "Delivered",
    eta: "2025-06-20",
  },
  {
    id: "RA456789",
    supplier: "Glossier Inc",
    mode: "Train" as const,
    origin: "New York, USA",
    destination: "Baltimore, USA",
    status: "In Transit",
    eta: "2025-06-27",
  },
  {
    id: "SH890234",
    supplier: "Kylie Cosmetics",
    mode: "Ship" as const,
    origin: "Los Angeles, USA",
    destination: "Honolulu, USA",
    status: "At Port",
    eta: "2025-07-06",
  },
  {
    id: "TR123567",
    supplier: "Morphe Cosmetics",
    mode: "Truck" as const,
    origin: "Los Angeles, USA",
    destination: "Phoenix, USA",
    status: "Delivered",
    eta: "2025-06-21",
  },
  {
    id: "RA567123",
    supplier: "Charlotte Tilbury",
    mode: "Train" as const,
    origin: "London, UK",
    destination: "Manchester, UK",
    status: "In Transit",
    eta: "2025-06-28",
  },
  {
    id: "SH234678",
    supplier: "Huda Beauty",
    mode: "Ship" as const,
    origin: "Dubai, UAE",
    destination: "Doha, Qatar",
    status: "At Port",
    eta: "2025-07-07",
  },
  {
    id: "TR678901",
    supplier: "Anastasia Beverly Hills",
    mode: "Truck" as const,
    origin: "Beverly Hills, USA",
    destination: "Santa Monica, USA",
    status: "Delivered",
    eta: "2025-06-22",
  },
  {
    id: "RA890567",
    supplier: "Jeffree Star Cosmetics",
    mode: "Train" as const,
    origin: "California, USA",
    destination: "Nevada, USA",
    status: "In Transit",
    eta: "2025-06-29",
  },
  {
    id: "SH345901",
    supplier: "Pat McGrath Labs",
    mode: "Ship" as const,
    origin: "New York, USA",
    destination: "Toronto, Canada",
    status: "At Port",
    eta: "2025-07-08",
  },
  {
    id: "TR789234",
    supplier: "NARS Cosmetics",
    mode: "Truck" as const,
    origin: "New York, USA",
    destination: "Newark, USA",
    status: "Delivered",
    eta: "2025-06-23",
  },
  {
    id: "RA012678",
    supplier: "Bobbi Brown Cosmetics",
    mode: "Train" as const,
    origin: "New York, USA",
    destination: "Hartford, USA",
    status: "In Transit",
    eta: "2025-06-30",
  },
  {
    id: "SH456012",
    supplier: "Laura Mercier",
    mode: "Ship" as const,
    origin: "New York, USA",
    destination: "Norfolk, USA",
    status: "At Port",
    eta: "2025-07-09",
  },
  {
    id: "TR901567",
    supplier: "Clinique Laboratories",
    mode: "Truck" as const,
    origin: "New York, USA",
    destination: "Albany, USA",
    status: "Delivered",
    eta: "2025-06-24",
  },
  {
    id: "RA234890",
    supplier: "Origins Natural Resources",
    mode: "Train" as const,
    origin: "New York, USA",
    destination: "Syracuse, USA",
    status: "In Transit",
    eta: "2025-07-01",
  },
  {
    id: "SH678345",
    supplier: "Kiehl's Since 1851",
    mode: "Ship" as const,
    origin: "New York, USA",
    destination: "Charleston, USA",
    status: "At Port",
    eta: "2025-07-10",
  },
  {
    id: "TR123890",
    supplier: "Fresh Beauty",
    mode: "Truck" as const,
    origin: "Boston, USA",
    destination: "Providence, USA",
    status: "Delivered",
    eta: "2025-06-25",
  },
  {
    id: "RA567234",
    supplier: "Drunk Elephant",
    mode: "Train" as const,
    origin: "Houston, USA",
    destination: "Austin, USA",
    status: "In Transit",
    eta: "2025-07-02",
  },
  {
    id: "SH890678",
    supplier: "The Ordinary",
    mode: "Ship" as const,
    origin: "Toronto, Canada",
    destination: "Vancouver, Canada",
    status: "At Port",
    eta: "2025-07-11",
  },
  {
    id: "TR345123",
    supplier: "Paula's Choice",
    mode: "Truck" as const,
    origin: "Seattle, USA",
    destination: "Spokane, USA",
    status: "Delivered",
    eta: "2025-06-26",
  },
  {
    id: "RA789567",
    supplier: "CeraVe Skincare",
    mode: "Train" as const,
    origin: "New York, USA",
    destination: "Rochester, USA",
    status: "In Transit",
    eta: "2025-07-03",
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
