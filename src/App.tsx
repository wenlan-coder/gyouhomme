/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-26 20:41:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 10:40:27
 */
import { useEffect, Fragment } from 'react'
import { LogIcon } from './utils/common'
import { useRoutes } from 'react-router-dom'
import routers from './router/index'
function App() {
  useEffect(() => {
    //log icons
    LogIcon()
    setTimeout(() => {
      document.getElementById('loader')?.remove()
    }, 0)
  }, [])
  //处理routers
  return <Fragment> {useRoutes(routers)}</Fragment>
}

export default App
