import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Lesson1/',
  server: {
    watch: {
      usePolling: true,
      interval: 50,
       awaitWriteFinish: {
      stabilityThreshold: 50,
      pollInterval: 50
    }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import']
      }
    }
  }
});
