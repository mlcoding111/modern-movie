import styled from 'styled-components'

export const SearchInput = styled.input`
    position: relative;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 1rem;
    color: #fff;
    box-sizing: border-box;
    margin-right: auto;
    width: 220px;
    font-family: inherit;
    ::placeholder{
        color: #7378c5;
    }
    
    :focus{
    outline: 0;
    background-color: var(--primary-color);
    }

    @media screen and (max-width: 300px){
        padding: .2rem 1rem;
        width: 180px;
    }
`

export const Form = styled.form`
    position: relative;

    #search-icon{
        transition: opacity 0.2s ease-in-out;
        position: absolute;
        right: 0;
        top: 8px;
        width: 30px;
        margin-right: 10px;
        height: 30px;
        color: grey;
    }

    input:focus ~ #search-icon{
        opacity: 0;
    }
`