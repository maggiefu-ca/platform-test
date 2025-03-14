
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tokenUnlockData } from "@/data/vcDashboardData";
import { Calendar, DollarSign, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const TokenUnlockTable = () => {
  return (
    <Card>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">Token Unlock Calendar</CardTitle>
        <CardDescription>Detect when VCs unlock tokens & start dumping</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Project</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Unlock Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Tokens</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Value (USD)</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Impact</th>
              </tr>
            </thead>
            <tbody>
              {tokenUnlockData.map((unlock, index) => {
                const unlockDate = new Date(unlock.date);
                const today = new Date();
                const daysDifference = Math.ceil((unlockDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
                
                return (
                  <tr key={index} className="border-b border-border/10 hover:bg-secondary/20">
                    <td className="px-4 py-3">
                      <span className="font-medium">{unlock.project}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span>{unlock.date}</span>
                        {daysDifference < 14 && (
                          <span className="text-xs px-2 py-0.5 bg-destructive/10 text-destructive rounded-full">
                            {daysDifference} days
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span>{unlock.tokens}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <DollarSign size={14} className="text-success" />
                        <span>{unlock.valueUSD}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className={cn(
                        "flex items-center gap-1 text-xs px-2 py-1 rounded-full w-fit",
                        unlock.impact === 'High' ? "bg-destructive/10 text-destructive" :
                        unlock.impact === 'Medium' ? "bg-warning/10 text-warning" :
                        "bg-success/10 text-success"
                      )}>
                        <AlertTriangle size={12} />
                        <span>{unlock.impact}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenUnlockTable;
