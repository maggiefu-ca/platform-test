
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemePreset = 'system' | 'professional' | 'cheerful' | 'modern' | 'minimal' | 'energetic';
export type FontOption = 'inter' | 'poppins' | 'playfair' | 'roboto' | 'montserrat';

interface ThemeContextType {
  preset: ThemePreset;
  font: FontOption;
  setPreset: (preset: ThemePreset) => void;
  setFont: (font: FontOption) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [preset, setPresetState] = useState<ThemePreset>(() => {
    const savedPreset = localStorage.getItem('theme-preset');
    return (savedPreset as ThemePreset) || 'system';
  });
  
  const [font, setFontState] = useState<FontOption>(() => {
    const savedFont = localStorage.getItem('theme-font');
    return (savedFont as FontOption) || 'inter';
  });

  const setPreset = (newPreset: ThemePreset) => {
    setPresetState(newPreset);
    localStorage.setItem('theme-preset', newPreset);
    
    // Remove existing preset classes
    const presets: ThemePreset[] = ['professional', 'cheerful', 'modern', 'minimal', 'energetic'];
    document.documentElement.classList.remove(...presets);
    
    // Add new preset class if not system
    if (newPreset !== 'system') {
      document.documentElement.classList.add(newPreset);
    }
  };

  const setFont = (newFont: FontOption) => {
    setFontState(newFont);
    localStorage.setItem('theme-font', newFont);
    
    // Remove existing font classes
    const fonts: FontOption[] = ['inter', 'poppins', 'playfair', 'roboto', 'montserrat'];
    document.documentElement.classList.remove(...fonts.map(f => `font-${f}`));
    
    // Add new font class
    document.documentElement.classList.add(`font-${newFont}`);
  };

  useEffect(() => {
    // Initialize theme on mount
    if (preset !== 'system') {
      document.documentElement.classList.add(preset);
    }
    document.documentElement.classList.add(`font-${font}`);
    
    return () => {
      // Cleanup
      const presets: ThemePreset[] = ['professional', 'cheerful', 'modern', 'minimal', 'energetic'];
      const fonts: FontOption[] = ['inter', 'poppins', 'playfair', 'roboto', 'montserrat'];
      document.documentElement.classList.remove(...presets);
      document.documentElement.classList.remove(...fonts.map(f => `font-${f}`));
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ preset, font, setPreset, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
