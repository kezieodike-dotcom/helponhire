import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {canonicalOrigin, socialPreviewPages, socialPreviewUpdatedTime} from './scripts/social-preview-pages.mjs';

type SocialPreviewPage = {
  path: string;
  title: string;
  description: string;
  image: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const absoluteUrl = (value: string) =>
  value.startsWith('http') ? value : `${canonicalOrigin}${value}`;

const setContent = (html: string, selector: string, content: string) => {
  const escapedContent = escapeHtml(content);
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*(" ?/?>)`);
  return html.replace(pattern, `$1${escapedContent}$2`);
};

const setHref = (html: string, selector: string, href: string) => {
  const escapedHref = escapeHtml(href);
  const pattern = new RegExp(`(<link ${selector} href=")[^"]*(" ?/?>)`);
  return html.replace(pattern, `$1${escapedHref}$2`);
};

const applySocialPreviewMeta = (html: string, page: SocialPreviewPage) => {
  const url = absoluteUrl(page.path === '/' ? '/' : `${page.path.replace(/\/+$/, '')}/`);
  const image = absoluteUrl(page.image);

  let nextHtml = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);

  nextHtml = setContent(nextHtml, 'name="description"', page.description);
  nextHtml = setContent(nextHtml, 'itemprop="name"', page.title);
  nextHtml = setContent(nextHtml, 'itemprop="description"', page.description);
  nextHtml = setContent(nextHtml, 'itemprop="image"', image);
  nextHtml = setContent(nextHtml, 'property="og:url"', url);
  nextHtml = setContent(nextHtml, 'property="og:title"', page.title);
  nextHtml = setContent(nextHtml, 'property="og:description"', page.description);
  nextHtml = setContent(nextHtml, 'property="og:updated_time"', socialPreviewUpdatedTime);
  nextHtml = setContent(nextHtml, 'property="og:image"', image);
  nextHtml = setContent(nextHtml, 'property="og:image:secure_url"', image);
  nextHtml = setContent(nextHtml, 'property="og:image:url"', image);
  nextHtml = setContent(nextHtml, 'name="twitter:url"', url);
  nextHtml = setContent(nextHtml, 'name="twitter:title"', page.title);
  nextHtml = setContent(nextHtml, 'name="twitter:description"', page.description);
  nextHtml = setContent(nextHtml, 'name="twitter:image"', image);
  nextHtml = setHref(nextHtml, 'rel="image_src"', image);
  nextHtml = setHref(nextHtml, 'rel="canonical"', url);

  return nextHtml;
};

const routeOutputPath = (outDir: string, routePath: string) => {
  if (routePath === '/') return path.join(outDir, 'index.html');

  const cleanPath = routePath.replace(/^\/+|\/+$/g, '');
  return path.join(outDir, cleanPath, 'index.html');
};

const socialPreviewHtmlPlugin = (): Plugin => ({
  name: 'social-preview-html',
  apply: 'build',
  closeBundle: async () => {
    const outDir = path.resolve(__dirname, 'dist');
    const rootIndexPath = path.join(outDir, 'index.html');
    const rootHtml = await fs.readFile(rootIndexPath, 'utf8');

    await Promise.all(
      (socialPreviewPages as SocialPreviewPage[]).map(async (page) => {
        const outputPath = routeOutputPath(outDir, page.path);
        const html = applySocialPreviewMeta(rootHtml, page);

        await fs.mkdir(path.dirname(outputPath), {recursive: true});
        await fs.writeFile(outputPath, html);
      })
    );
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), socialPreviewHtmlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
