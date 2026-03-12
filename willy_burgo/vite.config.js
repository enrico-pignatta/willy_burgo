import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Aggiungi questo blocco alias
    alias: {
      react: 'react',
      'react-dom': 'react-dom'
    }
  }
})