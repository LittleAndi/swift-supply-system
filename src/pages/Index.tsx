
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import KPISection from "@/components/KPISection";
import RecentShipmentsTable from "@/components/RecentShipmentsTable";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />

        <main className="flex-1 p-10 overflow-x-auto bg-gray-50">
          {/* KPI Cards */}
          <KPISection />

          {/* Recent Shipments Table */}
          <RecentShipmentsTable />

          {/* Quick intro */}
          <section className="mt-7 max-w-2xl text-gray-600">
            <h2 className="text-xl font-semibold text-primary mb-2">Welcome to Your Supply Chain Management Platform</h2>
            <p>
              Orchestrate every aspect of your global consumer goods logistics—including procurement, shipment, multimodal transport, inventory, and fulfillment—
              with real-time analytics and performance visibility. This dashboard is your command center for fast, cost-efficient, and reliable delivery from global sources to every market.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Index;
