
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { chainRotationData } from "@/data/vcDashboardData";

const ChainRotationChart = () => {
  return (
    <Card>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">Chain Rotation</CardTitle>
        <CardDescription>Track how venture funds rotate between chains</CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0">
        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chainRotationData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEthereum" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#627EEA" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#627EEA" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorSolana" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9945FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9945FF" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorAvalanche" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E84142" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#E84142" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorOther" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6c757d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6c757d" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#E2E8F0', strokeWidth: 1 }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#E2E8F0', strokeWidth: 1 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, '']}
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  borderRadius: '8px',
                  border: 'none',
                  color: 'white',
                  padding: '12px'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="Ethereum" 
                stackId="1"
                stroke="#627EEA" 
                fill="url(#colorEthereum)" 
              />
              <Area 
                type="monotone" 
                dataKey="Solana" 
                stackId="1"
                stroke="#9945FF" 
                fill="url(#colorSolana)" 
              />
              <Area 
                type="monotone" 
                dataKey="Avalanche" 
                stackId="1"
                stroke="#E84142" 
                fill="url(#colorAvalanche)" 
              />
              <Area 
                type="monotone" 
                dataKey="Other" 
                stackId="1"
                stroke="#6c757d" 
                fill="url(#colorOther)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChainRotationChart;
