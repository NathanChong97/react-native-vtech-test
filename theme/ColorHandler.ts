import React, { useState, useContext } from 'react';

import TColors from './Colors' 
import { ThemeContext } from "./ThemeContext";

export type ThemeType = 'blue' | 'purple' | 'green' | 'orange'

interface ColorType {
    colors: ThemeType;
    applyColors: (colors: ThemeType) => void;
  }
  
const useColors = (): ColorType => {
  const store = useContext(ThemeContext);
  if (!store) {
    throw new Error('useColors must be defined.');
  }

  return {
    applyColors: store.applyColors,
    colors: store.colors,
  };
};
  
export default useColors;
