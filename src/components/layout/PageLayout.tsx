
import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

interface PageLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-6 mt-14"> {/* Added mt-14 for margin-top to account for fixed header height */}
          {title && (
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
              {description && <p className="text-muted-foreground">{description}</p>}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

// Add default export for backward compatibility
export default PageLayout;
