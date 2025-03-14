
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for top MEV bots
const mevBots = [
  {
    id: 1,
    address: "0x7a16f...92b4",
    transactions: 2453,
    profit: 78.45,
    avgGasPrice: 89.2,
    chain: "Ethereum",
    lastSeen: "5 mins ago"
  },
  {
    id: 2,
    address: "0x3b72c...45a8",
    transactions: 1837,
    profit: 45.32,
    avgGasPrice: 94.5,
    chain: "Arbitrum",
    lastSeen: "12 mins ago"
  },
  {
    id: 3,
    address: "0x9fe1a...76c2",
    transactions: 1246,
    profit: 67.91,
    avgGasPrice: 78.4,
    chain: "Optimism",
    lastSeen: "37 mins ago"
  },
  {
    id: 4,
    address: "0xe28f5...31a7",
    transactions: 985,
    profit: 32.67,
    avgGasPrice: 103.7,
    chain: "Ethereum",
    lastSeen: "1 hour ago"
  },
  {
    id: 5,
    address: "0x5d29c...8f42",
    transactions: 762,
    profit: 24.18,
    avgGasPrice: 82.3,
    chain: "Polygon",
    lastSeen: "1 hour ago"
  }
];

// Function to get the appropriate color for the chain badge
const getChainBadgeColor = (chain: string) => {
  switch (chain) {
    case "Ethereum": return "bg-blue-500/10 text-blue-500";
    case "Arbitrum": return "bg-blue-400/10 text-blue-400";
    case "Optimism": return "bg-red-400/10 text-red-400";
    case "Polygon": return "bg-purple-500/10 text-purple-500";
    default: return "bg-gray-500/10 text-gray-500";
  }
};

const MevBotsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">Txs</TableHead>
          <TableHead className="text-right">Profit (ETH)</TableHead>
          <TableHead className="text-right">Avg Gas (gwei)</TableHead>
          <TableHead>Chain</TableHead>
          <TableHead>Last Seen</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mevBots.map((bot) => (
          <TableRow key={bot.id}>
            <TableCell className="font-mono text-xs">{bot.address}</TableCell>
            <TableCell className="text-right">{bot.transactions.toLocaleString()}</TableCell>
            <TableCell className="text-right text-green-500 font-medium">
              {bot.profit.toFixed(2)}
            </TableCell>
            <TableCell className="text-right">{bot.avgGasPrice.toFixed(1)}</TableCell>
            <TableCell>
              <Badge className={getChainBadgeColor(bot.chain)} variant="outline">
                {bot.chain}
              </Badge>
            </TableCell>
            <TableCell>{bot.lastSeen}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MevBotsTable;
