
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import ArbitrageOpportunities from "@/components/arbitrage/ArbitrageOpportunities";
import BridgeTransferTracker from "@/components/arbitrage/BridgeTransferTracker";
import LiquidityPoolsRisk from "@/components/arbitrage/LiquidityPoolsRisk";

const BridgeArbitrage = () => {
  return (
    <PageLayout
      title="Cross-Chain Bridge & Arbitrage"
      description="Monitor cross-chain opportunities, bridge transfers, and exploit risks"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ArbitrageOpportunities />
        <div className="space-y-6">
          <BridgeTransferTracker />
          <LiquidityPoolsRisk />
        </div>
      </div>
    </PageLayout>
  );
};

export default BridgeArbitrage;
