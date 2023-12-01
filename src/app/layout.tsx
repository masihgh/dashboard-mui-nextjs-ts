import * as React from 'react';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppBarMenu from '@/components/AppBarMenu/AppBarMenu';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard for all',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBarMenu/>
          {children}
          <Footer/>
        </ThemeRegistry>
      </body>
    </html>
  );
}
