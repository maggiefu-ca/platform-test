
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { stablecoinPegData } from "@/data/stablecoinData";

const getRiskColor = (score: number) => {
  if (score < 30) return "bg-green-500";
  if (score < 60) return "bg-orange-500";
  return "bg-red-500";
};

const getRiskLabel = (score: number) => {
  if (score < 30) return "Low Risk";
  if (score < 60) return "Medium Risk";
  return "High Risk";
};

const getRiskIcon = (score: number) => {
  if (score < 30) return <CheckCircle className="h-4 w-4 text-green-500" />;
  if (score < 60) return <Info className="h-4 w-4 text-orange-500" />;
  return <AlertTriangle className="h-4 w-4 text-red-500" />;
};

const StablecoinRiskIndex = () => {
  // Sort stablecoins by risk score
  const sortedStablecoins = [...stablecoinPegData].sort((a, b) => b.riskScore - a.riskScore);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Stablecoin Risk Index</CardTitle>
        <CardDescription>Risk assessment for major stablecoins</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sortedStablecoins.map((stablecoin) => (
            <TooltipProvider key={stablecoin.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getRiskIcon(stablecoin.riskScore)}
                        <span className="font-medium">{stablecoin.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {getRiskLabel(stablecoin.riskScore)} ({stablecoin.riskScore}%)
                      </span>
                    </div>
                    <Progress 
                      value={stablecoin.riskScore} 
                      className="h-2" 
                      indicatorClassName={getRiskColor(stablecoin.riskScore)} 
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Market Cap: ${(stablecoin.marketCap / 1000000000).toFixed(1)}B</span>
                      <span>Liquidity: ${(stablecoin.liquidity24h / 1000000000).toFixed(1)}B</span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px] p-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">{stablecoin.name} Risk Factors</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Current Price: ${stablecoin.currentPrice.toFixed(3)}</li>
                      <li>Peg Deviation: {stablecoin.deviation > 0 ? '+' : ''}{stablecoin.deviation}%</li>
                      <li>Backing Status: {stablecoin.backingStatus}</li>
                      <li>
                        Exchange Variations: 
                        {Math.max(...stablecoin.exchangeRatios.map(r => r.price)) - 
                         Math.min(...stablecoin.exchangeRatios.map(r => r.price)) > 0.005 ? 
                         " High" : " Low"}
                      </li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StablecoinRiskIndex;
