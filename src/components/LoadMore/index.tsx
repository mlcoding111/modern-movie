import React from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'
import {motion} from 'framer-motion'
type Props = {}

export const LoadMore = (props: Props) => {

    const handleClick = () => {
    }
    return (
      <Wrapper>
            <h3>Load more</h3><motion.img whileHover={{ scale: 1.01, y: 5 }} style={{rotate: -90}} src={arrow} width="30"/>
      </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        color: white;
    }

    img{
        transform: rotate(-90deg);
    }
    img:hover{
        cursor: pointer;
    }
`