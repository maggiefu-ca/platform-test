
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  LineChart,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Cpu,
  ScrollText,
  FileText,
  DollarSign,
  Shield,
  ArrowDownUp,
  Landmark,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
  badge?: string | number;
}

const NavItem = ({ icon, label, path, active, badge }: NavItemProps) => {
  return (
    <Link to={path} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 px-3 h-10 mb-1",
          active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
          "transition-all duration-200 group"
        )}
      >
        <div className={cn("", active ? "text-accent-foreground" : "text-muted-foreground group-hover:text-foreground")}>
          {icon}
        </div>
        <span className="font-medium">{label}</span>
        {badge && (
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-medium text-primary-foreground">
            {badge}
          </span>
        )}
      </Button>
    </Link>
  );
};

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

  // Toggle sidebar for mobile
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Check if path is active
  const isActive = (path: string) => location.pathname === path;

  // Hide sidebar when clicking outside on mobile
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isMobile && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isMobile, isSidebarOpen]);

  if (isMobile && !isSidebarOpen) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed z-50 left-4 top-4 rounded-full border-none bg-secondary/50 hover:bg-secondary"
        onClick={(e) => {
          e.stopPropagation();
          toggleSidebar();
        }}
      >
        <LayoutDashboard size={18} />
      </Button>
    );
  }

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-full",
        "w-64 bg-card border-r border-border/50",
        "flex flex-col",
        isMobile ? "animate-slide-in" : "animate-fade-in"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Cpu className="h-7 w-7 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-primary">Crypto</span>
            <span className="text-foreground">Choreographer</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 py-2 px-3">
        <div className="mb-2 px-3 text-xs font-medium text-muted-foreground">OVERVIEW</div>
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" path="/" active={isActive("/")} />
        <NavItem icon={<Wallet size={18} />} label="Whale Wallets" path="/whales" active={isActive("/whales")} />
        <NavItem icon={<TrendingUp size={18} />} label="Predictions" path="/predictions" active={isActive("/predictions")} badge={3} />
        <NavItem icon={<LineChart size={18} />} label="Analytics" path="/analytics" active={isActive("/analytics")} />

        <Separator className="my-4 opacity-50" />
        
        <div className="mb-2 px-3 text-xs font-medium text-muted-foreground">MARKET INSIGHTS</div>
        <NavItem icon={<ScrollText size={18} />} label="OTC Markets" path="/otc" active={isActive("/otc")} />
        <NavItem icon={<FileText size={18} />} label="NFT Tracking" path="/nft" active={isActive("/nft")} />
        <NavItem icon={<Landmark size={18} />} label="VC Investments" path="/vc" active={isActive("/vc")} />
        
        <Separator className="my-4 opacity-50" />
        
        <div className="mb-2 px-3 text-xs font-medium text-muted-foreground">ADVANCED TOOLS</div>
        <NavItem icon={<Bot size={18} />} label="Front-Running" path="/front-running" active={isActive("/front-running")} />
        <NavItem icon={<ArrowDownUp size={18} />} label="Bridge Arbitrage" path="/arbitrage" active={isActive("/arbitrage")} />
        <NavItem icon={<Shield size={18} />} label="Stablecoin Monitor" path="/stablecoins" active={isActive("/stablecoins")} />
      </div>

      <div className="mt-auto p-3">
        <NavItem icon={<Settings size={18} />} label="Settings" path="/settings" active={isActive("/settings")} />
        <NavItem icon={<HelpCircle size={18} />} label="Help & Support" path="/help" active={isActive("/help")} />
        <NavItem icon={<LogOut size={18} />} label="Logout" path="/logout" />
      </div>
    </aside>
  );
};

export default Sidebar;
