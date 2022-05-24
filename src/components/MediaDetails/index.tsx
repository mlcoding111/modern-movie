import React, { FC } from 'react'
import {useParams} from 'react-router-dom'
// Interface to make props reliable on the test.tsx

interface Props{
    rating?: number,
    title?: string,
    imgSrc?: string,
    overview?: string
}

export const MediaDetails:FC <Props> = () => {
  const { id } = useParams();

  return (
    <>
    <h1>{id}</h1>
    </>
  )
}
