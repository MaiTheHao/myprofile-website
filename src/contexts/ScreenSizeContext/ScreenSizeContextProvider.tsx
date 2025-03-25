'use client'
import React, { Children, useEffect, useState } from 'react'
import ScreenSizeContext from './ScreenSizeContext';

type Props = {
  children: React.ReactNode
}

function ScreenSizeContextProvider({children}: Props) {
  const [size, setSize] = useState({width: 0, height: 0})

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={size}>
      {children}
    </ScreenSizeContext.Provider>
  )
}

export default ScreenSizeContextProvider