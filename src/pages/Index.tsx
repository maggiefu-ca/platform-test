
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Building2, Coins, Eye, Image, Shield, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { useTheme } from "@/context/ThemeContext";

const IndexCard = ({ 
  icon, 
  title, 
  description, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string 
}) => (
  <Card className="overflow-hidden transition-all hover:shadow-md border-border/50 h-full flex flex-col">
    <CardHeader className="pb-2">
      <div className="mb-2 text-primary">{icon}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow"></CardContent>
    <CardFooter className="pt-2">
      <Button asChild className="w-full gap-2">
        <Link to={link}>
          View Dashboard <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const Index = () => {
  const { preset, font } = useTheme();

  return (
    <PageLayout>
      <div className="container py-6 mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">CryptoInsights Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analytics and monitoring for crypto markets
          </p>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="p-1 px-2 text-xs rounded-md bg-secondary text-secondary-foreground">
              <span className="font-medium">Active Theme:</span> {preset.charAt(0).toUpperCase() + preset.slice(1)}
            </div>
            <div className="p-1 px-2 text-xs rounded-md bg-secondary text-secondary-foreground">
              <span className="font-medium">Font:</span> {font.charAt(0).toUpperCase() + font.slice(1)}
            </div>
            <Link to="/settings">
              <Button variant="outline" size="sm">Customize</Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <IndexCard
            icon={<Wallet className="h-6 w-6" />}
            title="Whale Wallets"
            description="Track large cryptocurrency holders and their movements"
            link="/whales"
          />
          <IndexCard
            icon={<Eye className="h-6 w-6" />}
            title="OTC Market"
            description="Monitor over-the-counter trading activity and large transactions"
            link="/otc"
          />
          <IndexCard
            icon={<Image className="h-6 w-6" />}
            title="NFT Tracking"
            description="Analyze NFT collections, sales, and market trends"
            link="/nft"
          />
          <IndexCard
            icon={<Shield className="h-6 w-6" />}
            title="MEV Protection"
            description="Detect and prevent front-running and other MEV attacks"
            link="/front-running"
          />
          <IndexCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Bridge Arbitrage"
            description="Find cross-chain arbitrage opportunities and track bridge activity"
            link="/arbitrage"
          />
          <IndexCard
            icon={<Coins className="h-6 w-6" />}
            title="Stablecoin Monitor"
            description="Monitor stablecoin pegs, liquidity, and market movements"
            link="/stablecoins"
          />
          <IndexCard
            icon={<Building2 className="h-6 w-6" />}
            title="VC Dashboard"
            description="Track venture capital investments and token unlocks"
            link="/vc"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
