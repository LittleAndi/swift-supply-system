
import { Truck, Ship, Train } from "lucide-react";

type Props = {
  mode: "Truck" | "Ship" | "Train";
};

export function ModeIcon({ mode }: Props) {
  if (mode === "Truck") return <Truck className="text-gray-700" size={19} aria-label="Truck" />;
  if (mode === "Ship") return <Ship className="text-blue-700" size={19} aria-label="Ship" />;
  return <Train className="text-orange-500" size={19} aria-label="Train" />;
}
