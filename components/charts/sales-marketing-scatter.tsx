"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartSkeleton } from "@/components/ui/chart-skeleton";
import { useLoading } from "@/hooks/use-loading";
import { salesVsMarketingData } from "@/lib/data";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SalesMarketingScatter() {
  const isLoading = useLoading({ delay: 600, minLoadingTime: 1350 });
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimationClass("opacity-100 animate-fade-in-up");
      }, 50);
    }
  }, [isLoading]);

  if (isLoading) {
    return <ChartSkeleton className="col-span-1 lg:col-span-2" height={350} />;
  }

  return (
    <div
      className={`col-span-1 lg:col-span-2 transition-all duration-500 ${animationClass}`}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Sales vs Marketing Spend</CardTitle>
          <CardDescription>
            Correlation between marketing investment and sales results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                type="number"
                dataKey="marketing"
                name="Marketing Spend"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="number"
                dataKey="sales"
                name="Sales"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                formatter={(value: any, name: string) => [
                  `$${value.toLocaleString()}`,
                  name === "marketing" ? "Marketing Spend" : "Sales",
                ]}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Scatter
                data={salesVsMarketingData}
                fill="#8B5CF6"
                animationBegin={0}
                animationDuration={1600}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
