
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for arbitrage opportunities
const opportunities = [
  {
    id: 1,
    token: "ETH",
    sourceChain: "Arbitrum",
    targetChain: "Optimism",
    priceDiff: 2.8,
    profitUsd: 12500,
    volume: "125K",
    timeframe: "15m",
    risk: "low"
  },
  {
    id: 2,
    token: "USDC",
    sourceChain: "Ethereum",
    targetChain: "Polygon",
    priceDiff: 1.2,
    profitUsd: 8200,
    volume: "450K",
    timeframe: "30m",
    risk: "medium"
  },
  {
    id: 3,
    token: "WBTC",
    sourceChain: "BSC",
    targetChain: "Ethereum",
    priceDiff: 1.5,
    profitUsd: 15800,
    volume: "280K",
    timeframe: "1h",
    risk: "high"
  }
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "high": return "bg-red-500/10 text-red-500";
    case "medium": return "bg-yellow-500/10 text-yellow-500";
    default: return "bg-green-500/10 text-green-500";
  }
};

const ArbitrageOpportunities = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Arbitrage Opportunities</CardTitle>
            <CardDescription>Real-time cross-chain price differences</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Auto Trade
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="border rounded-lg p-4 hover:bg-accent/50 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{opp.token}</span>
                    <Badge variant="outline">
                      +{opp.priceDiff}% diff
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{opp.sourceChain}</span>
                    <ArrowRight className="h-3 w-3 mx-1" />
                    <span>{opp.targetChain}</span>
                  </div>
                </div>
                <Badge 
                  variant="secondary"
                  className={getRiskColor(opp.risk)}
                >
                  {opp.risk} risk
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Potential Profit</p>
                  <p className="font-medium flex items-center gap-1">
                    ${opp.profitUsd.toLocaleString()}
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Volume (24h)</p>
                  <p className="font-medium">${opp.volume}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Time Window</p>
                  <p className="font-medium">{opp.timeframe}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button size="sm">Execute Trade</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArbitrageOpportunities;
