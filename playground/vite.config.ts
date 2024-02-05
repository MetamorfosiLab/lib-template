import { defineConfig } from 'vite'
import { resolve } from 'pathe'

const absPath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  resolve: {
    alias: {
      '@metamorfosilab/lib-template': absPath('../dist'),
    },
  },
})
