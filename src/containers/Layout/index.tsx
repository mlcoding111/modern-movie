import React, { FC } from 'react'
import { AppLayout } from './styles'
type Props = {
    children?: JSX.Element | JSX.Element[],
}

export const Layout:FC <Props> = ({children}) => {
  return (
    <AppLayout>
        {children}
    </AppLayout>
  )
}
