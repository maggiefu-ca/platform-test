
import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import WhaleActivityCard from "@/components/dashboard/WhaleActivityCard";
import PredictionCard from "@/components/dashboard/PredictionCard";
import WhaleTable from "@/components/dashboard/WhaleTable";
import TrendChart from "@/components/dashboard/TrendChart";
import WalletAnalytics from "@/components/dashboard/WalletAnalytics";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BarChart4, LineChart } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  const [showCta, setShowCta] = React.useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <Header />
      <Sidebar />
      
      <main className={`pt-[76px] ${isMobile ? "pl-0" : "pl-64"} transition-all duration-300`}>
        <div className="p-6">
          {/* Title Section */}
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-display">Whale Wallet Dashboard</h2>
                <p className="text-muted-foreground">
                  Track and predict movements of large crypto holders using AI-powered analytics
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className="gap-2 bg-accent hover:bg-accent/90">
                  <Brain className="h-4 w-4" />
                  AI Prediction Center
                </Button>
                <Button variant="outline" className="gap-2">
                  <BarChart4 className="h-4 w-4" />
                  Advanced Analytics
                </Button>
              </div>
            </div>
          </div>
          
          {/* CTA Section - Subscription Pitch */}
          {showCta && (
            <div className="mb-6 rounded-lg backdrop-blur-md bg-accent/10 border border-accent/20 p-4 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-1 text-accent">Upgrade to Pro for Full Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Get access to all premium features including AI predictions, whale wallet alerts, and detailed analysis.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" onClick={() => setShowCta(false)}>
                    Dismiss
                  </Button>
                  <Button className="gap-1 bg-accent hover:bg-accent/90">
                    Upgrade to Pro
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recent Whale Activity Cards */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-sm font-medium px-1 animate-fade-in">Recent Whale Activity</h3>
              <WhaleActivityCard
                type="buy"
                asset="ETH"
                amount="4,500"
                value="14,300,000"
                time="15 minutes ago"
                address="0x742f...c391"
                network="ethereum"
                impact="high"
              />
              <WhaleActivityCard
                type="sell"
                asset="BTC"
                amount="215"
                value="12,800,000"
                time="2 hours ago"
                address="bc1qx...pf45"
                network="bitcoin"
                impact="medium"
              />
              <WhaleActivityCard
                type="transfer"
                asset="SOL"
                amount="82,000"
                value="11,390,000"
                time="4 hours ago"
                address="5Vjwd...8pZK"
                network="solana"
                impact="low"
              />
            </div>

            {/* AI Prediction Cards */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-sm font-medium px-1 animate-fade-in">AI-Powered Predictions</h3>
              <PredictionCard
                title="BTC Rally Incoming"
                description="Multiple whale wallets are accumulating BTC, signaling a potential 15% price increase."
                confidence={85}
                impact="positive"
                timeframe="7-14 days"
              />
              <PredictionCard
                title="ETH Stablecoin Conversion"
                description="Large Ethereum holders are converting to stablecoins, suggesting caution ahead."
                confidence={72}
                impact="negative"
                timeframe="3-5 days"
              />
              <PredictionCard
                title="Cross-chain Movement"
                description="Whales shifting assets from Ethereum to Solana indicate a potential SOL price increase."
                confidence={61}
                impact="neutral"
                timeframe="1-3 weeks"
              />
            </div>

            {/* Wallet Analytics */}
            <div className="md:col-span-1">
              <WalletAnalytics />
            </div>

            {/* Trend Chart - Full Width */}
            <div className="md:col-span-3">
              <TrendChart />
            </div>

            {/* Whale Table - Full Width */}
            <div className="md:col-span-3">
              <WhaleTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
