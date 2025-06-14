
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import InventoryStats from "@/components/InventoryStats";
import InventoryTable from "@/components/InventoryTable";

const Inventory = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />

        <main className="flex-1 p-10 overflow-x-auto bg-gray-50">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
            <p className="text-gray-600 mt-2">Monitor stock levels, track inventory movement, and manage warehouse operations</p>
          </div>

          {/* Inventory Stats */}
          <InventoryStats />

          {/* Inventory Table */}
          <InventoryTable />
        </main>
      </div>
    </div>
  );
};

export default Inventory;
