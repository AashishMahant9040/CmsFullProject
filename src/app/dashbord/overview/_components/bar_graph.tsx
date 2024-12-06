'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

// Description for the chart
export const description = 'An interactive bar chart showing post types by month';

// Modified data for post types like "Tech", "Crypto", "World Affairs" per month
const chartData = [
  { date: '2024-04-01', tech: 120, crypto: 85, world_affairs: 70 },
  { date: '2024-05-01', tech: 180, crypto: 110, world_affairs: 95 },
  { date: '2024-06-01', tech: 150, crypto: 95, world_affairs: 100 },
  { date: '2024-07-01', tech: 170, crypto: 120, world_affairs: 105 },
  { date: '2024-08-01', tech: 200, crypto: 140, world_affairs: 115 },
  { date: '2024-09-01', tech: 220, crypto: 160, world_affairs: 125 },
  { date: '2024-10-01', tech: 250, crypto: 180, world_affairs: 150 },
  { date: '2024-11-01', tech: 300, crypto: 210, world_affairs: 175 },
  { date: '2024-12-01', tech: 350, crypto: 230, world_affairs: 190 },
];

const chartConfig = {
  views: {
    label: 'Post Types'
  },
  tech: {
    label: 'Tech',
    color: 'hsl(var(--chart-1))'
  },
  crypto: {
    label: 'Crypto',
    color: 'hsl(var(--chart-2))'
  },
  world_affairs: {
    label: 'World Affairs',
    color: 'hsl(var(--chart-3))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('tech');

  // Calculate the total for each post type (tech, crypto, world_affairs) over all months
  const total = React.useMemo(
    () => ({
      tech: chartData.reduce((acc, curr) => acc + curr.tech, 0),
      crypto: chartData.reduce((acc, curr) => acc + curr.crypto, 0),
      world_affairs: chartData.reduce((acc, curr) => acc + curr.world_affairs, 0)
    }),
    []
  );

  return (
    <Card className='bg-black text-white'>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Monthly Post Type Overview</CardTitle>
          <CardDescription>
            Showing the number of posts by category (Tech, Crypto, World Affairs)
          </CardDescription>
        </div>
        <div className="flex">
          {['tech', 'crypto', 'world_affairs'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
