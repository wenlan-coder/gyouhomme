/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 15:29:16
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-27 22:55:00
 */
import React, { memo } from 'react'
import styled from '@emotion/styled'
import { baseLayout } from '@/common/style/common'
import { Link, SimplePaletteColorOptions } from '@mui/material'
import { useTheme } from '@emotion/react'
import SvgIcon from '@/base-ui/icons/svg_icon'
import { ThemeOptions } from '@mui/material'
const FooterContainer = styled.div`
  ${baseLayout};
  height: 160px;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .text {
    margin: 0px;
    line-height: 1.5;
    font-size: 0.75rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
  }
`
const Footer = () => {
  const theme: ThemeOptions = useTheme()
  return (
    <FooterContainer as="footer">
      <div className="content">
        <SvgIcon
          name="local-icon-power"
          size="60px"
          color={(theme?.palette?.primary as SimplePaletteColorOptions)?.main}
        ></SvgIcon>
      </div>
      <div className="text">© All rights reserved</div>
      <span className="text">
        made by &nbsp;
        <Link
          href="https://github.com/wenlan-coder"
          color={(theme?.palette?.primary as SimplePaletteColorOptions)?.main}
        >
          wenlan
        </Link>
      </span>
    </FooterContainer>
  )
}
export default memo(Footer)
