/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-17 19:14:50
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-18 16:09:02
 */
import type { RouterConfig } from '@/router'
import { RouteMatch, RouteObject } from 'react-router-dom'
export interface getRouterMeta {
  (routers: RouteMatch[] | [], path: string | undefined): RouteObject | RouterConfig | undefined
}
