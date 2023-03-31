/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 14:23:24
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-18 16:12:30
 */
import { lazy } from 'react'
import Layout from '@/layout/index'
import NotFound from '@/components/NotFound'
import { Navigate } from 'react-router-dom'
const Home = lazy(() => import('@/views/home/index'))
const Detail = lazy(() => import('@/views/detail/index'))
const Profile = lazy(() => import('@/views/profile/index'))
export interface Meta {
  title?: string | undefined
}
export interface RouterConfig {
  path: string
  element: JSX.Element
  children?: RouterConfig[]
  meta?: Meta
  auth: boolean
}
const routers: RouterConfig[] = [
  { path: '/', element: <Navigate to="/home" />, auth: true },
  {
    path: '/',
    element: <Layout />,
    auth: false,
    children: [
      { path: '/home', element: <Home />, meta: { title: 'gyouhome-首页' }, auth: false },
      { path: '/detail', element: <Detail />, meta: { title: 'gyouhome-详情' }, auth: false },
      { path: '/profile', element: <Profile />, meta: { title: 'gyouhome-个人中心' }, auth: false }
    ]
  },
  { path: '*', element: <NotFound />, auth: false }
]
export default routers
