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
    border: 1px solid red;
    max-width: 1170px;
`

export const Col = styled.div<ColProps>`
    flex: ${(props) => props.size};
    border: 2px solid blue;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    width: 90%;
`;