
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data for sandwich attacks
const sandwichAttacks = [
  {
    id: 1,
    pair: "ETH/USDC",
    dex: "Uniswap V3",
    frontTx: "0x7b92e...4f1a",
    backTx: "0xe31c8...7d2b",
    victimSlippage: 4.8,
    profit: 0.31,
    time: "3 mins ago",
    type: "Buy-high sell-low"
  },
  {
    id: 2,
    pair: "WBTC/ETH",
    dex: "SushiSwap",
    frontTx: "0x3a92f...1b8d",
    backTx: "0x7f41a...2c5e",
    victimSlippage: 3.2,
    profit: 0.18,
    time: "8 mins ago",
    type: "Buy-high sell-low"
  },
  {
    id: 3,
    pair: "ARB/USDC",
    dex: "Camelot",
    frontTx: "0xf82e1...6c4a",
    backTx: "0x2d58c...9a3f",
    victimSlippage: 5.9,
    profit: 0.47,
    time: "15 mins ago",
    type: "Buy-low sell-high"
  },
  {
    id: 4,
    pair: "LINK/ETH",
    dex: "Uniswap V2",
    frontTx: "0x6c92a...4e1f",
    backTx: "0xa1f3e...8d7c",
    victimSlippage: 2.7,
    profit: 0.12,
    time: "27 mins ago",
    type: "Buy-high sell-low"
  },
  {
    id: 5,
    pair: "MATIC/USDT",
    dex: "QuickSwap",
    frontTx: "0xd19a3...2c8e",
    backTx: "0x4e28f...7b9a",
    victimSlippage: 6.2,
    profit: 0.52,
    time: "42 mins ago",
    type: "Buy-low sell-high"
  }
];

// Function to get the slippage indicator color based on the slippage value
const getSlippageColor = (slippage: number) => {
  if (slippage < 3) return "bg-yellow-500";
  if (slippage < 5) return "bg-orange-500";
  return "bg-red-500";
};

const getDexBadgeColor = (dex: string) => {
  switch (dex) {
    case "Uniswap V3": return "bg-pink-500/10 text-pink-500";
    case "Uniswap V2": return "bg-pink-400/10 text-pink-400";
    case "SushiSwap": return "bg-blue-500/10 text-blue-500";
    case "Camelot": return "bg-purple-500/10 text-purple-500";
    case "QuickSwap": return "bg-blue-400/10 text-blue-400";
    default: return "bg-gray-500/10 text-gray-500";
  }
};

const SandwichAttackMonitor = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold mb-1">27</div>
            <div className="text-muted-foreground text-sm">Attacks today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold mb-1 text-green-500">5.3 ETH</div>
            <div className="text-muted-foreground text-sm">Extracted value (24h)</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold mb-1 text-red-500">4.2%</div>
            <div className="text-muted-foreground text-sm">Average victim slippage</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="p-4 pt-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pair</TableHead>
                  <TableHead>DEX</TableHead>
                  <TableHead className="text-right">Victim Slippage</TableHead>
                  <TableHead className="text-right">Profit (ETH)</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sandwichAttacks.map((attack) => (
                  <TableRow key={attack.id}>
                    <TableCell className="font-medium">{attack.pair}</TableCell>
                    <TableCell>
                      <Badge className={getDexBadgeColor(attack.dex)} variant="outline">
                        {attack.dex}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-col">
                        <span className="text-red-500">{attack.victimSlippage.toFixed(1)}%</span>
                        <Progress
                          value={attack.victimSlippage * 10}
                          className="h-1 w-16 ml-auto"
                          indicatorClassName={getSlippageColor(attack.victimSlippage)}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-green-500 font-medium">
                      {attack.profit.toFixed(3)}
                    </TableCell>
                    <TableCell className="text-xs">{attack.type}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{attack.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SandwichAttackMonitor;
