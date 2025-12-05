import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
    const plugins = [vue()]
    
    // Solo cargar devtools en desarrollo
    if (mode === 'development') {
        const { default: vueDevTools } = await import('vite-plugin-vue-devtools')
        plugins.push(vueDevTools())
    }
    
    return {
        plugins,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        base: '/',
        define: {
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        }
    }
})