
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckCircle, Paintbrush } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/context/ThemeContext";

// Helper function to convert hex to HSL
const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;
  
  // Find greatest and smallest channel values
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  // Calculate hue and saturation
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

// Helper function to convert HSL to hex
const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Generate color variations based on a base color
const generateColorVariations = (baseHex: string): string[] => {
  const { h, s, l } = hexToHSL(baseHex);
  const variations: string[] = [];
  
  // Generate 5 variations
  // Darker
  variations.push(hslToHex(h, Math.min(s + 5, 100), Math.max(l - 20, 0)));
  // Slightly darker
  variations.push(hslToHex(h, Math.min(s + 2, 100), Math.max(l - 10, 0)));
  // Base color
  variations.push(baseHex);
  // Slightly lighter
  variations.push(hslToHex(h, Math.max(s - 5, 0), Math.min(l + 10, 100)));
  // Lighter
  variations.push(hslToHex(h, Math.max(s - 10, 0), Math.min(l + 20, 100)));
  
  return variations;
};

const ColorPickerSection = () => {
  const { customColors, addCustomColor } = useTheme();
  const [hexColor, setHexColor] = useState("#6E59A5");
  const [colorVariations, setColorVariations] = useState<string[]>(generateColorVariations(hexColor));
  
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value;
    setHexColor(newHex);
    if (/^#[0-9A-F]{6}$/i.test(newHex)) {
      setColorVariations(generateColorVariations(newHex));
    }
  };

  const handleAddColor = () => {
    if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
      toast({
        title: "Invalid color format",
        description: "Please enter a valid hex color (e.g., #FF5733)",
        variant: "destructive"
      });
      return;
    }
    
    addCustomColor(hexColor, colorVariations);
    toast({
      title: "Custom color added",
      description: "Your custom color palette has been added.",
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Custom Color Palette</h2>
      <p className="text-muted-foreground mb-4">Create your own color theme</p>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Color Picker</CardTitle>
          <CardDescription>Choose a base color and generate a custom palette</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-end gap-3">
            <div className="flex-1 space-y-2">
              <Label htmlFor="hex-color">Hex Color</Label>
              <div className="flex gap-2">
                <Input 
                  id="hex-color"
                  value={hexColor} 
                  onChange={handleHexChange} 
                  pattern="^#[0-9A-F]{6}$"
                  placeholder="#RRGGBB" 
                  className="font-mono" 
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0" aria-label="Pick color">
                      <div 
                        className="h-4 w-4 rounded" 
                        style={{ backgroundColor: hexColor }}
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-60">
                    <div className="grid gap-2">
                      <input 
                        type="color" 
                        value={hexColor} 
                        onChange={(e) => setHexColor(e.target.value)}
                        className="w-full h-8 cursor-pointer"
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Button className="shrink-0" onClick={handleAddColor}>
              <Paintbrush className="mr-2 h-4 w-4" />
              Add to Palette
            </Button>
          </div>
          
          <div className="space-y-2">
            <Label>Generated Palette</Label>
            <div className="grid grid-cols-5 gap-2 h-10">
              {colorVariations.map((color, index) => (
                <div 
                  key={index} 
                  className="rounded-md h-full" 
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          {customColors.length > 0 && (
            <div className="space-y-2 pt-4 border-t">
              <Label>Your Custom Palettes</Label>
              <div className="grid grid-cols-1 gap-3">
                {customColors.map((palette, index) => (
                  <div key={index} className="border rounded-lg p-2">
                    <div className="text-xs text-muted-foreground mb-1">Custom Palette {index + 1}</div>
                    <div className="grid grid-cols-5 gap-1 h-6">
                      {palette.map((color, colorIndex) => (
                        <div 
                          key={colorIndex} 
                          className="rounded-sm h-full" 
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorPickerSection;
