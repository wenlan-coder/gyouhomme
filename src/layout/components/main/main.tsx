/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-14 21:49:03
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 22:17:01
 */
import React, { memo, Suspense } from 'react'
import styled from '@emotion/styled'
import { baseLayout } from '@/common/style/common'
import AuthRoutes from '@/router/authRoutes'
import { Outlet, useLocation } from 'react-router-dom'
import Loading from '@/components/Loading'
const HeaderContainer = styled.div`
  ${baseLayout};
  min-height: calc(100vh - 160px);
  position: relative;
  display: flex;
  .content {
  }
  export interface refI {
  }
  export interface MainProps {
  }
`
const Main: React.FC = () => {
  const location = useLocation()
  return (
    <HeaderContainer
      as="main"
      style={{
        paddingTop: `${location.pathname !== '/home' ? '72px' : 0}`,
        maxWidth: `${location.pathname !== '/home' ? '1420px' : '100%'}`
      }}
    >
      <Suspense fallback={<Loading></Loading>}>
        <AuthRoutes>
          <Outlet></Outlet>
        </AuthRoutes>
      </Suspense>
    </HeaderContainer>
  )
}
export default memo(Main)
