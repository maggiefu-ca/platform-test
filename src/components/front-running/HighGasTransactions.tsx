
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Flame, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for high gas transactions
const highGasTransactions = [
  {
    id: 1,
    txHash: "0xe31c8...7d2b",
    gasPrice: 324.5,
    gasLimit: 250000,
    totalGasFee: 1.82,
    method: "swapExactTokensForTokens",
    contract: "Uniswap V3 Router",
    time: "1 min ago",
    risk: "medium",
    warning: "Unusual gas price for current network conditions"
  },
  {
    id: 2,
    txHash: "0x7f41a...2c5e",
    gasPrice: 452.8,
    gasLimit: 530000,
    totalGasFee: 5.36,
    method: "multicall",
    contract: "1inch Router",
    time: "3 mins ago",
    risk: "high",
    warning: "Potential gas price manipulation"
  },
  {
    id: 3,
    txHash: "0xf82e1...6c4a",
    gasPrice: 287.2,
    gasLimit: 180000,
    totalGasFee: 1.15,
    method: "flashLoan",
    contract: "Aave V3",
    time: "7 mins ago",
    risk: "medium",
    warning: "Flash loan with high gas price"
  },
  {
    id: 4,
    txHash: "0xa1f3e...8d7c",
    gasPrice: 512.6,
    gasLimit: 420000,
    totalGasFee: 4.82,
    method: "executeMetaTransaction",
    contract: "Unknown Contract",
    time: "12 mins ago",
    risk: "high",
    warning: "Unknown contract with unusually high gas"
  },
  {
    id: 5,
    txHash: "0x4e28f...7b9a",
    gasPrice: 198.3,
    gasLimit: 320000,
    totalGasFee: 1.41,
    method: "transfer",
    contract: "USDC",
    time: "18 mins ago",
    risk: "low",
    warning: "Higher than average gas for token transfer"
  }
];

// Function to get risk badge color
const getRiskBadgeColor = (risk: string) => {
  switch (risk) {
    case "high": return "bg-red-500/10 text-red-500";
    case "medium": return "bg-yellow-500/10 text-yellow-500";
    default: return "bg-green-500/10 text-green-500";
  }
};

// Function to get the warning icon based on risk level
const getWarningIcon = (risk: string) => {
  switch (risk) {
    case "high": return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case "medium": return <Flame className="h-4 w-4 text-yellow-500" />;
    default: return <Shield className="h-4 w-4 text-green-500" />;
  }
};

const HighGasTransactions = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold mb-1">312.8 gwei</div>
            <div className="text-muted-foreground text-sm">Average gas price (1h)</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold mb-1">+47%</div>
            <div className="text-muted-foreground text-sm">Gas price increase (24h)</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold mb-1">18</div>
            <div className="text-muted-foreground text-sm">Potential exploit attempts</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="p-4 pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Gas Price (gwei)</TableHead>
                <TableHead className="text-right">Gas Limit</TableHead>
                <TableHead className="text-right">Total Fee (ETH)</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {highGasTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-mono text-xs">{tx.txHash}</TableCell>
                  <TableCell className="text-sm">
                    <div>{tx.method}</div>
                    <div className="text-xs text-muted-foreground">{tx.contract}</div>
                  </TableCell>
                  <TableCell className="text-right font-medium">{tx.gasPrice.toFixed(1)}</TableCell>
                  <TableCell className="text-right">{tx.gasLimit.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-medium">{tx.totalGasFee.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge className={getRiskBadgeColor(tx.risk)} variant="outline">
                      {tx.risk}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{tx.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-4 space-y-2">
            {highGasTransactions.map((tx) => (
              <div key={`warning-${tx.id}`} className="flex items-start gap-2 text-sm p-2 rounded bg-accent/50">
                {getWarningIcon(tx.risk)}
                <div>
                  <span className="font-mono text-xs">{tx.txHash}</span>: {tx.warning}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HighGasTransactions;
