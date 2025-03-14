
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { RefreshCw, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import VcInvestmentFlowChart from "@/components/dashboard/VcInvestmentFlowChart";
import VcFirmsTable from "@/components/dashboard/VcFirmsTable";
import InvestmentSectorsChart from "@/components/dashboard/InvestmentSectorsChart";
import ChainRotationChart from "@/components/dashboard/ChainRotationChart";
import TokenUnlockTable from "@/components/dashboard/TokenUnlockTable";
import RecentInvestmentsTable from "@/components/dashboard/RecentInvestmentsTable";

const VcDashboard = () => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className={`flex-1 ${isMobile ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
        <Header title="Crypto VC & Investor Dashboard" />
        <main className="p-4 md:p-6 pt-[76px]">
          <div className="grid gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 sm:mb-0">VC Investment Tracker</h2>
              <div className="flex items-center gap-2">
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
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <div className="overflow-x-auto">
                <TabsList className="mb-4 flex-wrap">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="unlock">Token Unlocks</TabsTrigger>
                  <TabsTrigger value="investments">Recent Investments</TabsTrigger>
                  <TabsTrigger value="rotation">Chain Rotation</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <VcInvestmentFlowChart />
                  <VcFirmsTable />
                </div>
                
                <InvestmentSectorsChart />
              </TabsContent>
              
              <TabsContent value="unlock" className="space-y-4">
                <TokenUnlockTable />
              </TabsContent>
              
              <TabsContent value="investments" className="space-y-4">
                <RecentInvestmentsTable />
              </TabsContent>
              
              <TabsContent value="rotation" className="space-y-4">
                <ChainRotationChart />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VcDashboard;
