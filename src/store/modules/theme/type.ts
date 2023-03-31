/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-26 20:41:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-28 10:55:47
 */
import { deepPurple } from '@mui/material/colors'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//state
export type Color<T = string> = {
  [key in keyof typeof deepPurple]: T
}
export interface Theme {
  themeColor: Color
}
//action name types
export enum actionNames {
  SET_THEME = 'set_theme'
}
//action
interface SetThemeAction {
  type: actionNames.SET_THEME
  payload?: Theme
}
export type ThemeActionType = SetThemeAction
