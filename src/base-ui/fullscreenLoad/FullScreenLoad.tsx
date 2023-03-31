import styled from '@emotion/styled'
import React from 'react'
export default function FullScreenLoad() {
  const FullScreen = styled.div`
    #loader {
      top: 50%;
      left: 50%;
      width: 120px;
      transform: translate(-50%, -50%);
      height: 80px;
      position: absolute;
    }
    #loader span {
      position: absolute;
      color: #fff;
      transform: translate(-50%, -50%);
      font-size: 40px;
      letter-spacing: 5px;
    }

    #loader span:nth-of-type(1) {
      color: transparent;
      -webkit-text-stroke: 0.3px var(--primary-color);
    }

    #loader span:nth-of-type(2) {
      color: var(--primary-color);
      -webkit-text-stroke: 1px var(--primary-color);
      animation: uiverse723 3s ease-in-out infinite;
    }

    @keyframes uiverse723 {
      0%,
      100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
      }

      50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
      }
    }
  `
  return (
    <FullScreen>
      <div id="loader">
        <div className="loader">
          <span>gyouhome</span>
          <span>gyouhome</span>
        </div>
      </div>
    </FullScreen>
  )
}
