import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { resolve, dirname } from 'path'
import { copyFileSync } from 'fs'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [
    vue(), 
    vuetify(),
    {
      name: 'copy-cname',
      closeBundle() {
        copyFileSync(resolve(__dirname, 'CNAME'), resolve(__dirname, 'docs/CNAME'))
      }
    }
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
})
