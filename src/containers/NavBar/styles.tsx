import styled from "styled-components";

export const Navbar = styled.nav`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--secondary-color);

    img{
        transition: all 0.2s;
        margin-left: 1em;
    }
    img:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`