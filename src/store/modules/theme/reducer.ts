/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-24 23:46:45
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 14:20:38
 */
import { deepPurple } from '@mui/material/colors'
import { Theme, actionNames, ThemeActionType } from './type'
const initState: Theme = {
  themeColor: deepPurple
}
import { Reducer } from '@reduxjs/toolkit'
export type ThemeReducer = Reducer<Theme, ThemeActionType>
const themeReducer: ThemeReducer = (state = initState, action: ThemeActionType) => {
  switch (action.type) {
    case actionNames.SET_THEME:
      return action.payload ? { ...action?.payload } : state
    default:
      return state
  }
}
export default themeReducer
