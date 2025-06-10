"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChartSkeletonProps {
  title?: string;
  description?: string;
  className?: string;
  height?: number;
  showLegend?: boolean;
}

export function ChartSkeleton({
  title = "Loading...",
  description = "Please wait while we load your data",
  className,
  height = 300,
  showLegend = false,
}: ChartSkeletonProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-5 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
        </CardTitle>
        <CardDescription>
          <span className="h-4 w-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart area skeleton */}
          <div
            className="w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg bg-[length:200%_100%] animate-shimmer relative overflow-hidden"
            style={{ height: `${height}px` }}
          >
            {/* Animated bars for bar chart skeleton */}
            <div className="absolute inset-4 flex items-end justify-between">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-200 dark:bg-blue-800 rounded-t"
                  style={{
                    width: "12%",
                    height: `${[40, 55, 60, 35, 50, 45][i]}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: "1.5s",
                  }}
                />
              ))}
            </div>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-gray-600/20 animate-shimmer bg-[length:200%_100%]" />
          </div>

          {/* Legend skeleton */}
          {showLegend && (
            <div className="flex justify-center gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
                  <div className="h-3 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCardSkeleton() {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-3 flex-1">
            <div className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
            <div className="h-8 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
              <div className="h-4 w-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
              <div className="h-4 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
            </div>
          </div>
          <div className="p-3 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] animate-shimmer">
            <div className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
