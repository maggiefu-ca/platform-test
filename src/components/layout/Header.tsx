
import React from "react";
import { Search, BellIcon, UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="w-full fixed top-0 z-50 px-6 py-3 backdrop-blur-md bg-background/70 border-b border-border/50 flex items-center justify-between animate-fade-in">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold font-display tracking-tight">
          {title || <><span className="text-primary">Crypto</span>Choreographer</>}
        </h1>
      </div>

      <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
        <div className="absolute left-3 text-muted-foreground">
          <Search size={18} />
        </div>
        <Input
          placeholder="Search wallets, transactions, or assets..."
          className={cn(
            "w-full pl-10 pr-4 h-9 bg-secondary/50 border-0",
            "focus-visible:ring-1 focus-visible:ring-primary/20",
            "placeholder:text-muted-foreground/70"
          )}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none bg-secondary/50 hover:bg-secondary"
        >
          <BellIcon size={18} className="text-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none bg-secondary/50 hover:bg-secondary"
        >
          <UserCircleIcon size={18} className="text-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
