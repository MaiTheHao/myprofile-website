'use client';
import { createContext } from 'react';

interface ScreenSize {
  width: number;
  height: number;
}

const ScreenSizeContext = createContext<ScreenSize>({
  width: 0,
  height: 0,
});

export default ScreenSizeContext;
