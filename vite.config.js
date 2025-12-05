import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Detectar el entorno
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
    plugins: [
        vue(),
        ...(process.env.NODE_ENV !== 'production' ? [vueDevTools()] : [])
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    // Usar base diferente según el entorno
    base: isGitHubPages ? '/Landing-Page/' : '/',
    define: {
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }
})