
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhaleWallets from "./pages/WhaleWallets";
import OtcMarket from "./pages/OtcMarket";
import NftTracking from "./pages/NftTracking";
import FrontRunning from "./pages/FrontRunning";
import BridgeArbitrage from "./pages/BridgeArbitrage";
import StablecoinMonitor from "./pages/StablecoinMonitor";
import VcDashboard from "./pages/VcDashboard";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/whales" element={<WhaleWallets />} />
            <Route path="/otc" element={<OtcMarket />} />
            <Route path="/nft" element={<NftTracking />} />
            <Route path="/front-running" element={<FrontRunning />} />
            <Route path="/arbitrage" element={<BridgeArbitrage />} />
            <Route path="/stablecoins" element={<StablecoinMonitor />} />
            <Route path="/vc" element={<VcDashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
