
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import ShipmentsStats from "@/components/ShipmentsStats";
import ShipmentTable from "@/components/ShipmentTable";
import TransportModeChart from "@/components/TransportModeChart";

const Shipments = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipment Tracking</h1>
            <p className="text-gray-600">Monitor shipments, transportation modes, and delivery status</p>
          </div>

          {/* Shipments Stats */}
          <ShipmentsStats />

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* Shipment Table - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ShipmentTable />
            </div>

            {/* Transport Mode Chart - Takes 1 column */}
            <div className="lg:col-span-1">
              <TransportModeChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shipments;
