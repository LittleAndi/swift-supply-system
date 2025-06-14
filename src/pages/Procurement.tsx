
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import ProcurementStats from "@/components/ProcurementStats";
import PurchaseOrdersTable from "@/components/PurchaseOrdersTable";
import SupplierOverview from "@/components/SupplierOverview";

const Procurement = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />

        <main className="flex-1 p-10 overflow-x-auto bg-gray-50">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Procurement Management</h1>
            <p className="text-gray-600">Manage purchase orders, suppliers, and procurement activities</p>
          </div>

          {/* Procurement Stats */}
          <ProcurementStats />

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* Purchase Orders Table - Takes 2 columns */}
            <div className="lg:col-span-2">
              <PurchaseOrdersTable />
            </div>

            {/* Supplier Overview - Takes 1 column */}
            <div className="lg:col-span-1">
              <SupplierOverview />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Procurement;
