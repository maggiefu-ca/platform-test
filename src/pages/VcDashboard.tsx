
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useIsMobile } from "@/hooks/use-mobile";

const VcDashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className={`flex-1 ${isMobile ? 'ml-0' : 'ml-64'} transition-all duration-300`}>
        <Header title="Crypto VC & Investor Dashboard" />
        <main className="p-4 md:p-6 pt-[76px]">
          <div className="grid gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 sm:mb-0">VC Investment Tracker</h2>
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
                  <Card className="h-full">
                    <CardHeader className="p-4 md:p-6">
                      <CardTitle className="text-lg md:text-xl">VC Investment Flow</CardTitle>
                      <CardDescription>Capital flow into crypto projects</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 pt-0">
                      <div className="h-64 md:h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">Investment Flow Chart</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="h-full">
                    <CardHeader className="p-4 md:p-6">
                      <CardTitle className="text-lg md:text-xl">Top VC Firms</CardTitle>
                      <CardDescription>Most active venture capital firms</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 pt-0">
                      <div className="h-64 md:h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">VC Firms Table</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">Investment Sectors</CardTitle>
                    <CardDescription>Analysis of investment focus areas</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="h-64 md:h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Sector Analysis Chart</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="unlock" className="space-y-4">
                <Card>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">Token Unlock Calendar</CardTitle>
                    <CardDescription>Detect when VCs unlock tokens & start dumping</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="h-64 md:h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Token Unlock Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="investments" className="space-y-4">
                <Card>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">Recent Investments</CardTitle>
                    <CardDescription>Identify early-stage projects getting large investments</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="h-64 md:h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Recent Investments Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rotation" className="space-y-4">
                <Card>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl">Chain Rotation</CardTitle>
                    <CardDescription>Track how venture funds rotate between chains</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="h-64 md:h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Chain Rotation Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VcDashboard;
