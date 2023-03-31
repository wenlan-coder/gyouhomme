/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-26 20:41:35
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-28 00:11:09
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserInfo, userInformation } from './type'

//init
const initData: UserInfo = {
  userInformation: null,
  token: null
}

//创建切片
const UserSlice = createSlice({
  name: 'user',
  initialState: initData,
  reducers: {
    //纯函数 rtk底层使用imer库可以直接对state修改
    changeToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setUserInfo: (state, action: PayloadAction<userInformation>) => {
      state.userInformation = action.payload
    }
  }
})

//action
export const { changeToken, setUserInfo } = UserSlice.actions

//reducer
export default UserSlice.reducer
