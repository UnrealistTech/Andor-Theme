import { glob } from 'glob';
import { join } from "node:path"

import twig from 'vite-plugin-twig-drupal';

const VITE_URL = process.env.VITE_URL ?? 'http://localhost';
const VITE_PORT = process.env.VITE_PORT ?? 5173;
const origin = `${VITE_URL}`;
/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    // Other vite plugins.
    twig({
      namespaces: {
        andor: join(__dirname, "/components"),
        // Other namespaces as required.
      },
    }),
    // Other vite plugins.
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: [
        ...glob.sync('components/**/*.js'),
        ...glob.sync('components/**/*.css'),
        ...glob.sync('css/**/*.css'),
        ...glob.sync('js/**/*.js'),
      ],
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },

  server: {
    // respond to all network requests:
    host: '0.0.0.0',
    port: VITE_PORT,
    strictPort: true,
    // Defines the origin of the generated asset URLs during development
    origin: origin,
  },
}