import React from 'react'
import styled from 'styled-components'
type Props = {}

export const Footer = (props: Props) => {
  return (
    <Wrapper>
        <h2>By : Michael Lacroix</h2>
    </Wrapper>
  )
}

export const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    color: var(--primary-color);
    justify-content: center;
    background: var(--secondary-color);
    height: 300px;
`