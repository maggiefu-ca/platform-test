
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Wallet, Search, Filter, ArrowUpDown, Brain, 
  AlertTriangle, TrendingUp, TrendingDown, ArrowRight 
} from "lucide-react";
import WhaleActivityCard from "@/components/dashboard/WhaleActivityCard";

const WhaleWallets = () => {
  const isMobile = useIsMobile();
  const [activeNetwork, setActiveNetwork] = useState<'all' | 'ethereum' | 'bitcoin' | 'solana'>('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <Header />
      <Sidebar />
      
      <main className={`pt-[76px] ${isMobile ? "pl-0" : "pl-64"} transition-all duration-300`}>
        <div className="p-6">
          {/* Title Section */}
          <div className="mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 font-display">Whale Wallet Tracking</h2>
                  <p className="text-muted-foreground">
                    Monitor and analyze movements of large crypto holders
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className="gap-2 bg-accent hover:bg-accent/90">
                  <Brain className="h-4 w-4" />
                  Predict Movements
                </Button>
                <Button variant="outline" className="gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Recent Activity
                </Button>
              </div>
            </div>
          </div>
          
          {/* Filter Section */}
          <GlassCard className="mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Search size={18} />
                </div>
                <Input 
                  placeholder="Search by wallet address, label, or transaction hash..." 
                  className="pl-10 h-11 bg-background/50" 
                />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg">
                  <Button 
                    variant={activeNetwork === 'all' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveNetwork('all')}
                    className="h-9 text-xs font-medium"
                  >
                    All Networks
                  </Button>
                  <Button 
                    variant={activeNetwork === 'ethereum' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveNetwork('ethereum')}
                    className="h-9 text-xs font-medium"
                  >
                    Ethereum
                  </Button>
                  <Button 
                    variant={activeNetwork === 'bitcoin' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveNetwork('bitcoin')}
                    className="h-9 text-xs font-medium"
                  >
                    Bitcoin
                  </Button>
                  <Button 
                    variant={activeNetwork === 'solana' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveNetwork('solana')}
                    className="h-9 text-xs font-medium"
                  >
                    Solana
                  </Button>
                </div>
                
                <Button variant="outline" size="icon" className="h-11 w-11 shrink-0">
                  <Filter size={18} />
                </Button>
              </div>
            </div>
          </GlassCard>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 animate-fade-in">
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accumulation Signal</p>
                <h3 className="text-2xl font-semibold">Strong Buy</h3>
                <p className="text-xs text-success">+23% whale accumulation this week</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Distribution Signal</p>
                <h3 className="text-2xl font-semibold">Minor Sell</h3>
                <p className="text-xs text-destructive">Small wallets selling to whales</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Market Alert</p>
                <h3 className="text-2xl font-semibold">Coinbase Outflows</h3>
                <p className="text-xs text-warning">Large BTC outflows detected</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Top Whale Movements & Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium px-1 mb-4 animate-fade-in">Top Whale Movements</h3>
              <div className="space-y-4">
                <WhaleTable />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium px-1 mb-4 animate-fade-in">Recent Activity</h3>
              <div className="space-y-4">
                <WhaleActivityCard
                  type="buy"
                  asset="ETH"
                  amount="6,200"
                  value="19,800,000"
                  time="5 minutes ago"
                  address="0x81e...f912"
                  network="ethereum"
                  impact="high"
                />
                <WhaleActivityCard
                  type="sell"
                  asset="BTC"
                  amount="310"
                  value="18,500,000"
                  time="42 minutes ago"
                  address="bc1qa...pf45"
                  network="bitcoin"
                  impact="medium"
                />
                <WhaleActivityCard
                  type="transfer"
                  asset="SOL"
                  amount="140,000"
                  value="15,900,000"
                  time="2 hours ago"
                  address="7Vjwd...9pZK"
                  network="solana"
                  impact="low"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="ghost" className="text-xs gap-1">
                  View All Activity <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Custom Whale Table Component
const WhaleTable = () => {
  return (
    <GlassCard className="overflow-hidden animate-fade-in">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/40">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Wallet</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Network</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Assets</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Value</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">24h Change</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {whaleData.map((whale, index) => (
              <tr key={index} className="border-b border-border/10 hover:bg-secondary/20">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{whale.label}</p>
                      <p className="text-xs text-muted-foreground">{whale.address}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <img src={`https://cryptologos.cc/logos/${whale.networkIcon}`} alt={whale.network} className="h-4 w-4" />
                    <span className="text-sm">{whale.network}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm">{whale.assets}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium">${whale.value}</p>
                </td>
                <td className="px-4 py-3">
                  <div className={`flex items-center gap-1 ${whale.change > 0 ? 'text-success' : 'text-destructive'}`}>
                    {whale.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    <span className="text-sm font-medium">{whale.change > 0 ? '+' : ''}{whale.change}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className={`text-xs px-2 py-1 rounded-full w-fit ${
                    whale.status === 'Accumulating' ? 'bg-success/10 text-success' :
                    whale.status === 'Distributing' ? 'bg-destructive/10 text-destructive' :
                    'bg-warning/10 text-warning'
                  }`}>
                    {whale.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

// Sample whale data
const whaleData = [
  {
    label: "Binance Cold Wallet",
    address: "0x28C6c06298d514Db089934071355E5743bf21d60",
    network: "Ethereum",
    networkIcon: "ethereum-eth-logo.png?v=025",
    assets: "ETH, USDT, USDC",
    value: "2,145,789,000",
    change: 0.8,
    status: "Accumulating"
  },
  {
    label: "Jump Trading",
    address: "bc1qm34lsc65zpw79lhee69rgen7v77k3u7l0mypyr",
    network: "Bitcoin",
    networkIcon: "bitcoin-btc-logo.png?v=025",
    assets: "BTC",
    value: "893,450,000",
    change: -2.3,
    status: "Distributing"
  },
  {
    label: "Three Arrows Capital",
    address: "5VadF7gVx5BZcMcFWsqhoJVmGv1q3LSJT8GR2xe7BF8s",
    network: "Solana",
    networkIcon: "solana-sol-logo.png?v=025",
    assets: "SOL, RAY, SRM",
    value: "412,390,000",
    change: 5.7,
    status: "Accumulating"
  },
  {
    label: "Alameda Research",
    address: "0x93c08a3168ce08a739f3f17ec4c062aa61c142c6",
    network: "Ethereum",
    networkIcon: "ethereum-eth-logo.png?v=025",
    assets: "ETH, LINK, UNI",
    value: "743,210,000",
    change: -1.2,
    status: "Holding"
  },
  {
    label: "Wintermute",
    address: "bc1q9d8u7calnd6mtrvx8z4m0zcqxtrn95p8ef2m3w",
    network: "Bitcoin",
    networkIcon: "bitcoin-btc-logo.png?v=025",
    assets: "BTC, ETH",
    value: "528,670,000",
    change: 3.1,
    status: "Accumulating"
  }
];

export default WhaleWallets;
