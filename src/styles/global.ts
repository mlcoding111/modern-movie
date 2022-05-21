import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap');

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
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    width: 90%;
`;