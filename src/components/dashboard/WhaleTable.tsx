
import React from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { 
  ArrowUpDown, 
  ExternalLink,
  TrendingUp,
  TrendingDown,
  CircleDollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GlassCard from "../ui/GlassCard";

interface WhaleWallet {
  id: string;
  address: string;
  network: "ethereum" | "solana" | "bitcoin";
  balance: string;
  value: string;
  sentiment: "bullish" | "bearish" | "neutral";
  lastActivity: string;
  change24h: number;
  stablecoinRatio: number;
  label?: string;
}

// Sample data for the table
const whaleWallets: WhaleWallet[] = [
  {
    id: "1",
    address: "0x8c79...e372",
    network: "ethereum",
    balance: "42,500 ETH",
    value: "$135,600,000",
    sentiment: "bullish",
    lastActivity: "2 hours ago",
    change24h: 5.3,
    stablecoinRatio: 0.32,
    label: "Binance Cold Wallet"
  },
  {
    id: "2",
    address: "0xf92d...ab14",
    network: "ethereum",
    balance: "18,245 ETH",
    value: "$58,200,000",
    sentiment: "bearish",
    lastActivity: "15 minutes ago",
    change24h: -2.1,
    stablecoinRatio: 0.67,
    label: "Likely Fund"
  },
  {
    id: "3",
    address: "bc1qx...pf45",
    network: "bitcoin",
    balance: "1,250 BTC",
    value: "$83,750,000",
    sentiment: "bullish",
    lastActivity: "1 day ago",
    change24h: 0.8,
    stablecoinRatio: 0.12,
  },
  {
    id: "4",
    address: "5Vjwd...8pZK",
    network: "solana",
    balance: "860,000 SOL",
    value: "$118,680,000",
    sentiment: "neutral",
    lastActivity: "4 hours ago",
    change24h: 0.2,
    stablecoinRatio: 0.45,
    label: "Jump Trading"
  },
  {
    id: "5",
    address: "0x742f...c391",
    network: "ethereum",
    balance: "12,600 ETH",
    value: "$40,320,000",
    sentiment: "bearish",
    lastActivity: "30 minutes ago",
    change24h: -1.5,
    stablecoinRatio: 0.78,
  }
];

const networkIcons = {
  ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
  solana: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
  bitcoin: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025"
};

const WhaleTable = () => {
  return (
    <GlassCard className="overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Top Whale Wallets</h3>
        <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
          View All <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>
      <div className="overflow-auto rounded-md border border-border/40">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Wallet</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Sentiment 
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Last 24h
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Stablecoin Ratio
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {whaleWallets.map((wallet) => (
              <TableRow key={wallet.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full flex items-center justify-center bg-secondary">
                      <img 
                        src={networkIcons[wallet.network]} 
                        alt={wallet.network} 
                        className="h-4 w-4 object-contain" 
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{wallet.address}</div>
                      {wallet.label && (
                        <div className="text-xs text-muted-foreground">{wallet.label}</div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-sm">{wallet.balance}</div>
                    <div className="text-xs text-muted-foreground">{wallet.value}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                    wallet.sentiment === "bullish" ? "bg-success/10 text-success" :
                    wallet.sentiment === "bearish" ? "bg-destructive/10 text-destructive" :
                    "bg-secondary text-muted-foreground"
                  )}>
                    {wallet.sentiment === "bullish" ? <TrendingUp className="h-3 w-3" /> : 
                     wallet.sentiment === "bearish" ? <TrendingDown className="h-3 w-3" /> : 
                     <CircleDollarSign className="h-3 w-3" />}
                    {wallet.sentiment.charAt(0).toUpperCase() + wallet.sentiment.slice(1)}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={cn(
                    "font-medium",
                    wallet.change24h > 0 ? "text-success" :
                    wallet.change24h < 0 ? "text-destructive" :
                    "text-muted-foreground"
                  )}>
                    {wallet.change24h > 0 ? "+" : ""}{wallet.change24h}%
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          wallet.stablecoinRatio >= 0.6 ? "bg-destructive" : 
                          wallet.stablecoinRatio >= 0.3 ? "bg-warning" : 
                          "bg-success"
                        )}
                        style={{ width: `${wallet.stablecoinRatio * 100}%` }}
                      />
                    </div>
                    <span className="text-xs">{(wallet.stablecoinRatio * 100).toFixed(0)}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="ghost" className="h-8 px-3 text-xs">
                    Track
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </GlassCard>
  );
};

export default WhaleTable;
