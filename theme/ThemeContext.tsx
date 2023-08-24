import React, { useState, useContext } from 'react';

import Colors from './Colors'
import TColors from './Colors'

export type ThemeType = 'blue' | 'purple' | 'green' | 'orange'

type ThemeContextType = {
    colors: ThemeType;
    applyColors: (colors: ThemeType) => void;
};
  

// const ThemeContext = React.createContext<ThemeContextType | null>(null);
export const ThemeContext = React.createContext<ThemeContextType>({
    colors: 'blue',
    applyColors: () => { }
});

type ThemeProviderProps = {
    children?: React.ReactNode;
  };

  export function ThemeProvider({ children }: ThemeProviderProps) {
    const [colors, setColors] = useState<ThemeType>('blue');

    const applyColors = (colorTheme: ThemeType) => {
        setColors(colorTheme);
    };

    return (
        <ThemeContext.Provider value={{applyColors, colors}}>
        {children}
        </ThemeContext.Provider>
    );
};

