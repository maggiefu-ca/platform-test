
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MevActivityChart from "@/components/front-running/MevActivityChart";
import MevBotsTable from "@/components/front-running/MevBotsTable";
import FrontRunningActivityFeed from "@/components/front-running/FrontRunningActivityFeed";
import SandwichAttackMonitor from "@/components/front-running/SandwichAttackMonitor";
import HighGasTransactions from "@/components/front-running/HighGasTransactions";
import { ArrowRight, BarChart3, ShieldAlert, Zap, Activity } from "lucide-react";

const FrontRunning = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Front-Running Bot & MEV Detection" />
        <main className="p-6">
          <div className="grid gap-6 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">MEV Detection Dashboard</h2>
                <p className="text-muted-foreground mt-1">Monitor and detect front-running, MEV bots, and sandwich attacks in real-time</p>
              </div>
              
              <div className="flex gap-2 text-muted-foreground text-sm">
                <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md flex items-center gap-1">
                  <Activity className="h-3 w-3" /> Live
                </span>
                <span className="px-2 py-1 bg-accent/10 rounded-md">Updated: Just now</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">Front-Running Events</div>
                    <div className="text-2xl font-bold">247</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/5 border-accent/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">Value Extracted</div>
                    <div className="text-2xl font-bold">183.5 ETH</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-destructive/5 border-destructive/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">Sandwich Attacks</div>
                    <div className="text-2xl font-bold">58</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary border">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">Active MEV Bots</div>
                    <div className="text-2xl font-bold">349</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4 bg-background border w-full justify-start px-2 h-12">
                <TabsTrigger value="overview" className="data-[state=active]:bg-secondary/50">Overview</TabsTrigger>
                <TabsTrigger value="sandwich" className="data-[state=active]:bg-secondary/50">Sandwich Attacks</TabsTrigger>
                <TabsTrigger value="frontrun" className="data-[state=active]:bg-secondary/50">Front-Running</TabsTrigger>
                <TabsTrigger value="transactions" className="data-[state=active]:bg-secondary/50">High-Gas Transactions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4 animate-slide-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle>Detected MEV Activity</CardTitle>
                      <CardDescription>Last 24 hours of MEV activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <MevActivityChart />
                    </CardContent>
                  </Card>
                  
                  <Card className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle>Top MEV Bots</CardTitle>
                      <CardDescription>Most active MEV bots by transaction volume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <MevBotsTable />
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>Recent Front-Running Activity</CardTitle>
                    <CardDescription>Detected front-running events in real-time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FrontRunningActivityFeed />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sandwich" className="space-y-4 animate-slide-up">
                <Card className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>Sandwich Attack Monitoring</CardTitle>
                    <CardDescription>Real-time detection of sandwich attacks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SandwichAttackMonitor />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="frontrun" className="space-y-4 animate-slide-up">
                <Card className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>Front-Running Detection</CardTitle>
                    <CardDescription>Analysis of front-running patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FrontRunningActivityFeed />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transactions" className="space-y-4 animate-slide-up">
                <Card className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>High-Gas Transactions</CardTitle>
                    <CardDescription>Monitoring of high-gas transactions and potential exploit attempts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <HighGasTransactions />
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
