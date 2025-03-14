import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, PaintBucket, Type, Palette } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ColorPickerSection from "@/components/settings/ColorPickerSection";

const ThemeCard = ({ name, description, preset, currentPreset, onClick }: { 
  name: string; 
  description: string; 
  preset: string;
  currentPreset: string;
  onClick: () => void;
}) => (
  <Card 
    className={`cursor-pointer transition-all hover:shadow-md ${currentPreset === preset ? 'ring-2 ring-primary border-primary/10' : ''}`}
    onClick={onClick}
  >
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <CardTitle className="text-lg">{name}</CardTitle>
        {currentPreset === preset && <CheckCircle className="h-5 w-5 text-primary" />}
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className={`grid grid-cols-2 gap-2 theme-preview ${preset}`}>
        <div className="rounded-md bg-primary h-6"></div>
        <div className="rounded-md bg-accent h-6"></div>
        <div className="rounded-md bg-secondary h-6"></div>
        <div className="rounded-md bg-muted h-6"></div>
      </div>
    </CardContent>
  </Card>
);

const FontCard = ({ name, font, currentFont, onClick }: { 
  name: string; 
  font: string;
  currentFont: string;
  onClick: () => void;
}) => (
  <Card 
    className={`cursor-pointer transition-all hover:shadow-md ${currentFont === font ? 'ring-2 ring-primary border-primary/10' : ''}`}
    onClick={onClick}
  >
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <CardTitle className={`text-lg font-${font}`}>{name}</CardTitle>
        {currentFont === font && <CheckCircle className="h-5 w-5 text-primary" />}
      </div>
    </CardHeader>
    <CardContent>
      <p className={`text-sm font-${font}`}>
        The quick brown fox jumps over the lazy dog.
      </p>
    </CardContent>
  </Card>
);

const Settings = () => {
  const { preset, font, setPreset, setFont } = useTheme();

  const handlePresetChange = (newPreset: any) => {
    setPreset(newPreset);
    toast({
      title: "Theme updated",
      description: "Your theme preset has been updated.",
    });
  };

  const handleFontChange = (newFont: any) => {
    setFont(newFont);
    toast({
      title: "Font updated",
      description: "Your font preference has been updated.",
    });
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-6 space-y-6 max-w-5xl animate-fade-in">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Customize your app appearance</p>
          </div>
        </div>

        <Tabs defaultValue="theme" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="theme">
              <PaintBucket className="mr-2 h-4 w-4" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="typography">
              <Type className="mr-2 h-4 w-4" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="colors">
              <Palette className="mr-2 h-4 w-4" />
              Colors
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme" className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Theme Presets</h2>
              <p className="text-muted-foreground mb-4">Choose a theme that matches your style</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ThemeCard 
                  name="Professional" 
                  description="A clean, business-oriented color scheme"
                  preset="professional"
                  currentPreset={preset}
                  onClick={() => handlePresetChange('professional')}
                />
                <ThemeCard 
                  name="Cheerful" 
                  description="Bright and playful colors for a fun experience"
                  preset="cheerful"
                  currentPreset={preset}
                  onClick={() => handlePresetChange('cheerful')}
                />
                <ThemeCard 
                  name="Modern" 
                  description="Contemporary and sleek design aesthetic"
                  preset="modern"
                  currentPreset={preset}
                  onClick={() => handlePresetChange('modern')}
                />
                <ThemeCard 
                  name="Minimal" 
                  description="Simple and clean, focusing on content"
                  preset="minimal"
                  currentPreset={preset}
                  onClick={() => handlePresetChange('minimal')}
                />
                <ThemeCard 
                  name="Energetic" 
                  description="Bold and vibrant colors that pop"
                  preset="energetic"
                  currentPreset={preset}
                  onClick={() => handlePresetChange('energetic')}
                />
                <ThemeCard 
                  name="System Default" 
                  description="Uses your system's default color scheme"
                  preset="system"
                  currentPreset={preset}
                  onClick={() => handlePresetChange('system')}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="typography" className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Font Style</h2>
              <p className="text-muted-foreground mb-4">Select a font that's easy to read</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FontCard 
                  name="Inter" 
                  font="inter"
                  currentFont={font}
                  onClick={() => handleFontChange('inter')}
                />
                <FontCard 
                  name="Poppins" 
                  font="poppins"
                  currentFont={font}
                  onClick={() => handleFontChange('poppins')}
                />
                <FontCard 
                  name="Playfair Display" 
                  font="playfair"
                  currentFont={font}
                  onClick={() => handleFontChange('playfair')}
                />
                <FontCard 
                  name="Roboto" 
                  font="roboto"
                  currentFont={font}
                  onClick={() => handleFontChange('roboto')}
                />
                <FontCard 
                  name="Montserrat" 
                  font="montserrat"
                  currentFont={font}
                  onClick={() => handleFontChange('montserrat')}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="colors" className="space-y-4">
            <ColorPickerSection />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Settings;
