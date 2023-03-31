//获取路由信息
import { getRouterMeta } from './types'
const getRouterMeta: getRouterMeta = (routers, path) => {
  return routers && routers.find((item) => item.pathname === path)?.route
}

/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-13 12:32:11
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-18 15:59:40
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMultiLine(f: any): string {
  const lines = f.toString()
  return lines.substring(lines.indexOf('/*') + 3, lines.lastIndexOf('*/'))
}
const log_text = function (): void {
  /*
     /\  \         |\__\         /\  \         /\__\         /\__\         /\  \         /\__\         /\  \
    /::\  \        |:|  |       /::\  \       /:/  /        /:/  /        /::\  \       /::|  |       /::\  \
   /:/\:\  \       |:|  |      /:/\:\  \     /:/  /        /:/__/        /:/\:\  \     /:|:|  |      /:/\:\  \
  /:/  \:\  \      |:|__|__   /:/  \:\  \   /:/  /  ___   /::\  \ ___   /:/  \:\  \   /:/|:|__|__   /::\~\:\  \
 /:/__/_\:\__\     /::::\__\ /:/__/ \:\__\ /:/__/  /\__\ /:/\:\  /\__\ /:/__/ \:\__\ /:/ |::::\__\ /:/\:\ \:\__\
 \:\  /\ \/__/    /:/~~/~    \:\  \ /:/  / \:\  \ /:/  / \/__\:\/:/  / \:\  \ /:/  / \/__/~~/:/  / \:\~\:\ \/__/
  \:\ \:\__\     /:/  /       \:\  /:/  /   \:\  /:/  /       \::/  /   \:\  /:/  /        /:/  /   \:\ \:\__\
   \:\/:/  /     \/__/         \:\/:/  /     \:\/:/  /        /:/  /     \:\/:/  /        /:/  /     \:\ \/__/
    \::/  /                     \::/  /       \::/  /        /:/  /       \::/  /        /:/  /       \:\__\
     \/__/                       \/__/         \/__/         \/__/         \/__/         \/__/         \/__/
        Come GYOUHOME
            给你一个家
                %c by wenlan
     */
}
const LogIcon = () => {
  console.log(getMultiLine(log_text), 'color:#651fff;font-size:18px;font-style:italic')
}

export { getRouterMeta, LogIcon }
