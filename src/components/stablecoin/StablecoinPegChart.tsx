
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";
import { stablecoinPegData, historicalPegData } from "@/data/stablecoinData";

// Define color map for stablecoins
const colorMap: Record<string, string> = {
  USDC: "#2775CA",
  USDT: "#26A17B",
  DAI: "#F5AC37",
  BUSD: "#F0B90B",
  FRAX: "#000000",
  TUSD: "#002868",
};

const StablecoinPegChart = () => {
  const [timeframe, setTimeframe] = useState("30d");
  const [selectedCoins, setSelectedCoins] = useState<string[]>(["USDC", "USDT", "DAI"]);

  const toggleCoin = (coin: string) => {
    if (selectedCoins.includes(coin)) {
      setSelectedCoins(selectedCoins.filter(c => c !== coin));
    } else {
      setSelectedCoins([...selectedCoins, coin]);
    }
  };

  // Filter data based on timeframe
  const getFilteredData = () => {
    const days = timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : 90;
    
    const result = historicalPegData
      .filter(coin => selectedCoins.includes(coin.name))
      .map(coin => ({
        ...coin,
        data: coin.data.slice(-days)
      }));
    
    return result;
  };

  // Combine all data for the chart
  const chartData = getFilteredData()[0]?.data.map((item, index) => {
    const dataPoint: any = { date: item.date };
    
    getFilteredData().forEach(coin => {
      dataPoint[coin.name] = coin.data[index]?.price;
    });
    
    return dataPoint;
  });

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Stablecoin Peg Status</CardTitle>
            <CardDescription>Current peg status of major stablecoins</CardDescription>
          </div>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 Days</SelectItem>
              <SelectItem value="30d">30 Days</SelectItem>
              <SelectItem value="90d">90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {stablecoinPegData.map(coin => (
            <Badge 
              key={coin.id}
              variant={selectedCoins.includes(coin.name) ? "default" : "outline"}
              className="cursor-pointer"
              style={{ 
                backgroundColor: selectedCoins.includes(coin.name) ? colorMap[coin.name] : "transparent",
                borderColor: colorMap[coin.name],
                color: selectedCoins.includes(coin.name) ? "white" : colorMap[coin.name],
                opacity: selectedCoins.includes(coin.name) ? 1 : 0.6
              }}
              onClick={() => toggleCoin(coin.name)}
            >
              {coin.name}: ${coin.currentPrice.toFixed(3)}
            </Badge>
          ))}
        </div>
        
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.2} />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                tickMargin={10}
                tick={{ fontSize: 12 }}
                stroke="#71717a"
              />
              <YAxis 
                domain={[0.97, 1.03]} 
                tickCount={7} 
                tickFormatter={(value) => value.toFixed(2)}
                width={40}
                tick={{ fontSize: 12 }}
                stroke="#71717a"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#f1f5f9',
                }}
                labelFormatter={(date) => new Date(date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                formatter={(value: any) => [`$${parseFloat(value).toFixed(4)}`, '']}
              />
              <Legend 
                verticalAlign="top" 
                height={40}
                formatter={(value) => <span style={{ color: colorMap[value], fontSize: 12 }}>{value}</span>}
              />
              <ReferenceLine y={1.0} stroke="#64748b" strokeDasharray="3 3" />
              
              {selectedCoins.map(coin => (
                <Line
                  key={coin}
                  type="monotone"
                  dataKey={coin}
                  stroke={colorMap[coin]}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StablecoinPegChart;
