import {fileURLToPath, URL} from 'node:url'
import path from 'path'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const config = loadEnv(mode, './')
  console.log(config);
  return {
    plugins: [
      vue(), vueJsx()
    ],
    base: path.resolve(__dirname, './dist/'),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: { // 使用本机ip或者localhost启动服务
      host: '0.0.0.0',
      cors: true, // 默认启用并允许任何源
      open: true,
      // 在服务器启动时自动在浏览器中打开应用程序
      // port: 2180,
      // proxy: {
      // '/api': {
      //     target: config.VITE_APP_API_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      // }
      // }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/assets/variable.scss" as *;'
        }
      }
    }
  }
})
