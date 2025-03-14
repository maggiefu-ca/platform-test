
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, TrendingUpIcon, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for bridge transfers
const bridgeTransfers = [
  {
    id: 1,
    fromChain: "Ethereum",
    toChain: "Polygon",
    token: "USDC",
    amount: 2500000,
    timestamp: "2023-10-15T14:32:00Z",
    txHash: "0x7a2d...3e9f",
    significance: "high",
    priceImpact: "+0.8%"
  },
  {
    id: 2,
    fromChain: "Arbitrum",
    toChain: "Ethereum",
    token: "ETH",
    amount: 1200,
    timestamp: "2023-10-15T12:45:00Z",
    txHash: "0x3b5c...9d2a",
    significance: "medium",
    priceImpact: "+0.3%"
  },
  {
    id: 3,
    fromChain: "Avalanche",
    toChain: "BNB Chain",
    token: "USDT",
    amount: 5000000,
    timestamp: "2023-10-15T09:12:00Z",
    txHash: "0x8e4f...1c7b",
    significance: "high",
    priceImpact: "+1.2%"
  },
  {
    id: 4,
    fromChain: "Optimism",
    toChain: "Base",
    token: "DAI",
    amount: 750000,
    timestamp: "2023-10-15T07:29:00Z",
    txHash: "0x2d9a...7e3c",
    significance: "low",
    priceImpact: "+0.1%"
  },
  {
    id: 5,
    fromChain: "Solana",
    toChain: "Ethereum",
    token: "USDC",
    amount: 3800000,
    timestamp: "2023-10-14T23:58:00Z",
    txHash: "0x6f1b...4a8d",
    significance: "high",
    priceImpact: "+0.9%"
  }
];

const getChainBadgeColor = (chain: string) => {
  switch (chain) {
    case "Ethereum": return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    case "Polygon": return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
    case "Arbitrum": return "bg-blue-400/10 text-blue-400 hover:bg-blue-400/20";
    case "Avalanche": return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
    case "BNB Chain": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
    case "Optimism": return "bg-red-400/10 text-red-400 hover:bg-red-400/20";
    case "Base": return "bg-blue-300/10 text-blue-300 hover:bg-blue-300/20";
    case "Solana": return "bg-purple-400/10 text-purple-400 hover:bg-purple-400/20";
    default: return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
  }
};

const getSignificanceIcon = (significance: string) => {
  switch (significance) {
    case "high": return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case "medium": return <BarChart3 className="h-4 w-4 text-orange-500" />;
    default: return <TrendingUpIcon className="h-4 w-4 text-green-500" />;
  }
};

const formatAmount = (amount: number, token: string) => {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(2)}M ${token}`;
  } else if (amount >= 1000) {
    return `${(amount / 1000).toFixed(2)}K ${token}`;
  } else {
    return `${amount} ${token}`;
  }
};

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const BridgeTransferTracker = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Large Bridge Transfers</CardTitle>
        <CardDescription>Monitoring significant cross-chain token movements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bridgeTransfers.map((transfer) => (
            <div key={transfer.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getSignificanceIcon(transfer.significance)}
                  <span className="font-medium">{formatAmount(transfer.amount, transfer.token)}</span>
                  <span className="text-muted-foreground text-sm">
                    {transfer.priceImpact.startsWith('+') && (
                      <span className="text-green-500">{transfer.priceImpact}</span>
                    )}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{formatTimestamp(transfer.timestamp)}</span>
              </div>
              
              <div className="flex items-center gap-1 mb-2">
                <Badge className={getChainBadgeColor(transfer.fromChain)} variant="outline">
                  {transfer.fromChain}
                </Badge>
                <ArrowRightIcon className="h-3.5 w-3.5 text-muted-foreground mx-1" />
                <Badge className={getChainBadgeColor(transfer.toChain)} variant="outline">
                  {transfer.toChain}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="text-muted-foreground">TX: {transfer.txHash}</span>
                <Button variant="ghost" size="sm" className="h-7">
                  Track
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BridgeTransferTracker;
