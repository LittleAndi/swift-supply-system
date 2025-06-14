
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone } from "lucide-react";

const topSuppliers = [
  {
    name: "Global Textiles Ltd",
    location: "Shanghai, China",
    rating: 4.8,
    totalOrders: 156,
    status: "Active",
    phone: "+86 21 1234-5678",
  },
  {
    name: "Pacific Electronics",
    location: "Tokyo, Japan", 
    rating: 4.9,
    totalOrders: 89,
    status: "Active",
    phone: "+81 3 1234-5678",
  },
  {
    name: "Metro Packaging Co",
    location: "Mumbai, India",
    rating: 4.6,
    totalOrders: 234,
    status: "Active",
    phone: "+91 22 1234-5678",
  },
  {
    name: "Quality Ingredients Inc",
    location: "Bangkok, Thailand",
    rating: 4.7,
    totalOrders: 67,
    status: "Under Review",
    phone: "+66 2 123-4567",
  },
];

export default function SupplierOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Suppliers</CardTitle>
        <CardDescription>
          Key supplier relationships and performance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {topSuppliers.map((supplier) => (
          <div
            key={supplier.name}
            className="border rounded-lg p-4 space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-sm">{supplier.name}</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <MapPin size={12} />
                  {supplier.location}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <Phone size={12} />
                  {supplier.phone}
                </div>
              </div>
              <Badge 
                variant={supplier.status === "Active" ? "default" : "secondary"}
                className="text-xs"
              >
                {supplier.status}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-500 fill-current" />
                <span className="font-medium">{supplier.rating}</span>
              </div>
              <span className="text-gray-500">{supplier.totalOrders} orders</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
