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
import { customerRetentionData } from "@/lib/data";
import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function CustomerRetention() {
  const isLoading = useLoading({ delay: 1000, minLoadingTime: 1400 });
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimationClass("opacity-100 animate-fade-in-up");
      }, 50);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <ChartSkeleton
        className="col-span-1 lg:col-span-2"
        height={350}
        showLegend={true}
      />
    );
  }

  return (
    <div
      className={`col-span-1 lg:col-span-2 transition-all duration-500 ${animationClass}`}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Customer Retention Analysis</CardTitle>
          <CardDescription>
            New vs returning customers and churn rate trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
              data={customerRetentionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                formatter={(value: any, name: string) => [
                  typeof value === "number" ? value.toLocaleString() : value,
                  name === "newCustomers"
                    ? "New Customers"
                    : name === "returningCustomers"
                    ? "Returning Customers"
                    : "Churn Rate (%)",
                ]}
                labelStyle={{ color: "var(--foreground)" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="newCustomers"
                fill="#3B82F6"
                name="New Customers"
                radius={[2, 2, 0, 0]}
                animationBegin={0}
                animationDuration={1200}
              />
              <Bar
                yAxisId="left"
                dataKey="returningCustomers"
                fill="#10B981"
                name="Returning Customers"
                radius={[2, 2, 0, 0]}
                animationBegin={300}
                animationDuration={1200}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="churnRate"
                stroke="#EF4444"
                strokeWidth={3}
                dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                name="Churn Rate (%)"
                animationBegin={600}
                animationDuration={1500}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
