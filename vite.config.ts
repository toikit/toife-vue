import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [dts(), vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ToifeVueI18n',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue-router', '@toife/gesture'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          '@toife/gesture': 'ToifeGesture'
        }
      }
    }
  }
});
