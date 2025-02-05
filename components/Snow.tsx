'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'

const Snow = () => {
  const [images, setImage] = useState<CanvasImageSource[]>()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const img = document.createElement('img')
    img.src = `/static/images/snow-${resolvedTheme}.png`
    setImage([img])
  }, [resolvedTheme])

  return (
    <Snowfall
      snowflakeCount={30}
      radius={[5, 20]}
      style={{
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
      }}
      images={images}
    />
  )
}

export default Snow
