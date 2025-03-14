
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, Search, Filter, Image, BarChart4, 
  Download, AlertCircle, ArrowRight, Zap, 
  TrendingUp, TrendingDown, RotateCw
} from "lucide-react";

const NftTracking = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<'all' | 'art' | 'collectibles' | 'gaming'>('all');

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
                  <Image className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 font-display">NFT Wash Trading & Insider Tracking</h2>
                  <p className="text-muted-foreground">
                    Monitor NFT market for manipulations and insider activities
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className="gap-2 bg-accent hover:bg-accent/90">
                  <AlertCircle className="h-4 w-4" />
                  Wash Trading Alerts
                </Button>
                <Button variant="outline" className="gap-2">
                  <BarChart4 className="h-4 w-4" />
                  Market Analytics
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
                  placeholder="Search collections, creators, or wallet addresses..." 
                  className="pl-10 h-11 bg-background/50" 
                />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg">
                  <Button 
                    variant={activeCategory === 'all' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveCategory('all')}
                    className="h-9 text-xs font-medium"
                  >
                    All
                  </Button>
                  <Button 
                    variant={activeCategory === 'art' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveCategory('art')}
                    className="h-9 text-xs font-medium"
                  >
                    Art
                  </Button>
                  <Button 
                    variant={activeCategory === 'collectibles' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveCategory('collectibles')}
                    className="h-9 text-xs font-medium"
                  >
                    Collectibles
                  </Button>
                  <Button 
                    variant={activeCategory === 'gaming' ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setActiveCategory('gaming')}
                    className="h-9 text-xs font-medium"
                  >
                    Gaming
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
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <RotateCw className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Wash Trading Detected</p>
                <h3 className="text-2xl font-semibold">143 Collections</h3>
                <p className="text-xs text-destructive">+28% from last week</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Insider Trading</p>
                <h3 className="text-2xl font-semibold">37 Wallets</h3>
                <p className="text-xs text-warning">Linked to NFT team members</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Clean Collections</p>
                <h3 className="text-2xl font-semibold">652 Verified</h3>
                <p className="text-xs text-primary">No suspicious activity detected</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Wash Trading Detection Table */}
          <div className="mb-6">
            <h3 className="text-sm font-medium px-1 mb-4 animate-fade-in">
              Top Wash Trading Collections
            </h3>
            
            <GlassCard className="overflow-hidden animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Collection</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Floor Price</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Wash %</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Volume (Fake)</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Volume (Real)</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Wallets</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Alert Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {washTradingData.map((collection, index) => (
                      <tr key={index} className="border-b border-border/10 hover:bg-secondary/20">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <img src={collection.image} alt={collection.name} className="h-10 w-10 rounded-md object-cover" />
                            <div>
                              <p className="text-sm font-medium">{collection.name}</p>
                              <div className="flex items-center gap-1">
                                <img src={collection.chainLogo} alt={collection.chain} className="h-3 w-3" />
                                <p className="text-xs text-muted-foreground">{collection.chain}</p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <img src={collection.chainLogo} alt={collection.chain} className="h-3 w-3" />
                            <span className="text-sm font-medium">{collection.floorPrice}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">${collection.floorPriceUsd}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-destructive font-medium">
                            {collection.washPercentage}%
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <TrendingDown className="h-3 w-3 text-destructive" />
                            <span className="text-sm">{collection.fakeVolume}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">${collection.fakeVolumeUsd}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 text-success" />
                            <span className="text-sm">{collection.realVolume}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">${collection.realVolumeUsd}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm">{collection.suspiciousWallets} suspicious</p>
                          <p className="text-xs text-muted-foreground">of {collection.totalWallets} total</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-xs px-2 py-1 rounded-full w-fit ${
                            collection.alertLevel === 'High' ? 'bg-destructive/20 text-destructive' :
                            collection.alertLevel === 'Medium' ? 'bg-warning/20 text-warning' :
                            'bg-success/20 text-success'
                          }`}>
                            {collection.alertLevel}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
          
          {/* Insider Trading Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium px-1 animate-fade-in">Recent Insider Trading Alerts</h3>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                View All <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {insiderTradingData.map((alert, index) => (
                <GlassCard key={index} className="animate-fade-in">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-md ${
                        alert.severity === 'High' ? 'bg-destructive/10' :
                        alert.severity === 'Medium' ? 'bg-warning/10' :
                        'bg-success/10'
                      }`}>
                        <AlertCircle className={`h-4 w-4 ${
                          alert.severity === 'High' ? 'text-destructive' :
                          alert.severity === 'Medium' ? 'text-warning' :
                          'text-success'
                        }`} />
                      </div>
                      <p className="font-medium text-sm">Insider Activity Detected</p>
                    </div>
                    <div className={`text-xs px-2 py-0.5 rounded-full ${
                      alert.severity === 'High' ? 'bg-destructive/10 text-destructive' :
                      alert.severity === 'Medium' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'
                    }`}>
                      {alert.severity} Risk
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <img src={alert.collectionImage} alt={alert.collection} className="h-10 w-10 rounded-md object-cover" />
                    <div>
                      <p className="font-medium">{alert.collection}</p>
                      <p className="text-xs text-muted-foreground">
                        <span className="inline-block mr-2">{alert.chain}</span>
                        {alert.time}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                  
                  <div className="pt-3 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">Wallet Address:</p>
                      <p className="text-xs font-medium truncate max-w-[180px]">{alert.wallet}</p>
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

