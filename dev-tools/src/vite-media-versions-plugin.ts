import type { Plugin } from 'vite';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

export function mediaVersionsPlugin(): Plugin {
  return {
    name: 'media-versions-plugin',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        if (!url.startsWith('/airo-assets/images/')) return next();

        const rawPath = url.slice('/airo-assets/images/'.length).split('?')[0];

        // 1. Logo fallback handling
        if (rawPath.startsWith('logo/')) {
          const logoPath = path.resolve(server.config.root, 'public/assets/uploads/airo-logo-shimmer-horizontal.svg');
          if (existsSync(logoPath)) {
            res.setHeader('Content-Type', 'image/svg+xml');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(readFileSync(logoPath));
            return;
          }
        }

        // 2. Read airo-media.json for dynamic mapping
        try {
          const mediaJsonPath = path.resolve(server.config.root, 'airo-media.json');
          if (existsSync(mediaJsonPath)) {
            const mediaData = JSON.parse(readFileSync(mediaJsonPath, 'utf8'));

            // Try exact match or clean match (e.g., logo/horizontal/dark -> logo/horizontal)
            const cleanKey = rawPath.replace(/\/dark$/, '').replace(/\/light$/, '');
            const entry = mediaData[rawPath] || mediaData[cleanKey];

            if (entry && entry.currentUrl) {
              res.statusCode = 302;
              res.setHeader('Location', entry.currentUrl);
              res.end();
              return;
            }
          }
        } catch {
          // ignore parse errors and proceed to fallback
        }

        // 3. Hero background SVG fallback
        if (rawPath.includes('hero') || rawPath.includes('field') || rawPath.includes('home')) {
          const heroPath = path.resolve(server.config.root, 'public/assets/uploads/hero-field-bg.svg');
          if (existsSync(heroPath)) {
            res.setHeader('Content-Type', 'image/svg+xml');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(readFileSync(heroPath));
            return;
          }
        }

        // 4. Default fallback SVG
        const defaultLogoPath = path.resolve(server.config.root, 'public/assets/uploads/airo-logo-shimmer-horizontal.svg');
        if (existsSync(defaultLogoPath)) {
          res.setHeader('Content-Type', 'image/svg+xml');
          res.end(readFileSync(defaultLogoPath));
          return;
        }

        next();
      });
    },
  };
}
