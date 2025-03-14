
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { recentInvestmentsData } from "@/data/vcDashboardData";
import { Calendar, DollarSign, Users } from "lucide-react";

const RecentInvestmentsTable = () => {
  return (
    <Card>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">Recent Investments</CardTitle>
        <CardDescription>Identify early-stage projects getting large investments</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Project</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Round</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Investors</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentInvestmentsData.map((investment, index) => (
                <tr key={index} className="border-b border-border/10 hover:bg-secondary/20">
                  <td className="px-4 py-3">
                    <span className="font-medium">{investment.project}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
                      {investment.round}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <DollarSign size={14} className="text-success" />
                      <span>{investment.amount}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-muted-foreground" />
                      <span>{investment.investors}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span>{investment.date}</span>
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

export default RecentInvestmentsTable;
