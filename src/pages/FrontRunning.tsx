
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const FrontRunning = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Front-Running Bot & MEV Detection" />
        <main className="p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">MEV Detection Dashboard</h2>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="sandwich">Sandwich Attacks</TabsTrigger>
                <TabsTrigger value="frontrun">Front-Running</TabsTrigger>
                <TabsTrigger value="transactions">High-Gas Transactions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detected MEV Activity</CardTitle>
                      <CardDescription>Last 24 hours of MEV activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">MEV Activity Chart</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Top MEV Bots</CardTitle>
                      <CardDescription>Most active MEV bots by transaction volume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center border rounded">
                        <p className="text-muted-foreground">MEV Bots Table</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Front-Running Activity</CardTitle>
                    <CardDescription>Detected front-running events in real-time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Activity Feed</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sandwich" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sandwich Attack Monitoring</CardTitle>
                    <CardDescription>Real-time detection of sandwich attacks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Sandwich Attack Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="frontrun" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Front-Running Detection</CardTitle>
                    <CardDescription>Analysis of front-running patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Front-Running Dashboard</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transactions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>High-Gas Transactions</CardTitle>
                    <CardDescription>Monitoring of high-gas transactions and potential exploit attempts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">High-Gas Transactions Dashboard</p>
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

export default FrontRunning;
