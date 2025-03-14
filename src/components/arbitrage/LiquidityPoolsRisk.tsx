
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Info, ShieldAlert } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data for liquidity pools with risk indicators
const riskPools = [
  {
    id: 1,
    name: "USDC/ETH",
    dex: "Uniswap V3",
    chain: "Ethereum",
    tvl: 87500000,
    depth: "Low",
    manipulationRisk: 72,
    imbalance: "+18% USDC heavy",
    warning: "Price manipulation possible due to low depth"
  },
  {
    id: 2,
    name: "SOL/USDT",
    dex: "Raydium",
    chain: "Solana",
    tvl: 32000000,
    depth: "Medium",
    manipulationRisk: 45,
    imbalance: "+7% SOL heavy",
    warning: "Modest price impact for orders >$100K"
  },
  {
    id: 3,
    name: "AVAX/ETH",
    dex: "Trader Joe",
    chain: "Avalanche",
    tvl: 11000000,
    depth: "Very Low",
    manipulationRisk: 85,
    imbalance: "+32% ETH heavy",
    warning: "Severe pool imbalance, high slippage expected"
  },
  {
    id: 4,
    name: "ARB/USDC",
    dex: "Camelot",
    chain: "Arbitrum",
    tvl: 23000000,
    depth: "Low",
    manipulationRisk: 68,
    imbalance: "+12% ARB heavy",
    warning: "Flash loan vulnerability detected"
  }
];

const getRiskColor = (score: number) => {
  if (score < 30) return "bg-green-500";
  if (score < 60) return "bg-yellow-500";
  return "bg-red-500";
};

const getChainBadgeColor = (chain: string) => {
  switch (chain) {
    case "Ethereum": return "bg-blue-500/10 text-blue-500";
    case "Solana": return "bg-purple-400/10 text-purple-400";
    case "Avalanche": return "bg-red-500/10 text-red-500";
    case "Arbitrum": return "bg-blue-400/10 text-blue-400";
    default: return "bg-gray-500/10 text-gray-500";
  }
};

const getDepthIcon = (depth: string) => {
  switch (depth) {
    case "Very Low": return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case "Low": return <TrendingDown className="h-4 w-4 text-orange-500" />;
    default: return <Info className="h-4 w-4 text-yellow-500" />;
  }
};

const formatTVL = (tvl: number) => {
  return `$${(tvl / 1000000).toFixed(1)}M`;
};

const LiquidityPoolsRisk = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-red-500" />
          Liquidity Pool Risks
        </CardTitle>
        <CardDescription>Monitoring pools with potential exploit vectors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {riskPools.map((pool) => (
            <div key={pool.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{pool.name}</span>
                  <Badge className={getChainBadgeColor(pool.chain)} variant="outline">
                    {pool.chain}
                  </Badge>
                </div>
                <Badge variant="outline">{pool.dex}</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mb-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">TVL:</span>
                  <span className="font-medium">{formatTVL(pool.tvl)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Depth:</span>
                  <div className="flex items-center gap-1">
                    {getDepthIcon(pool.depth)}
                    <span className="font-medium">{pool.depth}</span>
                  </div>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="text-muted-foreground">Imbalance:</span>
                  <span className="font-medium">{pool.imbalance}</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Manipulation Risk</span>
                  <span className="font-medium">{pool.manipulationRisk}%</span>
                </div>
                <Progress 
                  value={pool.manipulationRisk} 
                  className="h-2" 
                  indicatorClassName={getRiskColor(pool.manipulationRisk)} 
                />
              </div>
              
              <div className="mt-3 flex items-start gap-2 text-sm text-red-500 bg-red-500/5 p-2 rounded">
                <AlertTriangle className="h-4 w-4 mt-0.5" />
                <p>{pool.warning}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiquidityPoolsRisk;
