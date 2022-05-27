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
    @media screen and (max-width: 700px) {
        padding: 1rem 0rem !important;
        justify-content: center;

        img{
            position: absolute;
            left: 0;
            margin-left: 1em !important;
        }
    }
    
    img{
        transition: all 0.2s;
        margin-left: 1em;
    }

    img:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`