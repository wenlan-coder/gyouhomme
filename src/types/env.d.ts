/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-13 15:16:14
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-27 22:49:54
 */
//环境构建全局类型
declare interface ImportMetaEnv {
  readonly VITE_APP_API_HOST: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_UPLOAD_URL: string
  readonly VITE_APP_ROUTER_PREFIX: string
  readonly VITE_APP_DOWNLOAD_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
