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
import { performanceRadarData } from "@/lib/data";
import { useEffect, useState } from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceRadar() {
  const isLoading = useLoading({ delay: 700, minLoadingTime: 1200 });
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimationClass("opacity-100 animate-scale-in");
      }, 50);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <ChartSkeleton className="col-span-1" height={300} showLegend={true} />
    );
  }

  return (
    <div className={`col-span-1 transition-all duration-500 ${animationClass}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>
            Overall business performance across key areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceRadarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis
                angle={0}
                domain={[0, 100]}
                tick={{ fontSize: 10 }}
                tickCount={5}
              />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.3}
                strokeWidth={2}
                animationBegin={0}
                animationDuration={1500}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
