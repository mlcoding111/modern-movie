import styled from 'styled-components'

export const SearchInput = styled.input`
    background-color: transparent;
    border: 2px solid var(--primary-color);
    padding: 0.5rem .2rem;
    border-radius: 50px;
    font-size: 1rem;
    color: #fff;
    font-family: inherit;
    ::placeholder{
    color: #7378c5;
    }
    
    :focus{
    outline: 0;
    background-color: var(--primary-color);
}
`