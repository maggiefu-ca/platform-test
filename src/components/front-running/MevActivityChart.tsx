
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for MEV activity
const data = [
  { time: "00:00", value: 45 },
  { time: "02:00", value: 32 },
  { time: "04:00", value: 28 },
  { time: "06:00", value: 18 },
  { time: "08:00", value: 42 },
  { time: "10:00", value: 67 },
  { time: "12:00", value: 89 },
  { time: "14:00", value: 103 },
  { time: "16:00", value: 127 },
  { time: "18:00", value: 85 },
  { time: "20:00", value: 65 },
  { time: "22:00", value: 52 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border/30 bg-background/95 p-3 shadow-lg backdrop-blur-sm">
        <p className="font-medium text-sm">{`${label}`}</p>
        <p className="text-primary flex items-center gap-1 text-sm font-semibold">
          {`${payload[0].value} transactions`}
        </p>
        <p className="text-xs text-muted-foreground">MEV activity detected</p>
      </div>
    );
  }
  return null;
};

const MevActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="mevGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
        <XAxis 
          dataKey="time" 
          axisLine={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
        />
        <YAxis 
          axisLine={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
          tickLine={false}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="hsl(var(--primary))" 
          strokeWidth={2}
          fill="url(#mevGradient)" 
          activeDot={{ r: 6, stroke: 'hsl(var(--background))', strokeWidth: 2, fill: 'hsl(var(--primary))' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MevActivityChart;
