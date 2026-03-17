import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Serve static assets from public folder BEFORE Vite middlewares
  app.use(express.static(path.resolve(__dirname, 'public')));

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    // Skip SSR for static assets that might have been missed by vite.middlewares
    if (url.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|ttf|otf)$/)) {
      return next();
    }

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('./entry-server.tsx');

      const { html: appHtml } = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.stack);
    }
  });

  app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on http://localhost:3000');
  });
}

createServer().catch(console.error);
