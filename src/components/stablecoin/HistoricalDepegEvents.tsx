
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { historicalDepegEvents } from "@/data/stablecoinData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical': return "bg-red-600 hover:bg-red-700";
    case 'high': return "bg-orange-500 hover:bg-orange-600";
    case 'medium': return "bg-yellow-500 hover:bg-yellow-600";
    default: return "bg-blue-500 hover:bg-blue-600";
  }
};

// Simulate historical price data for the depeg event
const generateDepegData = (event: any) => {
  const { lowestPrice } = event;
  const startDate = new Date(event.date);
  const daysBefore = 3;
  const daysAfter = 10;
  
  const data = [];
  
  // Add data points before the depeg
  for (let i = daysBefore; i > 0; i--) {
    const date = new Date(startDate);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toISOString().slice(0, 10),
      price: 1 - (Math.random() * 0.01)
    });
  }
  
  // Add the depeg day
  data.push({
    date: startDate.toISOString().slice(0, 10),
    price: 1 - ((1 - lowestPrice) * 0.7)
  });
  
  // Add data points after the depeg
  for (let i = 1; i <= daysAfter; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Recovery factor - higher means faster recovery
    const recoveryFactor = event.severity === 'critical' ? 0.05 : 
                         event.severity === 'high' ? 0.2 :
                         event.severity === 'medium' ? 0.4 : 0.6;
    
    const recovery = Math.min(1 - lowestPrice, (1 - lowestPrice) * recoveryFactor * i);
    data.push({
      date: date.toISOString().slice(0, 10),
      price: lowestPrice + recovery
    });
  }
  
  return data;
};

const HistoricalDepegEvents = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle>Historical Depeg Events</CardTitle>
        <CardDescription>Analysis of previous depeg events and patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={historicalDepegEvents[0].id.toString()}>
          <TabsList className="w-full mb-4 overflow-x-auto flex gap-1 h-auto py-2">
            {historicalDepegEvents.map(event => (
              <TabsTrigger key={event.id} value={event.id.toString()} className="flex items-center gap-2">
                <span className="whitespace-nowrap">{event.stablecoin}</span>
                <Badge className={`ml-1 text-xs ${getSeverityColor(event.severity)}`}>
                  {event.severity}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {historicalDepegEvents.map(event => (
            <TabsContent key={event.id} value={event.id.toString()} className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 h-[200px] md:h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={generateDepegData(event)}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.2} />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        tick={{ fontSize: 12 }}
                        stroke="#71717a"
                      />
                      <YAxis 
                        domain={[
                          Math.max(0, Math.floor(event.lowestPrice * 10) / 10 - 0.1), 
                          1.05
                        ]}
                        tickFormatter={(value) => value.toFixed(2)}
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
                        formatter={(value: any) => [`$${parseFloat(value).toFixed(4)}`, 'Price']}
                      />
                      <ReferenceLine y={1.0} stroke="#64748b" strokeDasharray="3 3" />
                      <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#8884d8" 
                        fillOpacity={1} 
                        fill="url(#colorPrice)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium">{event.description}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Lowest Price</p>
                      <p className="font-medium">${event.lowestPrice.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{event.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Market Cap Before</p>
                      <p className="font-medium">${(event.marketCapBefore / 1000000000).toFixed(1)}B</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Market Cap After</p>
                      <p className="font-medium">${(event.marketCapAfter / 1000000000).toFixed(1)}B</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground text-sm">Impact</p>
                    <p className="text-sm">{event.impact}</p>
                  </div>
                  
                  {event.relatedCoins.length > 0 && (
                    <div>
                      <p className="text-muted-foreground text-sm">Related Coins</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {event.relatedCoins.map((coin, index) => (
                          <Badge key={index} variant="outline">
                            {coin}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HistoricalDepegEvents;
