
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
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "8px",
          }}
        />
        <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.2)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MevActivityChart;
