
import React from "react";
import GlassCard from "../ui/GlassCard";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  ExternalLink, 
  LineChart, 
  Activity,
  AlertTriangle, 
  CheckCheck,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WalletSummaryItem = ({ 
  title, 
  value, 
  change, 
  impact 
}: { 
  title: string; 
  value: string; 
  change?: { value: number; direction: "up" | "down" | "neutral" };
  impact?: "high" | "medium" | "low";
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground">{title}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        {change && (
          <span className={cn(
            "text-xs font-medium flex items-center",
            change.direction === "up" ? "text-success" : 
            change.direction === "down" ? "text-destructive" : 
            "text-muted-foreground"
          )}>
            {change.direction === "up" ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : 
             change.direction === "down" ? <ArrowDownRight className="h-3 w-3 mr-0.5" /> : null}
            {change.direction === "up" ? "+" : change.direction === "down" ? "-" : ""}
            {Math.abs(change.value)}%
          </span>
        )}
      </div>
      {impact && (
        <div className={cn(
          "text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center mt-1 w-fit",
          impact === "high" ? "bg-destructive/10 text-destructive" :
          impact === "medium" ? "bg-warning/10 text-warning" :
          "bg-success/10 text-success"
        )}>
          {impact === "high" ? <AlertTriangle className="h-3 w-3 mr-1" /> :
           impact === "medium" ? <Activity className="h-3 w-3 mr-1" /> :
           <CheckCheck className="h-3 w-3 mr-1" />}
          {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
        </div>
      )}
    </div>
  );
};

const InsightItem = ({ 
  title, 
  description,
  icon,
  trend
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
}) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-md hover:bg-secondary/20 transition-colors">
      <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium">{title}</h4>
          {trend && (
            <span className={cn(
              "text-xs font-medium",
              trend === "up" ? "text-success" : 
              trend === "down" ? "text-destructive" : 
              "text-muted-foreground"
            )}>
              {trend === "up" ? <TrendingUp className="h-3 w-3 inline mr-0.5" /> : 
              trend === "down" ? <TrendingDown className="h-3 w-3 inline mr-0.5" /> : null}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

const WalletAnalytics = () => {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-accent" />
          <h3 className="font-medium">Whale Analysis</h3>
        </div>
        <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
          Full Report <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="h-9 w-full mb-4">
          <TabsTrigger value="overview" className="text-xs flex-1">Overview</TabsTrigger>
          <TabsTrigger value="insights" className="text-xs flex-1">AI Insights</TabsTrigger>
          <TabsTrigger value="predictions" className="text-xs flex-1">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WalletSummaryItem 
              title="Active Whales" 
              value="538" 
              change={{ value: 12, direction: "up" }}
            />
            <WalletSummaryItem 
              title="Whale Sentiment" 
              value="Bullish" 
              impact="low"
            />
            <WalletSummaryItem 
              title="Stablecoin Position" 
              value="67%" 
              change={{ value: 5, direction: "down" }}
            />
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium mb-3">Network Distribution</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Ethereum</span>
                  <span className="text-sm font-medium">48%</span>
                </div>
                <Progress value={48} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Bitcoin</span>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Solana</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <Progress value={15} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Others</span>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4 mt-0">
          <div className="space-y-1">
            <InsightItem 
              title="Stablecoin Accumulation"
              description="Top 10 whales increased USDC holdings by 18% in the last 24 hours"
              icon={<BarChart3 className="h-4 w-4" />}
              trend="up"
            />
            <InsightItem 
              title="Exchange Outflows"
              description="Significant BTC withdrawals from exchanges to private wallets"
              icon={<Activity className="h-4 w-4" />}
              trend="up"
            />
            <InsightItem 
              title="Solana Whale Movement"
              description="Large Solana wallets showing decreased selling pressure"
              icon={<LineChart className="h-4 w-4" />}
              trend="neutral"
            />
            <InsightItem 
              title="Cross-Chain Transfers"
              description="Increasing movement of assets from Ethereum to Solana"
              icon={<ArrowUpRight className="h-4 w-4" />}
              trend="up"
            />
            <InsightItem 
              title="Leverage Positions"
              description="Whale wallets have reduced leveraged positions by 12%"
              icon={<AlertTriangle className="h-4 w-4" />}
              trend="down"
            />
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4 mt-0">
          <div className="space-y-4">
            <div className="p-3 rounded-md border border-border/30 bg-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Short-term BTC Price Movement</span>
                <span className="text-xs font-medium text-success">High Confidence</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Based on whale wallet movements, we predict a 8-12% upward movement in BTC over the next 7 days.
              </p>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs">Confidence</span>
                <span className="text-xs font-medium">75%</span>
              </div>
            </div>

            <div className="p-3 rounded-md border border-border/30 bg-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">ETH Accumulation Phase</span>
                <span className="text-xs font-medium text-warning">Medium Confidence</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Ethereum whale wallets are showing signs of accumulation, indicating a potential uptrend within 14 days.
              </p>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: "58%" }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs">Confidence</span>
                <span className="text-xs font-medium">58%</span>
              </div>
            </div>

            <div className="p-3 rounded-md border border-border/30 bg-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Solana Whale Selling</span>
                <span className="text-xs font-medium text-destructive">Low Confidence</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Some large Solana wallets may initiate selling in the next 3-5 days, potentially causing a 5-7% decrease.
              </p>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full" style={{ width: "42%" }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs">Confidence</span>
                <span className="text-xs font-medium">42%</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </GlassCard>
  );
};

export default WalletAnalytics;
