
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 p-4">
      <div className="max-w-md w-full backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/10 dark:border-white/5 rounded-lg p-8 text-center shadow-glass animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-secondary/50 flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 font-display">404</h1>
        <p className="text-xl text-muted-foreground mb-6">This page doesn't exist</p>
        <p className="text-sm text-muted-foreground mb-8">
          The page you're looking for may have been moved, deleted, or never existed.
        </p>
        <Link to="/">
          <Button className="gap-2 w-full">
            <Home className="h-4 w-4" />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
