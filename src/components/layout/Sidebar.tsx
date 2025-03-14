
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Wallet, 
  Handshake, 
  Image, 
  Zap, 
  ArrowRightLeft, 
  Coins, 
  Building2, 
  Menu, 
  X,
  Settings as SettingsIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ to, icon, text, isActive, onClick }: SidebarItemProps) => (
  <Link to={to} onClick={onClick}>
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      {icon}
      <span>{text}</span>
    </div>
  </Link>
);

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

const Sidebar = ({ isOpen = true, setIsOpen = () => {} }: SidebarProps) => {
  const location = useLocation();
  const { isMobile } = useMobile();
  const pathname = location.pathname;

  const closeMenu = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold" onClick={closeMenu}>
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-xl">CryptoInsights</span>
        </Link>
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto md:hidden" 
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          <SidebarItem 
            to="/" 
            icon={<LayoutDashboard className="h-5 w-5" />} 
            text="Dashboard" 
            isActive={pathname === "/"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/whales" 
            icon={<Wallet className="h-5 w-5" />} 
            text="Whale Wallets" 
            isActive={pathname === "/whales"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/otc" 
            icon={<Handshake className="h-5 w-5" />} 
            text="OTC Market" 
            isActive={pathname === "/otc"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/nft" 
            icon={<Image className="h-5 w-5" />} 
            text="NFT Tracking" 
            isActive={pathname === "/nft"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/front-running" 
            icon={<Zap className="h-5 w-5" />} 
            text="MEV Protection" 
            isActive={pathname === "/front-running"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/arbitrage" 
            icon={<ArrowRightLeft className="h-5 w-5" />} 
            text="Bridge Arbitrage" 
            isActive={pathname === "/arbitrage"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/stablecoins" 
            icon={<Coins className="h-5 w-5" />} 
            text="Stablecoin Monitor" 
            isActive={pathname === "/stablecoins"} 
            onClick={closeMenu}
          />
          <SidebarItem 
            to="/vc" 
            icon={<Building2 className="h-5 w-5" />} 
            text="VC Dashboard" 
            isActive={pathname === "/vc"} 
            onClick={closeMenu}
          />
          <div className="mt-6 border-t pt-6">
            <SidebarItem 
              to="/settings" 
              icon={<SettingsIcon className="h-5 w-5" />} 
              text="Settings" 
              isActive={pathname === "/settings"} 
              onClick={closeMenu}
            />
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
