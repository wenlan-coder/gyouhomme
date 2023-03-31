/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 23:44:19
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-19 21:08:58
 */
import React from 'react'
import styled from '@emotion/styled'
interface ProfileProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
const DetailCon = styled.div`
  width: 100%;
  height: 1500px;
  background-color: red;
`
const Profile: React.FC<ProfileProps> = () => {
  return (
    <DetailCon>
      <h1>PROFILE page</h1>
    </DetailCon>
  )
}

export default Profile
