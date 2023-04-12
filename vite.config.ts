import path from 'node:path';
import * as url from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~': path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          'src'
        )
      }
    }
  };
});
