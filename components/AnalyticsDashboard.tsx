"use client";

import { analytics } from "@/utils/analytics";
import { BarChart, Card } from "@tremor/react";

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string;
  amtVisitorsToday: number;
  timeseriesPageViews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
}

const AnalyticsDashboard = ({
  avgVisitorsPerDay,
  amtVisitorsToday,
  timeseriesPageViews,
}: AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Avg visitor/day
          </p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {avgVisitorsPerDay}
          </p>
        </Card>
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Visitors today
          </p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {amtVisitorsToday}
          </p>
        </Card>
        <Card>
          {timeseriesPageViews ? (
            <BarChart
              allowDecimals={false}
              showAnimation
              data={timeseriesPageViews.map((day) => ({
                name: day.date,
                Visitors: day.events.reduce(
                  (acc, curr) => acc + Object.values(curr)[0]!,
                  0
                ),
              }))}
              categories={["Visitors"]}
              index="name"
            />
          ) : null}
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;