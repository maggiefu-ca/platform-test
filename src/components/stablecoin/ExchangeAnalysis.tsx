
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine, Cell } from "recharts";
import { stablecoinPegData } from "@/data/stablecoinData";

const ExchangeAnalysis = () => {
  // Create custom format for the chart
  const getExchangeChartData = () => {
    const allExchanges = new Set<string>();
    
    // Collect all exchanges
    stablecoinPegData.forEach(coin => {
      coin.exchangeRatios.forEach(ratio => {
        allExchanges.add(ratio.exchange);
      });
    });
    
    // Create data for each exchange
    const exchangeData = Array.from(allExchanges).map(exchange => {
      const data: { exchange: string; [key: string]: any } = { exchange };
      
      stablecoinPegData.forEach(coin => {
        const ratio = coin.exchangeRatios.find(r => r.exchange === exchange);
        if (ratio) {
          data[coin.name] = ratio.price;
        }
      });
      
      return data;
    });
    
    return exchangeData;
  };

  // Get pricing anomalies
  const getPriceAnomalies = () => {
    const anomalies = [];
    
    for (const coin of stablecoinPegData) {
      const prices = coin.exchangeRatios.map(r => r.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      const spread = max - min;
      
      // Add to anomalies if the spread is significant
      if (spread > 0.005) {
        const highExchange = coin.exchangeRatios.find(r => r.price === max)?.exchange;
        const lowExchange = coin.exchangeRatios.find(r => r.price === min)?.exchange;
        
        anomalies.push({
          coin: coin.name,
          spread: spread * 100, // Convert to percentage
          highPrice: max,
          lowPrice: min,
          highExchange,
          lowExchange
        });
      }
    }
    
    return anomalies.sort((a, b) => b.spread - a.spread);
  };

  const exchangeData = getExchangeChartData();
  const anomalies = getPriceAnomalies();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Exchange Analysis</CardTitle>
        <CardDescription>Identify exchange pricing anomalies for stablecoins</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Exchange Price Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={exchangeData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.2} horizontal={false} />
                  <XAxis 
                    type="number" 
                    domain={[0.98, 1.02]} 
                    tickCount={5}
                    tickFormatter={(value) => value.toFixed(3)}
                    tick={{ fontSize: 12 }}
                    stroke="#71717a"
                  />
                  <YAxis 
                    dataKey="exchange" 
                    type="category" 
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
                    formatter={(value: any) => [`$${parseFloat(value).toFixed(4)}`, '']}
                  />
                  <ReferenceLine x={1.0} stroke="#64748b" strokeDasharray="3 3" />
                  {stablecoinPegData.map((coin, index) => (
                    <Bar 
                      key={coin.id} 
                      dataKey={coin.name} 
                      stackId={coin.id} 
                      fill={`hsl(${index * 60}, 70%, 60%)`} 
                      barSize={15}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Price Anomalies ({anomalies.length})</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Coin</TableHead>
                    <TableHead>Spread</TableHead>
                    <TableHead>High</TableHead>
                    <TableHead>Low</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {anomalies.map((anomaly, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{anomaly.coin}</TableCell>
                      <TableCell className="text-right">{anomaly.spread.toFixed(2)}%</TableCell>
                      <TableCell>
                        ${anomaly.highPrice.toFixed(4)}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({anomaly.highExchange})
                        </span>
                      </TableCell>
                      <TableCell>
                        ${anomaly.lowPrice.toFixed(4)}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({anomaly.lowExchange})
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                  {anomalies.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                        No significant pricing anomalies detected
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeAnalysis;
