/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 23:42:53
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-20 10:20:59
 */
import React, { Fragment, useEffect, useRef } from 'react'
import Banner from '@/assets/img/banner.png'
import styled from '@emotion/styled'
const HomeCss = styled.div`
  width: 100%;
  height: 100%;
  .banner {
    width: 100%;
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: url(${Banner}) center/cover;
  }
  .position_banner {
    width: 100%;
    height: 500px;
  }
  .content {
    height: 1000px;
    background-color: #fff;
    position: relative; //相对于正常文档流import
    color: red;
  }
`
interface HomeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeCss>
      <HomeCss className="banner"></HomeCss>
      <div className="position_banner">23232</div>
      <div className="content">
        主要内容
      </div>
    </HomeCss>
  )
}

export default Home
