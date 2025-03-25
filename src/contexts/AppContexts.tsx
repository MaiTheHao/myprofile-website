import React from 'react';
import ScreenSizeContextProvider from './ScreenSizeContext/ScreenSizeContextProvider';

type Props = {
  children: React.ReactNode;
};

function AppContexts({ children }: Props) {
  return <ScreenSizeContextProvider>{children}</ScreenSizeContextProvider>;
}

export default AppContexts;
