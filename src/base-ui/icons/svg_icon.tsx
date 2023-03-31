/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react'
import { css } from '@emotion/react'
interface SvgIconsProps {
  name: string
  size: string
  color: string
}

const SvgIcon: React.FC<SvgIconsProps> = ({ name, color, size }) => {
  const symbolId = useMemo(() => {
    return `#${name}`
  }, [name])
  const IconStyle = useMemo(() => {
    return {
      color: color,
      fontSize: size
    }
  }, [color, size])
  return (
    <svg
      aria-hidden="true"
      css={css`
        width: 1em;
        height: 1em;
        position: relative;
        fill: currentColor;
        vertical-align: -2px;
      `}
      style={IconStyle}
    >
      <use href={symbolId} />
    </svg>
  )
}

export default SvgIcon
