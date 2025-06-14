
import { ChevronDown, User2 } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-8 border-b bg-background">
      <div />
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-muted">
          <User2 size={20} className="text-gray-400" />
          <span className="font-medium">Supply Chain Pro</span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}
