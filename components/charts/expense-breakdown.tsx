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
import { monthlyExpensesData } from "@/lib/data";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ExpenseBreakdown() {
  const isLoading = useLoading({ delay: 900, minLoadingTime: 1300 });
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
          <CardTitle>Monthly Expense Breakdown</CardTitle>
          <CardDescription>
            Track spending across different categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={monthlyExpensesData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="category"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value: any) => [`$${value.toLocaleString()}`, ""]}
                labelStyle={{ color: "var(--foreground)" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="jan"
                fill="#3B82F6"
                name="January"
                radius={[2, 2, 0, 0]}
                animationBegin={0}
                animationDuration={1000}
              />
              <Bar
                dataKey="feb"
                fill="#10B981"
                name="February"
                radius={[2, 2, 0, 0]}
                animationBegin={200}
                animationDuration={1000}
              />
              <Bar
                dataKey="mar"
                fill="#F59E0B"
                name="March"
                radius={[2, 2, 0, 0]}
                animationBegin={400}
                animationDuration={1000}
              />
              <Bar
                dataKey="apr"
                fill="#EF4444"
                name="April"
                radius={[2, 2, 0, 0]}
                animationBegin={600}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
