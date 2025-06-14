
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import AnalyticsOverview from "@/components/AnalyticsOverview";
import PerformanceCharts from "@/components/PerformanceCharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Analytics = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
            <p className="text-gray-600 mt-2">Track performance metrics, analyze trends, and optimize your supply chain operations</p>
          </div>

          {/* Analytics Overview */}
          <AnalyticsOverview />

          {/* Analytics Tabs */}
          <Tabs defaultValue="performance" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="mt-6">
              <PerformanceCharts />
            </TabsContent>
            
            <TabsContent value="costs" className="mt-6">
              <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
                <h3 className="text-lg font-semibold mb-4">Cost Analysis Coming Soon</h3>
                <p className="text-gray-600">Detailed cost breakdown and analysis charts will be available here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="efficiency" className="mt-6">
              <div className="bg-white rounded-xl p-6 shadow ring-1 ring-muted/30">
                <h3 className="text-lg font-semibold mb-4">Efficiency Metrics Coming Soon</h3>
                <p className="text-gray-600">Operational efficiency metrics and optimization insights will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
