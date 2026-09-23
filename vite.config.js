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

export default defineConfig({
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
