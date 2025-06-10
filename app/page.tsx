"use client";

import dynamic from "next/dynamic";

import CustomerRetention from "@/components/charts/customer-retention";
import CustomerSatisfactionChart from "@/components/charts/customer-satisfaction-chart";
import ExpenseBreakdown from "@/components/charts/expense-breakdown";
import MarketShareChart from "@/components/charts/market-share-chart";
import PerformanceRadar from "@/components/charts/performance-radar";
import RevenueChart from "@/components/charts/revenue-chart";
import SalesMarketingScatter from "@/components/charts/sales-marketing-scatter";
import TrafficChart from "@/components/charts/traffic-chart";
import StatsCards from "@/components/dashboard/stats-cards";
import GoalAchievement from "@/components/charts/goal-achievement";
import SalesGrowthChart from "@/components/charts/sales-growth-chart"

// ✅ Dynamic import with SSR disabled (important for "use client" components)
const GoalAchievements = dynamic(
  () => import("@/components/charts/goal-achievement"),
  {
    ssr: false,
    loading: () => <p>Loading Goal Achievement Chart...</p>, // optional fallback
  }
);

const SalesGrowthCharts = dynamic(
  () => import("@/components/charts/sales-growth-chart"),
  {
    ssr: false,
    loading: () => <p>Loading Goal Achievement Chart...</p>, // optional fallback
  }
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Business Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive insights into your business performance with real-time
            data visualization and analytics. Make informed decisions with our
            powerful dashboard tools.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCards />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Row 1 */}
          <RevenueChart />
          <MarketShareChart />
          <CustomerSatisfactionChart />

          {/* Row 2 */}
          <TrafficChart />
          <PerformanceRadar />

          {/* Row 3 */}
          <SalesGrowthChart />
          <GoalAchievement />

          {/* Row 4 */}
          <SalesMarketingScatter />

          {/* Row 5 */}
          <ExpenseBreakdown />

          {/* Row 6 */}
          <CustomerRetention />
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl border backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Dashboard Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-600">
                  Real-time Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Live data updates with dynamic charts and visualizations
                  provide instant access to your business performance, helping
                  you act on the most current information.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-emerald-600">
                  Responsive Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  {`Whether you're on desktop, tablet, or mobile, BusinessFlow adapts seamlessly 
                  to deliver a smooth and consistent user experience everywhere.`}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-purple-600">
                  Advanced Filtering
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dive deep into your data using intuitive filtering,
                  drill-downs, and segmentation. Customize views to uncover
                  patterns and trends that matter most to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
