
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { vcFirmsData } from "@/data/vcDashboardData";
import { Building2, TrendingUp, Briefcase } from "lucide-react";

const VcFirmsTable = () => {
  return (
    <Card className="h-full">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">Top VC Firms</CardTitle>
        <CardDescription>Most active venture capital firms</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Firm</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Investments</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Total Funding</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Focus</th>
              </tr>
            </thead>
            <tbody>
              {vcFirmsData.map((firm, index) => (
                <tr key={index} className="border-b border-border/10 hover:bg-secondary/20">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Building2 size={16} />
                      </div>
                      <span className="font-medium">{firm.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-muted-foreground" />
                      <span>{firm.investments}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-success" />
                      <span>{firm.totalFunding}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {firm.focus.split(', ').map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-secondary/50 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default VcFirmsTable;
