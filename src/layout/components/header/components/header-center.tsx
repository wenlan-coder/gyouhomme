/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { Button, ButtonGroup, css } from '@mui/material'
import React from 'react'
const HeaderContainer = styled.div`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  color: black;
  .text {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 2;
    flex: 1 1 auto;
    padding-right: 10px;
    word-spacing: 2;
  }
`
const HeaderCenter = () => {
  return (
    <HeaderContainer>
      <Button
        size="large"
        css={css`
          text-align: inherit;
          padding-left: 20px;
          border-top-left-radius: inherit;
          border-bottom-left-radius: inherit;
        `}
      >
        <span
          className="text"
          css={css`
            color: #fff;
            border-right: 1px solid #fff;
          `}
        >
          任 何 地 方
        </span>
      </Button>
      <Button> 任 意 时 间</Button>
      <Button>添加 房间 </Button>
    </HeaderContainer>
  )
}

export default HeaderCenter
