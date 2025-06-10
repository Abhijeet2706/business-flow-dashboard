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
import { Progress } from "@/components/ui/progress";

const getProgressBackground = (percentage: number) => {
  if (percentage >= 90) return "#10B981";
  if (percentage >= 75) return "#3B82F6";
  if (percentage >= 50) return "#F59E0B";
  return "#EF4444";
};

export default function GoalAchievement() {
  const isLoading = useLoading({ delay: 800, minLoadingTime: 1150 });
  const [animationClass, setAnimationClass] = useState("opacity-0");
  const [progressValues, setProgressValues] = useState<number[]>(
    new Array(goalAchievementData.length).fill(0)
  );

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimationClass("opacity-100 animate-fade-in-up");

        // Animate progress bars
        goalAchievementData.forEach((goal, index) => {
          setTimeout(() => {
            setProgressValues((prev) => {
              const newValues = [...prev];
              newValues[index] = goal.percentage;
              return newValues;
            });
          }, index * 200);
        });
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
          <CardTitle>Goal Achievement</CardTitle>
          <CardDescription>
            Progress towards annual business objectives
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {goalAchievementData.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{goal.goal}</span>
                <span className="text-sm text-muted-foreground">
                  {goal.percentage}% ({goal.current.toLocaleString()} /{" "}
                  {goal.target.toLocaleString()})
                </span>
              </div>
              <Progress
                value={progressValues[index]}
                className="h-3 transition-all duration-1000 ease-out"
                style={
                  {
                    "--progress-background": getProgressBackground(goal.percentage),
                  } as React.CSSProperties
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
