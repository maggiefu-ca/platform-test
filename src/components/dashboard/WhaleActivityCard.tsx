
import React from "react";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface WhaleActivityProps {
  type: "buy" | "sell" | "transfer";
  asset: string;
  amount: string;
  value: string;
  time: string;
  address: string;
  network: "ethereum" | "solana" | "bitcoin";
  impact: "high" | "medium" | "low";
}

const networkIcons = {
  ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
  solana: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
  bitcoin: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025"
};

const impactColors = {
  high: "text-destructive",
  medium: "text-warning",
  low: "text-success"
};

const typeIcons = {
  buy: <TrendingUp className="h-4 w-4 text-success" />,
  sell: <TrendingDown className="h-4 w-4 text-destructive" />,
  transfer: <Clock className="h-4 w-4 text-warning" />
};

const WhaleActivityCard: React.FC<WhaleActivityProps> = ({
  type,
  asset,
  amount,
  value,
  time,
  address,
  network,
  impact
}) => {
  return (
    <GlassCard className="overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center">
            {typeIcons[type]}
          </div>
          <div>
            <span className="font-medium text-sm">
              {type === "buy" ? "Whale Purchase" : type === "sell" ? "Whale Selling" : "Whale Transfer"}
            </span>
            <p className="text-xs text-muted-foreground">
              {time} · <span className={impactColors[impact]}>Impact: {impact}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img 
            src={networkIcons[network]} 
            alt={network} 
            className="h-5 w-5 object-contain" 
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-semibold mb-1">{amount} <span className="text-muted-foreground">{asset}</span></div>
          <div className="text-sm text-muted-foreground">${value}</div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Wallet</span>
          <span className="text-xs font-medium truncate max-w-[150px]">{address}</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default WhaleActivityCard;
