/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-16 09:35:02
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-18 16:11:53
 */
import Toast from '@/base-ui/message/message'
import routers, { RouterConfig } from '@/router/index'
import type { Meta } from '@/router/index'
import { getRouterMeta } from '@/utils/common'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
interface authRoutesProps {
  children: JSX.Element
  auth?: boolean
  meta?: Meta
}
const AuthRoutes = ({ children, auth }: authRoutesProps) => {
  console.log('路由拦截')
  const navigate = useNavigate()
  const location = useLocation()
  const token = ''
  const matches = matchRoutes(routers, location) || []
  const isExist = matches?.some((item) => item.pathname == location.pathname)
  useEffect(() => {
    //获取路由信息
    const routerInfo = getRouterMeta(matches, location.pathname)
    console.log(routerInfo)
    console.log(routers)

    console.log(matches, location)
    // 动态修改页面title
    document.title = (routerInfo as RouterConfig)?.meta?.title || 'gyouhome-专业的租房网址,给你家'
    //token为空需要权限页面 ex:profile
    if (token == '' && auth) {
      Toast.error({ content: 'token 过期，请重新登录!', duration: 2000 })
      navigate('/')
    }
    // 这里判断条件是：token 存在并且是匹配到路由并且是已经登录的状态
    if (token && isExist) {
      if (location.pathname == '/profile') {
        navigate('/')
      } else {
        // 如果是其他路由就跳到其他的路由
        navigate(location.pathname)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, location.pathname])
  return children
}
export default AuthRoutes
