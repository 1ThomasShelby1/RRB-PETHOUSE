import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import flowbiteReact from "flowbite-react/plugin/vite"

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  server: {
    headers: {
     "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      "Cross-Origin-Embedder-Policy": "unsafe-none"
    },
  },
})
