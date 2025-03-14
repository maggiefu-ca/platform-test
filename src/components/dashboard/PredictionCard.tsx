
import React from "react";
import { Brain, ArrowRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PredictionCardProps {
  title: string;
  description: string;
  confidence: number;
  impact: "positive" | "negative" | "neutral";
  timeframe: string;
  aiGenerated?: boolean;
}

const PredictionCard: React.FC<PredictionCardProps> = ({
  title,
  description,
  confidence,
  impact,
  timeframe,
  aiGenerated = true
}) => {
  const impactIcon = 
    impact === "positive" ? <TrendingUp className="h-4 w-4 text-success" /> :
    impact === "negative" ? <TrendingDown className="h-4 w-4 text-destructive" /> :
    <AlertTriangle className="h-4 w-4 text-warning" />;

  const impactClass = 
    impact === "positive" ? "text-success" :
    impact === "negative" ? "text-destructive" :
    "text-warning";

  return (
    <GlassCard className="overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        {aiGenerated && (
          <div className="h-7 w-7 rounded-full bg-accent/20 flex items-center justify-center">
            <Brain className="h-4 w-4 text-accent" />
          </div>
        )}
        <span className={cn(
          "text-xs font-medium px-2 py-0.5 rounded-full", 
          impact === "positive" ? "bg-success/10 text-success" :
          impact === "negative" ? "bg-destructive/10 text-destructive" :
          "bg-warning/10 text-warning"
        )}>
          {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
        </span>
        <span className="text-xs text-muted-foreground ml-auto">
          {timeframe}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="mt-auto pt-3 border-t border-border/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">AI Confidence:</span>
            <div className="flex items-center gap-1">
              <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full",
                    confidence >= 70 ? "bg-success" : 
                    confidence >= 40 ? "bg-warning" : 
                    "bg-destructive"
                  )}
                  style={{ width: `${confidence}%` }}
                />
              </div>
              <span className="text-xs font-medium">{confidence}%</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
            Details <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default PredictionCard;
