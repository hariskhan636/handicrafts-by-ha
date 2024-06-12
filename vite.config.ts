import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      config: "/src/config",
      constants: "/src/constants",
      hooks: "/src/hooks",
      layout: "/src/layout",
      pages: "/src/pages",
      store: "/src/store",      
      utils: "/src/utils",
    },
  },
});