import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Lesson1/',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import']
      }
    }
  }
});