// Sample data for wash trading
const washTradingData = [
  {
    name: "Bored Ape Yacht Club",
    image: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=256",
    chain: "Ethereum",
    chainLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    floorPrice: "45.2 ETH",
    floorPriceUsd: "149,160",
    washPercentage: 28,
    fakeVolume: "1,245 ETH",
    fakeVolumeUsd: "4,108,500",
    realVolume: "3,200 ETH",
    realVolumeUsd: "10,560,000",
    suspiciousWallets: 12,
    totalWallets: 286,
    alertLevel: "Medium"
  },
  {
    name: "Azuki",
    image: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&dpr=1&w=256",
    chain: "Ethereum",
    chainLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    floorPrice: "12.8 ETH",
    floorPriceUsd: "42,240",
    washPercentage: 65,
    fakeVolume: "3,840 ETH",
    fakeVolumeUsd: "12,672,000",
    realVolume: "2,100 ETH",
    realVolumeUsd: "6,930,000",
    suspiciousWallets: 24,
    totalWallets: 142,
    alertLevel: "High"
  },
  {
    name: "DeGods",
    image: "https://i.seadn.io/gae/OTX_XUAIp495Q0cRJo9VyoMfWwvHdgYOEFaw9NUxAgGQuUGH9XASQVc_hmvfrGe6J5TQY-NYgeLumUKZv7rOxIGmVGATQoGGIgIv?auto=format&dpr=1&w=256",
    chain: "Solana",
    chainLogo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
    floorPrice: "380 SOL",
    floorPriceUsd: "53,200",
    washPercentage: 43,
    fakeVolume: "12,540 SOL",
    fakeVolumeUsd: "1,755,600",
    realVolume: "16,800 SOL",
    realVolumeUsd: "2,352,000",
    suspiciousWallets: 8,
    totalWallets: 95,
    alertLevel: "Medium"
  },
  {
    name: "Pudgy Penguins",
    image: "https://i.seadn.io/gcs/files/cb45c8d13cf2a8e6c201efb1692e3888.jpg?auto=format&dpr=1&w=256",
    chain: "Ethereum",
    chainLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    floorPrice: "8.4 ETH",
    floorPriceUsd: "27,720",
    washPercentage: 18,
    fakeVolume: "420 ETH",
    fakeVolumeUsd: "1,386,000",
    realVolume: "1,920 ETH",
    realVolumeUsd: "6,336,000",
    suspiciousWallets: 5,
    totalWallets: 124,
    alertLevel: "Low"
  },
  {
    name: "Okay Bears",
    image: "https://i.seadn.io/gae/49M-waj1HWZ1VQ-5P4yEGBEHqj5OPGhb3SwsmMehIJbcYmgNpV9M7fWKVjl9QGXyw1AmeLl_E0CdZHluEmBFfF-ykqElVRCb6oTQ?auto=format&dpr=1&w=256",
    chain: "Solana",
    chainLogo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
    floorPrice: "165 SOL",
    floorPriceUsd: "23,100",
    washPercentage: 76,
    fakeVolume: "32,850 SOL",
    fakeVolumeUsd: "4,599,000",
    realVolume: "10,500 SOL",
    realVolumeUsd: "1,470,000",
    suspiciousWallets: 31,
    totalWallets: 182,
    alertLevel: "High"
  }
];

// Sample data for insider trading alerts
const insiderTradingData = [
  {
    collection: "CryptoPunks V2",
    collectionImage: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&dpr=1&w=256",
    chain: "Ethereum",
    time: "3 hours ago",
    description: "Team member wallet purchased 8 NFTs minutes before floor price jumped 120%",
    severity: "High",
    wallet: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
  },
  {
    collection: "Doodles",
    collectionImage: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&dpr=1&w=256",
    chain: "Ethereum",
    time: "1 day ago",
    description: "Related wallets trading NFTs between themselves to create false volume",
    severity: "Medium",
    wallet: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e"
  },
  {
    collection: "DeGods",
    collectionImage: "https://i.seadn.io/gae/OTX_XUAIp495Q0cRJo9VyoMfWwvHdgYOEFaw9NUxAgGQuUGH9XASQVc_hmvfrGe6J5TQY-NYgeLumUKZv7rOxIGmVGATQoGGIgIv?auto=format&dpr=1&w=256",
    chain: "Solana",
    time: "2 days ago",
    description: "Influencer wallet purchased 24 NFTs before tweeting about collection",
    severity: "High",
    wallet: "HYbGz2X4EQCwwQd6mZL5J3LMUcAmknPanvyJTBSVMKTx"
  }
];

export default NftTracking;
