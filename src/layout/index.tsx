/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 15:16:03
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-20 11:16:24
 */
import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Main from './components/main/main'
import Setting from './components/setting'
const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
      <Setting />
    </React.Fragment>
  )
}

export default Layout
