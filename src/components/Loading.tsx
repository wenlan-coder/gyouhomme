/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-18 16:31:52
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-19 18:03:08
 */
import React, { useEffect } from 'react'
import { start, close } from '@/utils/ngproocess'
import styled from '@emotion/styled'
const LoadingCss = styled.div`
  width: 100%;
  height: (100vh - 80px);
  display: flex;
  position: relative;
  margin: auto;
  justify-content: center;
  align-items: center;
  .line-wobble {
    --uib-size: 200px;
    --uib-speed: 1.55s;
    --uib-color: black;
    --uib-line-weight: 5px;
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--uib-line-weight);
    width: var(--uib-size);
    border-radius: calc(var(--uib-line-weight) / 2);
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .line-wobble::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: 0.1;
  }

  .line-wobble::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-line-weight) / 2);
    animation: wobble var(--uib-speed) ease-in-out infinite;
    transform: translateX(-90%);
    background-color: var(--uib-color);
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-90%);
    }

    50% {
      transform: translateX(90%);
    }
  }
`
const Loading = () => {
  useEffect(() => {
    start()
    return () => {
      close()
    }
  }, [])

  return (
    <LoadingCss>
      <div className="line-wobble"></div>
    </LoadingCss>
  )
}

export default Loading
