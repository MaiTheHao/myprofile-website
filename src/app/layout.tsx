import '@/styles/base.scss';
import '@/styles/global.scss';

import { Metadata } from 'next';
import React from 'react';
import { tektur } from './fonts';

import WebHeader from '@components/web_root_layout/web_header/WebHeader';
import WebBody from '@components/web_root_layout/web_body/WebBody';
import WebFooter from '@components/web_root_layout/web_footer/WebFooter';
import AppContexts from '@/contexts/AppContexts';

export const metadata: Metadata = {
  title: 'Neo Profile',
  description:
    "Welcome to Neo's personal website! This platform serves as a hub to enhance my personal brand and connect with like-minded professionals in the tech industry. Through this, I aim to expand my network, engage with fellow engineers, and grow as a well-rounded software engineer.",
  icons: '/imgs/HomePage/User_Avatar.png',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <html>
      <head>
        <meta lang="vi" />
        <meta charSet="utf-8" />
      </head>
      <body id="root" className={`${tektur.className}`}>
        <AppContexts>
          <WebHeader />
          <WebBody>{children}</WebBody>
          <WebFooter />
        </AppContexts>
      </body>
    </html>
  );
}

export default layout;
