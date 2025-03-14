
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const StablecoinMonitor = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Stablecoin Depeg Early Warning System" />
        <main className="p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Stablecoin Health Monitor</h2>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="liquidity">Liquidity Monitoring</TabsTrigger>
                <TabsTrigger value="exchanges">Exchange Analysis</TabsTrigger>
                <TabsTrigger value="regulatory">Regulatory Tracking</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Stablecoin Peg Status</CardTitle>
                      <CardDescription>Current peg status of major stablecoins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">Stablecoin Peg Status Chart</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Stablecoin Risk Index</CardTitle>
                      <CardDescription>Risk assessment for major stablecoins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">Risk Index Chart</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Historical Depeg Events</CardTitle>
                    <CardDescription>Analysis of previous depeg events and patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Historical Events Timeline</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="liquidity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Liquidity Movements</CardTitle>
                    <CardDescription>Track big withdrawals from stablecoin pools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Liquidity Movements Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="exchanges" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Exchange Analysis</CardTitle>
                    <CardDescription>Identify exchanges listing stablecoins at abnormal prices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Exchange Analysis Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="regulatory" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Regulatory Tracking</CardTitle>
                    <CardDescription>Monitor regulatory actions affecting specific stablecoins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Regulatory Tracking Dashboard</p>
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

export default StablecoinMonitor;
