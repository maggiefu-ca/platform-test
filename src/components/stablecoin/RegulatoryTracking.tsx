
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ExternalLink, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { regulatoryEvents } from "@/data/stablecoinData";

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return "bg-green-500/10 text-green-500";
    case 'negative': return "bg-red-500/10 text-red-500";
    default: return "bg-blue-500/10 text-blue-500";
  }
};

const getRiskIcon = (risk: string) => {
  switch (risk) {
    case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case 'medium': return <Info className="h-4 w-4 text-orange-500" />;
    default: return <CheckCircle className="h-4 w-4 text-green-500" />;
  }
};

const RegulatoryTracking = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Regulatory Tracking</CardTitle>
        <CardDescription>Monitor regulatory actions affecting stablecoins</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {regulatoryEvents.map(event => (
            <div
              key={event.id}
              className="border rounded-lg p-4 hover:border-accent transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-base flex items-center gap-1">
                    {getRiskIcon(event.riskLevel)}
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>{event.date}</span>
                    <Badge 
                      variant="secondary" 
                      className={getSentimentColor(event.sentiment)}
                    >
                      {event.sentiment}
                    </Badge>
                  </div>
                </div>
                <Badge variant={event.status === 'ongoing' ? 'default' : 'outline'} className="ml-2">
                  {event.status}
                </Badge>
              </div>
              
              <p className="text-sm mt-2 mb-3">{event.description}</p>
              
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <div className="text-sm text-muted-foreground flex items-center">
                  <span className="mr-2">Impacted:</span>
                  <div className="flex flex-wrap gap-1">
                    {event.impactedCoins.map((coin, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {coin}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    Source <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RegulatoryTracking;
