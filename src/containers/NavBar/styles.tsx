import styled from "styled-components";

export const Navbar = styled.nav`
    position: sticky;
    top: 0px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--secondary-color);
    z-index: 999;
    opacity: .9;
    
    img{
        transition: all 0.2s;
        margin-left: 1em;
    }

    img:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`