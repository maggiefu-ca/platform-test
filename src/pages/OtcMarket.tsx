
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ScrollText, Search, Filter, BookOpen, BarChart, 
  Download, Users, Clock, ArrowRight, ArrowUpDown, TrendingUp, TrendingDown 
} from "lucide-react";

const OtcMarket = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

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
                  <ScrollText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 font-display">OTC & Private Market Tracking</h2>
                  <p className="text-muted-foreground">
                    Monitor large over-the-counter deals and private market transactions
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className="gap-2 bg-accent hover:bg-accent/90">
                  <BookOpen className="h-4 w-4" />
                  Order Book
                </Button>
                <Button variant="outline" className="gap-2">
                  <BarChart className="h-4 w-4" />
                  Market Data
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
                  placeholder="Search by asset, desk, or price range..." 
                  className="pl-10 h-11 bg-background/50" 
                />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg">
                  <Button 
                    variant={activeTab === 'buy' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveTab('buy')}
                    className="h-9 text-xs font-medium"
                  >
                    Buy Orders
                  </Button>
                  <Button 
                    variant={activeTab === 'sell' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveTab('sell')}
                    className="h-9 text-xs font-medium"
                  >
                    Sell Orders
                  </Button>
                </div>
                
                <Button variant="outline" size="icon" className="h-11 w-11 shrink-0">
                  <Filter size={18} />
                </Button>
                
                <Button variant="outline" size="icon" className="h-11 w-11 shrink-0">
                  <Download size={18} />
                </Button>
              </div>
            </div>
          </GlassCard>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 animate-fade-in">
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowUpDown className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total OTC Volume (24h)</p>
                <h3 className="text-2xl font-semibold">$1.67B</h3>
                <p className="text-xs text-success">+12% from previous day</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Buy Pressure</p>
                <h3 className="text-2xl font-semibold">Strong</h3>
                <p className="text-xs text-success">Institutional accumulation detected</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active OTC Desks</p>
                <h3 className="text-2xl font-semibold">24</h3>
                <p className="text-xs text-accent">6 new desks this week</p>
              </div>
            </GlassCard>
          </div>
          
          {/* OTC Orders Table */}
          <div className="mb-6">
            <h3 className="text-sm font-medium px-1 mb-4 animate-fade-in">
              {activeTab === 'buy' ? 'Active Buy Orders' : 'Active Sell Orders'}
            </h3>
            
            <GlassCard className="overflow-hidden animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Asset</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Size</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Price</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Premium/Discount</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">OTC Desk</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Time</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(activeTab === 'buy' ? buyOrders : sellOrders).map((order, index) => (
                      <tr key={index} className="border-b border-border/10 hover:bg-secondary/20">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <img src={`https://cryptologos.cc/logos/${order.logoUrl}`} alt={order.asset} className="h-6 w-6" />
                            <div>
                              <p className="text-sm font-medium">{order.asset}</p>
                              <p className="text-xs text-muted-foreground">{order.ticker}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm">{order.size}</p>
                          <p className="text-xs text-muted-foreground">${order.value}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium">${order.price}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`flex items-center gap-1 ${order.premium > 0 ? 'text-success' : 'text-destructive'}`}>
                            <span className="text-sm font-medium">{order.premium > 0 ? '+' : ''}{order.premium}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm">{order.desk}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs">{order.time}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-xs px-2 py-1 rounded-full w-fit ${
                            order.type === 'Institutional' ? 'bg-accent/10 text-accent' :
                            order.type === 'Hedge Fund' ? 'bg-primary/10 text-primary' :
                            'bg-warning/10 text-warning'
                          }`}>
                            {order.type}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
          
          {/* Recent Transactions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium px-1 animate-fade-in">Recent Completed Transactions</h3>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                View All <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentTransactions.map((tx, index) => (
                <GlassCard key={index} className="animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={`https://cryptologos.cc/logos/${tx.logoUrl}`} alt={tx.asset} className="h-6 w-6" />
                      <span className="font-medium">{tx.asset}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${tx.type === 'buy' ? 'text-success' : 'text-destructive'}`}>
                      {tx.type === 'buy' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      <span className="text-xs font-medium">
                        {tx.type === 'buy' ? 'Purchase' : 'Sale'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xl font-semibold">{tx.size} {tx.ticker}</p>
                      <p className="text-xs text-muted-foreground">${tx.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${tx.price}</p>
                      <p className={`text-xs ${tx.premium > 0 ? 'text-success' : 'text-destructive'}`}>
                        {tx.premium > 0 ? '+' : ''}{tx.premium}% vs market
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{tx.desk}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{tx.time}</span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sample data
const buyOrders = [
  {
    asset: "Bitcoin",
    ticker: "BTC",
    logoUrl: "bitcoin-btc-logo.png?v=025",
    size: "650 BTC",
    value: "39,000,000",
    price: "60,000",
    premium: 1.2,
    desk: "Cumberland",
    time: "15 minutes ago",
    type: "Institutional"
  },
  {
    asset: "Ethereum",
    ticker: "ETH",
    logoUrl: "ethereum-eth-logo.png?v=025",
    size: "8,500 ETH",
    value: "28,050,000",
    price: "3,300",
    premium: 0.8,
    desk: "Genesis Trading",
    time: "1 hour ago",
    type: "Hedge Fund"
  },
  {
    asset: "Solana",
    ticker: "SOL",
    logoUrl: "solana-sol-logo.png?v=025",
    size: "120,000 SOL",
    value: "16,800,000",
    price: "140",
    premium: 2.1,
    desk: "Wintermute",
    time: "3 hours ago",
    type: "Institutional"
  },
  {
    asset: "Chainlink",
    ticker: "LINK",
    logoUrl: "chainlink-link-logo.png?v=025",
    size: "500,000 LINK",
    value: "9,000,000",
    price: "18",
    premium: 0.5,
    desk: "B2C2",
    time: "6 hours ago",
    type: "Whale"
  },
  {
    asset: "Cardano",
    ticker: "ADA",
    logoUrl: "cardano-ada-logo.png?v=025",
    size: "15,000,000 ADA",
    value: "7,800,000",
    price: "0.52",
    premium: 1.5,
    desk: "GSR",
    time: "8 hours ago",
    type: "Hedge Fund"
  }
];

const sellOrders = [
  {
    asset: "Bitcoin",
    ticker: "BTC",
    logoUrl: "bitcoin-btc-logo.png?v=025",
    size: "420 BTC",
    value: "25,200,000",
    price: "60,000",
    premium: -0.5,
    desk: "Jump Trading",
    time: "30 minutes ago",
    type: "Hedge Fund"
  },
  {
    asset: "Ethereum",
    ticker: "ETH",
    logoUrl: "ethereum-eth-logo.png?v=025",
    size: "12,000 ETH",
    value: "39,600,000",
    price: "3,300",
    premium: -1.2,
    desk: "Three Arrows",
    time: "2 hours ago",
    type: "Institutional"
  },
  {
    asset: "Solana",
    ticker: "SOL",
    logoUrl: "solana-sol-logo.png?v=025",
    size: "85,000 SOL",
    value: "11,900,000",
    price: "140",
    premium: -0.3,
    desk: "Alameda Research",
    time: "4 hours ago",
    type: "Institutional"
  },
  {
    asset: "Ripple",
    ticker: "XRP",
    logoUrl: "xrp-xrp-logo.png?v=025",
    size: "15,000,000 XRP",
    value: "8,400,000",
    price: "0.56",
    premium: -1.8,
    desk: "Galaxy Digital",
    time: "7 hours ago",
    type: "Whale"
  },
  {
    asset: "Polygon",
    ticker: "MATIC",
    logoUrl: "polygon-matic-logo.png?v=025",
    size: "7,500,000 MATIC",
    value: "6,750,000",
    price: "0.90",
    premium: -0.7,
    desk: "DRW Cumberland",
    time: "9 hours ago",
    type: "Hedge Fund"
  }
];

const recentTransactions = [
  {
    asset: "Bitcoin",
    ticker: "BTC",
    logoUrl: "bitcoin-btc-logo.png?v=025",
    size: "550",
    value: "33,000,000",
    price: "60,000",
    premium: 0.8,
    desk: "Cumberland",
    time: "2 hours ago",
    type: "buy"
  },
  {
    asset: "Ethereum",
    ticker: "ETH",
    logoUrl: "ethereum-eth-logo.png?v=025",
    size: "9,200",
    value: "30,360,000",
    price: "3,300",
    premium: -0.5,
    desk: "Genesis Trading",
    time: "5 hours ago",
    type: "sell"
  },
  {
    asset: "Solana",
    ticker: "SOL",
    logoUrl: "solana-sol-logo.png?v=025",
    size: "95,000",
    value: "13,300,000",
    price: "140",
    premium: 1.2,
    desk: "Jump Trading",
    time: "8 hours ago",
    type: "buy"
  },
  {
    asset: "Avalanche",
    ticker: "AVAX",
    logoUrl: "avalanche-avax-logo.png?v=025",
    size: "120,000",
    value: "6,000,000",
    price: "50",
    premium: -0.9,
    desk: "B2C2",
    time: "12 hours ago",
    type: "sell"
  }
];

export default OtcMarket;
