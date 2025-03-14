
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { liquidityMovementData } from "@/data/stablecoinData";

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const getSignificanceColor = (significance: string) => {
  switch (significance) {
    case 'high': return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
    case 'medium': return "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20";
    default: return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
  }
};

const LiquidityMonitoring = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Liquidity Movements</CardTitle>
        <CardDescription>Track big withdrawals from stablecoin pools</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Stablecoin</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead className="text-right">Significance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {liquidityMovementData.map(movement => (
                <TableRow key={movement.id}>
                  <TableCell className="font-medium">
                    {formatTime(movement.timestamp)}
                  </TableCell>
                  <TableCell>{movement.stablecoin}</TableCell>
                  <TableCell>{formatAmount(movement.amount)}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {movement.direction === 'outflow' 
                        ? <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" /> 
                        : <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                      }
                      {movement.direction.charAt(0).toUpperCase() + movement.direction.slice(1)}
                    </div>
                  </TableCell>
                  <TableCell>{movement.platform}</TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge 
                            variant="secondary" 
                            className={getSignificanceColor(movement.significance)}
                          >
                            {movement.significance}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[250px] p-3">
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Correlated with:</p>
                            <ul className="text-xs list-disc ml-4 space-y-1">
                              {movement.correlatedWith.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                            <div className="pt-1">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full text-xs h-7"
                              >
                                View Transaction
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiquidityMonitoring;
