import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function getHtmlEntries(dir, entries = {}) {
  if (!fs.existsSync(dir)) return entries;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = resolve(dir, item.name);
    if (item.isDirectory()) {
      getHtmlEntries(fullPath, entries);
    } else if (item.name === 'index.html') {
      const relPath = fullPath.replace(resolve(__dirname), '').replace(/^[\\\/]/, '');
      const key = relPath.replace(/[\\\/]/g, '_').replace('.html', '');
      entries[key] = fullPath;
    }
  }
  return entries;
}

const routeRewrites = [
  { regex: /^\/prototipos\/general(\/.*)?$/, replacement: '/prototipos/0_general$1' },
  { regex: /^\/prototipos\/assets(\/.*)?$/, replacement: '/prototipos/0_assets$1' },
  { regex: /^\/prototipos\/mauricio_chinchayhuara(\/.*)?$/, replacement: '/prototipos/1_mauricio_chinchayhuara$1' },
  { regex: /^\/prototipos\/jose_rojas(\/.*)?$/, replacement: '/prototipos/2_jose_rojas$1' },
  { regex: /^\/prototipos\/alvaro_vera(\/.*)?$/, replacement: '/prototipos/3_alvaro_vera$1' },
  { regex: /^\/prototipos\/renzo_chavarria(\/.*)?$/, replacement: '/prototipos/4_renzo_chavarria$1' },
];

function prototypeRewritePlugin() {
  return {
    name: 'prototype-rewrite-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        for (const rule of routeRewrites) {
          if (rule.regex.test(url)) {
            req.url = url.replace(rule.regex, rule.replacement);
            break;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [prototypeRewritePlugin()],
  resolve: {
    alias: [
      { find: /^\/prototipos\/general\/(.*)/, replacement: resolve(__dirname, 'prototipos/0_general/$1') },
      { find: /^\/prototipos\/assets\/(.*)/, replacement: resolve(__dirname, 'prototipos/0_assets/$1') },
      { find: /^\/prototipos\/mauricio_chinchayhuara\/(.*)/, replacement: resolve(__dirname, 'prototipos/1_mauricio_chinchayhuara/$1') },
      { find: /^\/prototipos\/jose_rojas\/(.*)/, replacement: resolve(__dirname, 'prototipos/2_jose_rojas/$1') },
      { find: /^\/prototipos\/alvaro_vera\/(.*)/, replacement: resolve(__dirname, 'prototipos/3_alvaro_vera/$1') },
      { find: /^\/prototipos\/renzo_chavarria\/(.*)/, replacement: resolve(__dirname, 'prototipos/4_renzo_chavarria/$1') },
    ]
  },
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getHtmlEntries(resolve(__dirname, 'prototipos'))
      }
    }
  }
});
