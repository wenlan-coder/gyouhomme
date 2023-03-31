/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-26 20:41:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 23:01:20
 */
/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 15:29:10
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-27 22:56:22
 */
import React, { memo, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { baseLayout } from '@/common/style/common'
import Logo from '@/assets/img/power.png'
import useScrollPosition from '@/hooks/useScrollPosition'
import SvgIcon from '@/base-ui/icons/svg_icon'
import HeaderCenter from './components/header-center'
import { useLocation } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import { SimplePaletteColorOptions, ThemeOptions } from '@mui/material'
const HeaderContainer = styled.div`
  ${baseLayout};
  background-image: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1200;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: transparent;
  color: inherit;
  box-shadow: none;
  .content {
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    margin: 0 auto;
    position: relative;
    min-height: 56px;
    height: 88px;
    transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .conetnt_scroll {
    position: relative;
    align-items: center;
    min-height: 56px;
    backdrop-filter: blur(6px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 72px;
    box-shadow: rgba(145, 158, 171, 0.16) 0px 8px 16px 0px;
  }
  .not_home {
    backdrop-filter: blur(6px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 72px;
    box-shadow: rgba(145, 158, 171, 0.16) 0px 8px 16px 0px;
  }
  .banner {
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    max-width: 1420px;
    display: flex;
    justify-content: space-between;
    .right_logo {
      display: flex;
      align-items: center;
      .logo_text {
        margin-left: -20px;
        font-family: 'trebuchet MS', sans-serif;
        font-size: 16px;
        color: var(--primary-color);
      }
    }
    .right {
      width: 349px;
      background-color: #fff;
    }
  }
`
const Header = () => {
  const location = useLocation()
  const HeaderRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, scrollY] = useScrollPosition()
  const theme: ThemeOptions = useTheme()

  return (
    <HeaderContainer as="header" ref={HeaderRef}>
      <div
        className={`content ${location.pathname === '/home' && scrollY > 88 ? 'conetnt_scroll' : null} ${
          location.pathname === '/home' ? null : 'not_home'
        }`}
      >
        <div className="banner">
          <div className="right_logo">
            <SvgIcon
              name="local-icon-power"
              size="80px"
              color={(theme?.palette?.primary as SimplePaletteColorOptions)?.main}
            ></SvgIcon>
            <div className="logo_text">GYOUHOME</div>
          </div>
          <div className="center">
            <HeaderCenter></HeaderCenter>
          </div>
          <div className="right">right</div>
        </div>
      </div>
    </HeaderContainer>
  )
}
export default Header
