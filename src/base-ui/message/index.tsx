/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-16 14:19:44
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-17 16:35:12
 */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { Snackbar, Alert, AlertColor } from '@mui/material'
import { css } from '@emotion/react'
export interface MessageProps {
  content: string
  duration: number
  type?: AlertColor
}

const MyToast: React.FC<MessageProps> = ({ content, duration, type }) => {
  const [open, setOpen] = useState<boolean>(true)
  useEffect(() => {
    return () => {
      const element = document.querySelector('.message') as HTMLElement
      element && document.body.removeChild(element)
    }
  })
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => setOpen(false)}
    >
      <Alert
        css={css`
          min-width: 200px;
        `}
        severity={type}
      >
        {content}
      </Alert>
    </Snackbar>
  )
}

export default MyToast
