/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-10 18:18:41
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-19 21:57:11
 */
import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react-swc'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  console.log(mode, command)
  const env = loadEnv(mode, process.cwd())
  const alias = {
    // 设置路径
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  return {
    base: env.VITE_APP_ROUTER_PREFIX,
    plugins: [
      react(),
      createSvgIconsPlugin({
        // 指定要缓存的图标文件夹
        // eslint-disable-next-line no-undef
        iconDirs: [fileURLToPath(new URL('./src/assets/svg', import.meta.url))],
        // 执行icon name的格式
        symbolId: 'local-icon-[dir]-[name]'
      }),
      visualizer()
    ],
    resolve: {
      alias: alias,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    // 打包配置
    build: {
      sourcemap: command === 'build' ? false : 'inline',
      outDir: 'dist', //指定输出目录
      assetsDir: 'assets', //指定静态资源存储目录(相对于outDir)
      chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: 'chrome61' //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的
    },
    //服务器配置
    server: {
      port: 8888,
      host: true,
      open: true,
      proxy: {
        '/dev-api': {
          target: env.VITE_APP_API_HOST,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        },
        '/msghub': {
          target: env.VITE_APP_API_HOST,
          ws: true,
          rewrite: (path) => path.replace(/^\/msgHub/, '')
        }
      }
    }
  }
})
