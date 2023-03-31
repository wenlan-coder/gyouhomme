/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-28 18:00:10
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-29 15:42:37
 */
//定义生成material themme hooks
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/store/index'
import { createTheme, Theme } from '@mui/material/styles'
import { Color } from '@/store/modules/theme'
export interface ChangeTheme {
  (color: Color<string>): void
}
const SetTHeme = () => {
  const { themeColor } = useAppSelector((state) => state.theme)
  const [theme, setThemeColor] = useState<Theme>(
    createTheme({
      palette: {
        primary: {
          main: themeColor[400]
        },
        secondary: {
          main: '#19857b'
        }
      }
    }) as Theme
  )
  const changeTheme: ChangeTheme = (color): Theme | void => {
    const theme: Theme = createTheme({
      palette: {
        primary: {
          main: color[400]
        },
        secondary: {
          main: '#19857b'
        }
      }
    })
    setThemeColor(theme)
  }
  return { theme, changeTheme }
}
export default SetTHeme
export type {}
