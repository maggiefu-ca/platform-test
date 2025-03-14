
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GlassCard from "../ui/GlassCard";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for the chart
const data = [
  { name: "Jan", eth: 1800, sol: 80, btc: 36500 },
  { name: "Feb", eth: 1600, sol: 70, btc: 34000 },
  { name: "Mar", eth: 2000, sol: 85, btc: 38000 },
  { name: "Apr", eth: 1900, sol: 95, btc: 41000 },
  { name: "May", eth: 2200, sol: 110, btc: 48000 },
  { name: "Jun", eth: 1850, sol: 90, btc: 45000 },
  { name: "Jul", eth: 2300, sol: 130, btc: 51000 },
  { name: "Aug", eth: 2500, sol: 140, btc: 54000 },
  { name: "Sep", eth: 2400, sol: 135, btc: 52000 },
  { name: "Oct", eth: 3000, sol: 150, btc: 58000 },
  { name: "Nov", eth: 3200, sol: 138, btc: 61000 },
  { name: "Dec", eth: 3100, sol: 142, btc: 67000 },
];

// Sample whale activity data for the chart
const whaleData = [
  { name: "Jan", buys: 15, sells: 12 },
  { name: "Feb", buys: 18, sells: 20 },
  { name: "Mar", buys: 25, sells: 15 },
  { name: "Apr", buys: 22, sells: 18 },
  { name: "May", buys: 30, sells: 10 },
  { name: "Jun", buys: 25, sells: 15 },
  { name: "Jul", buys: 35, sells: 12 },
  { name: "Aug", buys: 40, sells: 10 },
  { name: "Sep", buys: 38, sells: 15 },
  { name: "Oct", buys: 45, sells: 10 },
  { name: "Nov", buys: 50, sells: 12 },
  { name: "Dec", buys: 48, sells: 14 },
];

// Sample prediction accuracy data
const predictionData = [
  { name: "Jan", accuracy: 65 },
  { name: "Feb", accuracy: 68 },
  { name: "Mar", accuracy: 72 },
  { name: "Apr", accuracy: 75 },
  { name: "May", accuracy: 78 },
  { name: "Jun", accuracy: 76 },
  { name: "Jul", accuracy: 82 },
  { name: "Aug", accuracy: 85 },
  { name: "Sep", accuracy: 83 },
  { name: "Oct", accuracy: 88 },
  { name: "Nov", accuracy: 91 },
  { name: "Dec", accuracy: 89 },
];

const TrendChart = () => {
  return (
    <GlassCard className="overflow-hidden">
      <Tabs defaultValue="prices">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Market Trends</h3>
          <TabsList className="h-8">
            <TabsTrigger value="prices" className="text-xs px-3 py-1.5">Prices</TabsTrigger>
            <TabsTrigger value="whales" className="text-xs px-3 py-1.5">Whale Activity</TabsTrigger>
            <TabsTrigger value="predictions" className="text-xs px-3 py-1.5">Prediction Accuracy</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="prices" className="mt-0">
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
                <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(225, 64%, 56%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(225, 64%, 56%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSol" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(248, 90%, 66%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(248, 90%, 66%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }} 
              />
              <Area
                type="monotone"
                dataKey="eth"
                stroke="hsl(225, 64%, 56%)"
                fillOpacity={1}
                fill="url(#colorEth)"
              />
              <Area
                type="monotone"
                dataKey="sol"
                stroke="hsl(248, 90%, 66%)"
                fillOpacity={1}
                fill="url(#colorSol)"
              />
              <Area
                type="monotone"
                dataKey="btc"
                stroke="hsl(38, 92%, 50%)"
                fillOpacity={1}
                fill="url(#colorBtc)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span className="text-xs text-muted-foreground">Ethereum</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-accent"></div>
              <span className="text-xs text-muted-foreground">Solana</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-warning"></div>
              <span className="text-xs text-muted-foreground">Bitcoin</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="whales" className="mt-0">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={whaleData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorBuys" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142, 69%, 58%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(142, 69%, 58%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSells" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }} 
              />
              <Area
                type="monotone"
                dataKey="buys"
                stroke="hsl(142, 69%, 58%)"
                fillOpacity={1}
                fill="url(#colorBuys)"
              />
              <Area
                type="monotone"
                dataKey="sells"
                stroke="hsl(0, 84%, 60%)"
                fillOpacity={1}
                fill="url(#colorSells)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-success"></div>
              <span className="text-xs text-muted-foreground">Whale Buys</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive"></div>
              <span className="text-xs text-muted-foreground">Whale Sells</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="mt-0">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={predictionData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(248, 90%, 66%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(248, 90%, 66%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }} 
              />
              <Area
                type="monotone"
                dataKey="accuracy"
                stroke="hsl(248, 90%, 66%)"
                fillOpacity={1}
                fill="url(#colorAccuracy)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-accent"></div>
              <span className="text-xs text-muted-foreground">AI Prediction Accuracy (%)</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </GlassCard>
  );
};

export default TrendChart;
