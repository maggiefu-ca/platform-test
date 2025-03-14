
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for front-running activity
const activities = [
  {
    id: 1,
    type: "sandwich",
    victimTx: "0x9b72e...4f1a",
    attackerTx: "0xe31c8...7d2b",
    token: "ETH",
    profit: 0.14,
    time: "2 minutes ago",
    severity: "high",
    details: "Sandwich attack on Uniswap V3 ETH/USDC pair"
  },
  {
    id: 2,
    type: "frontrun",
    victimTx: "0x7f41a...2c5e",
    attackerTx: "0x3a92f...1b8d",
    token: "ARB",
    profit: 235.8,
    time: "7 minutes ago",
    severity: "medium",
    details: "Front-running a large swap on Arbitrum"
  },
  {
    id: 3,
    type: "backrun",
    victimTx: "0x2d58c...9a3f",
    attackerTx: "0xf82e1...6c4a",
    token: "USDC",
    profit: 421.5,
    time: "12 minutes ago",
    severity: "medium",
    details: "MEV bot back-running a large order"
  },
  {
    id: 4,
    type: "sandwich",
    victimTx: "0xa1f3e...8d7c",
    attackerTx: "0x6c92a...4e1f",
    token: "ETH",
    profit: 0.32,
    time: "23 minutes ago",
    severity: "high",
    details: "Multi-transaction sandwich on Balancer pool"
  },
  {
    id: 5,
    type: "frontrun",
    victimTx: "0x4e28f...7b9a",
    attackerTx: "0xd19a3...2c8e",
    token: "LINK",
    profit: 189.7,
    time: "34 minutes ago",
    severity: "low",
    details: "Front-running a swap on SushiSwap"
  }
];

// Function to get badge color based on severity
const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high": return "bg-red-500/10 text-red-500";
    case "medium": return "bg-yellow-500/10 text-yellow-500";
    default: return "bg-green-500/10 text-green-500";
  }
};

// Function to get badge color based on attack type
const getTypeColor = (type: string) => {
  switch (type) {
    case "sandwich": return "bg-purple-500/10 text-purple-500";
    case "frontrun": return "bg-blue-500/10 text-blue-500";
    default: return "bg-orange-500/10 text-orange-500";
  }
};

const FrontRunningActivityFeed = () => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id} className="border hover:bg-accent/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge className={getTypeColor(activity.type)}>
                  {activity.type}
                </Badge>
                <Badge className={getSeverityColor(activity.severity)}>
                  {activity.severity} severity
                </Badge>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </div>
            
            <p className="text-sm mb-3">{activity.details}</p>
            
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div>
                <p className="text-muted-foreground mb-1">Victim TX</p>
                <div className="font-mono flex items-center gap-1">
                  {activity.victimTx}
                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Attacker TX</p>
                <div className="font-mono flex items-center gap-1">
                  {activity.attackerTx}
                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Token: <strong>{activity.token}</strong></span>
              <span className="text-green-500 font-medium">
                Profit: {typeof activity.profit === 'number' && activity.profit < 1 
                  ? activity.profit.toFixed(3) 
                  : activity.profit.toFixed(1)} {activity.token}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FrontRunningActivityFeed;
