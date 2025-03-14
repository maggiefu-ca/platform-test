
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Download, Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import StablecoinPegChart from "@/components/stablecoin/StablecoinPegChart";
import StablecoinRiskIndex from "@/components/stablecoin/StablecoinRiskIndex";
import HistoricalDepegEvents from "@/components/stablecoin/HistoricalDepegEvents";
import LiquidityMonitoring from "@/components/stablecoin/LiquidityMonitoring";
import ExchangeAnalysis from "@/components/stablecoin/ExchangeAnalysis";
import RegulatoryTracking from "@/components/stablecoin/RegulatoryTracking";

const StablecoinMonitor = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Data refreshed",
        description: "All stablecoin data has been updated with the latest information.",
      });
    }, 1500);
  };

  const toggleAlerts = () => {
    setAlertsEnabled(!alertsEnabled);
    toast({
      title: alertsEnabled ? "Alerts disabled" : "Alerts enabled",
      description: alertsEnabled 
        ? "You will no longer receive depeg alerts" 
        : "You will now receive critical stablecoin depeg alerts",
      variant: alertsEnabled ? "destructive" : "default",
    });
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className={`flex-1 ${isMobile ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
        <Header title="Stablecoin Depeg Early Warning System" />
        <main className="p-4 md:p-6 pt-[76px]">
          <div className="grid gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 sm:mb-0">Stablecoin Health Monitor</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={alertsEnabled ? "default" : "outline"} className="rounded-sm">
                    {alertsEnabled ? "Alerts On" : "Alerts Off"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 sm:mt-0">
                <div className="flex items-center gap-2 mr-2">
                  <Switch checked={alertsEnabled} onCheckedChange={toggleAlerts} />
                  <span className="text-sm">
                    {alertsEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-9"
                  onClick={handleRefresh}
                  disabled={isLoading}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? 'Refreshing...' : 'Refresh Data'}
                </Button>
                <Button variant="outline" size="sm" className="h-9 px-3">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <div className="overflow-x-auto">
                <TabsList className="mb-4 flex-wrap">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="liquidity">Liquidity Monitoring</TabsTrigger>
                  <TabsTrigger value="exchanges">Exchange Analysis</TabsTrigger>
                  <TabsTrigger value="regulatory">Regulatory Tracking</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <StablecoinPegChart />
                  <StablecoinRiskIndex />
                </div>
                
                <HistoricalDepegEvents />
              </TabsContent>
              
              <TabsContent value="liquidity" className="space-y-4">
                <Card className="mb-4">
                  <CardHeader className="pb-2">
                    <CardTitle>Liquidity Overview</CardTitle>
                    <CardDescription>Summary of stablecoin liquidity status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="text-sm text-muted-foreground">Total 24h Outflows</div>
                        <div className="text-2xl font-bold mt-1">$64.0M</div>
                        <div className="text-xs text-red-500 mt-1">↓ 12% vs previous period</div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="text-sm text-muted-foreground">Total 24h Inflows</div>
                        <div className="text-2xl font-bold mt-1">$31.0M</div>
                        <div className="text-xs text-green-500 mt-1">↑ 5% vs previous period</div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="text-sm text-muted-foreground">Net Flow</div>
                        <div className="text-2xl font-bold mt-1">-$33.0M</div>
                        <div className="text-xs text-amber-500 mt-1">Medium concern level</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <LiquidityMonitoring />
              </TabsContent>
              
              <TabsContent value="exchanges" className="space-y-4">
                <ExchangeAnalysis />
              </TabsContent>
              
              <TabsContent value="regulatory" className="space-y-4">
                <RegulatoryTracking />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StablecoinMonitor;
