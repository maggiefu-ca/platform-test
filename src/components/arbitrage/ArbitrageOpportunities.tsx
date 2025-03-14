
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRightIcon, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data for arbitrage opportunities
const arbitrageOpportunities = [
  {
    id: 1,
    token: "ETH",
    sourceChain: "Arbitrum",
    sourcePrice: 3050.25,
    targetChain: "Optimism",
    targetPrice: 3092.80,
    priceDifference: 1.4,
    profitability: 85,
    estimatedProfit: 42.55,
    liquidityScore: 92,
    gasEstimate: 15,
    timeToComplete: "~5 min"
  },
  {
    id: 2,
    token: "USDC",
    sourceChain: "Ethereum",
    sourcePrice: 0.995,
    targetChain: "BNB Chain",
    targetPrice: 1.012,
    priceDifference: 1.7,
    profitability: 76,
    estimatedProfit: 0.017,
    liquidityScore: 96,
    gasEstimate: 28,
    timeToComplete: "~8 min"
  },
  {
    id: 3,
    token: "WBTC",
    sourceChain: "Polygon",
    sourcePrice: 63245.50,
    targetChain: "Ethereum",
    targetPrice: 64150.75,
    priceDifference: 1.43,
    profitability: 68,
    estimatedProfit: 905.25,
    liquidityScore: 85,
    gasEstimate: 45,
    timeToComplete: "~12 min"
  },
  {
    id: 4,
    token: "MATIC",
    sourceChain: "Ethereum",
    sourcePrice: 0.58,
    targetChain: "Polygon",
    targetPrice: 0.62,
    priceDifference: 6.9,
    profitability: 92,
    estimatedProfit: 0.04,
    liquidityScore: 79,
    gasEstimate: 12,
    timeToComplete: "~3 min"
  }
];

const getChainBadgeColor = (chain: string) => {
  switch (chain) {
    case "Ethereum": return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    case "Polygon": return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
    case "Arbitrum": return "bg-blue-400/10 text-blue-400 hover:bg-blue-400/20";
    case "Optimism": return "bg-red-400/10 text-red-400 hover:bg-red-400/20";
    case "BNB Chain": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
    default: return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
  }
};

const getProfitabilityColor = (score: number) => {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-red-500";
};

const ArbitrageOpportunities = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          Arbitrage Opportunities
        </CardTitle>
        <CardDescription>Cross-chain price differences for profit</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {arbitrageOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-semibold">
                    {opportunity.token}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                    +{opportunity.priceDifference.toFixed(1)}%
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{opportunity.timeToComplete}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex flex-col">
                  <Badge className={getChainBadgeColor(opportunity.sourceChain)} variant="outline">
                    {opportunity.sourceChain}
                  </Badge>
                  <span className="text-sm mt-1">${opportunity.sourcePrice.toFixed(opportunity.token === "USDC" ? 3 : 2)}</span>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-muted-foreground mx-2" />
                <div className="flex flex-col">
                  <Badge className={getChainBadgeColor(opportunity.targetChain)} variant="outline">
                    {opportunity.targetChain}
                  </Badge>
                  <span className="text-sm mt-1">${opportunity.targetPrice.toFixed(opportunity.token === "USDC" ? 3 : 2)}</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Profitability</span>
                  <span className="font-medium">{opportunity.profitability}%</span>
                </div>
                <Progress 
                  value={opportunity.profitability} 
                  className="h-2" 
                  indicatorClassName={getProfitabilityColor(opportunity.profitability)} 
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-3">
                <div>
                  <span className="block">Est. Profit</span>
                  <span className="font-medium text-green-500">
                    ${opportunity.estimatedProfit.toFixed(opportunity.token === "USDC" ? 3 : 2)}
                  </span>
                </div>
                <div>
                  <span className="block">Liquidity</span>
                  <span className="font-medium">{opportunity.liquidityScore}%</span>
                </div>
                <div>
                  <span className="block">Gas Est.</span>
                  <span className="font-medium">${opportunity.gasEstimate}</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button size="sm">
                  Execute <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArbitrageOpportunities;
