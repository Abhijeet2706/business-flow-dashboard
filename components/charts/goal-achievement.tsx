'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartSkeleton } from "@/components/ui/chart-skeleton";
import { useLoading } from "@/hooks/use-loading";
import { goalAchievementData } from "@/lib/data";
import { useEffect, useState } from "react";



// Simple progress bar
function SimpleProgress({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-out"
        style={{
          width: `${value}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}

// Determine color based on progress
function getColor(percentage: number) {
  if (percentage >= 90) return "#10B981"; // green
  if (percentage >= 75) return "#3B82F6"; // blue
  if (percentage >= 50) return "#F59E0B"; // yellow
  return "#EF4444"; // red
}

export default function GoalAchievement() {
  const isLoading = useLoading({ delay: 800, minLoadingTime: 1150 });
  const [animationClass, setAnimationClass] = useState("opacity-0");
  const [progress, setProgress] = useState<number[]>(new Array(goalAchievementData.length).fill(0));

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimationClass("opacity-100 animate-fade-in-up");
        goalAchievementData.forEach((goal, index) => {
          setTimeout(() => {
            setProgress((prev) => {
              const updated = [...prev];
              updated[index] = goal.percentage;
              return updated;
            });
          }, index * 200);
        });
      }, 100);
    }
  }, [isLoading]);

  if (isLoading) {
    return <ChartSkeleton className="col-span-1 lg:col-span-2" height={350} />;
  }

  return (
    <div className={`col-span-1 lg:col-span-2 transition-all duration-500 ${animationClass}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Goal Achievement</CardTitle>
          <CardDescription>Progress towards annual business objectives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {goalAchievementData.map((goal, index) => (
            <div key={goal.goal} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{goal.goal}</span>
                <span className="text-sm text-muted-foreground">
                  {goal.percentage}% ({goal.current.toLocaleString()} / {goal.target.toLocaleString()})
                </span>
              </div>
              <SimpleProgress value={progress[index]} color={getColor(goal.percentage)} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
