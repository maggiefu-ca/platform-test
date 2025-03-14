
import React from "react";
import { Search, BellIcon, UserCircleIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full fixed top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-md bg-background/70 border-b border-border/50 flex items-center justify-between animate-fade-in">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mr-1 md:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="py-6">
                <h2 className="text-lg font-semibold mb-6 px-4">
                  <span className="text-primary">Crypto</span>Choreographer
                </h2>
                <nav className="space-y-1">
                  {/* Mobile nav links would go here */}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
        
        <h1 className="text-lg sm:text-xl font-semibold font-display tracking-tight truncate">
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

      <div className="flex items-center space-x-1 sm:space-x-2">
        {isMobile && (
          <Button
            variant="outline"
            size="icon"
            className="bg-secondary/50 hover:bg-secondary border-none rounded-full"
            aria-label="Search"
          >
            <Search size={18} className="text-foreground" />
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none bg-secondary/50 hover:bg-secondary"
          aria-label="Notifications"
        >
          <BellIcon size={18} className="text-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none bg-secondary/50 hover:bg-secondary"
          aria-label="User profile"
        >
          <UserCircleIcon size={18} className="text-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
