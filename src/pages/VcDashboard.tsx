
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const VcDashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Crypto VC & Investor Dashboard" />
        <main className="p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">VC Investment Tracker</h2>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="unlock">Token Unlocks</TabsTrigger>
                <TabsTrigger value="investments">Recent Investments</TabsTrigger>
                <TabsTrigger value="rotation">Chain Rotation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>VC Investment Flow</CardTitle>
                      <CardDescription>Capital flow into crypto projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">Investment Flow Chart</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Top VC Firms</CardTitle>
                      <CardDescription>Most active venture capital firms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">VC Firms Table</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Sectors</CardTitle>
                    <CardDescription>Analysis of investment focus areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Sector Analysis Chart</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="unlock" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Token Unlock Calendar</CardTitle>
                    <CardDescription>Detect when VCs unlock tokens & start dumping</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Token Unlock Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="investments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Investments</CardTitle>
                    <CardDescription>Identify early-stage projects getting large investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Recent Investments Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rotation" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Chain Rotation</CardTitle>
                    <CardDescription>Track how venture funds rotate between chains</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
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
