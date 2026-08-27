import { RouteObject } from 'react-router';
import { lazy } from 'react';

// Pages load on demand, keeping the initial GitHub Pages download small.
const HomePage = lazy(() => import('./pages/index'));
const DemoPage = lazy(() => import('./pages/demo'));
const TeamPage = lazy(() => import('./pages/team'));
const ContactPage = lazy(() => import('./pages/contact'));
const TechPage = lazy(() => import('./pages/technology'));
const NotFoundPage = import.meta.env.DEV
  ? lazy(() => import('../dev-tools/src/PageNotFound'))
  : lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/demo',
    element: <DemoPage />,
  },
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/technology',
    element: <TechPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/demo' | '/team' | '/contact' | '/technology';

export type Params = Record<string, string | undefined>;
