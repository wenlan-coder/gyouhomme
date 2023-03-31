/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-25 10:30:09
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-25 10:35:48
 */
export interface userInformation {
  username: string | null,
  likes:[], // 喜欢房
}
export interface UserInfo {
  userInformation: userInformation | null
  token: string | null
}
