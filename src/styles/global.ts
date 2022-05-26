import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
}

:root{
    --primary-color: #22254b;
    --secondary-color: #373b69;
}

.active{
    background: #e08217;
}

body{
    margin: 0;
    background-color: var(--primary-color);

}

.App{
    min-height: 100vh;
}

// Carousel override

.react-multiple-carousel__arrow--left{
    left: 0px !important;
}

.react-multiple-carousel__arrow--right{
    right: 0px !important;
}

.react-multiple-carousel__arrow{
    background: rgba(0,0 ,0, 0.7) !important;
    height: 100%;
    border-radius: 2px !important;
}

.react-multiple-carousel__arrow:hover{
    background: rgba(0,0 ,0, 0.9) !important;
}


`
interface ColProps{
    size: number
}

export const Grid = styled.div`
    
`
export const Row = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid red; */
    max-width: 1250px;
    justify-content: center;
`

export const Col = styled.div<ColProps>`
    flex: ${(props) => props.size};
    /* border: 2px solid blue; */
`

export const Container = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    width: 90%;
`;