/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-20 11:09:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 10:34:58
 */
/** @jsxImportSource @emotion/react */
import { Box, Button, Divider, Drawer, Popover, SimplePaletteColorOptions } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { css, useTheme } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { setTheme } from '@/store/modules/theme/index'
import { generate } from '@ant-design/colors'
import { SketchPicker } from 'react-color'
import SvgIcon from '@/base-ui/icons/svg_icon'
import CloseIcon from '@mui/icons-material/Close'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import styled from '@emotion/styled'
import { ThemeOptions } from '@mui/material'
import { red, blue, deepPurple, green, cyan, lime, teal, orange } from '@mui/material/colors'
const MapColors = [red, blue, deepPurple, green, cyan, lime, teal, orange]
const Content = styled.div`
  height: 100%;
  .header {
    height: 68px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 8px 16px 10px;
    .header_right {
      display: flex;
      gap: 10px;
      color: rgb(99, 115, 129);
    }
    .btn {
      width: 36px;
      height: 36px;
      color: rgb(99, 115, 129);
      min-width: 36px !important;
      border-radius: 50%;
    }
  }
  .change_mode {
    width: 100%;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px;
    .title {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      height: 18px;
      font-size: 12px;
      color: rgb(99, 115, 129);
    }
    .action {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px 0;
      justify-content: flex-start;
      height: 100%;
      .box {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
    }
  }
`
const Setting = () => {
  const theme: ThemeOptions = useTheme()
  const { themeColor } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  const currentMapIndex: number | undefined = MapColors.findIndex((item) => item[50] === themeColor[50])
  const [open, setOpen] = useState<boolean>(false)

  const [currentIndex, setCurrent] = useState<number>(currentMapIndex !== -1 ? currentMapIndex : 10)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const openProver = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const toggleDrawer = (open: boolean) => {
    setOpen(open)
  }
  const handleSetTheme = (index: number) => {
    setCurrent(index)
    dispatch(setTheme({ themeColor: MapColors[index] }))
    ;(document.querySelector(':root') as Element).setAttribute('style', `--primary-color:${MapColors[index][400]}`)
  }
  const AColors: Array<number> = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50]
  const [selectColor, setColor] = useState<string>(themeColor[300])
  const ChangeTheme = (color: string) => {
    setColor(color)
    setThemeDiv(color)
  }
  const setThemeDiv = (color: string) => {
    const colors = generate(color).map((item, index) => {
      return [AColors[index], item]
    })
    const ColorsObj = Object.fromEntries(colors)
    dispatch(setTheme({ themeColor: ColorsObj }))
    setCurrent(10)
    console.log(document.querySelector(':root'))

    //改变全局css var
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ;(document.querySelector(':root') as Element).setAttribute('style', `--primary-color:${ColorsObj[400]}`)
  }

  return (
    <Fragment>
      <Button
        variant="text"
        onClick={() => setOpen(true)}
        css={css`
          height: 64px;
          padding: 4px;
          right: 24px;
          bottom: 24px;
          z-index: 999;
          position: fixed;
          border-radius: 50%;
          box-shadow: rgba(99, 115, 129, 0.36) -12px 12px 32px -4px;
          backdrop-filter: blur(6px);
          background-color: rgba(255, 255, 255, 0.8);
        `}
      >
        <SvgIcon
          name="local-icon-setting"
          size="30px"
          color={(theme?.palette?.primary as SimplePaletteColorOptions)?.main}
        ></SvgIcon>
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        css={css`
          .MuiDrawer-paper {
            width: 260px;
            color: rgb(33, 43, 54);
            background-image: none;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            height: 100%;
            z-index: 1200;
            backdrop-filter: blur(6px);
          }
        `}
      >
        <Content>
          <div className="header">
            <h6>设置</h6>
            <div className="header_right">
              <Button className="btn">
                <RestartAltIcon />
              </Button>
              <Button className="btn">
                <CloseIcon />
              </Button>
            </div>
          </div>
          <Divider />
          <div className="change_mode">
            <div className="title">预设</div>
            <div className="action">
              {MapColors.map((item, index) => (
                <Button
                  variant="outlined"
                  key={index}
                  onClick={() => handleSetTheme(index)}
                  sx={{
                    borderRadius: 2,
                    height: 48,
                    cursor: 'pointer',
                    background: 'transparent',
                    borderColor: `${
                      currentIndex === index ? MapColors[currentIndex]['A100'] : 'rgba(145, 158, 171, 0.12)'
                    }`,
                    width: 68,
                    color: `${currentIndex === index ? MapColors[currentIndex]['A100'] : 'text.secondary'}`,
                    ':hover': {
                      borderColor: `${currentIndex === index ? MapColors[currentIndex]['A100'] : 'text.secondary'}`
                    }
                  }}
                >
                  <Box
                    className="box"
                    sx={{
                      width: `${currentIndex === index ? '24px!important' : 12}`,
                      height: `${currentIndex === index ? '24px!important' : 12}`,
                      backgroundColor: `${item['A100']}`,
                      boxShadow: `${
                        currentIndex === index
                          ? `${MapColors[currentIndex]['A100']}  -2px 4px 8px 0px`
                          : 'text.secondary'
                      }`
                    }}
                  ></Box>
                </Button>
              ))}
              <Button
                onClick={handleClick}
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  height: 48,
                  cursor: 'pointer',
                  borderColor: 'rgba(145, 158, 171, 0.12)',
                  width: 68
                }}
              >
                <Box
                  className="box"
                  sx={{
                    width: `${currentIndex === 10 ? '24px!important' : 12}`,
                    height: `${currentIndex === 10 ? '24px!important' : 12}`,
                    background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)'
                  }}
                ></Box>
              </Button>
              <Popover
                id={id}
                open={openProver}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
              >
                <SketchPicker color={selectColor} onChangeComplete={(color) => ChangeTheme(color.hex)} />
              </Popover>
            </div>
          </div>
        </Content>
      </Drawer>
    </Fragment>
  )
}

export default Setting
