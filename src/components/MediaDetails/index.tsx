import React, { FC } from 'react'
// Interface to make props reliable on the test.tsx

interface Props{
    rating?: number,
    title?: string,
    imgSrc?: string,
    overview?: string
}

export const MediaDetails:FC <Props> = () => {
  return (
    <>
    
    </>
  )
}
