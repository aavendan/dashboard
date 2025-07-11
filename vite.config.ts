import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: "/dashboard",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['/icons/favicon.ico', '/icons/apple-touch-icon.png'],
      manifest: {
        id: '/dashboard/',
        name: 'Dashboard del Clima - Proyecto 04',
        short_name: 'Dashboard del Clima',
        description: 'Proyecto 04 - dashboard del clima desarrollado con React y MUI',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
