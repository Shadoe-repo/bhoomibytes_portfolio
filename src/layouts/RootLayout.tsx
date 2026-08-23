import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router';

import Website from '@/layouts/Website';

/**
 * Root layout — fullscreen pitch deck mode.
 * Header and footer removed; floating glass nav is rendered inside each page.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>Bhoomi Bytes — From Field Data to Smart Action</title>
        <meta
          name="description"
          content="An IoT and AI-powered smart agriculture platform that transforms real-time field data into intelligent farming decisions."
        />
      </Helmet>
      <ScrollRestoration />
      {children}
    </Website>
  );
}
