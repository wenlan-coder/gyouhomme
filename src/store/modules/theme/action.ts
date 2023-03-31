/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-26 20:41:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-28 14:03:29
 */
/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-25 10:04:30
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-28 10:07:12
 */
import { ThemeActionType, Theme, actionNames } from './type'
export const setTheme = (theme: Theme): ThemeActionType => {
  return {
    type: actionNames.SET_THEME,
    payload: theme
  }
}
