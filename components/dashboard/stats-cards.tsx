"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StatsCardSkeleton } from "@/components/ui/chart-skeleton";
import { useStaggeredLoading } from "@/hooks/use-loading";
import {
  DollarSign,
  ShoppingCart,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$2.85M",
    change: "+12.5%",
    changeType: "increase" as const,
    icon: DollarSign,
    description: "vs last quarter",
  },
  {
    title: "Active Customers",
    value: "12,845",
    change: "+8.3%",
    changeType: "increase" as const,
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Total Orders",
    value: "3,427",
    change: "-2.1%",
    changeType: "decrease" as const,
    icon: ShoppingCart,
    description: "vs last month",
  },
  {
    title: "Conversion Rate",
    value: "3.8%",
    change: "+0.4%",
    changeType: "increase" as const,
    icon: Target,
    description: "vs last month",
  },
];

export default function StatsCards() {
  const loadedItems = useStaggeredLoading(stats.length, 150);

  return (
    <>
      {stats.map((stat, index) => {
        if (!loadedItems[index]) {
          return <StatsCardSkeleton key={index} />;
        }

        return (
          <div
            key={index}
            className="opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      {stat.changeType === "increase" ? (
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          stat.changeType === "increase"
                            ? "text-emerald-500"
                            : "text-red-500"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {stat.description}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r transition-transform duration-300 group-hover:scale-110 ${
                      stat.changeType === "increase"
                        ? "from-emerald-500/20 to-blue-500/20"
                        : "from-red-500/20 to-orange-500/20"
                    }`}
                  >
                    <stat.icon
                      className={`h-6 w-6 ${
                        stat.changeType === "increase"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}
