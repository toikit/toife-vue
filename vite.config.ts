import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [dts(), vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ToifeVue',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue-router', '@toife/gesture'],
      output: {
        assetFileNames: (assetInfo) => {
          // Nếu là CSS thì đặt tên custom
          if (assetInfo.name === 'vue.css') {
            return 'index.css';
          }
          return '[name][extname]';
        },
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          '@toife/gesture': 'ToifeGesture'
        }
      }
    }
  }
});
